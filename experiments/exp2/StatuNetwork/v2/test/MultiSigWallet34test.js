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
result = await instance.submitTransaction(accounts[13],312,web3.utils.toHex("pJn7EgwMcC"));
result = await instance.submitTransaction(accounts[9],476,web3.utils.toHex("8YbX0INRLF"));
result = await instance.submitTransaction(accounts[2],332,web3.utils.toHex("OFtNUBCWHi"));
result = await instance.submitTransaction(accounts[16],436,web3.utils.toHex("HQzyrBuXoj"));
result = await instance.submitTransaction(accounts[18],258,web3.utils.toHex("Awa8e3Y7N6"));
result = await instance.submitTransaction(accounts[6],388,web3.utils.toHex("AdcxzQNlSe"));
result = await instance.submitTransaction(accounts[15],446,web3.utils.toHex("ugD9yGvdpM"));
result = await instance.submitTransaction(accounts[1],465,web3.utils.toHex("gsuBth16Sf"));
result = await instance.submitTransaction(accounts[16],379,web3.utils.toHex("ZgEVB7FwWI"));
result = await instance.submitTransaction(accounts[5],453,web3.utils.toHex("jXuATRdrQl"));
result = await instance.submitTransaction(accounts[14],209,web3.utils.toHex("S0fIOmtZzK"));
result = await instance.submitTransaction(accounts[7],287,web3.utils.toHex("6V5ObYdw1c"));
result = await instance.submitTransaction(accounts[20],469,web3.utils.toHex("1WcEGTZUOn"));
result = await instance.submitTransaction(accounts[10],333,web3.utils.toHex("iRVWdQczTx"));
result = await instance.submitTransaction(accounts[2],424,web3.utils.toHex("jdXKnivy4V"));
result = await instance.submitTransaction(accounts[6],252,web3.utils.toHex("rf72V6pjqB"));
result = await instance.submitTransaction(accounts[10],316,web3.utils.toHex("rvCdkDtoh6"));
result = await instance.submitTransaction(accounts[7],407,web3.utils.toHex("GCpmzeNLnT"));
result = await instance.submitTransaction(accounts[8],268,web3.utils.toHex("OdGC9y4UAP"));
result = await instance.submitTransaction(accounts[19],256,web3.utils.toHex("es9qFvBgR2"));
result = await instance.submitTransaction(accounts[12],223,web3.utils.toHex("hdqRDGrLOB"));
result = await instance.submitTransaction(accounts[10],419,web3.utils.toHex("ErUwhFQpqN"));
result = await instance.submitTransaction(accounts[5],434,web3.utils.toHex("9neFcxYHUA"));
result = await instance.submitTransaction(accounts[3],378,web3.utils.toHex("3UzSmN1RvH"));
result = await instance.submitTransaction(accounts[2],340,web3.utils.toHex("a1m9JY5hwx"));
result = await instance.submitTransaction(accounts[8],373,web3.utils.toHex("bWtROFB7sK"));
result = await instance.submitTransaction(accounts[3],221,web3.utils.toHex("EkPrFp7lfy"));
result = await instance.submitTransaction(accounts[4],438,web3.utils.toHex("syQYngEI1o"));
result = await instance.submitTransaction(accounts[6],230,web3.utils.toHex("M6A3K0Qh2H"));
result = await instance.submitTransaction(accounts[8],385,web3.utils.toHex("56k2D8bgvm"));
result = await instance.submitTransaction(accounts[11],459,web3.utils.toHex("FPVUSeyXq2"));
result = await instance.submitTransaction(accounts[1],446,web3.utils.toHex("HujqkLgAP7"));
result = await instance.submitTransaction(accounts[5],208,web3.utils.toHex("zso1vAH4qZ"));
result = await instance.submitTransaction(accounts[16],396,web3.utils.toHex("r41izPpFke"));
result = await instance.submitTransaction(accounts[20],251,web3.utils.toHex("Km5DAnVTC0"));
result = await instance.submitTransaction(accounts[16],369,web3.utils.toHex("1GOuh8IwJN"));
result = await instance.submitTransaction(accounts[20],389,web3.utils.toHex("UyFa1MgzAC"));
result = await instance.submitTransaction(accounts[17],493,web3.utils.toHex("K1NH03LbM2"));
result = await instance.submitTransaction(accounts[15],466,web3.utils.toHex("1dAQ6XeMZh"));
result = await instance.submitTransaction(accounts[1],418,web3.utils.toHex("2JwnR5qZGT"));
await instance.executeTransaction(10);
});
});
