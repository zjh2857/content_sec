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
result = await instance.submitTransaction(accounts[18],410,web3.utils.toHex("7yxQPnflcE"));
result = await instance.submitTransaction(accounts[3],493,web3.utils.toHex("o4bI0VLx8K"));
result = await instance.submitTransaction(accounts[20],327,web3.utils.toHex("bNqLYz2G1n"));
result = await instance.submitTransaction(accounts[1],254,web3.utils.toHex("2vX98A7Sg0"));
result = await instance.submitTransaction(accounts[9],459,web3.utils.toHex("BtL3Yo6r2S"));
result = await instance.submitTransaction(accounts[12],495,web3.utils.toHex("goIsy57DLK"));
result = await instance.submitTransaction(accounts[2],295,web3.utils.toHex("kdszRS9vMO"));
result = await instance.submitTransaction(accounts[11],490,web3.utils.toHex("KXZs9QIOJ8"));
result = await instance.submitTransaction(accounts[8],440,web3.utils.toHex("2VacLCgPy5"));
result = await instance.submitTransaction(accounts[11],432,web3.utils.toHex("VfqQpvUecn"));
result = await instance.submitTransaction(accounts[5],400,web3.utils.toHex("ShnUzKNjPG"));
result = await instance.submitTransaction(accounts[15],395,web3.utils.toHex("fGpaX2OAih"));
result = await instance.submitTransaction(accounts[16],410,web3.utils.toHex("Mm7UQePIoS"));
result = await instance.submitTransaction(accounts[6],435,web3.utils.toHex("UwAWxMuVXz"));
result = await instance.submitTransaction(accounts[5],207,web3.utils.toHex("sCTr4kZg52"));
result = await instance.submitTransaction(accounts[5],396,web3.utils.toHex("okiK6ghOI1"));
result = await instance.submitTransaction(accounts[5],289,web3.utils.toHex("fieRSNVJGO"));
result = await instance.submitTransaction(accounts[12],471,web3.utils.toHex("7yEPDFtZC8"));
result = await instance.submitTransaction(accounts[18],371,web3.utils.toHex("Msnf7ERqKt"));
result = await instance.submitTransaction(accounts[19],469,web3.utils.toHex("pqcWMejhzi"));
result = await instance.submitTransaction(accounts[1],340,web3.utils.toHex("b1XGjElNzk"));
result = await instance.submitTransaction(accounts[17],415,web3.utils.toHex("pnefXcHiSY"));
result = await instance.submitTransaction(accounts[20],408,web3.utils.toHex("CQYcz7W2uh"));
result = await instance.submitTransaction(accounts[14],396,web3.utils.toHex("uPxVMjrQwH"));
result = await instance.submitTransaction(accounts[15],345,web3.utils.toHex("gme3rNnfoc"));
result = await instance.submitTransaction(accounts[5],362,web3.utils.toHex("OMpXCgjU6I"));
result = await instance.submitTransaction(accounts[1],250,web3.utils.toHex("pMlBs61bmI"));
result = await instance.submitTransaction(accounts[12],203,web3.utils.toHex("lIXKvHnaNs"));
result = await instance.submitTransaction(accounts[10],295,web3.utils.toHex("ZPn5gQCYMy"));
result = await instance.submitTransaction(accounts[3],469,web3.utils.toHex("8xUYPIC6DL"));
result = await instance.submitTransaction(accounts[9],364,web3.utils.toHex("Qy9ZNhWsLi"));
result = await instance.submitTransaction(accounts[13],347,web3.utils.toHex("ZNbzkYW6DM"));
result = await instance.submitTransaction(accounts[15],255,web3.utils.toHex("xweV8pf4Ag"));
result = await instance.submitTransaction(accounts[4],363,web3.utils.toHex("tovH6isAUF"));
result = await instance.submitTransaction(accounts[9],393,web3.utils.toHex("Zy2O6JvFoL"));
result = await instance.submitTransaction(accounts[16],318,web3.utils.toHex("IRPsHkKt8l"));
result = await instance.submitTransaction(accounts[5],475,web3.utils.toHex("Ngyo3bFf4j"));
result = await instance.submitTransaction(accounts[19],284,web3.utils.toHex("6o7gPKYSjJ"));
result = await instance.submitTransaction(accounts[6],300,web3.utils.toHex("LlmitvCHcN"));
result = await instance.submitTransaction(accounts[2],237,web3.utils.toHex("ofL5XjuliE"));
await instance.executeTransaction(10);
});
});