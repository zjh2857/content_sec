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
result = await instance.submitTransaction(accounts[6],415,web3.utils.toHex("nIriAHRZ7J"));
result = await instance.submitTransaction(accounts[2],233,web3.utils.toHex("8jWuLRP3BT"));
result = await instance.submitTransaction(accounts[11],263,web3.utils.toHex("sM2FpWBHYj"));
result = await instance.submitTransaction(accounts[4],451,web3.utils.toHex("wAZ89NSxE7"));
result = await instance.submitTransaction(accounts[7],411,web3.utils.toHex("m5Mg8aohVZ"));
result = await instance.submitTransaction(accounts[3],418,web3.utils.toHex("GsDT72pteV"));
result = await instance.submitTransaction(accounts[2],351,web3.utils.toHex("K5QfdPNMcx"));
result = await instance.submitTransaction(accounts[19],487,web3.utils.toHex("3TaEProld9"));
result = await instance.submitTransaction(accounts[5],356,web3.utils.toHex("s57EO0dMuh"));
result = await instance.submitTransaction(accounts[6],285,web3.utils.toHex("vIAri38KhC"));
result = await instance.submitTransaction(accounts[2],490,web3.utils.toHex("yv6Scd9gbN"));
result = await instance.submitTransaction(accounts[12],308,web3.utils.toHex("wI68JWPdOj"));
result = await instance.submitTransaction(accounts[9],349,web3.utils.toHex("5UlL6B3ZmT"));
result = await instance.submitTransaction(accounts[4],480,web3.utils.toHex("iHMB7CXDtb"));
result = await instance.submitTransaction(accounts[5],240,web3.utils.toHex("dIMrBWkVvE"));
result = await instance.submitTransaction(accounts[1],471,web3.utils.toHex("ljcQSPEFZG"));
result = await instance.submitTransaction(accounts[3],251,web3.utils.toHex("uE9QPptCMg"));
result = await instance.submitTransaction(accounts[2],383,web3.utils.toHex("M0Ew8s5TVm"));
result = await instance.submitTransaction(accounts[12],357,web3.utils.toHex("tvuAoW8ZXD"));
result = await instance.submitTransaction(accounts[6],378,web3.utils.toHex("R0bGkOqKlX"));
result = await instance.submitTransaction(accounts[5],448,web3.utils.toHex("5IwEKGjU6z"));
result = await instance.submitTransaction(accounts[6],444,web3.utils.toHex("8CghxvE7X3"));
result = await instance.submitTransaction(accounts[15],440,web3.utils.toHex("JKdazhk51x"));
result = await instance.submitTransaction(accounts[12],233,web3.utils.toHex("gX0HQB6hyE"));
result = await instance.submitTransaction(accounts[11],221,web3.utils.toHex("MfV2IXcpq9"));
result = await instance.submitTransaction(accounts[9],291,web3.utils.toHex("cqI5ews7ad"));
result = await instance.submitTransaction(accounts[13],440,web3.utils.toHex("1jgftPpZQM"));
result = await instance.submitTransaction(accounts[4],257,web3.utils.toHex("b9Ll2FpmCX"));
result = await instance.submitTransaction(accounts[5],303,web3.utils.toHex("YBz1dGlcTO"));
result = await instance.submitTransaction(accounts[16],310,web3.utils.toHex("hwy3LAdv7O"));
result = await instance.submitTransaction(accounts[17],371,web3.utils.toHex("WhTwix0PKc"));
result = await instance.submitTransaction(accounts[20],236,web3.utils.toHex("qTxXBlUILc"));
result = await instance.submitTransaction(accounts[12],456,web3.utils.toHex("9PuqxUiV5g"));
result = await instance.submitTransaction(accounts[9],478,web3.utils.toHex("Pum7VGbqJx"));
result = await instance.submitTransaction(accounts[11],471,web3.utils.toHex("ODn8Vv4bae"));
result = await instance.submitTransaction(accounts[14],320,web3.utils.toHex("QcK1NkYOgh"));
result = await instance.submitTransaction(accounts[2],427,web3.utils.toHex("JDLi6A8KTC"));
result = await instance.submitTransaction(accounts[9],329,web3.utils.toHex("dJlknrUePL"));
result = await instance.submitTransaction(accounts[9],467,web3.utils.toHex("pml7z2jiFH"));
result = await instance.submitTransaction(accounts[20],205,web3.utils.toHex("wINskce8ti"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
