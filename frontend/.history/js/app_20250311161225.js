const contractAddress = "0xc91399541905B0E8cE8C55d8bBF7931428BF7057";
const contractABI = [
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_roomLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_pricePerHour",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_roomType",
        type: "string",
      },
    ],
    name: "addRoom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "addRoomBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "addSeatBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "seatId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "row",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "col",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isReserved",
            type: "bool",
          },
        ],
        internalType: "struct Room.Seat[]",
        name: "_seats",
        type: "tuple[]",
      },
    ],
    name: "addSeatsToWorkRoom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bookingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
    ],
    name: "BookingCanceled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bookingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "BookingInitialized",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookingId",
        type: "uint256",
      },
    ],
    name: "cancelBooking",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookingId",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "_seatIds",
        type: "uint256[]",
      },
    ],
    name: "completeBooking",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
    ],
    name: "DebugLog",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_minutes",
        type: "uint256",
      },
    ],
    name: "initializeBooking",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "blockTime",
        type: "uint256",
      },
    ],
    name: "Log",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_startTimestamp",
        type: "uint256",
      },
    ],
    name: "parseTimeToUint",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "roomType",
        type: "string",
      },
    ],
    name: "RoomAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "bookingId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
    ],
    name: "RoomBooked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalSeats",
        type: "uint256",
      },
    ],
    name: "SeatsAdded",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "bookings",
    outputs: [
      {
        internalType: "uint256",
        name: "bookingId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "blockCount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalPrice",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCompleted",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "isCancel",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "checkRoomAvailability",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_seatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_endTime",
        type: "uint256",
      },
    ],
    name: "checkSeatAvailability",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_minutes",
        type: "uint256",
      },
    ],
    name: "convertMinutesToTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "year",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "month",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "day",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "hour",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "minute",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "second",
        type: "uint256",
      },
    ],
    name: "convertToUnixTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getAllBookings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bookingId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "roomId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCompleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isCancel",
            type: "bool",
          },
        ],
        internalType: "struct Booking.BookingInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_bookingId",
        type: "uint256",
      },
    ],
    name: "getBooking",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "bookingId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "user",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "roomId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "blockCount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "totalPrice",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCompleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isCancel",
            type: "bool",
          },
        ],
        internalType: "struct Booking.BookingInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
    ],
    name: "getRoomBookings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCancel",
            type: "bool",
          },
        ],
        internalType: "struct Room.BookingTime[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getRooms",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "roomId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
          {
            internalType: "string",
            name: "location",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "roomLength",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "pricePerHour",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "roomType",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isAvailable",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "seatsInitialized",
            type: "bool",
          },
        ],
        internalType: "struct Room.RoomInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "seatId",
        type: "uint256",
      },
    ],
    name: "getSeatBookings",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isCancel",
            type: "bool",
          },
        ],
        internalType: "struct Room.BookingTime[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
    ],
    name: "getSeatsByRoom",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "seatId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "row",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "col",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "isReserved",
            type: "bool",
          },
        ],
        internalType: "struct Room.Seat[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "nextBookingId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roomBookingTimes",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCancel",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rooms",
    outputs: [
      {
        internalType: "uint256",
        name: "roomId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "location",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "roomLength",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pricePerHour",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "roomType",
        type: "string",
      },
      {
        internalType: "bool",
        name: "isAvailable",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "seatsInitialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "roomSeats",
    outputs: [
      {
        internalType: "uint256",
        name: "seatId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "row",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "col",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isReserved",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "seatBookingTimes",
    outputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isCancel",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

let web3;
const wsWeb3 = new Web3(
  new Web3.providers.WebsocketProvider("wss://bsc-testnet-rpc.publicnode.com")
);
const contract = new wsWeb3.eth.Contract(contractABI, contractAddress);
const privateKey =
  "0x1fd809bb5ec8a9d8b9bc7e51bccb87f98dfd367973310effc3c98ef8b3948d05";
if (privateKey) {
  web3 = new Web3(
    new Web3.providers.HttpProvider(
      "https://data-seed-prebsc-1-s1.binance.org:8545/"
    )
  );

  const account = web3.eth.accounts.privateKeyToAccount(privateKey);
  web3.eth.accounts.wallet.add(account);
  console.log("Địa chỉ tài khoản: ", account.address);
}
const accounts = web3.eth.accounts.wallet;

async function renderRooms() {
  try {
    const rooms = await contract.methods.getRooms().call();
    const roomListContainer = document.getElementById("roomList");
    roomListContainer.innerHTML = ""; 

    if (rooms.length === 0) {
      roomListContainer.innerHTML = "<p>Không có phòng nào.</p>";
      return;
    }

    rooms.forEach((room) => {
      const roomElement = document.createElement("div");
      roomElement.innerHTML = `
        <div>
          <strong>${room.name} (${room.roomType})</strong><br />
          Location: ${room.location}<br />
          Capa: ${room.roomLength}<br />
          Price per Hour: $${room.pricePerHour}<br />
        </div>
        <hr>
      `;
      roomListContainer.appendChild(roomElement);
    });
  } catch (error) {
    console.error("Error fetching rooms:", error);
    document.getElementById("roomList").innerHTML =
      "<p style='color: red;'>Lỗi khi tải danh sách phòng.</p>";
  }
}

renderRooms();


