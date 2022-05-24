const Attack = artifacts.require("Attack");
const Phishable = artifacts.require("Phishable");
contract('Phishable', async (accounts) => {
const owner = accounts[0];
let attack;let instance;
let result;
before('setup contract for each test',async() => {
instance = await Phishable.new(accounts[0], {from: accounts[0]});
attack = await Attack.new(instance.address,accounts[400],{from:accounts[400]});
});
it('test 0',async() => {
await instance.sendTransaction({from: accounts[0], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[1], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[2], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[3], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[4], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from: accounts[5], value: web3.utils.toWei(web3.utils.toBN(1))});
await instance.sendTransaction({from:accounts[3],value:13});
result = await instance.withdrawAll(accounts[0]);});
it('test 1',async() => {
await instance.sendTransaction({from:accounts[9],value:21});
result = await instance.withdrawAll(accounts[2]);});
it('test 2',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[4],value:86});
});
it('test 3',async() => {
await instance.sendTransaction({from:accounts[2],value:53});
result = await instance.withdrawAll(accounts[5]);});
it('test 4',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[7],value:38});
});
it('test 5',async() => {
await instance.sendTransaction({from:accounts[6],value:74});
result = await instance.withdrawAll(accounts[3]);});
it('test 6',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[9],value:78});
});
it('test 7',async() => {
await instance.sendTransaction({from:accounts[3],value:73});
result = await instance.withdrawAll(accounts[2]);});
it('test 8',async() => {
await instance.sendTransaction({from:accounts[5],value:83});
result = await instance.withdrawAll(accounts[3]);});
it('test 9',async() => {
result = await instance.withdrawAll(accounts[3]);await instance.sendTransaction({from:accounts[3],value:37});
});
it('test 10',async() => {
await instance.sendTransaction({from:accounts[4],value:71});
result = await instance.withdrawAll(accounts[4]);});
it('test 11',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[1],value:17});
});
it('test 12',async() => {
await instance.sendTransaction({from:accounts[9],value:52});
result = await instance.withdrawAll(accounts[3]);});
it('test 13',async() => {
await instance.sendTransaction({from:accounts[7],value:46});
result = await instance.withdrawAll(accounts[1]);});
it('test 14',async() => {
await instance.sendTransaction({from:accounts[2],value:83});
result = await instance.withdrawAll(accounts[3]);});
it('test 15',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[3],value:49});
});
it('test 16',async() => {
await instance.sendTransaction({from:accounts[9],value:81});
result = await instance.withdrawAll(accounts[1]);});
it('test 17',async() => {
await instance.sendTransaction({from:accounts[9],value:24});
result = await instance.withdrawAll(accounts[4]);});
it('test 18',async() => {
await instance.sendTransaction({from:accounts[4],value:72});
result = await instance.withdrawAll(accounts[4]);});
it('test 19',async() => {
await instance.sendTransaction({from:accounts[7],value:35});
result = await instance.withdrawAll(accounts[3]);});
it('test 20',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[8],value:10});
});
it('test 21',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[5],value:90});
});
it('test 22',async() => {
await instance.sendTransaction({from:accounts[4],value:78});
result = await instance.withdrawAll(accounts[1]);});
it('test 23',async() => {
result = await instance.withdrawAll(accounts[4]);await instance.sendTransaction({from:accounts[6],value:21});
});
it('test 24',async() => {
await instance.sendTransaction({from:accounts[3],value:86});
result = await instance.withdrawAll(accounts[3]);});
it('test 25',async() => {
await instance.sendTransaction({from:accounts[4],value:31});
result = await instance.withdrawAll(accounts[1]);});
it('test 26',async() => {
await instance.sendTransaction({from:accounts[3],value:52});
result = await instance.withdrawAll(accounts[2]);});
it('test 27',async() => {
await instance.sendTransaction({from:accounts[3],value:54});
result = await instance.withdrawAll(accounts[2]);});
it('test 28',async() => {
await instance.sendTransaction({from:accounts[6],value:92});
result = await instance.withdrawAll(accounts[3]);});
it('test 29',async() => {
await instance.sendTransaction({from:accounts[8],value:7});
result = await instance.withdrawAll(accounts[3]);});
it('test 30',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[7],value:33});
});
it('test 31',async() => {
await instance.sendTransaction({from:accounts[7],value:45});
result = await instance.withdrawAll(accounts[0]);});
it('test 32',async() => {
await instance.sendTransaction({from:accounts[4],value:82});
result = await instance.withdrawAll(accounts[2]);});
it('test 33',async() => {
await instance.sendTransaction({from:accounts[8],value:24});
result = await instance.withdrawAll(accounts[0]);});
it('test 34',async() => {
await instance.sendTransaction({from:accounts[4],value:66});
result = await instance.withdrawAll(accounts[0]);});
it('test 35',async() => {
await instance.sendTransaction({from:accounts[9],value:11});
result = await instance.withdrawAll(accounts[4]);});
it('test 36',async() => {
await instance.sendTransaction({from:accounts[7],value:22});
result = await instance.withdrawAll(accounts[5]);});
it('test 37',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[4],value:9});
});
it('test 38',async() => {
await instance.sendTransaction({from:accounts[3],value:87});
result = await instance.withdrawAll(accounts[0]);});
it('test 39',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[5],value:84});
});
it('acctack', async() => {
await attack.sendTransaction({from:accounts[0]})});
it('test 40',async() => {
await instance.sendTransaction({from:accounts[3],value:43});
result = await instance.withdrawAll(accounts[3]);});
it('test 41',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[4],value:48});
});
it('test 42',async() => {
result = await instance.withdrawAll(accounts[5]);await instance.sendTransaction({from:accounts[9],value:44});
});
it('test 43',async() => {
result = await instance.withdrawAll(accounts[1]);await instance.sendTransaction({from:accounts[6],value:32});
});
it('test 44',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[7],value:40});
});
it('test 45',async() => {
await instance.sendTransaction({from:accounts[5],value:34});
result = await instance.withdrawAll(accounts[1]);});
it('test 46',async() => {
result = await instance.withdrawAll(accounts[2]);await instance.sendTransaction({from:accounts[3],value:20});
});
it('test 47',async() => {
result = await instance.withdrawAll(accounts[0]);await instance.sendTransaction({from:accounts[9],value:99});
});
it('test 48',async() => {
await instance.sendTransaction({from:accounts[9],value:53});
result = await instance.withdrawAll(accounts[0]);});
it('test 49',async() => {
await instance.sendTransaction({from:accounts[2],value:9});
result = await instance.withdrawAll(accounts[2]);});
});
