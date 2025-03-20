
const contractAddress = "0x5bFefC592e236D0F5A81130D85f693063502CDf9";
const contractABI = [
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

async function addRoom() {
  const name = document.getElementById("name").value;
  const location = document.getElementById("location").value;
  const roomLength = document.getElementById("roomLength").value;
  const pricePerHour = document.getElementById("pricePerHour").value;
  const roomType = document.getElementById("roomType").value;

  if (!name || !location || !roomLength || !pricePerHour || !roomType) {
    alert("Vui lòng nhập tất cả thông tin phòng!");
    return;
  }

  try {
    const fromAddress = accounts[0].address;

    const gasPrice = await web3.eth.getGasPrice();

    const gasLimit = await contract.methods
      .addRoom(name, location, roomLength, pricePerHour, roomType)
      .estimateGas({ from: fromAddress });

    const tx = {
      to: contractAddress,
      data: contract.methods
        .addRoom(name, location, roomLength, pricePerHour, roomType)
        .encodeABI(),
      gas: gasLimit,
      gasPrice: gasPrice,
      from: fromAddress,
    };

    const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);

    const receipt = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    console.log("Phòng đã được thêm thành công:", receipt);
    alert("Phòng đã được thêm thành công!");
  } catch (error) {
    console.error("Lỗi khi thêm phòng:", error);
    alert("Đã có lỗi xảy ra khi thêm phòng.");
  }
}
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
    // Kiểm tra xem tài khoản đã kết nối chưa
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
   
    console.log("Đặt phòng thành công:", receipt);
    alert("Đặt phòng thành công! Mã đặt phòng: " + receipt.transactionHash);
  } catch (error) {
    console.error("Lỗi khi thực hiện đặt phòng:", error);
    alert("Đã xảy ra lỗi khi thực hiện đặt phòng.");
  }
}






