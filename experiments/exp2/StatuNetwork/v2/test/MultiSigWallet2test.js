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
result = await instance.submitTransaction(accounts[10],233,web3.utils.toHex("ovJCwDyI39"));
result = await instance.submitTransaction(accounts[20],216,web3.utils.toHex("Hxqy2ZziA8"));
result = await instance.submitTransaction(accounts[17],396,web3.utils.toHex("8leSzArpwx"));
result = await instance.submitTransaction(accounts[13],250,web3.utils.toHex("H9UMYdgCNs"));
result = await instance.submitTransaction(accounts[3],330,web3.utils.toHex("2gPqIMXcTW"));
result = await instance.submitTransaction(accounts[12],272,web3.utils.toHex("zTDcVovEMd"));
result = await instance.submitTransaction(accounts[1],389,web3.utils.toHex("dLkNnIQbA1"));
result = await instance.submitTransaction(accounts[1],410,web3.utils.toHex("3TVYfivduL"));
result = await instance.submitTransaction(accounts[13],261,web3.utils.toHex("gH5JplRfbk"));
result = await instance.submitTransaction(accounts[12],232,web3.utils.toHex("Xd5rMEP96Y"));
result = await instance.submitTransaction(accounts[9],483,web3.utils.toHex("ldsb2z8v7R"));
result = await instance.submitTransaction(accounts[6],247,web3.utils.toHex("VqoOemGPKp"));
result = await instance.submitTransaction(accounts[18],218,web3.utils.toHex("6Wc9hnMk7E"));
result = await instance.submitTransaction(accounts[8],485,web3.utils.toHex("yYQJ7FRbjp"));
result = await instance.submitTransaction(accounts[10],413,web3.utils.toHex("TI4cYa0WHn"));
result = await instance.submitTransaction(accounts[13],458,web3.utils.toHex("lkhFoPbDms"));
result = await instance.submitTransaction(accounts[19],246,web3.utils.toHex("3CJo8HdKXZ"));
result = await instance.submitTransaction(accounts[8],217,web3.utils.toHex("WuP0Mvicen"));
result = await instance.submitTransaction(accounts[20],431,web3.utils.toHex("ztZvdlG1j3"));
result = await instance.submitTransaction(accounts[19],286,web3.utils.toHex("cCIJzRgQ2A"));
result = await instance.submitTransaction(accounts[14],275,web3.utils.toHex("6lTYx1CNfW"));
result = await instance.submitTransaction(accounts[2],444,web3.utils.toHex("xRwqkl73PA"));
result = await instance.submitTransaction(accounts[10],214,web3.utils.toHex("l3hNBLViAw"));
result = await instance.submitTransaction(accounts[8],258,web3.utils.toHex("b2jTpSKurH"));
result = await instance.submitTransaction(accounts[9],301,web3.utils.toHex("EY71Zcw2UG"));
result = await instance.submitTransaction(accounts[15],394,web3.utils.toHex("a4UDIHfrRZ"));
result = await instance.submitTransaction(accounts[8],358,web3.utils.toHex("zGvHjgKQXZ"));
result = await instance.submitTransaction(accounts[9],239,web3.utils.toHex("h9Yiv7JgyX"));
result = await instance.submitTransaction(accounts[10],454,web3.utils.toHex("PqmTyansMu"));
result = await instance.submitTransaction(accounts[9],303,web3.utils.toHex("ZEuxrUTLal"));
result = await instance.submitTransaction(accounts[6],299,web3.utils.toHex("xeSPMrjcmQ"));
result = await instance.submitTransaction(accounts[13],378,web3.utils.toHex("bpD6eq1ijg"));
result = await instance.submitTransaction(accounts[2],407,web3.utils.toHex("1ALPuzoSXO"));
result = await instance.submitTransaction(accounts[16],216,web3.utils.toHex("RLIuShvJom"));
result = await instance.submitTransaction(accounts[13],361,web3.utils.toHex("LCSA7exnNp"));
result = await instance.submitTransaction(accounts[4],440,web3.utils.toHex("fBcVXbOCew"));
result = await instance.submitTransaction(accounts[16],437,web3.utils.toHex("XqChdZQtFK"));
result = await instance.submitTransaction(accounts[2],487,web3.utils.toHex("jVQbPiqRZf"));
result = await instance.submitTransaction(accounts[14],308,web3.utils.toHex("1ErXFG74uw"));
result = await instance.submitTransaction(accounts[9],224,web3.utils.toHex("VhLCyp72tR"));
await instance.executeTransaction(10);
});
});
