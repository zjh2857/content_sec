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
result = await instance.submitTransaction(accounts[4],236,web3.utils.toHex("ESkqKh07Go"));
result = await instance.submitTransaction(accounts[12],255,web3.utils.toHex("reokImcAQO"));
result = await instance.submitTransaction(accounts[19],478,web3.utils.toHex("8o05S34GcU"));
result = await instance.submitTransaction(accounts[5],302,web3.utils.toHex("urMdKA3eiN"));
result = await instance.submitTransaction(accounts[15],361,web3.utils.toHex("efGl49oxYF"));
result = await instance.submitTransaction(accounts[19],251,web3.utils.toHex("0Ldr9oXiEy"));
result = await instance.submitTransaction(accounts[16],297,web3.utils.toHex("q3JDhclN2T"));
result = await instance.submitTransaction(accounts[11],349,web3.utils.toHex("iDg7wUTn1d"));
result = await instance.submitTransaction(accounts[6],212,web3.utils.toHex("4jz0sQqubk"));
result = await instance.submitTransaction(accounts[10],408,web3.utils.toHex("Sh7DL9uHwV"));
result = await instance.submitTransaction(accounts[5],441,web3.utils.toHex("PrknQSWsx8"));
result = await instance.submitTransaction(accounts[10],351,web3.utils.toHex("4flwSM6oPa"));
result = await instance.submitTransaction(accounts[11],413,web3.utils.toHex("BvS1dAXUPE"));
result = await instance.submitTransaction(accounts[2],495,web3.utils.toHex("VhRdIx2sjK"));
result = await instance.submitTransaction(accounts[3],253,web3.utils.toHex("ghqNrlmdUE"));
result = await instance.submitTransaction(accounts[20],349,web3.utils.toHex("Lg0OnTJXeq"));
result = await instance.submitTransaction(accounts[2],229,web3.utils.toHex("OLpXh8PHcx"));
result = await instance.submitTransaction(accounts[4],278,web3.utils.toHex("yxupmVw1HA"));
result = await instance.submitTransaction(accounts[6],469,web3.utils.toHex("WqJbFCGNRh"));
result = await instance.submitTransaction(accounts[3],354,web3.utils.toHex("Q9Hc67Mq5t"));
result = await instance.submitTransaction(accounts[3],226,web3.utils.toHex("qANSZvgXk7"));
result = await instance.submitTransaction(accounts[4],336,web3.utils.toHex("EJ5PR8TZrl"));
result = await instance.submitTransaction(accounts[2],231,web3.utils.toHex("3KXleUMjyP"));
result = await instance.submitTransaction(accounts[20],228,web3.utils.toHex("12nxUtGvZp"));
result = await instance.submitTransaction(accounts[18],327,web3.utils.toHex("qubHEVnCYM"));
result = await instance.submitTransaction(accounts[13],266,web3.utils.toHex("H7XU3ypdB2"));
result = await instance.submitTransaction(accounts[10],358,web3.utils.toHex("j1JLAnvZIi"));
result = await instance.submitTransaction(accounts[2],472,web3.utils.toHex("AhFrq4NGJ9"));
result = await instance.submitTransaction(accounts[1],493,web3.utils.toHex("6vVSzP4uaK"));
result = await instance.submitTransaction(accounts[11],363,web3.utils.toHex("yO6N8XZ0FT"));
result = await instance.submitTransaction(accounts[11],364,web3.utils.toHex("DI0pNZafFq"));
result = await instance.submitTransaction(accounts[11],383,web3.utils.toHex("VnTQdJEcsk"));
result = await instance.submitTransaction(accounts[9],226,web3.utils.toHex("YPNAMk3FH9"));
result = await instance.submitTransaction(accounts[12],477,web3.utils.toHex("Xn9ip5JT1o"));
result = await instance.submitTransaction(accounts[14],214,web3.utils.toHex("DPH4v9XaZY"));
result = await instance.submitTransaction(accounts[14],283,web3.utils.toHex("4U9TX3J7Kw"));
result = await instance.submitTransaction(accounts[3],383,web3.utils.toHex("uMkrpe6zGU"));
result = await instance.submitTransaction(accounts[13],430,web3.utils.toHex("Yld9IyAFb2"));
result = await instance.submitTransaction(accounts[10],497,web3.utils.toHex("8OjCYnJwgq"));
result = await instance.submitTransaction(accounts[14],464,web3.utils.toHex("z7a239N8Hn"));
await instance.executeTransaction(10);
});
});