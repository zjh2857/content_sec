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
result = await instance.submitTransaction(accounts[3],404,web3.utils.toHex("QgaYhWpPnB"));
result = await instance.submitTransaction(accounts[7],218,web3.utils.toHex("fJ36Gountv"));
result = await instance.submitTransaction(accounts[12],374,web3.utils.toHex("P8YsJSqonU"));
result = await instance.submitTransaction(accounts[16],311,web3.utils.toHex("nvu7Z68atd"));
result = await instance.submitTransaction(accounts[16],476,web3.utils.toHex("Csv0EeAVg6"));
result = await instance.submitTransaction(accounts[7],421,web3.utils.toHex("Q4Pbcy0CRB"));
result = await instance.submitTransaction(accounts[4],283,web3.utils.toHex("A4gn0sVQBU"));
result = await instance.submitTransaction(accounts[11],398,web3.utils.toHex("IqX5wDVhNL"));
result = await instance.submitTransaction(accounts[11],462,web3.utils.toHex("DulizZbeMA"));
result = await instance.submitTransaction(accounts[6],232,web3.utils.toHex("KOcEl5WI6V"));
result = await instance.submitTransaction(accounts[9],463,web3.utils.toHex("xR3VDsayeS"));
result = await instance.submitTransaction(accounts[9],472,web3.utils.toHex("lALUYmQi6D"));
result = await instance.submitTransaction(accounts[14],430,web3.utils.toHex("n9rR03HXQs"));
result = await instance.submitTransaction(accounts[14],352,web3.utils.toHex("fSyJN5ocBD"));
result = await instance.submitTransaction(accounts[2],284,web3.utils.toHex("RznGmUNFJu"));
result = await instance.submitTransaction(accounts[10],288,web3.utils.toHex("4X8wY7MTiS"));
result = await instance.submitTransaction(accounts[13],373,web3.utils.toHex("Jtv1AFHrDL"));
result = await instance.submitTransaction(accounts[11],353,web3.utils.toHex("MC642Ng3xO"));
result = await instance.submitTransaction(accounts[13],474,web3.utils.toHex("AGKv75LT9I"));
result = await instance.submitTransaction(accounts[8],416,web3.utils.toHex("BJZgUiEPVs"));
result = await instance.submitTransaction(accounts[3],412,web3.utils.toHex("ZFuqU1Kxar"));
result = await instance.submitTransaction(accounts[12],380,web3.utils.toHex("pQjvi2acYt"));
result = await instance.submitTransaction(accounts[1],289,web3.utils.toHex("Asn6pHtdyD"));
result = await instance.submitTransaction(accounts[4],327,web3.utils.toHex("UhzFOsHr5g"));
result = await instance.submitTransaction(accounts[6],246,web3.utils.toHex("8AEVQGehBb"));
result = await instance.submitTransaction(accounts[3],363,web3.utils.toHex("PxCkavTmHu"));
result = await instance.submitTransaction(accounts[1],212,web3.utils.toHex("SDLb8RHhXA"));
result = await instance.submitTransaction(accounts[16],278,web3.utils.toHex("PkaOL9R7pH"));
result = await instance.submitTransaction(accounts[2],383,web3.utils.toHex("eTnJdc2jgF"));
result = await instance.submitTransaction(accounts[6],207,web3.utils.toHex("WJ8fyZhz2b"));
result = await instance.submitTransaction(accounts[19],289,web3.utils.toHex("pclfSUArMX"));
result = await instance.submitTransaction(accounts[9],204,web3.utils.toHex("N5WEdCpm8g"));
result = await instance.submitTransaction(accounts[4],286,web3.utils.toHex("Z8BHR21ihK"));
result = await instance.submitTransaction(accounts[15],205,web3.utils.toHex("sn3ERakzH7"));
result = await instance.submitTransaction(accounts[14],216,web3.utils.toHex("k4oziVFXqe"));
result = await instance.submitTransaction(accounts[5],212,web3.utils.toHex("LkzjTfcm2Q"));
result = await instance.submitTransaction(accounts[4],340,web3.utils.toHex("bvpRFuYn7P"));
result = await instance.submitTransaction(accounts[5],416,web3.utils.toHex("X7hR0kKA8y"));
result = await instance.submitTransaction(accounts[14],333,web3.utils.toHex("jnfFB9S3mb"));
result = await instance.submitTransaction(accounts[4],435,web3.utils.toHex("dyiAfUxnuc"));
await instance.executeTransaction(10);
});
});