const MultiSigWallet = artifacts.require("MultiSigWallet");
contract('MultiSigWallet', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await MultiSigWallet.new([accounts[0], accounts[1], accounts[2]], 3);
});
it('test 0', async () => {
let result;
await instance.addOwner(accounts[10]);
await instance.addOwner(accounts[11]);
await instance.addOwner(accounts[12]);
await instance.addOwner(accounts[13]);
await instance.addOwner(accounts[14]);
await instance.addOwner(accounts[15]);
await instance.addOwner(accounts[16]);
await instance.addOwner(accounts[17]);
await instance.addOwner(accounts[18]);
await instance.addOwner(accounts[19]);
await instance.addOwner(accounts[20]);
await instance.addOwner(accounts[21]);
await instance.addOwner(accounts[22]);
await instance.addOwner(accounts[23]);
await instance.addOwner(accounts[24]);
await instance.addOwner(accounts[25]);
await instance.addOwner(accounts[26]);
await instance.addOwner(accounts[27]);
await instance.addOwner(accounts[28]);
await instance.addOwner(accounts[29]);
result = await instance.submitTransaction(accounts[8],237,web3.utils.toHex("7nQamDWReN"));
result = await instance.submitTransaction(accounts[11],492,web3.utils.toHex("5eSV7bkrtL"));
result = await instance.submitTransaction(accounts[5],425,web3.utils.toHex("eOXS3dFb8D"));
result = await instance.submitTransaction(accounts[4],476,web3.utils.toHex("TCgHAyv8WX"));
result = await instance.submitTransaction(accounts[16],499,web3.utils.toHex("swSelQpbk3"));
result = await instance.submitTransaction(accounts[6],326,web3.utils.toHex("TQo817jU3l"));
result = await instance.submitTransaction(accounts[11],489,web3.utils.toHex("hmtduEkM6T"));
result = await instance.submitTransaction(accounts[7],482,web3.utils.toHex("POICJeBcUX"));
result = await instance.submitTransaction(accounts[9],379,web3.utils.toHex("QfvM9hNtTy"));
result = await instance.submitTransaction(accounts[12],407,web3.utils.toHex("7jGErfm1TR"));
result = await instance.submitTransaction(accounts[4],281,web3.utils.toHex("vwAuneM3l9"));
result = await instance.submitTransaction(accounts[18],482,web3.utils.toHex("pF45dzYcLn"));
result = await instance.submitTransaction(accounts[13],212,web3.utils.toHex("DvbVtuJFjT"));
result = await instance.submitTransaction(accounts[18],255,web3.utils.toHex("OMsASoyFJW"));
result = await instance.submitTransaction(accounts[6],345,web3.utils.toHex("yZUXuVOAlR"));
result = await instance.submitTransaction(accounts[12],420,web3.utils.toHex("oZ2zcpqbFa"));
result = await instance.submitTransaction(accounts[16],385,web3.utils.toHex("rVNRgo5eCu"));
result = await instance.submitTransaction(accounts[20],484,web3.utils.toHex("qi5lyjxWeE"));
result = await instance.submitTransaction(accounts[15],326,web3.utils.toHex("ZWebYGsqjw"));
result = await instance.submitTransaction(accounts[11],309,web3.utils.toHex("2acfOKP0yX"));
result = await instance.submitTransaction(accounts[9],402,web3.utils.toHex("TK1i5VUeLZ"));
result = await instance.submitTransaction(accounts[16],447,web3.utils.toHex("l5hedAMzSo"));
result = await instance.submitTransaction(accounts[7],281,web3.utils.toHex("IAbepQnCiT"));
result = await instance.submitTransaction(accounts[1],259,web3.utils.toHex("1VME5wUsLR"));
result = await instance.submitTransaction(accounts[5],286,web3.utils.toHex("UDwQFalzup"));
result = await instance.submitTransaction(accounts[4],487,web3.utils.toHex("pvFo8JZx5G"));
result = await instance.submitTransaction(accounts[16],426,web3.utils.toHex("men8uO9XhU"));
result = await instance.submitTransaction(accounts[5],350,web3.utils.toHex("wfKpcLeI3n"));
result = await instance.submitTransaction(accounts[15],320,web3.utils.toHex("k4EP9e67ac"));
result = await instance.submitTransaction(accounts[12],267,web3.utils.toHex("M1TwgYFfxs"));
result = await instance.submitTransaction(accounts[10],207,web3.utils.toHex("MBU1h5YcoT"));
result = await instance.submitTransaction(accounts[14],255,web3.utils.toHex("dCKrTcXaY3"));
result = await instance.submitTransaction(accounts[20],440,web3.utils.toHex("XWd9u8NKS1"));
result = await instance.submitTransaction(accounts[13],318,web3.utils.toHex("UXTp4Nfyuo"));
result = await instance.submitTransaction(accounts[19],431,web3.utils.toHex("np9WFmCo5r"));
result = await instance.submitTransaction(accounts[3],420,web3.utils.toHex("P2kaNLltrd"));
result = await instance.submitTransaction(accounts[18],475,web3.utils.toHex("aQbHFYP6vl"));
result = await instance.submitTransaction(accounts[12],371,web3.utils.toHex("6RZ9TJGgou"));
result = await instance.submitTransaction(accounts[17],385,web3.utils.toHex("wmJy2xXGif"));
result = await instance.submitTransaction(accounts[1],470,web3.utils.toHex("OJypfY9URi"));
await instance.executeTransaction(10);
});
});