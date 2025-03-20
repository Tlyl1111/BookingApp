
const contractAddress = "0x4fC0FF6DdaA0585d792491c68d5158FC9175Fcc0";
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
let accounts = []; // Khởi tạo accounts toàn cục

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

  // Đảm bảo gán đúng cho biến global accounts
  accounts = web3.eth.accounts.wallet;

  // Kiểm tra lại account đã được khởi tạo chưa
  if (accounts && accounts.length > 0) {
    console.log("Tài khoản đã được khởi tạo: ", accounts[0].address);
  } else {
    console.error("Không có tài khoản nào.");
  }
} else {
  console.error("Khóa riêng tư không hợp lệ.");
}

// Hàm để hiển thị form khởi tạo booking
function showInitializeBookingForm(room) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Khởi tạo booking cho ${room.name}</h3>
    <form id="initializeBookingForm">
      <label for="startTime">Thời gian bắt đầu:</label><br />
      <input type="datetime-local" id="startTime" name="startTime"><br /><br />
      <label for="minutes">Thời gian (Phút):</label><br />
      <input type="number" id="minutes" name="minutes"><br /><br />
      <button type="submit">Đặt phòng</button>
    </form>
  `;

  // Thêm sự kiện submit cho form
  document
    .getElementById("initializeBookingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const startTime = document.getElementById("startTime").value;
      const minutes = document.getElementById("minutes").value;

      const formattedStartTime = formatDateToYYYYMMDDHHMMSS(startTime);

      // Kiểm tra accounts trước khi gọi initializeBooking
      if (!accounts || accounts.length === 0) {
        console.error("Không có tài khoản để thực hiện booking.");
        return;
      }

      // Gọi hàm initializeBooking
      initializeBooking(room.roomId, formattedStartTime, minutes);
    });

  // Hàm định dạng thời gian
  function formatDateToYYYYMMDDHHMMSS(dateStr) {
    const date = new Date(dateStr);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    return `${year}${month}${day}${hours}${minutes}${seconds}`;
  }
}

// Hàm khởi tạo booking
async function initializeBooking(roomId, startTime, minutes) {
  try {
    // Đảm bảo accounts có giá trị
    if (!accounts || accounts.length === 0) {
      throw new Error("Không có tài khoản để thực hiện booking.");
    }

    // Thực hiện gọi hàm initializeBooking
    const result = await contract.methods
      .initializeBooking(roomId, startTime, minutes)
      .send({
        from: accounts[0].address,
      });
    console.log("Booking đã được khởi tạo: ", result);
  } catch (error) {
    console.error("Lỗi khi khởi tạo booking: ", error);
  }
}

// Hàm hiển thị form hoàn thành booking
function showCompleteBookingForm(room) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Hoàn thành booking cho ${room.name}</h3>
    <form id="completeBookingForm">
      <label for="bookingId">ID booking:</label><br />
      <input type="number" id="bookingId" name="bookingId"><br /><br />
      <label for="seats">ID ghế (cách nhau bằng dấu phẩy):</label><br />
      <input type="text" id="seats" name="seats"><br /><br />
      <button type="submit">Hoàn thành booking</button>
    </form>
  `;

  // Thêm sự kiện submit cho form hoàn thành booking
  document
    .getElementById("completeBookingForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const bookingId = document.getElementById("bookingId").value;
      const seats = document
        .getElementById("seats")
        .value.split(",")
        .map((seat) => parseInt(seat.trim()));
      completeBooking(room.roomId, bookingId, seats);
    });
}

async function completeBooking(roomId, bookingId, seatIds) {
  try {
    if (!accounts || accounts.length === 0) {
      throw new Error("Không có tài khoản để hoàn thành booking.");
    }
    
    const result = await contract.methods
      .completeBooking(bookingId, seatIds)
      .send({
        from: accounts[0].address,
      });
    console.log("Booking đã được hoàn thành: ", result);
  } catch (error) {
    console.error("Lỗi khi hoàn thành booking: ", error);
  }
}

