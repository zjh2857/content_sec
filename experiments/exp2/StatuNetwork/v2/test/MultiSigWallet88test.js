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
result = await instance.submitTransaction(accounts[14],477,web3.utils.toHex("UI0uQf2joZ"));
result = await instance.submitTransaction(accounts[8],211,web3.utils.toHex("uClR0bxZ7q"));
result = await instance.submitTransaction(accounts[8],321,web3.utils.toHex("Qb4hDFL5Kp"));
result = await instance.submitTransaction(accounts[3],204,web3.utils.toHex("eaXkclMWyn"));
result = await instance.submitTransaction(accounts[18],253,web3.utils.toHex("zLQI8JiUy9"));
result = await instance.submitTransaction(accounts[13],222,web3.utils.toHex("WK1eRJoFkG"));
result = await instance.submitTransaction(accounts[14],273,web3.utils.toHex("WA1O6Tz9d5"));
result = await instance.submitTransaction(accounts[12],448,web3.utils.toHex("iV8bjLFJyW"));
result = await instance.submitTransaction(accounts[3],391,web3.utils.toHex("POVdqFS21L"));
result = await instance.submitTransaction(accounts[20],441,web3.utils.toHex("rChcRtaPAd"));
result = await instance.submitTransaction(accounts[13],284,web3.utils.toHex("r84ciDEHsM"));
result = await instance.submitTransaction(accounts[12],454,web3.utils.toHex("hSVe8EBbFO"));
result = await instance.submitTransaction(accounts[5],258,web3.utils.toHex("KCIG7fU2v6"));
result = await instance.submitTransaction(accounts[14],233,web3.utils.toHex("XCA3pomZuw"));
result = await instance.submitTransaction(accounts[6],382,web3.utils.toHex("jayEuFZ0Wt"));
result = await instance.submitTransaction(accounts[9],357,web3.utils.toHex("wyfDVAeLg2"));
result = await instance.submitTransaction(accounts[12],282,web3.utils.toHex("bn48djxGhQ"));
result = await instance.submitTransaction(accounts[17],219,web3.utils.toHex("vbuItxAdYS"));
result = await instance.submitTransaction(accounts[2],492,web3.utils.toHex("HL0iU5fEaW"));
result = await instance.submitTransaction(accounts[5],252,web3.utils.toHex("A1NH3VCq4I"));
result = await instance.submitTransaction(accounts[12],362,web3.utils.toHex("vlumrDXqUn"));
result = await instance.submitTransaction(accounts[16],339,web3.utils.toHex("cbSj7VFWsC"));
result = await instance.submitTransaction(accounts[9],354,web3.utils.toHex("YUbCQl20Ma"));
result = await instance.submitTransaction(accounts[5],248,web3.utils.toHex("pFeSowRhPf"));
result = await instance.submitTransaction(accounts[12],290,web3.utils.toHex("UwQqG6t3eX"));
result = await instance.submitTransaction(accounts[17],299,web3.utils.toHex("LstvD7Nk1F"));
result = await instance.submitTransaction(accounts[3],346,web3.utils.toHex("xJMXFUAgE1"));
result = await instance.submitTransaction(accounts[8],303,web3.utils.toHex("zue0qkCBin"));
result = await instance.submitTransaction(accounts[3],317,web3.utils.toHex("rI63gNM9Z4"));
result = await instance.submitTransaction(accounts[6],494,web3.utils.toHex("n5LMavxmFN"));
result = await instance.submitTransaction(accounts[17],206,web3.utils.toHex("ZyCQE5oNW7"));
result = await instance.submitTransaction(accounts[9],222,web3.utils.toHex("qpZyg1rdjF"));
result = await instance.submitTransaction(accounts[4],310,web3.utils.toHex("RmOk2qIQF0"));
result = await instance.submitTransaction(accounts[18],211,web3.utils.toHex("FJXfT05Vg4"));
result = await instance.submitTransaction(accounts[11],471,web3.utils.toHex("qJz9hlTO27"));
result = await instance.submitTransaction(accounts[15],346,web3.utils.toHex("SNFQOV3j0E"));
result = await instance.submitTransaction(accounts[10],351,web3.utils.toHex("F541nVJZTM"));
result = await instance.submitTransaction(accounts[2],411,web3.utils.toHex("Yv7ZDxXFct"));
result = await instance.submitTransaction(accounts[12],237,web3.utils.toHex("ieHnpqrDMh"));
result = await instance.submitTransaction(accounts[19],347,web3.utils.toHex("DbYXMR5KIr"));
await instance.executeTransaction(10);
});
});