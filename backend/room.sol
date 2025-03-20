// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Room {
    struct BookingTime {
        uint256 startTime;  
        uint256 endTime;
        bool isCancel;    
    }

    struct RoomInfo {
        uint256 roomId;
        string name;
        string location;
        uint256 roomLength;
        uint256 pricePerHour;
        string roomType;
        bool isAvailable;
        bool seatsInitialized;
    }

    struct Seat {
        uint256 seatId;
        uint256 row;
        uint256 col;
        bool isReserved;
    }

    RoomInfo[] public rooms;

    mapping(uint256 => Seat[]) public roomSeats;
    mapping(uint256 => BookingTime[]) public roomBookingTimes;
    mapping(uint256 => mapping(uint256 => BookingTime[])) public seatBookingTimes;

    event RoomAdded(uint256 roomId, string name, string location, string roomType);
    event SeatsAdded(uint256 roomId, uint256 totalSeats);

    function addRoom(
        string memory _name,
        string memory _location,
        uint256 _roomLength, 
        uint256 _pricePerHour,
        string memory _roomType
    ) public {
        uint256 roomId = rooms.length;  

        rooms.push(RoomInfo({
            roomId: roomId,
            name: _name,
            location: _location,
            roomLength: _roomLength,
            pricePerHour: _pricePerHour,
            roomType: _roomType,
            isAvailable: true,  
            seatsInitialized: false 
        }));

        emit RoomAdded(roomId, _name, _location, _roomType);
    }

    function addSeatsToWorkRoom(uint256 _roomId, Seat[] memory _seats) public {
        require(_roomId < rooms.length, "Room does not exist");
        RoomInfo storage room = rooms[_roomId];

        require(
            keccak256(abi.encodePacked(room.roomType)) == keccak256(abi.encodePacked("Work Room")),
            "Only Work Room can have seats"
        );
        require(!room.seatsInitialized, "Seats already initialized for this room");

        require(_seats.length > 0, "Must provide at least one seat");

        for (uint256 i = 0; i < _seats.length; i++) {
            roomSeats[_roomId].push(Seat(_seats[i].seatId, _seats[i].row, _seats[i].col, false));
        }

        room.seatsInitialized = true;
        emit SeatsAdded(_roomId, _seats.length);
    }

    function addRoomBooking(uint256 roomId, uint256 startTime, uint256 endTime) public {
        BookingTime memory newBooking = BookingTime({
            startTime: startTime,
            endTime: endTime,
            isCancel: false
        });
        roomBookingTimes[roomId].push(newBooking);
    }

    function addSeatBooking(uint256 roomId, uint256 seatId, uint256 startTime, uint256 endTime) public {
        BookingTime memory newBooking = BookingTime({
            startTime: startTime,
            endTime: endTime,
            isCancel: false
        });

        seatBookingTimes[roomId][seatId].push(newBooking);
    }

    function getRoomBookings(uint256 roomId) public view returns (BookingTime[] memory) {
        return roomBookingTimes[roomId];
    }

    function getSeatBookings(uint256 roomId, uint256 seatId) public view returns (BookingTime[] memory) {
        return seatBookingTimes[roomId][seatId];
    }

    function getRooms() public view returns (RoomInfo[] memory) {
        return rooms;
    }

    function getSeatsByRoom(uint256 _roomId) public view returns (Seat[] memory) {
        require(_roomId < rooms.length, "Room does not exist");
        return roomSeats[_roomId];
    }

    function checkTypeRoom(uint256 _roomId) public view returns (bool) {
        require(_roomId < rooms.length, "Room does not exist");

        RoomInfo storage room = rooms[_roomId];

        if (keccak256(abi.encodePacked(room.roomType)) == keccak256(abi.encodePacked("Meeting Room"))) {
            return true;  
        }

        return false;  
    }
    function getRoomById(uint256 _roomId) public view returns (RoomInfo memory) {
    require(_roomId < rooms.length, "Room does not exist");
    return rooms[_roomId];
}
}
