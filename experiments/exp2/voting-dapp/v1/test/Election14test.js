const Election = artifacts.require("Election");
contract('Election', async (accounts) => {
    let instance;
    let result;
    let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
    before('setup contract for each test', async () => {
        instance = await Election.new({from: accounts[0]});
    });

it('test 0',async() => {
await instance.addCandidate("7r9tI","OcMudh8DlN");
await instance.addCandidate("wk8XW","brjVlm3AP8");
await instance.addCandidate("pI8Xx","D3TLxwn8EQ");
await instance.addCandidate("02xhm","29VKsLu5go");
await instance.addCandidate("7HGNi","JE0LArxl9w");
await instance.addCandidate("P8kqp","6P0NSbF1iY");
await instance.addCandidate("Xf3yK","jiIJ8t6vTd");
await instance.addCandidate("w7LeE","PHv4DNFUjy");
await instance.addCandidate("bGsIo","EqXVtx6lzu");
await instance.addCandidate("4bafW","LUzdZt1mcw");
await instance.addCandidate("QFn0U","tEAQLSvqW3");
await instance.addCandidate("CX6OF","2THcvLOdRl");
await instance.addCandidate("xR18H","LWzFrqsJXb");
await instance.addCandidate("UqYjW","T1IKJetiGA");
await instance.addCandidate("CBIeL","Xo3MiteOvA");
await instance.addCandidate("XerGo","eqIRohb8MP");
await instance.addCandidate("6Vwpg","nhGkKHyfVP");
await instance.addCandidate("GjT9a","3TZD1fvXCc");
await instance.addCandidate("qQbUV","L6BWvjfliT");
await instance.addCandidate("yBZLr","i4dKDMVugJ");
await instance.vote(13,{from:accounts[2]});
await instance.vote(5,{from:accounts[26]});
await instance.vote(10,{from:accounts[64]});
await instance.vote(14,{from:accounts[49]});
await instance.vote(6,{from:accounts[57]});
await instance.vote(6,{from:accounts[45]});
await instance.vote(9,{from:accounts[20]});
await instance.vote(12,{from:accounts[33]});
await instance.vote(12,{from:accounts[11]});
await instance.vote(7,{from:accounts[73]});
await instance.vote(3,{from:accounts[15]});
await instance.vote(9,{from:accounts[30]});
await instance.vote(7,{from:accounts[71]});
await instance.vote(12,{from:accounts[65]});
await instance.vote(11,{from:accounts[21]});
await instance.vote(7,{from:accounts[55]});
await instance.vote(10,{from:accounts[34]});
await instance.vote(5,{from:accounts[74]});
await instance.vote(8,{from:accounts[28]});
await instance.vote(6,{from:accounts[53]});
await instance.vote(10,{from:accounts[29]});
await instance.vote(15,{from:accounts[46]});
await instance.vote(13,{from:accounts[58]});
await instance.vote(11,{from:accounts[17]});
await instance.vote(6,{from:accounts[7]});
await instance.vote(14,{from:accounts[56]});
await instance.vote(13,{from:accounts[16]});
await instance.vote(3,{from:accounts[3]});
await instance.vote(4,{from:accounts[0]});
await instance.vote(9,{from:accounts[76]});
await instance.vote(10,{from:accounts[54]});
await instance.vote(10,{from:accounts[75]});
await instance.vote(6,{from:accounts[43]});
await instance.vote(4,{from:accounts[51]});
await instance.vote(3,{from:accounts[72]});
await instance.vote(10,{from:accounts[31]});
await instance.vote(6,{from:accounts[36]});
await instance.vote(5,{from:accounts[9]});
await instance.vote(12,{from:accounts[6]});
await instance.vote(4,{from:accounts[77]});
await instance.vote(5,{from:accounts[52]});
await instance.vote(5,{from:accounts[68]});
await instance.vote(3,{from:accounts[18]});
await instance.vote(12,{from:accounts[62]});
await instance.vote(3,{from:accounts[40]});
await instance.vote(3,{from:accounts[69]});
await instance.vote(4,{from:accounts[13]});
await instance.vote(14,{from:accounts[67]});
await instance.vote(10,{from:accounts[12]});
await instance.vote(15,{from:accounts[25]});
await instance.vote(8,{from:accounts[59]});
await instance.vote(15,{from:accounts[32]});
await instance.vote(11,{from:accounts[66]});
await instance.vote(7,{from:accounts[27]});
await instance.vote(13,{from:accounts[79]});
await instance.vote(13,{from:accounts[24]});
await instance.vote(15,{from:accounts[63]});
await instance.vote(3,{from:accounts[38]});
await instance.vote(12,{from:accounts[44]});
await instance.vote(8,{from:accounts[50]});
await instance.vote(11,{from:accounts[23]});
await instance.vote(11,{from:accounts[42]});
await instance.vote(14,{from:accounts[1]});
await instance.vote(11,{from:accounts[39]});
await instance.vote(3,{from:accounts[60]});
await instance.vote(12,{from:accounts[48]});
await instance.vote(11,{from:accounts[19]});
await instance.vote(12,{from:accounts[47]});
await instance.vote(14,{from:accounts[10]});
await instance.vote(15,{from:accounts[37]});
await instance.vote(12,{from:accounts[4]});
await instance.vote(14,{from:accounts[5]});
await instance.vote(6,{from:accounts[14]});
await instance.vote(9,{from:accounts[8]});
await instance.vote(7,{from:accounts[70]});
await instance.vote(14,{from:accounts[35]});
await instance.vote(12,{from:accounts[22]});
await instance.vote(14,{from:accounts[78]});
await instance.vote(4,{from:accounts[61]});
await instance.vote(14,{from:accounts[41]});
});
it('test 1',async() => {
});
it('test 2',async() => {
});
it('acctack', async() => {
 await instance.vote(bigValue,{from:accounts[99]});
});
});