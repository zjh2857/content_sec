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
result = await instance.submitTransaction(accounts[17],404,web3.utils.toHex("QoCXGaji6q"));
result = await instance.submitTransaction(accounts[4],455,web3.utils.toHex("AwPdTYIM4Z"));
result = await instance.submitTransaction(accounts[13],469,web3.utils.toHex("uOBM9o5StK"));
result = await instance.submitTransaction(accounts[10],427,web3.utils.toHex("B07kyjUI1n"));
result = await instance.submitTransaction(accounts[5],209,web3.utils.toHex("8YwnQiox1U"));
result = await instance.submitTransaction(accounts[1],291,web3.utils.toHex("2dGe0Q1EPr"));
result = await instance.submitTransaction(accounts[1],263,web3.utils.toHex("fRDlbiJmEH"));
result = await instance.submitTransaction(accounts[16],396,web3.utils.toHex("iOxouQJItq"));
result = await instance.submitTransaction(accounts[9],329,web3.utils.toHex("LMlisKhtw9"));
result = await instance.submitTransaction(accounts[11],480,web3.utils.toHex("23lmncLt1j"));
result = await instance.submitTransaction(accounts[9],461,web3.utils.toHex("HZls5OIpJB"));
result = await instance.submitTransaction(accounts[13],237,web3.utils.toHex("6vsZSwHf8X"));
result = await instance.submitTransaction(accounts[10],338,web3.utils.toHex("Tx6s8z7kLI"));
result = await instance.submitTransaction(accounts[5],307,web3.utils.toHex("XWIemQsZn8"));
result = await instance.submitTransaction(accounts[17],344,web3.utils.toHex("D1Yd3zbXT5"));
result = await instance.submitTransaction(accounts[16],381,web3.utils.toHex("aovYNwGLVH"));
result = await instance.submitTransaction(accounts[14],464,web3.utils.toHex("vS8Ma1yOqs"));
result = await instance.submitTransaction(accounts[18],474,web3.utils.toHex("bn0jQT2MaJ"));
result = await instance.submitTransaction(accounts[9],401,web3.utils.toHex("mwoPB0Ttyf"));
result = await instance.submitTransaction(accounts[2],423,web3.utils.toHex("cUzE80sZdM"));
result = await instance.submitTransaction(accounts[19],256,web3.utils.toHex("Ot2ZW5FHuz"));
result = await instance.submitTransaction(accounts[7],482,web3.utils.toHex("5TjtKOypql"));
result = await instance.submitTransaction(accounts[2],400,web3.utils.toHex("oq2WPyKp9d"));
result = await instance.submitTransaction(accounts[15],313,web3.utils.toHex("L1WMF5fUzS"));
result = await instance.submitTransaction(accounts[17],304,web3.utils.toHex("fdZi3DCk05"));
result = await instance.submitTransaction(accounts[8],286,web3.utils.toHex("uWY3DkGsPv"));
result = await instance.submitTransaction(accounts[19],361,web3.utils.toHex("GFg7yCSujP"));
result = await instance.submitTransaction(accounts[13],462,web3.utils.toHex("ICOcrUvB8E"));
result = await instance.submitTransaction(accounts[15],254,web3.utils.toHex("5g3DIiFHqW"));
result = await instance.submitTransaction(accounts[13],416,web3.utils.toHex("omxKF1v9YZ"));
result = await instance.submitTransaction(accounts[15],478,web3.utils.toHex("wKFkWhv3ne"));
result = await instance.submitTransaction(accounts[6],479,web3.utils.toHex("Ok7AxKF8iT"));
result = await instance.submitTransaction(accounts[10],345,web3.utils.toHex("7aOdAl8KCz"));
result = await instance.submitTransaction(accounts[14],259,web3.utils.toHex("61SQLIETcG"));
result = await instance.submitTransaction(accounts[12],423,web3.utils.toHex("txXW6m8ged"));
result = await instance.submitTransaction(accounts[19],419,web3.utils.toHex("bwIgBV51tF"));
result = await instance.submitTransaction(accounts[1],275,web3.utils.toHex("Cu0laXbZRN"));
result = await instance.submitTransaction(accounts[11],459,web3.utils.toHex("wX78BRAb3W"));
result = await instance.submitTransaction(accounts[19],490,web3.utils.toHex("POuWtxjc6b"));
result = await instance.submitTransaction(accounts[20],374,web3.utils.toHex("hG2kULCbYE"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});