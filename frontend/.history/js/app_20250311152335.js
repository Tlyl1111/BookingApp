
window.addEventListener("load", function () {
  if (typeof window.ethereum !== "undefined") {
    console.log("MetaMask is installed!");
    const web3 = new Web3(window.ethereum);

    // Địa chỉ contract và ABI
    const contractAddress = "YOUR_CONTRACT_ADDRESS"; // Thay bằng địa chỉ contract của bạn
    const contractABI = [
      // ABI của contract (sử dụng ABI từ quá trình biên dịch contract)
    ];

    const contract = new web3.eth.Contract(contractABI, contractAddress);

    // Lấy dữ liệu từ contract
    const getDataBtn = document.getElementById("getDataBtn");
    const storedDataElement = document.getElementById("storedData");

    getDataBtn.addEventListener("click", async function () {
      try {
        const data = await contract.methods.get().call();
        storedDataElement.innerText = "Stored Data: " + data;
      } catch (error) {
        console.error(error);
      }
    });

    // Gửi dữ liệu tới contract
    const setDataBtn = document.getElementById("setDataBtn");
    const dataInput = document.getElementById("dataInput");

    setDataBtn.addEventListener("click", async function () {
      const data = dataInput.value;
      if (data) {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const account = accounts[0];

        try {
          const tx = await contract.methods.set(data).send({ from: account });
          console.log("Transaction:", tx);
        } catch (error) {
          console.error(error);
        }
      }
    });
  } else {
    alert("MetaMask is not installed!");
  }
});
