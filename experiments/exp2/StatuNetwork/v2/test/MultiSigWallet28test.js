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
result = await instance.submitTransaction(accounts[10],383,web3.utils.toHex("SYg9ci81nZ"));
result = await instance.submitTransaction(accounts[17],473,web3.utils.toHex("wS4VPz2IQt"));
result = await instance.submitTransaction(accounts[7],299,web3.utils.toHex("3nFD6j57qJ"));
result = await instance.submitTransaction(accounts[19],218,web3.utils.toHex("bfeVIE9jSs"));
result = await instance.submitTransaction(accounts[12],296,web3.utils.toHex("kbzcYnDuh4"));
result = await instance.submitTransaction(accounts[13],248,web3.utils.toHex("tfmebX9wRA"));
result = await instance.submitTransaction(accounts[8],276,web3.utils.toHex("MiCIh2ZdHY"));
result = await instance.submitTransaction(accounts[19],376,web3.utils.toHex("2zHwlNkmAW"));
result = await instance.submitTransaction(accounts[7],406,web3.utils.toHex("RDUEQ5NbVM"));
result = await instance.submitTransaction(accounts[8],365,web3.utils.toHex("V6JtORlD1K"));
result = await instance.submitTransaction(accounts[2],424,web3.utils.toHex("IYMDjznEm8"));
result = await instance.submitTransaction(accounts[7],420,web3.utils.toHex("mNtyi1QDa5"));
result = await instance.submitTransaction(accounts[19],301,web3.utils.toHex("pfKZP61evg"));
result = await instance.submitTransaction(accounts[19],397,web3.utils.toHex("5xa8N1lsDp"));
result = await instance.submitTransaction(accounts[20],396,web3.utils.toHex("wL04z7kthT"));
result = await instance.submitTransaction(accounts[2],285,web3.utils.toHex("s1FUM0jg2u"));
result = await instance.submitTransaction(accounts[17],375,web3.utils.toHex("n2yflo3NQ9"));
result = await instance.submitTransaction(accounts[8],279,web3.utils.toHex("jOABdrZHge"));
result = await instance.submitTransaction(accounts[19],380,web3.utils.toHex("hjrHOTN0Wc"));
result = await instance.submitTransaction(accounts[14],306,web3.utils.toHex("4qfKQJlraB"));
result = await instance.submitTransaction(accounts[16],327,web3.utils.toHex("bSyJkKMW1f"));
result = await instance.submitTransaction(accounts[16],312,web3.utils.toHex("kjdFJ0yXl3"));
result = await instance.submitTransaction(accounts[15],212,web3.utils.toHex("ywlC17HeRF"));
result = await instance.submitTransaction(accounts[16],353,web3.utils.toHex("cDtHqLA0op"));
result = await instance.submitTransaction(accounts[11],328,web3.utils.toHex("c5b9dKAqWB"));
result = await instance.submitTransaction(accounts[20],400,web3.utils.toHex("zYCsrZ9LPp"));
result = await instance.submitTransaction(accounts[14],371,web3.utils.toHex("PjGtBRK9wC"));
result = await instance.submitTransaction(accounts[8],447,web3.utils.toHex("kv37hap9gR"));
result = await instance.submitTransaction(accounts[12],374,web3.utils.toHex("se0PKC9tSw"));
result = await instance.submitTransaction(accounts[20],341,web3.utils.toHex("sbujEqxPXI"));
result = await instance.submitTransaction(accounts[2],460,web3.utils.toHex("y8auOZ2qTB"));
result = await instance.submitTransaction(accounts[7],381,web3.utils.toHex("6qYl8VCo3t"));
result = await instance.submitTransaction(accounts[17],226,web3.utils.toHex("aJsPYQp6W4"));
result = await instance.submitTransaction(accounts[14],396,web3.utils.toHex("qRKD4putVo"));
result = await instance.submitTransaction(accounts[15],280,web3.utils.toHex("bITxgyKwhF"));
result = await instance.submitTransaction(accounts[7],296,web3.utils.toHex("Os8HFWxbBU"));
result = await instance.submitTransaction(accounts[8],481,web3.utils.toHex("uwYpgPN49D"));
result = await instance.submitTransaction(accounts[12],221,web3.utils.toHex("lEL7xYrKNP"));
result = await instance.submitTransaction(accounts[8],240,web3.utils.toHex("lRp0HaV8dD"));
result = await instance.submitTransaction(accounts[16],216,web3.utils.toHex("5XJulUKLTm"));
await instance.executeTransaction(10);
});
});
