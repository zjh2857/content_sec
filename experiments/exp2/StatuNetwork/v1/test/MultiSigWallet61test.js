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
result = await instance.submitTransaction(accounts[7],422,web3.utils.toHex("lyKPEI6TS4"));
result = await instance.submitTransaction(accounts[13],392,web3.utils.toHex("7gviywKqmx"));
result = await instance.submitTransaction(accounts[16],395,web3.utils.toHex("IwyYg98kFT"));
result = await instance.submitTransaction(accounts[3],386,web3.utils.toHex("yvliocwhLf"));
result = await instance.submitTransaction(accounts[18],223,web3.utils.toHex("7Lp9vGOwrY"));
result = await instance.submitTransaction(accounts[18],420,web3.utils.toHex("cjNgpzPQXF"));
result = await instance.submitTransaction(accounts[14],200,web3.utils.toHex("QfqtNMmgcx"));
result = await instance.submitTransaction(accounts[19],494,web3.utils.toHex("jELa3J6RSq"));
result = await instance.submitTransaction(accounts[19],344,web3.utils.toHex("1UMpImoB04"));
result = await instance.submitTransaction(accounts[9],255,web3.utils.toHex("eHpDF5LgjS"));
result = await instance.submitTransaction(accounts[4],463,web3.utils.toHex("jhein6xZFm"));
result = await instance.submitTransaction(accounts[3],402,web3.utils.toHex("7N2eKJfwnG"));
result = await instance.submitTransaction(accounts[14],327,web3.utils.toHex("PTLgC89ofu"));
result = await instance.submitTransaction(accounts[14],378,web3.utils.toHex("dEQn5DPVNz"));
result = await instance.submitTransaction(accounts[7],294,web3.utils.toHex("xVCwymTtPn"));
result = await instance.submitTransaction(accounts[2],277,web3.utils.toHex("3gtiV9AmvF"));
result = await instance.submitTransaction(accounts[3],330,web3.utils.toHex("SKjNqXHo5b"));
result = await instance.submitTransaction(accounts[6],423,web3.utils.toHex("k1hlKBMojE"));
result = await instance.submitTransaction(accounts[13],473,web3.utils.toHex("dv3XUV97Ly"));
result = await instance.submitTransaction(accounts[3],353,web3.utils.toHex("cwIQknLoZf"));
result = await instance.submitTransaction(accounts[1],418,web3.utils.toHex("ndI1HYOKkG"));
result = await instance.submitTransaction(accounts[1],271,web3.utils.toHex("jQWFxrJ45u"));
result = await instance.submitTransaction(accounts[17],240,web3.utils.toHex("qEsXx4h8AR"));
result = await instance.submitTransaction(accounts[6],229,web3.utils.toHex("OH5x6CanMi"));
result = await instance.submitTransaction(accounts[13],304,web3.utils.toHex("1rqzsDQcUm"));
result = await instance.submitTransaction(accounts[19],351,web3.utils.toHex("YhzwgFSXEr"));
result = await instance.submitTransaction(accounts[19],302,web3.utils.toHex("ZQPxhtMOpe"));
result = await instance.submitTransaction(accounts[13],392,web3.utils.toHex("zJQC1YIK3r"));
result = await instance.submitTransaction(accounts[10],256,web3.utils.toHex("ZghbHYqU7C"));
result = await instance.submitTransaction(accounts[13],394,web3.utils.toHex("HGakbIOpXu"));
result = await instance.submitTransaction(accounts[10],437,web3.utils.toHex("cIF5RCd2VJ"));
result = await instance.submitTransaction(accounts[7],464,web3.utils.toHex("b0xXpqwTvn"));
result = await instance.submitTransaction(accounts[12],297,web3.utils.toHex("1yVPfbpCjK"));
result = await instance.submitTransaction(accounts[12],432,web3.utils.toHex("xptHFMQX6B"));
result = await instance.submitTransaction(accounts[8],240,web3.utils.toHex("f6JIlas4u1"));
result = await instance.submitTransaction(accounts[9],338,web3.utils.toHex("CLKDgySBYr"));
result = await instance.submitTransaction(accounts[3],385,web3.utils.toHex("KSbTawLWMU"));
result = await instance.submitTransaction(accounts[1],263,web3.utils.toHex("cjd3VEb58l"));
result = await instance.submitTransaction(accounts[18],472,web3.utils.toHex("v2oXrUILpB"));
result = await instance.submitTransaction(accounts[18],270,web3.utils.toHex("JskHPthzjW"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
