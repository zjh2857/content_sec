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
result = await instance.submitTransaction(accounts[2],421,web3.utils.toHex("GQIE36tCqs"));
result = await instance.submitTransaction(accounts[16],285,web3.utils.toHex("utQZOpSDX9"));
result = await instance.submitTransaction(accounts[18],234,web3.utils.toHex("9io1L83khe"));
result = await instance.submitTransaction(accounts[17],344,web3.utils.toHex("NEv10Lu9Qg"));
result = await instance.submitTransaction(accounts[6],402,web3.utils.toHex("9FVGtmJgKA"));
result = await instance.submitTransaction(accounts[11],443,web3.utils.toHex("PAELBD6i1l"));
result = await instance.submitTransaction(accounts[14],245,web3.utils.toHex("xSU2WmnyZ5"));
result = await instance.submitTransaction(accounts[11],330,web3.utils.toHex("FcRC63l8MH"));
result = await instance.submitTransaction(accounts[11],486,web3.utils.toHex("JLolxZWFNh"));
result = await instance.submitTransaction(accounts[16],490,web3.utils.toHex("7gRntoOBNE"));
result = await instance.submitTransaction(accounts[5],285,web3.utils.toHex("Wv7S5Pqtkl"));
result = await instance.submitTransaction(accounts[11],426,web3.utils.toHex("KnbuOlL8jY"));
result = await instance.submitTransaction(accounts[12],245,web3.utils.toHex("CRMK6b2le5"));
result = await instance.submitTransaction(accounts[3],223,web3.utils.toHex("9EvJgzwUi6"));
result = await instance.submitTransaction(accounts[17],311,web3.utils.toHex("nvB65ugKSL"));
result = await instance.submitTransaction(accounts[10],215,web3.utils.toHex("G1g0YpmRVQ"));
result = await instance.submitTransaction(accounts[7],330,web3.utils.toHex("JT1xW7mzMq"));
result = await instance.submitTransaction(accounts[5],330,web3.utils.toHex("t4JedjADkW"));
result = await instance.submitTransaction(accounts[8],456,web3.utils.toHex("60KFeU2mzY"));
result = await instance.submitTransaction(accounts[15],303,web3.utils.toHex("G6aenQ04UP"));
result = await instance.submitTransaction(accounts[1],462,web3.utils.toHex("y54Bsh1P6S"));
result = await instance.submitTransaction(accounts[20],364,web3.utils.toHex("Wn8IorQVkN"));
result = await instance.submitTransaction(accounts[8],473,web3.utils.toHex("ZkQSLJVYqi"));
result = await instance.submitTransaction(accounts[3],313,web3.utils.toHex("zVDEX2PSUm"));
result = await instance.submitTransaction(accounts[1],426,web3.utils.toHex("s6wiNMFgE4"));
result = await instance.submitTransaction(accounts[8],229,web3.utils.toHex("fgkPb6EWQJ"));
result = await instance.submitTransaction(accounts[19],472,web3.utils.toHex("5FGLqkrPMJ"));
result = await instance.submitTransaction(accounts[19],394,web3.utils.toHex("RtKiTguGd7"));
result = await instance.submitTransaction(accounts[13],269,web3.utils.toHex("tFnZW8Uk7l"));
result = await instance.submitTransaction(accounts[1],448,web3.utils.toHex("8ogqPKapzB"));
result = await instance.submitTransaction(accounts[16],368,web3.utils.toHex("kKPYRtuTcA"));
result = await instance.submitTransaction(accounts[4],290,web3.utils.toHex("ewsK9U5LfP"));
result = await instance.submitTransaction(accounts[6],342,web3.utils.toHex("NOMoz1Hief"));
result = await instance.submitTransaction(accounts[19],323,web3.utils.toHex("fJ4cWgatKF"));
result = await instance.submitTransaction(accounts[18],365,web3.utils.toHex("vwOidl5m9Q"));
result = await instance.submitTransaction(accounts[3],485,web3.utils.toHex("7tbd3FXxeR"));
result = await instance.submitTransaction(accounts[10],235,web3.utils.toHex("NevRQcFk9a"));
result = await instance.submitTransaction(accounts[20],363,web3.utils.toHex("6ryRsim2zY"));
result = await instance.submitTransaction(accounts[13],269,web3.utils.toHex("EXot3TYw0A"));
result = await instance.submitTransaction(accounts[18],230,web3.utils.toHex("J1gnHeF5wI"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
