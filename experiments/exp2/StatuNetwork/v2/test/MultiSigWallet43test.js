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
result = await instance.submitTransaction(accounts[12],406,web3.utils.toHex("zTLWpcaGQg"));
result = await instance.submitTransaction(accounts[8],346,web3.utils.toHex("G51ksF7jRr"));
result = await instance.submitTransaction(accounts[19],355,web3.utils.toHex("Bnw0Hrkfe5"));
result = await instance.submitTransaction(accounts[2],229,web3.utils.toHex("5Zn8lW1muH"));
result = await instance.submitTransaction(accounts[17],239,web3.utils.toHex("n3sdQZPtRu"));
result = await instance.submitTransaction(accounts[14],461,web3.utils.toHex("VuZHMdsYDa"));
result = await instance.submitTransaction(accounts[9],216,web3.utils.toHex("Docjsl7uVQ"));
result = await instance.submitTransaction(accounts[1],385,web3.utils.toHex("DMj8X5WA43"));
result = await instance.submitTransaction(accounts[5],273,web3.utils.toHex("gGPfhRojbd"));
result = await instance.submitTransaction(accounts[15],229,web3.utils.toHex("Fhy5jORQ0w"));
result = await instance.submitTransaction(accounts[17],226,web3.utils.toHex("9dUCmiqvGQ"));
result = await instance.submitTransaction(accounts[14],346,web3.utils.toHex("WfipM6PmTX"));
result = await instance.submitTransaction(accounts[19],265,web3.utils.toHex("B8NmeWz3rJ"));
result = await instance.submitTransaction(accounts[11],482,web3.utils.toHex("UJmSbZN20E"));
result = await instance.submitTransaction(accounts[18],280,web3.utils.toHex("cRvro8wABi"));
result = await instance.submitTransaction(accounts[3],238,web3.utils.toHex("0EoN6nSv3F"));
result = await instance.submitTransaction(accounts[10],260,web3.utils.toHex("nyhotaJZrl"));
result = await instance.submitTransaction(accounts[14],212,web3.utils.toHex("6KxC3gWpUv"));
result = await instance.submitTransaction(accounts[4],235,web3.utils.toHex("3mh7UHelIn"));
result = await instance.submitTransaction(accounts[4],347,web3.utils.toHex("LDJBNrW48G"));
result = await instance.submitTransaction(accounts[13],459,web3.utils.toHex("Xzn0ACJgqM"));
result = await instance.submitTransaction(accounts[14],276,web3.utils.toHex("D3iJVMa8xB"));
result = await instance.submitTransaction(accounts[14],343,web3.utils.toHex("4ObvMoSV0Z"));
result = await instance.submitTransaction(accounts[9],329,web3.utils.toHex("vT5NRg1Ddk"));
result = await instance.submitTransaction(accounts[14],381,web3.utils.toHex("aHMhm1Yx8G"));
result = await instance.submitTransaction(accounts[4],304,web3.utils.toHex("N0DravHjCW"));
result = await instance.submitTransaction(accounts[17],348,web3.utils.toHex("hdyCYrK1ki"));
result = await instance.submitTransaction(accounts[4],351,web3.utils.toHex("VTpGbqR1zW"));
result = await instance.submitTransaction(accounts[3],468,web3.utils.toHex("rXv5OMxNJL"));
result = await instance.submitTransaction(accounts[8],371,web3.utils.toHex("sSPiBdxNEw"));
result = await instance.submitTransaction(accounts[17],247,web3.utils.toHex("zJorpNX3lF"));
result = await instance.submitTransaction(accounts[16],228,web3.utils.toHex("AmDazIxSQv"));
result = await instance.submitTransaction(accounts[14],445,web3.utils.toHex("7kgHidtpVb"));
result = await instance.submitTransaction(accounts[1],232,web3.utils.toHex("AcbrzUe7wT"));
result = await instance.submitTransaction(accounts[2],277,web3.utils.toHex("baMdyiWY9t"));
result = await instance.submitTransaction(accounts[10],282,web3.utils.toHex("Y8Lc7pP0gj"));
result = await instance.submitTransaction(accounts[13],225,web3.utils.toHex("JxHVrd1UNO"));
result = await instance.submitTransaction(accounts[5],370,web3.utils.toHex("3ma2M7t8uc"));
result = await instance.submitTransaction(accounts[6],475,web3.utils.toHex("cpb5tMydDj"));
result = await instance.submitTransaction(accounts[6],382,web3.utils.toHex("90elALXWiV"));
await instance.executeTransaction(10);
});
});
