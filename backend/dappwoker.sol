// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./booking.sol";

contract DappWorker is Booking {
    function getAllBookings() public view returns (BookingInfo[] memory) {
        uint256 totalBookings = nextBookingId - 1;
        BookingInfo[] memory allBookings = new BookingInfo[](totalBookings);

        for (uint256 i = 0; i < totalBookings; i++) {
            allBookings[i] = bookings[i + 1];
        }

        return allBookings;
    }
}
