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
result = await instance.submitTransaction(accounts[5],472,web3.utils.toHex("dFUxKk6ioe"));
result = await instance.submitTransaction(accounts[12],226,web3.utils.toHex("YIn0KGQFhE"));
result = await instance.submitTransaction(accounts[18],223,web3.utils.toHex("7awkYoyN5h"));
result = await instance.submitTransaction(accounts[8],286,web3.utils.toHex("f5lTyzPvsK"));
result = await instance.submitTransaction(accounts[3],319,web3.utils.toHex("1IJXP34qQx"));
result = await instance.submitTransaction(accounts[13],328,web3.utils.toHex("EukmizHvL5"));
result = await instance.submitTransaction(accounts[16],201,web3.utils.toHex("Xyoam9ZYMO"));
result = await instance.submitTransaction(accounts[4],227,web3.utils.toHex("DMEWqForTZ"));
result = await instance.submitTransaction(accounts[18],202,web3.utils.toHex("ix8Sun7ZY2"));
result = await instance.submitTransaction(accounts[20],258,web3.utils.toHex("XQq95Vsteu"));
result = await instance.submitTransaction(accounts[12],249,web3.utils.toHex("XYWfDQTh3U"));
result = await instance.submitTransaction(accounts[14],443,web3.utils.toHex("NDovwUB7HC"));
result = await instance.submitTransaction(accounts[17],329,web3.utils.toHex("PqGpHTuogh"));
result = await instance.submitTransaction(accounts[11],227,web3.utils.toHex("CslaBbLkyd"));
result = await instance.submitTransaction(accounts[7],229,web3.utils.toHex("Truyn50Oem"));
result = await instance.submitTransaction(accounts[2],374,web3.utils.toHex("W6wY2BpqvS"));
result = await instance.submitTransaction(accounts[2],287,web3.utils.toHex("QF374VfRYg"));
result = await instance.submitTransaction(accounts[9],454,web3.utils.toHex("UPeEZIDJfM"));
result = await instance.submitTransaction(accounts[17],354,web3.utils.toHex("Ae1xKbGcPw"));
result = await instance.submitTransaction(accounts[3],346,web3.utils.toHex("GXHLnofbkT"));
result = await instance.submitTransaction(accounts[19],434,web3.utils.toHex("DUX2kB5Ryd"));
result = await instance.submitTransaction(accounts[1],299,web3.utils.toHex("BTN7sZwePV"));
result = await instance.submitTransaction(accounts[20],326,web3.utils.toHex("hMQZ7muEy2"));
result = await instance.submitTransaction(accounts[2],268,web3.utils.toHex("vMjgusD1yJ"));
result = await instance.submitTransaction(accounts[17],454,web3.utils.toHex("Lve04utBVF"));
result = await instance.submitTransaction(accounts[13],343,web3.utils.toHex("l4XDugqpKP"));
result = await instance.submitTransaction(accounts[5],328,web3.utils.toHex("i7ZtPUeTQV"));
result = await instance.submitTransaction(accounts[10],413,web3.utils.toHex("y2PefwVthT"));
result = await instance.submitTransaction(accounts[19],398,web3.utils.toHex("bFtYxGuqEc"));
result = await instance.submitTransaction(accounts[4],481,web3.utils.toHex("8DsNcmF0Er"));
result = await instance.submitTransaction(accounts[8],251,web3.utils.toHex("KVOMxjCBIm"));
result = await instance.submitTransaction(accounts[20],481,web3.utils.toHex("ah9VjeidbA"));
result = await instance.submitTransaction(accounts[1],268,web3.utils.toHex("YmrHB5i7ta"));
result = await instance.submitTransaction(accounts[3],249,web3.utils.toHex("Y2vBWrJeyK"));
result = await instance.submitTransaction(accounts[2],409,web3.utils.toHex("OMljKGxiLv"));
result = await instance.submitTransaction(accounts[17],465,web3.utils.toHex("OE6niy4zZD"));
result = await instance.submitTransaction(accounts[10],458,web3.utils.toHex("Qvt6y23BEn"));
result = await instance.submitTransaction(accounts[3],280,web3.utils.toHex("t8uJPsl6nj"));
result = await instance.submitTransaction(accounts[10],419,web3.utils.toHex("yFPJf4EB5q"));
result = await instance.submitTransaction(accounts[15],340,web3.utils.toHex("DWZCGFE8tw"));
await instance.executeTransaction(10);
});
});