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
result = await instance.submitTransaction(accounts[6],410,web3.utils.toHex("V3vUkypbrR"));
result = await instance.submitTransaction(accounts[12],266,web3.utils.toHex("Sgy4FJaUum"));
result = await instance.submitTransaction(accounts[10],226,web3.utils.toHex("EM7BITFCRw"));
result = await instance.submitTransaction(accounts[5],281,web3.utils.toHex("hfiQqCEjWU"));
result = await instance.submitTransaction(accounts[16],367,web3.utils.toHex("0DxreY1cG4"));
result = await instance.submitTransaction(accounts[12],344,web3.utils.toHex("LmIE14gtbl"));
result = await instance.submitTransaction(accounts[14],343,web3.utils.toHex("ypmUOGitB0"));
result = await instance.submitTransaction(accounts[8],443,web3.utils.toHex("cVJeUPKol0"));
result = await instance.submitTransaction(accounts[1],323,web3.utils.toHex("jqzv4O5At6"));
result = await instance.submitTransaction(accounts[4],495,web3.utils.toHex("RL8dJTgz13"));
result = await instance.submitTransaction(accounts[12],383,web3.utils.toHex("D2XBphquIm"));
result = await instance.submitTransaction(accounts[14],298,web3.utils.toHex("HKiUbzvLVP"));
result = await instance.submitTransaction(accounts[1],427,web3.utils.toHex("2FM8rtVXLp"));
result = await instance.submitTransaction(accounts[11],254,web3.utils.toHex("2BAhv74C5b"));
result = await instance.submitTransaction(accounts[6],367,web3.utils.toHex("nHmB4h1ROz"));
result = await instance.submitTransaction(accounts[5],207,web3.utils.toHex("9FnuWVc1q6"));
result = await instance.submitTransaction(accounts[19],480,web3.utils.toHex("N5ZaVPr9cu"));
result = await instance.submitTransaction(accounts[7],372,web3.utils.toHex("MA2w4c1fgE"));
result = await instance.submitTransaction(accounts[20],336,web3.utils.toHex("OG1PwV3txN"));
result = await instance.submitTransaction(accounts[11],439,web3.utils.toHex("3Zh59NkLMX"));
result = await instance.submitTransaction(accounts[18],418,web3.utils.toHex("MEYIVBRPbH"));
result = await instance.submitTransaction(accounts[11],265,web3.utils.toHex("oP9ZAs5Iiw"));
result = await instance.submitTransaction(accounts[6],301,web3.utils.toHex("NOSPAU7mIu"));
result = await instance.submitTransaction(accounts[1],215,web3.utils.toHex("Ol90QzqcRC"));
result = await instance.submitTransaction(accounts[16],405,web3.utils.toHex("57ztYREZur"));
result = await instance.submitTransaction(accounts[13],397,web3.utils.toHex("Tv4Rzcm8QO"));
result = await instance.submitTransaction(accounts[13],204,web3.utils.toHex("xfpVELSr3G"));
result = await instance.submitTransaction(accounts[18],202,web3.utils.toHex("bSnxqCe0po"));
result = await instance.submitTransaction(accounts[4],392,web3.utils.toHex("XqdEiUm7bI"));
result = await instance.submitTransaction(accounts[10],473,web3.utils.toHex("nMeOhd8qw2"));
result = await instance.submitTransaction(accounts[16],345,web3.utils.toHex("t4O856AaBE"));
result = await instance.submitTransaction(accounts[14],429,web3.utils.toHex("GcTpds5SFa"));
result = await instance.submitTransaction(accounts[7],425,web3.utils.toHex("MGEkjIf4O7"));
result = await instance.submitTransaction(accounts[14],388,web3.utils.toHex("NlHDcn7dfM"));
result = await instance.submitTransaction(accounts[12],303,web3.utils.toHex("kpHoj86Bsb"));
result = await instance.submitTransaction(accounts[15],205,web3.utils.toHex("d9kpNOmF6l"));
result = await instance.submitTransaction(accounts[9],217,web3.utils.toHex("tV4T8KHQaO"));
result = await instance.submitTransaction(accounts[13],278,web3.utils.toHex("pJcAHdVlxu"));
result = await instance.submitTransaction(accounts[1],491,web3.utils.toHex("vtjhTbMcym"));
result = await instance.submitTransaction(accounts[10],436,web3.utils.toHex("v09QoCtg5c"));
await instance.executeTransaction(10);
});
});
