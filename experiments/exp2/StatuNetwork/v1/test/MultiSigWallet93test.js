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
result = await instance.submitTransaction(accounts[11],394,web3.utils.toHex("nghLDCc4zX"));
result = await instance.submitTransaction(accounts[19],420,web3.utils.toHex("aHcPbgZr42"));
result = await instance.submitTransaction(accounts[8],445,web3.utils.toHex("Z62jeFP0hH"));
result = await instance.submitTransaction(accounts[11],253,web3.utils.toHex("S9kpjdH1li"));
result = await instance.submitTransaction(accounts[15],263,web3.utils.toHex("LMo9DOZFUP"));
result = await instance.submitTransaction(accounts[11],224,web3.utils.toHex("Tqn3SRGlzx"));
result = await instance.submitTransaction(accounts[10],227,web3.utils.toHex("WIQatNnpko"));
result = await instance.submitTransaction(accounts[19],249,web3.utils.toHex("5Yi0mBtEjV"));
result = await instance.submitTransaction(accounts[10],468,web3.utils.toHex("jmVCETX0ZO"));
result = await instance.submitTransaction(accounts[1],472,web3.utils.toHex("BYLXWAUciF"));
result = await instance.submitTransaction(accounts[17],234,web3.utils.toHex("yAIplnqsEU"));
result = await instance.submitTransaction(accounts[15],354,web3.utils.toHex("546EZG3PtB"));
result = await instance.submitTransaction(accounts[4],483,web3.utils.toHex("gKIJ38bMjn"));
result = await instance.submitTransaction(accounts[6],368,web3.utils.toHex("mvg2WNlwS6"));
result = await instance.submitTransaction(accounts[7],302,web3.utils.toHex("AYKinfMHXG"));
result = await instance.submitTransaction(accounts[15],352,web3.utils.toHex("8UtqgadcSz"));
result = await instance.submitTransaction(accounts[7],233,web3.utils.toHex("7bDpoe9Mg2"));
result = await instance.submitTransaction(accounts[5],354,web3.utils.toHex("aopexCUTQI"));
result = await instance.submitTransaction(accounts[13],498,web3.utils.toHex("SPs0UXyC6k"));
result = await instance.submitTransaction(accounts[16],310,web3.utils.toHex("zVXH82I1yj"));
result = await instance.submitTransaction(accounts[2],298,web3.utils.toHex("XT0MlBtCyf"));
result = await instance.submitTransaction(accounts[5],243,web3.utils.toHex("xBo8O23c6N"));
result = await instance.submitTransaction(accounts[13],410,web3.utils.toHex("sLJbE26Bxc"));
result = await instance.submitTransaction(accounts[3],279,web3.utils.toHex("d5GKRW4ajk"));
result = await instance.submitTransaction(accounts[11],388,web3.utils.toHex("61WOTdGypA"));
result = await instance.submitTransaction(accounts[15],339,web3.utils.toHex("6fygANOLhq"));
result = await instance.submitTransaction(accounts[12],310,web3.utils.toHex("7XELKd08Wo"));
result = await instance.submitTransaction(accounts[6],392,web3.utils.toHex("fAJNSHKIdG"));
result = await instance.submitTransaction(accounts[15],447,web3.utils.toHex("qZvGtA2Sge"));
result = await instance.submitTransaction(accounts[3],425,web3.utils.toHex("bKoIZJXYRx"));
result = await instance.submitTransaction(accounts[20],381,web3.utils.toHex("aOSUPHbtJ0"));
result = await instance.submitTransaction(accounts[11],251,web3.utils.toHex("T7hLutN39q"));
result = await instance.submitTransaction(accounts[12],313,web3.utils.toHex("evxYZpycno"));
result = await instance.submitTransaction(accounts[19],306,web3.utils.toHex("cnHwgpmIxK"));
result = await instance.submitTransaction(accounts[16],466,web3.utils.toHex("N0uY3tJQoq"));
result = await instance.submitTransaction(accounts[1],469,web3.utils.toHex("d8eVISN4XA"));
result = await instance.submitTransaction(accounts[18],466,web3.utils.toHex("yG4VefLB8M"));
result = await instance.submitTransaction(accounts[17],270,web3.utils.toHex("8VASL7Zvwe"));
result = await instance.submitTransaction(accounts[12],388,web3.utils.toHex("LBY2PunroT"));
result = await instance.submitTransaction(accounts[4],350,web3.utils.toHex("D7oPahzMBb"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});