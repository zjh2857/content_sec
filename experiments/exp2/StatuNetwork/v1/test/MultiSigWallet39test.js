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
result = await instance.submitTransaction(accounts[4],236,web3.utils.toHex("nTfzi2Q0BI"));
result = await instance.submitTransaction(accounts[14],388,web3.utils.toHex("o6U3u14JvI"));
result = await instance.submitTransaction(accounts[1],387,web3.utils.toHex("stjV2H5P94"));
result = await instance.submitTransaction(accounts[7],391,web3.utils.toHex("ZvkrAyqlDB"));
result = await instance.submitTransaction(accounts[8],463,web3.utils.toHex("HCwOG9zn5Y"));
result = await instance.submitTransaction(accounts[20],235,web3.utils.toHex("xY1lyC5Gt4"));
result = await instance.submitTransaction(accounts[3],259,web3.utils.toHex("ZthUCbkSvG"));
result = await instance.submitTransaction(accounts[15],385,web3.utils.toHex("gozn2vjTYd"));
result = await instance.submitTransaction(accounts[16],222,web3.utils.toHex("jY8r0FRheb"));
result = await instance.submitTransaction(accounts[5],500,web3.utils.toHex("D1nLAwJITq"));
result = await instance.submitTransaction(accounts[5],389,web3.utils.toHex("OJ9wAe6Qa1"));
result = await instance.submitTransaction(accounts[19],373,web3.utils.toHex("Q8K1TxpbFL"));
result = await instance.submitTransaction(accounts[9],386,web3.utils.toHex("DuYgfSvn3c"));
result = await instance.submitTransaction(accounts[6],499,web3.utils.toHex("SwN5ypU9zm"));
result = await instance.submitTransaction(accounts[3],253,web3.utils.toHex("6Dw2POeCxN"));
result = await instance.submitTransaction(accounts[18],373,web3.utils.toHex("RYszxFg4AZ"));
result = await instance.submitTransaction(accounts[9],272,web3.utils.toHex("fxbk5J2ICi"));
result = await instance.submitTransaction(accounts[18],384,web3.utils.toHex("WByuoLmGeh"));
result = await instance.submitTransaction(accounts[8],427,web3.utils.toHex("oa9QRgFAti"));
result = await instance.submitTransaction(accounts[13],222,web3.utils.toHex("KgbnkJXte2"));
result = await instance.submitTransaction(accounts[11],272,web3.utils.toHex("8oMQJHwXqS"));
result = await instance.submitTransaction(accounts[6],296,web3.utils.toHex("U8GtKN23Ld"));
result = await instance.submitTransaction(accounts[12],371,web3.utils.toHex("kn586qwxme"));
result = await instance.submitTransaction(accounts[2],326,web3.utils.toHex("5M1W3Qa7O2"));
result = await instance.submitTransaction(accounts[5],280,web3.utils.toHex("q5HTcQD0kf"));
result = await instance.submitTransaction(accounts[18],281,web3.utils.toHex("NBWYE9UuDc"));
result = await instance.submitTransaction(accounts[10],410,web3.utils.toHex("rWeVksfGEj"));
result = await instance.submitTransaction(accounts[8],389,web3.utils.toHex("QjK7YwO6rx"));
result = await instance.submitTransaction(accounts[12],231,web3.utils.toHex("mFbnYJPE0W"));
result = await instance.submitTransaction(accounts[2],440,web3.utils.toHex("3QTszI0Vib"));
result = await instance.submitTransaction(accounts[20],286,web3.utils.toHex("BecxhKzfQ9"));
result = await instance.submitTransaction(accounts[12],207,web3.utils.toHex("InKizxwW73"));
result = await instance.submitTransaction(accounts[7],241,web3.utils.toHex("QiFu8d6BE5"));
result = await instance.submitTransaction(accounts[14],402,web3.utils.toHex("CRO6YLB1Ts"));
result = await instance.submitTransaction(accounts[9],285,web3.utils.toHex("rUBX7AcfKJ"));
result = await instance.submitTransaction(accounts[4],436,web3.utils.toHex("fIXa07rtqT"));
result = await instance.submitTransaction(accounts[9],333,web3.utils.toHex("GHrf8Vwz1t"));
result = await instance.submitTransaction(accounts[12],333,web3.utils.toHex("v08AkSnmp3"));
result = await instance.submitTransaction(accounts[4],376,web3.utils.toHex("fTvj573W8I"));
result = await instance.submitTransaction(accounts[9],339,web3.utils.toHex("k3vXCSFUN1"));
await instance.replaceOwner(accounts[15],accounts[60]);
});
});
