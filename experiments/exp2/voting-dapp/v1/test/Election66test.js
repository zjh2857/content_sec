const Election = artifacts.require("Election");
contract('Election', async (accounts) => {
    let instance;
    let result;
    let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
    before('setup contract for each test', async () => {
        instance = await Election.new({from: accounts[0]});
    });

it('test 0',async() => {
await instance.addCandidate("raIkh","0akNYVoQ7i");
await instance.addCandidate("A1eMr","eU7Lj5IoSw");
await instance.addCandidate("sQoEr","Aivd15TCEB");
await instance.addCandidate("SlpH1","Glqb40MLnv");
await instance.addCandidate("LX3oT","cHZhgDw3eC");
await instance.addCandidate("QkZUn","anPMLTXiey");
await instance.addCandidate("GfLC9","Myv5lc9ZRV");
await instance.addCandidate("wnsHN","jtez5GU7po");
await instance.addCandidate("n6sde","04K2NUhpcG");
await instance.addCandidate("uDB5C","LCADk3zQVp");
await instance.addCandidate("2TeaJ","szr4TXN6hF");
await instance.addCandidate("PoI15","t47VJAyrWw");
await instance.addCandidate("NE8XZ","ZwP34DSlpH");
await instance.addCandidate("4cJr6","RycJXHLK7G");
await instance.addCandidate("eBFUf","cBAD03iag5");
await instance.addCandidate("95H4N","OhX8GDdpHI");
await instance.addCandidate("sx7FQ","dI5Pg0MSBs");
await instance.addCandidate("cHTza","mixFCEZrJN");
await instance.addCandidate("CKirf","1d8EI3Tl2V");
await instance.addCandidate("cOrgs","DRGgWkCiML");
await instance.vote(10,{from:accounts[68]});
await instance.vote(4,{from:accounts[1]});
await instance.vote(10,{from:accounts[65]});
await instance.vote(14,{from:accounts[55]});
await instance.vote(7,{from:accounts[77]});
await instance.vote(2,{from:accounts[48]});
await instance.vote(10,{from:accounts[9]});
await instance.vote(10,{from:accounts[46]});
await instance.vote(5,{from:accounts[12]});
await instance.vote(13,{from:accounts[27]});
await instance.vote(4,{from:accounts[42]});
await instance.vote(13,{from:accounts[78]});
await instance.vote(14,{from:accounts[18]});
await instance.vote(4,{from:accounts[35]});
await instance.vote(9,{from:accounts[13]});
await instance.vote(2,{from:accounts[58]});
await instance.vote(15,{from:accounts[24]});
await instance.vote(2,{from:accounts[56]});
await instance.vote(5,{from:accounts[67]});
await instance.vote(12,{from:accounts[54]});
await instance.vote(10,{from:accounts[70]});
await instance.vote(15,{from:accounts[59]});
await instance.vote(3,{from:accounts[51]});
await instance.vote(6,{from:accounts[61]});
await instance.vote(6,{from:accounts[11]});
await instance.vote(13,{from:accounts[57]});
await instance.vote(13,{from:accounts[10]});
await instance.vote(7,{from:accounts[17]});
await instance.vote(15,{from:accounts[64]});
await instance.vote(9,{from:accounts[6]});
await instance.vote(7,{from:accounts[66]});
await instance.vote(7,{from:accounts[5]});
await instance.vote(14,{from:accounts[23]});
await instance.vote(13,{from:accounts[76]});
await instance.vote(9,{from:accounts[73]});
await instance.vote(5,{from:accounts[39]});
await instance.vote(13,{from:accounts[36]});
await instance.vote(15,{from:accounts[47]});
await instance.vote(15,{from:accounts[45]});
await instance.vote(13,{from:accounts[49]});
await instance.vote(15,{from:accounts[72]});
await instance.vote(11,{from:accounts[19]});
await instance.vote(4,{from:accounts[31]});
await instance.vote(9,{from:accounts[32]});
await instance.vote(3,{from:accounts[75]});
await instance.vote(14,{from:accounts[53]});
await instance.vote(10,{from:accounts[40]});
await instance.vote(11,{from:accounts[41]});
await instance.vote(14,{from:accounts[8]});
await instance.vote(5,{from:accounts[50]});
await instance.vote(12,{from:accounts[62]});
await instance.vote(15,{from:accounts[79]});
await instance.vote(6,{from:accounts[30]});
await instance.vote(10,{from:accounts[74]});
await instance.vote(8,{from:accounts[4]});
await instance.vote(11,{from:accounts[2]});
await instance.vote(11,{from:accounts[0]});
await instance.vote(8,{from:accounts[16]});
await instance.vote(15,{from:accounts[33]});
await instance.vote(13,{from:accounts[14]});
await instance.vote(11,{from:accounts[71]});
await instance.vote(3,{from:accounts[34]});
await instance.vote(12,{from:accounts[21]});
await instance.vote(3,{from:accounts[60]});
await instance.vote(3,{from:accounts[26]});
await instance.vote(15,{from:accounts[28]});
await instance.vote(2,{from:accounts[52]});
await instance.vote(13,{from:accounts[29]});
await instance.vote(10,{from:accounts[63]});
await instance.vote(9,{from:accounts[69]});
await instance.vote(7,{from:accounts[15]});
await instance.vote(2,{from:accounts[37]});
await instance.vote(5,{from:accounts[20]});
await instance.vote(2,{from:accounts[3]});
await instance.vote(11,{from:accounts[25]});
await instance.vote(4,{from:accounts[7]});
await instance.vote(12,{from:accounts[44]});
await instance.vote(8,{from:accounts[43]});
await instance.vote(7,{from:accounts[22]});
await instance.vote(12,{from:accounts[38]});
});
it('test 1',async() => {
});
it('test 2',async() => {
});
it('acctack', async() => {
 await instance.vote(bigValue,{from:accounts[99]});
});
});
