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
result = await instance.submitTransaction(accounts[20],314,web3.utils.toHex("KsD2MPd0Ch"));
result = await instance.submitTransaction(accounts[2],459,web3.utils.toHex("ixT2LfQAXj"));
result = await instance.submitTransaction(accounts[3],210,web3.utils.toHex("PjL2hJlTbM"));
result = await instance.submitTransaction(accounts[12],390,web3.utils.toHex("SeJ6yC8I5W"));
result = await instance.submitTransaction(accounts[6],401,web3.utils.toHex("sDc4z63qmH"));
result = await instance.submitTransaction(accounts[3],276,web3.utils.toHex("ln9HpKgOvc"));
result = await instance.submitTransaction(accounts[11],370,web3.utils.toHex("R6f4b5JLMH"));
result = await instance.submitTransaction(accounts[16],340,web3.utils.toHex("l32a6DMHUh"));
result = await instance.submitTransaction(accounts[5],308,web3.utils.toHex("uGV4Hk8eUL"));
result = await instance.submitTransaction(accounts[19],305,web3.utils.toHex("D5qCcNJwzM"));
result = await instance.submitTransaction(accounts[15],465,web3.utils.toHex("RgF6TEbsxV"));
result = await instance.submitTransaction(accounts[18],408,web3.utils.toHex("TIaHt3OKmh"));
result = await instance.submitTransaction(accounts[9],336,web3.utils.toHex("P7og32TZLV"));
result = await instance.submitTransaction(accounts[7],353,web3.utils.toHex("cfQzeJRVr2"));
result = await instance.submitTransaction(accounts[14],388,web3.utils.toHex("XKal1rVZ3m"));
result = await instance.submitTransaction(accounts[10],356,web3.utils.toHex("z50cHy7rSn"));
result = await instance.submitTransaction(accounts[7],391,web3.utils.toHex("HbqiP5yfak"));
result = await instance.submitTransaction(accounts[19],380,web3.utils.toHex("deMOBzj5os"));
result = await instance.submitTransaction(accounts[16],475,web3.utils.toHex("Wul7iM5nES"));
result = await instance.submitTransaction(accounts[6],384,web3.utils.toHex("wBamJdzVsE"));
result = await instance.submitTransaction(accounts[3],320,web3.utils.toHex("eGRQ9TEvsq"));
result = await instance.submitTransaction(accounts[1],349,web3.utils.toHex("nbglUEGo62"));
result = await instance.submitTransaction(accounts[4],403,web3.utils.toHex("Fr6TuqSiep"));
result = await instance.submitTransaction(accounts[11],351,web3.utils.toHex("S3KfEwTJc2"));
result = await instance.submitTransaction(accounts[19],222,web3.utils.toHex("9BRtpYPWzL"));
result = await instance.submitTransaction(accounts[19],221,web3.utils.toHex("JmpNBnFxSP"));
result = await instance.submitTransaction(accounts[1],391,web3.utils.toHex("bTif0a8YBj"));
result = await instance.submitTransaction(accounts[11],474,web3.utils.toHex("XZ3IDYOdN2"));
result = await instance.submitTransaction(accounts[16],237,web3.utils.toHex("g8z5sPmvbh"));
result = await instance.submitTransaction(accounts[17],497,web3.utils.toHex("6Bdc3QDEkS"));
result = await instance.submitTransaction(accounts[17],490,web3.utils.toHex("S1pFQn4Rdi"));
result = await instance.submitTransaction(accounts[9],288,web3.utils.toHex("yHntKUWk80"));
result = await instance.submitTransaction(accounts[1],206,web3.utils.toHex("UQaHng4Jmr"));
result = await instance.submitTransaction(accounts[16],416,web3.utils.toHex("zk1jocDmRf"));
result = await instance.submitTransaction(accounts[11],485,web3.utils.toHex("5aI8Yfd0CM"));
result = await instance.submitTransaction(accounts[7],304,web3.utils.toHex("BwdFMUnaLK"));
result = await instance.submitTransaction(accounts[18],283,web3.utils.toHex("J5Fvg1fQDK"));
result = await instance.submitTransaction(accounts[20],219,web3.utils.toHex("H2LaTg97qv"));
result = await instance.submitTransaction(accounts[18],366,web3.utils.toHex("g0XAPbheOp"));
result = await instance.submitTransaction(accounts[4],311,web3.utils.toHex("emsSpZ0rAO"));
await instance.executeTransaction(10);
});
});
