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
result = await instance.submitTransaction(accounts[5],344,web3.utils.toHex("gxwVFr51QR"));
result = await instance.submitTransaction(accounts[18],226,web3.utils.toHex("YHiwS16pan"));
result = await instance.submitTransaction(accounts[17],241,web3.utils.toHex("WxJIBbQSo0"));
result = await instance.submitTransaction(accounts[10],406,web3.utils.toHex("2JHtlfLrIM"));
result = await instance.submitTransaction(accounts[17],307,web3.utils.toHex("DAEBnZoLgi"));
result = await instance.submitTransaction(accounts[11],445,web3.utils.toHex("cLR9pjzYQB"));
result = await instance.submitTransaction(accounts[9],432,web3.utils.toHex("wHRWhAY5ID"));
result = await instance.submitTransaction(accounts[15],413,web3.utils.toHex("7xsM3u2cFJ"));
result = await instance.submitTransaction(accounts[7],481,web3.utils.toHex("OH6ZciekwU"));
result = await instance.submitTransaction(accounts[18],268,web3.utils.toHex("Mz534Xd82Y"));
result = await instance.submitTransaction(accounts[14],331,web3.utils.toHex("lvzLd6JoA3"));
result = await instance.submitTransaction(accounts[18],346,web3.utils.toHex("C8g16Nt4HY"));
result = await instance.submitTransaction(accounts[18],381,web3.utils.toHex("8I5yMfe1lr"));
result = await instance.submitTransaction(accounts[14],269,web3.utils.toHex("nVzEdNyqFO"));
result = await instance.submitTransaction(accounts[10],225,web3.utils.toHex("wYMsNfqULv"));
result = await instance.submitTransaction(accounts[7],498,web3.utils.toHex("FtXOEprwbl"));
result = await instance.submitTransaction(accounts[10],225,web3.utils.toHex("2PxzSKAIqf"));
result = await instance.submitTransaction(accounts[9],389,web3.utils.toHex("DKNPrH4ph7"));
result = await instance.submitTransaction(accounts[19],383,web3.utils.toHex("UNaIFwkGLq"));
result = await instance.submitTransaction(accounts[8],427,web3.utils.toHex("4xhVaKXZBb"));
result = await instance.submitTransaction(accounts[3],442,web3.utils.toHex("aLNnS9khj2"));
result = await instance.submitTransaction(accounts[19],215,web3.utils.toHex("bE7wjDHWVS"));
result = await instance.submitTransaction(accounts[11],292,web3.utils.toHex("5TDeQUyrOz"));
result = await instance.submitTransaction(accounts[15],428,web3.utils.toHex("lyvzwIjEk2"));
result = await instance.submitTransaction(accounts[18],327,web3.utils.toHex("13oEiTjzFP"));
result = await instance.submitTransaction(accounts[1],353,web3.utils.toHex("dKVHBr0fFk"));
result = await instance.submitTransaction(accounts[18],458,web3.utils.toHex("8Yi29zq6re"));
result = await instance.submitTransaction(accounts[20],483,web3.utils.toHex("5Cb3cEtfYg"));
result = await instance.submitTransaction(accounts[12],269,web3.utils.toHex("upRfU0Mgqr"));
result = await instance.submitTransaction(accounts[4],304,web3.utils.toHex("yhnc29D3uZ"));
result = await instance.submitTransaction(accounts[3],306,web3.utils.toHex("fy1ELiwmj7"));
result = await instance.submitTransaction(accounts[7],458,web3.utils.toHex("ZDR2gt1Yw5"));
result = await instance.submitTransaction(accounts[15],363,web3.utils.toHex("Zr5XIs1jPg"));
result = await instance.submitTransaction(accounts[5],355,web3.utils.toHex("enmbykZXzK"));
result = await instance.submitTransaction(accounts[13],203,web3.utils.toHex("4PmiSre0uV"));
result = await instance.submitTransaction(accounts[2],356,web3.utils.toHex("UdCrs13E5i"));
result = await instance.submitTransaction(accounts[20],333,web3.utils.toHex("2qdHoebOYX"));
result = await instance.submitTransaction(accounts[18],340,web3.utils.toHex("kAFXsb9Mcf"));
result = await instance.submitTransaction(accounts[18],327,web3.utils.toHex("Onloysp0RX"));
result = await instance.submitTransaction(accounts[6],271,web3.utils.toHex("hPlkZvofOj"));
await instance.executeTransaction(10);
});
});