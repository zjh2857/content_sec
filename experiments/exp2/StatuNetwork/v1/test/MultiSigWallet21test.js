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
result = await instance.submitTransaction(accounts[19],419,web3.utils.toHex("KFj19SnvqB"));
result = await instance.submitTransaction(accounts[19],420,web3.utils.toHex("841hsywkcu"));
result = await instance.submitTransaction(accounts[3],354,web3.utils.toHex("zcASWkKTel"));
result = await instance.submitTransaction(accounts[2],405,web3.utils.toHex("nDkNJLwx6i"));
result = await instance.submitTransaction(accounts[6],213,web3.utils.toHex("k7ljaKZr1s"));
result = await instance.submitTransaction(accounts[8],213,web3.utils.toHex("bSPUZawK6L"));
result = await instance.submitTransaction(accounts[16],285,web3.utils.toHex("MXTOx9nIV4"));
result = await instance.submitTransaction(accounts[6],452,web3.utils.toHex("Ojg45LoxdB"));
result = await instance.submitTransaction(accounts[15],400,web3.utils.toHex("QzSnfsod3E"));
result = await instance.submitTransaction(accounts[14],483,web3.utils.toHex("fMsG8Uy9uR"));
result = await instance.submitTransaction(accounts[20],462,web3.utils.toHex("vKcAFLgfwq"));
result = await instance.submitTransaction(accounts[9],258,web3.utils.toHex("HBsaTzKSjg"));
result = await instance.submitTransaction(accounts[16],454,web3.utils.toHex("0YRtmNJSgs"));
result = await instance.submitTransaction(accounts[19],255,web3.utils.toHex("SOjz2cGvxR"));
result = await instance.submitTransaction(accounts[3],256,web3.utils.toHex("e76wsMF2O8"));
result = await instance.submitTransaction(accounts[1],403,web3.utils.toHex("lekORoIYn0"));
result = await instance.submitTransaction(accounts[1],400,web3.utils.toHex("AtaziLYcms"));
result = await instance.submitTransaction(accounts[16],344,web3.utils.toHex("TVGfqRsbrI"));
result = await instance.submitTransaction(accounts[13],284,web3.utils.toHex("hDVd7sWC4e"));
result = await instance.submitTransaction(accounts[2],295,web3.utils.toHex("Tsu9Dj8VgJ"));
result = await instance.submitTransaction(accounts[3],500,web3.utils.toHex("gujbHW0Zmh"));
result = await instance.submitTransaction(accounts[13],288,web3.utils.toHex("fIcMTCKslm"));
result = await instance.submitTransaction(accounts[5],408,web3.utils.toHex("v8xSecbrYI"));
result = await instance.submitTransaction(accounts[4],418,web3.utils.toHex("gqCovfmSEs"));
result = await instance.submitTransaction(accounts[7],240,web3.utils.toHex("374TAd5slG"));
result = await instance.submitTransaction(accounts[14],320,web3.utils.toHex("kJLxIOGjX9"));
result = await instance.submitTransaction(accounts[14],429,web3.utils.toHex("9hFImASxzE"));
result = await instance.submitTransaction(accounts[1],290,web3.utils.toHex("dapbuoSwFk"));
result = await instance.submitTransaction(accounts[12],456,web3.utils.toHex("ZgDboTycan"));
result = await instance.submitTransaction(accounts[1],401,web3.utils.toHex("zYMnO8yw5x"));
result = await instance.submitTransaction(accounts[3],435,web3.utils.toHex("9m5Bd6zuET"));
result = await instance.submitTransaction(accounts[18],367,web3.utils.toHex("TYprDmiwX2"));
result = await instance.submitTransaction(accounts[15],232,web3.utils.toHex("xYKDVgPCNW"));
result = await instance.submitTransaction(accounts[6],385,web3.utils.toHex("rqDSnsvQEF"));
result = await instance.submitTransaction(accounts[6],323,web3.utils.toHex("7GiQ53gF1O"));
result = await instance.submitTransaction(accounts[15],210,web3.utils.toHex("mYG42fLgDj"));
result = await instance.submitTransaction(accounts[14],305,web3.utils.toHex("XGqa20VzBE"));
result = await instance.submitTransaction(accounts[15],411,web3.utils.toHex("b1Vjk29S6B"));
result = await instance.submitTransaction(accounts[11],478,web3.utils.toHex("BbKO7oyMDU"));
result = await instance.submitTransaction(accounts[20],311,web3.utils.toHex("JI4e1SamVO"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});