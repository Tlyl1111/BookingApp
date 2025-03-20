const contractAddress = "0xc15E3f2786a37EeC3C2E81Cb79Fbf0845A80345a";
const contractABI = [
  
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




