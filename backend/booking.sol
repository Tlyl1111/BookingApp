// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./room.sol"; 

contract Booking is Room {
    struct BookingInfo {
        uint256 bookingId;
        address user;
        uint256 roomId;
        uint256 startTime;
        uint256 endTime;
        uint256 blockCount;
        uint256 totalPrice;
        bool isCompleted;
        bool isCancel;
    }

    mapping(uint256 => BookingInfo) public bookings;
    uint256 public nextBookingId = 1;

    event BookingInitialized(uint256 bookingId, uint256 roomId, address user);
    event RoomBooked(uint256 bookingId, uint256 roomId, address user, uint256 totalPrice);
    event DebugLog(uint256 year, uint256 month, uint256 day, uint256 hour, uint256 minute);
    event Log(uint256 startTime, uint256 blockTime);
    event BookingCanceled(uint256 bookingId, uint256 roomId);

    modifier roomExists(uint256 _roomId) {
        require(_roomId < rooms.length, "Room does not exist");
        _;
    }

    modifier onlyAvailable(uint256 _roomId) {
        require(rooms[_roomId].isAvailable, "Room is not available");
        _;
    }

    function parseTimeToUint(uint256 _startTimestamp) public returns (uint256) {
        uint256 year = _startTimestamp / 100000000;
        uint256 month = (_startTimestamp % 100000000) / 1000000;
        uint256 day = (_startTimestamp % 1000000) / 10000;
        uint256 hour = (_startTimestamp % 10000) / 100;
        uint256 minute = _startTimestamp % 100;

        emit DebugLog(year, month, day, hour, minute);

        require(year >= 2000 && month >= 1 && month <= 12 && day >= 1 && day <= 31, "Invalid date");
        require(hour >= 0 && hour <= 23, "Invalid hour");
        require(minute >= 0 && minute <= 59, "Invalid minute");

        if (month == 2) {
            bool isLeapYear = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            require(day <= (isLeapYear ? 29 : 28), "Invalid day for February");
        } else if (month == 4 || month == 6 || month == 9 || month == 11) {
            require(day <= 30, "Invalid day for the month");
        }

        uint256 timestamp = year * 10000000000 + month * 100000000 + day * 1000000 + hour * 10000 + minute * 100;

        return timestamp;
    }

    function convertMinutesToTime(uint256 _minutes) public pure returns (uint256) {
        uint256 tohour = _minutes / 60;
        uint256 remainingMinutes = _minutes % 60;

        uint256 formattedTime = (tohour * 10000) + remainingMinutes * 100;

        return formattedTime;
    }

    function initializeBooking(
        uint256 _roomId,
        uint256 _startTimestamp,
        uint256 _minutes
    )
        public
        roomExists(_roomId)
        onlyAvailable(_roomId)
        returns (uint256)
    {
        //uint256 startTime = parseTimeToUint(_startTimestamp);
        emit Log(_startTimestamp, block.timestamp);

        RoomInfo storage room = rooms[_roomId];

        uint256 endTime = _startTimestamp + _minutes * 60;
        require(checkRoomAvailability(_roomId, _startTimestamp, endTime), "Room is already booked for the selected time");

        uint256 blockCount = _minutes / 30;
        uint256 totalPrice = room.pricePerHour * (blockCount * 30) / 60;

        uint256 bookingId = nextBookingId++;
        bookings[bookingId] = BookingInfo({
            bookingId: bookingId,
            user: msg.sender,
            roomId: _roomId,
            startTime: _startTimestamp,
            endTime: endTime,
            blockCount: blockCount,
            totalPrice: totalPrice,
            isCompleted: false,
            isCancel: false
        });

        bool isMeetingRoom = checkTypeRoom(_roomId);
        if (isMeetingRoom) {
            bookings[bookingId].isCompleted = true;

            roomBookingTimes[_roomId].push(BookingTime({
                startTime: _startTimestamp,
                endTime: endTime,
                isCancel: false
            }));
        }

        emit BookingInitialized(bookingId, _roomId, msg.sender);

        return bookingId;
    }

    function completeBooking(uint256 _bookingId, uint256[] memory _seatIds) public payable {
        BookingInfo storage booking = bookings[_bookingId];
        RoomInfo storage room = rooms[booking.roomId];

        if (keccak256(abi.encodePacked(room.roomType)) == keccak256(abi.encodePacked("Work Room"))) {
            require(_seatIds.length > 0, "Work Room requires seat selection");

            for (uint256 i = 0; i < _seatIds.length; i++) {
                require(checkSeatAvailability(booking.roomId, _seatIds[i], booking.startTime, booking.endTime), "Seat is already booked for the selected time");
                
                roomSeats[booking.roomId][_seatIds[i]].isReserved = true;
                seatBookingTimes[booking.roomId][_seatIds[i]].push(BookingTime({
                    startTime: booking.startTime,
                    endTime: booking.endTime,
                    isCancel: false
                }));
            }
        }

        bookings[_bookingId].isCompleted = true;

        emit RoomBooked(_bookingId, booking.roomId, msg.sender, booking.totalPrice);
    }

    function checkRoomAvailability(uint256 _roomId, uint256 _startTime, uint256 _endTime) public view returns (bool) {
        for (uint256 i = 0; i < roomBookingTimes[_roomId].length; i++) {
            uint256 bookedStartTime = roomBookingTimes[_roomId][i].startTime;
            uint256 bookedEndTime = roomBookingTimes[_roomId][i].endTime;

            if ((_startTime < bookedEndTime) && (_endTime > bookedStartTime) && (roomBookingTimes[_roomId][i].isCancel == true)) {
                return false; 
            }
        }

        return true; 
    }

    function checkSeatAvailability(uint256 _roomId, uint256 _seatId, uint256 _startTime, uint256 _endTime) public view returns (bool) {
        for (uint256 i = 0; i < seatBookingTimes[_roomId][_seatId].length; i++) {
            uint256 bookedStartTime = seatBookingTimes[_roomId][_seatId][i].startTime;
            uint256 bookedEndTime = seatBookingTimes[_roomId][_seatId][i].endTime;

            if ((_startTime < bookedEndTime) && (_endTime > bookedStartTime) && (seatBookingTimes[_roomId][_seatId][i].isCancel == true)) {
                return false;  
            }
        }

        return true;  
    }

    function cancelBooking(uint256 _bookingId) public {
        BookingInfo storage booking = bookings[_bookingId];

        require(booking.bookingId != 0, "Booking does not exist");
        
        bool isMeetingRoom = checkTypeRoom(booking.roomId);
        
        if (isMeetingRoom) {
            for (uint256 i = 0; i < roomBookingTimes[booking.roomId].length; i++) {
                if (roomBookingTimes[booking.roomId][i].startTime == booking.startTime && 
                    roomBookingTimes[booking.roomId][i].endTime == booking.endTime) {
                    roomBookingTimes[booking.roomId][i].isCancel = true; 
                }
            }
            booking.isCancel = true;
        } else {
            for (uint256 i = 0; i < roomSeats[booking.roomId].length; i++) {
                uint256 seatId = roomSeats[booking.roomId][i].seatId; 

                for (uint256 j = 0; j < seatBookingTimes[booking.roomId][seatId].length; j++) {
                    if (seatBookingTimes[booking.roomId][seatId][j].startTime == booking.startTime &&
                        seatBookingTimes[booking.roomId][seatId][j].endTime == booking.endTime) {
                        seatBookingTimes[booking.roomId][seatId][j].isCancel = true;
                    }
                }
            }
            booking.isCancel = true;
        }

        booking.isCompleted = true;  

        emit BookingCanceled(_bookingId, booking.roomId);
    }
}
