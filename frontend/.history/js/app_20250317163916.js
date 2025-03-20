
const contractAddress = "0xdBf183743d88b72649A8f55D810F36C3e3815C19";
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
        name: "_roomId",
        type: "uint256",
      },
    ],
    name: "checkTypeRoom",
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
    inputs: [
      {
        internalType: "uint256",
        name: "_roomId",
        type: "uint256",
      },
    ],
    name: "getRoomById",
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
        internalType: "struct Room.RoomInfo",
        name: "",
        type: "tuple",
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
let accounts = [];
const wsWeb3 = new Web3(
  new Web3.providers.WebsocketProvider("wss://bsc-testnet-rpc.publicnode.com")
);
const contract = new wsWeb3.eth.Contract(contractABI, contractAddress);
const privateKey =
  "0x1fd809bb5ec8a9d8b9bc7e51bccb87f98dfd367973310effc3c98ef8b3948d05";

web3 = new Web3(
  new Web3.providers.HttpProvider(
    "https://data-seed-prebsc-1-s1.binance.org:8545/"
  )
);

const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);
accounts = web3.eth.accounts.wallet;

if (accounts && accounts.length > 0) {
  console.log("Địa chỉ tài khoản: ", accounts[0].address);
} else {
  console.error("No accounts available");
}

async function renderRooms(filteredRooms) {
  const roomListContainer = document.getElementById("roomList");
  roomListContainer.innerHTML = "";

  if (filteredRooms.length === 0) {
    roomListContainer.innerHTML = "<p>Không có phòng nào.</p>";
    return;
  }

  filteredRooms.forEach((room) => {
    const roomElement = document.createElement("div");
    roomElement.innerHTML = `
      <div data-room-id="${room.roomId}" data-room-type="${room.roomType}">
        <strong>${room.name} (${room.roomType})</strong><br />
        Location: ${room.location}<br />
        Capacity: ${room.roomLength} meters<br />
        Price per Hour: $${room.pricePerHour}<br />
      </div>
      <hr>
    `;

    roomElement.addEventListener("click", function () {
      handleRoomClick(room);
    });

    roomListContainer.appendChild(roomElement);
  });
}

function handleRoomClick(room) {
  const roomType = room.roomType;
  showInitializeBookingForm(room);
}

async function checkBalance() {
  const balance = await web3.eth.getBalance(accounts[0].address);
  console.log(
    "Số dư tài khoản: " + web3.utils.fromWei(balance, "ether") + " tBNB"
  );
}

// async function addRoom() {
//   const name = document.getElementById("name").value;
//   const location = document.getElementById("location").value;
//   const roomLength = document.getElementById("roomLength").value;
//   const pricePerHour = document.getElementById("pricePerHour").value;
//   const roomType = document.getElementById("roomType").value;

//   if (!name || !location || !roomLength || !pricePerHour || !roomType) {
//     alert("Vui lòng nhập tất cả thông tin phòng!");
//     return;
//   }

//   try {
//     const fromAddress = accounts[0].address;

//     const gasPrice = await web3.eth.getGasPrice();

//     const gasLimit = await contract.methods
//       .addRoom(name, location, roomLength, pricePerHour, roomType)
//       .estimateGas({ from: fromAddress });

//     const tx = {
//       to: contractAddress,
//       data: contract.methods
//         .addRoom(name, location, roomLength, pricePerHour, roomType)
//         .encodeABI(),
//       gas: gasLimit,
//       gasPrice: gasPrice,
//       from: fromAddress,
//     };

//     const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

//     const receipt = await web3.eth.sendSignedTransaction(
//       signedTx.rawTransaction
//     );

//     console.log("Phòng đã được thêm thành công:", receipt);
//     alert("Phòng đã được thêm thành công!");
//   } catch (error) {
//     console.error("Lỗi khi thêm phòng:", error);
//     alert("Đã có lỗi xảy ra khi thêm phòng.");
//   }
// }

function showInitializeBookingForm(room) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Đặt phòng ${room.name}</h3>
    <form id="initializeBookingForm">
      <label for="startTime">Thời gian bắt đầu:</label><br />
      <input type="datetime-local" id="startTime" name="startTime" required><br /><br />
      
      <label for="minutes">Thời gian (phút):</label><br />
      <input type="number" id="minutes" name="minutes" required><br /><br />
      
      <button type="submit">Đặt phòng</button>
    </form>
  `;

  document
    .getElementById("initializeBookingForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const startTime = document.getElementById("startTime").value;
      const minutes = document.getElementById("minutes").value;

      if (!startTime || !minutes) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
      }

      const startTimestamp = new Date(startTime).getTime() / 1000;

      const roomId = room.roomId;

      await initializeBooking(roomId, startTimestamp, minutes);
    });
}

async function initializeBooking(roomId, startTimestamp, minutes) {
  try {
    if (!accounts || accounts.length === 0) {
      alert("Vui lòng kết nối ví của bạn trước khi thực hiện đặt phòng.");
      return;
    }

    const fromAddress = accounts[0].address;

    const gasPrice = await web3.eth.getGasPrice();

    const gasLimit = await contract.methods
      .initializeBooking(roomId, startTimestamp, minutes)
      .estimateGas({ from: fromAddress });

    const tx = {
      to: contractAddress,
      data: contract.methods
        .initializeBooking(roomId, startTimestamp, minutes)
        .encodeABI(),
      gas: gasLimit,
      gasPrice: gasPrice,
      from: fromAddress,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

	  const isMeetingRoom = await contract.methods.checkTypeRoom(roomId).call();
	  console.log("isMeetingRoom: " + isMeetingRoom);
    if (isMeetingRoom) {
      alert("Phòng họp đã được thêm thành công!");
    } else {
      showCompleteBookingForm(roomId, receipt.transactionHash);
    }
  } catch (error) {
    console.error("Lỗi khi thực hiện đặt phòng:", error);
    alert("Đã xảy ra lỗi khi thực hiện đặt phòng.");
  }
}

function showCompleteBookingForm(roomId, transactionHash) {
  const formContainer = document.getElementById("formContainer");
  formContainer.innerHTML = `
    <h3>Hoàn thành đặt phòng</h3>
    <form id="completeBookingForm">
      <label for="seatIds">Chọn ghế:</label><br />
      <input type="text" id="seatIds" name="seatIds" placeholder="Nhập số ghế, cách nhau bằng dấu phẩy" required><br /><br />
      <button type="submit">Hoàn thành đặt phòng</button>
    </form>
  `;

  document
    .getElementById("completeBookingForm")
    .addEventListener("submit", async function (event) {
      event.preventDefault();

      const seatIds = document
        .getElementById("seatIds")
        .value.split(",")
        .map(Number);

      if (!seatIds.length) {
        alert("Vui lòng chọn ít nhất một ghế.");
        return;
      }

      await completeBooking(roomId, seatIds, transactionHash);
    });
}

async function completeBooking(roomId, seatIds, transactionHash) {
  try {
    if (!accounts || accounts.length === 0) {
      alert("Vui lòng kết nối ví của bạn trước khi hoàn thành đặt phòng.");
      return;
    }

    const fromAddress = accounts[0].address;

    const gasPrice = await web3.eth.getGasPrice();

    const gasLimit = await contract.methods
      .completeBooking(transactionHash, seatIds)
      .estimateGas({ from: fromAddress });

    const tx = {
      to: contractAddress,
      data: contract.methods
        .completeBooking(transactionHash, seatIds)
        .encodeABI(),
      gas: gasLimit,
      gasPrice: gasPrice,
      from: fromAddress,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log("Hoàn thành đặt phòng thành công:", receipt);
    alert("Đặt phòng đã hoàn thành! Mã giao dịch: " + receipt.transactionHash);
  } catch (error) {
    console.error("Lỗi khi hoàn thành đặt phòng:", error);
    alert("Đã xảy ra lỗi khi hoàn thành đặt phòng.");
  }
}

async function fetchAllBookings() {
  const accounts = await web3.eth.getAccounts();

  try {
    const allBookings = await contract.methods.getAllBookings().call();

    const bookingListContainer = document.getElementById("bookingList");
    bookingListContainer.innerHTML = ""; 
    for (const booking of allBookings) {
      const startDate = new Date(Number(booking.startTime) * 1000);
      const endDate = new Date(Number(booking.endTime) * 1000); 

      const room = await contract.methods.getRoomById(booking.roomId).call();

      const bookingElement = document.createElement("div");
      bookingElement.classList.add("booking-item");

      bookingElement.innerHTML = `
        <p><strong>Phòng:</strong> ${room.name}</p> 
        <p><strong>Loại phòng:</strong> ${room.roomType}</p> 
        <p><strong>Thời gian bắt đầu:</strong> ${startDate.toLocaleString()}</p> 
        <p><strong>Thời gian kết thúc:</strong> ${endDate.toLocaleString()}</p> 
        <p><strong>Trạng thái:</strong> ${
          booking.isCancel ? "Cancel" : "Pending"
        }</p>
        <button onclick="cancelBooking(${
          booking.bookingId
        })">Hủy Booking</button>
        <hr />
      `;

      bookingListContainer.appendChild(bookingElement);
    }
  } catch (error) {
    console.error("Lỗi khi lấy danh sách booking: " + error.message);
    alert("Không thể lấy thông tin booking.");
  }
}

async function cancelBooking(bookingId) {
  const accounts = await web3.eth.getAccounts();

  // Ensure that the user is connected
  if (!accounts || accounts.length === 0) {
    alert("Vui lòng kết nối ví của bạn.");
    return;
  }

  try {
    const fromAddress = accounts[0]; // Get the account address
    const gasPrice = await web3.eth.getGasPrice(); // Fetch the gas price
    const gasLimit = await contract.methods
      .cancelBooking(bookingId)
      .estimateGas({ from: fromAddress }); // Estimate the gas required for the transaction

    // Prepare the transaction object
    const tx = {
      to: contractAddress, // Contract address
      data: contract.methods.cancelBooking(bookingId).encodeABI(), // Encoded function call
      gas: gasLimit, // Estimated gas limit
      gasPrice: gasPrice, // Gas price
      from: fromAddress, // Sender's address
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log("Booking canceled successfully:", receipt);
    alert("Booking đã được hủy.");
    fetchAllBookings(); 
  } catch (error) {
    console.error("Lỗi khi hủy booking: ", error);
    alert("Lỗi khi hủy booking: " + error.message);
  }
}


fetchAllBookings();








