
import co
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

  if (roomType === "Work Room") {
    showCompleteBookingForm(room);
  } else if (roomType === "Meeting Room") {
    showInitializeBookingForm(room);
  }
}
