// app.js
window.addEventListener("load", function () {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    const web3 = new Web3(window.ethereum);

    // Private key đã được set cứng trong mã (KHÔNG NÊN ĐỂ TRONG CODE CỦA BẠN)
    const privateKey = "YOUR_PRIVATE_KEY_HERE"; // Thay thế bằng private key của bạn

    // Tạo tài khoản từ private key
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);

    // Kết nối đến Ethereum mainnet thông qua Infura hoặc Alchemy
    const provider = new Web3.providers.HttpProvider(
      "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID"
    );
    const web3WithProvider = new Web3(provider);

    const connectBtn = document.getElementById("connectBtn");
    const addressElement = document.getElementById("address");
    const balanceElement = document.getElementById("balance");

    // Khi người dùng nhấn nút "Connect"
    connectBtn.addEventListener("click", async function () {
      try {
        // Hiển thị địa chỉ ví
        addressElement.innerText = account.address;


        const balance = await web3WithProvider.eth.getBalance(account.address);
        balanceElement.innerText =
          "Balance: " +
          web3WithProvider.utils.fromWei(balance, "ether") +
          " ETH";
      } catch (error) {
        console.error(error);
        alert("Error connecting to the wallet.");
      }
    });
  } else {
    alert("MetaMask is not installed!");
  }
});
