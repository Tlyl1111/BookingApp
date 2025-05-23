const contractAddress = "0xc15E3f2786a37EeC3C2E81Cb79Fbf0845A80345a";
const contractABI = [
  // ... (contract ABI content here, same as the one in your provided code)
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

async function getBTCFlows() {
  try {
    const btcFlows = await contract.methods.getBTCFlows().call();
    const btcFlowContainer = document.getElementById("btcFlowContainer");
    btcFlowContainer.innerHTML = "";

    if (btcFlows.length === 0) {
      btcFlowContainer.innerHTML = "<p>Không có dữ liệu BTC Flow.</p>";
      return;
    }

    btcFlows.forEach((btcFlow, index) => {
      const inflow = web3.utils.fromWei(btcFlow.inflow, "ether");
      const outflow = web3.utils.fromWei(btcFlow.outflow, "ether");
      const price = Number(btcFlow.price).toLocaleString();
      const timestamp = new Date(btcFlow.timestamp * 1000).toLocaleString();

      const btcFlowElement = document.createElement("div");
      btcFlowElement.innerHTML = `
          <p><strong> BTC Flow #${index + 1}</strong></p>
          <p>Inflow: <strong>${inflow} BTC</strong></p>
          <p>Outflow: <strong>${outflow} BTC</strong></p>
          <p>Price: <strong>$${price}</strong></p>
          <p>Timestamp: <strong>${timestamp}</strong></p>
          <hr>
      `;
      btcFlowContainer.appendChild(btcFlowElement);
    });
  } catch (error) {
    console.error("Lỗi khi lấy BTC Flow:", error);
    document.getElementById("btcFlowContainer").innerHTML =
      "<p style='color: red;'>Lỗi khi tải dữ liệu.</p>";
  }
}

async function getBTCFlowByTimestamp() {
  const timestampInput = prompt("Nhập timestamp để lấy dữ liệu BTC Flow:");

  if (!timestampInput || isNaN(timestampInput)) {
    alert("Vui lòng nhập một timestamp hợp lệ!");
    return;
  }

  try {
    const timestamp = parseInt(timestampInput);

    const btcFlow = await contract.methods
      .getBTCFlowByTimestamp(timestamp)
      .call();

    const btcFlowContainer = document.getElementById("btcFlowContainer");
    btcFlowContainer.innerHTML = "";

    if (
      !btcFlow ||
      (btcFlow.inflow == 0 && btcFlow.outflow == 0 && btcFlow.price == 0)
    ) {
      btcFlowContainer.innerHTML = `<p Không tìm thấy dữ liệu BTC Flow cho timestamp: ${timestamp}</p>`;
      return;
    }

    const btcFlowElement = document.createElement("div");
    btcFlowElement.innerHTML = `
      <strong>Inflow:</strong> ${btcFlow.inflow} <br/>
      <strong>Outflow:</strong> ${btcFlow.outflow} <br/>
      <strong>Price:</strong> ${btcFlow.price} <br/>
      <strong>Timestamp:</strong> ${btcFlow.timestamp}
  `;

    btcFlowContainer.appendChild(btcFlowElement);
  } catch (error) {
    console.error("Lỗi khi lấy dữ liệu BTC Flow:", error);
    alert(
      "Đã xảy ra lỗi khi lấy dữ liệu BTC Flow. Hãy kiểm tra timestamp hợp lệ."
    );
  }
}

document
  .getElementById("signalForm")
  .addEventListener("submit", async function (event) {
    event.preventDefault();
    await addSignal();
  });

document
  .getElementById("getSignalsButton")
  .addEventListener("click", async function () {
    await getSignals();
  });
document
  .getElementById("getBTCFlowButton")
  .addEventListener("click", async function () {
    await getBTCFlows();
  });
