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
result = await instance.submitTransaction(accounts[16],298,web3.utils.toHex("G76cVzZ2h0"));
result = await instance.submitTransaction(accounts[1],307,web3.utils.toHex("cM3iTBJALl"));
result = await instance.submitTransaction(accounts[11],312,web3.utils.toHex("KrAapQj4yR"));
result = await instance.submitTransaction(accounts[15],373,web3.utils.toHex("UA1ZY6y3wC"));
result = await instance.submitTransaction(accounts[2],395,web3.utils.toHex("AoaTSzIW70"));
result = await instance.submitTransaction(accounts[1],344,web3.utils.toHex("PaVgyhionm"));
result = await instance.submitTransaction(accounts[6],342,web3.utils.toHex("ZEAk3r16Tu"));
result = await instance.submitTransaction(accounts[16],259,web3.utils.toHex("rtH6kuo9DV"));
result = await instance.submitTransaction(accounts[3],250,web3.utils.toHex("wGdjM3Q1IZ"));
result = await instance.submitTransaction(accounts[5],456,web3.utils.toHex("4fk3cZ0wsL"));
result = await instance.submitTransaction(accounts[17],274,web3.utils.toHex("pEbo7Mt8DP"));
result = await instance.submitTransaction(accounts[6],283,web3.utils.toHex("1O50T6kGja"));
result = await instance.submitTransaction(accounts[15],259,web3.utils.toHex("qSpTCMrzda"));
result = await instance.submitTransaction(accounts[8],214,web3.utils.toHex("glic0EZwRd"));
result = await instance.submitTransaction(accounts[3],492,web3.utils.toHex("G2fzYA4sUi"));
result = await instance.submitTransaction(accounts[1],474,web3.utils.toHex("yhRxpWl3iD"));
result = await instance.submitTransaction(accounts[15],208,web3.utils.toHex("gVouieHPqZ"));
result = await instance.submitTransaction(accounts[9],326,web3.utils.toHex("TDFSq7umhV"));
result = await instance.submitTransaction(accounts[7],352,web3.utils.toHex("Be1m7FQiLn"));
result = await instance.submitTransaction(accounts[13],314,web3.utils.toHex("CHAB8qz6Sg"));
result = await instance.submitTransaction(accounts[16],325,web3.utils.toHex("HhZVLGerA6"));
result = await instance.submitTransaction(accounts[4],456,web3.utils.toHex("urplA8UEMJ"));
result = await instance.submitTransaction(accounts[11],447,web3.utils.toHex("6j9aPr0Ubf"));
result = await instance.submitTransaction(accounts[10],217,web3.utils.toHex("RJ1HS0jp5a"));
result = await instance.submitTransaction(accounts[18],441,web3.utils.toHex("T3onrLh8vp"));
result = await instance.submitTransaction(accounts[13],402,web3.utils.toHex("cGA9kau73T"));
result = await instance.submitTransaction(accounts[4],260,web3.utils.toHex("lGaX1rZzAL"));
result = await instance.submitTransaction(accounts[2],310,web3.utils.toHex("ylchKipJLs"));
result = await instance.submitTransaction(accounts[8],216,web3.utils.toHex("gbf3N5do0A"));
result = await instance.submitTransaction(accounts[9],445,web3.utils.toHex("PKGraVLBE7"));
result = await instance.submitTransaction(accounts[11],373,web3.utils.toHex("AJ3olMG4m6"));
result = await instance.submitTransaction(accounts[3],443,web3.utils.toHex("RYWt1nTxAp"));
result = await instance.submitTransaction(accounts[9],441,web3.utils.toHex("2riYMfvEC7"));
result = await instance.submitTransaction(accounts[13],489,web3.utils.toHex("q4Tt2wJMbm"));
result = await instance.submitTransaction(accounts[8],337,web3.utils.toHex("x1OZWJ0ctI"));
result = await instance.submitTransaction(accounts[13],444,web3.utils.toHex("LyPHe5jlzO"));
result = await instance.submitTransaction(accounts[16],254,web3.utils.toHex("G5UM7mHKzu"));
result = await instance.submitTransaction(accounts[15],349,web3.utils.toHex("dzb3JX76ep"));
result = await instance.submitTransaction(accounts[20],422,web3.utils.toHex("dvHg3BcrPf"));
result = await instance.submitTransaction(accounts[12],373,web3.utils.toHex("Wt6qMRnlYa"));
await instance.executeTransaction(10);
});
});