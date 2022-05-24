const KittyCore = artifacts.require("./KittyCoreTest.sol");
const SaleClockAuction = artifacts.require("./SaleClockAuction.sol");
const SiringClockAuction = artifacts.require("./SiringClockAuction.sol");
const GeneScienceMock = artifacts.require("./GeneScienceMock.sol");
const BigNumber = web3.utils.BN;
const util = require("./util.js")


contract('KittyBreeding', async (accounts) => {
    let coo = accounts[0];
    let ceo = accounts[0];
    let cfo = accounts[0];
    let bigValue = web3.utils.toBN("57896044618658097711785492504343953926634992332820282019728792003956564819968");
    let instance;
    let test_subject_SaleClockAuction;
    let test_subject_SiringClockAuction;
    let test_subject_GeneScience;
    let atrrs;
    let cooldowns, autoBirthPrice;
    let user1 = accounts[10];
    let user2 = accounts[11];
    let n0 = web3.utils.toBN("626837621154801616088980922659877168609154386318304496692374110716999053");
    let n1 = web3.utils.toBN("623332824742417442073801652020554010523726975553705023219600667807529387");
    let n2 = web3.utils.toBN("516352335416235417056702290154738622491807922722465690508248901653769675");
    let n3 = web3.utils.toBN("626837514194733471931671628842075756017852396531725903999108783271194062");
    let n4 = web3.utils.toBN("623332880692384699892637626080736662593748365051052090218150622775425454");
    let n5 = web3.utils.toBN("461303548515090852312075703606893019953834813576144180229003629194229101");
    let n6 = web3.utils.toBN("623327769803442901710395056776552497095442687958945773589013378394108268");
    let n7 = web3.utils.toBN("455962002069384858370720607417168167583077581913821361519992102215692750");
    let n3000 = web3.utils.toBN("10000000000000000");
    let n3007 = web3.utils.toBN("9000000000000000");
    let n3008 = web3.utils.toBN("35000000000000000");
    before('setup contract for each test', async () => {
        //coo决定ceo ceo决定cfo
        instance = await KittyCore.new({from: coo, gas: 5800000});
        test_subject_SaleClockAuction = await SaleClockAuction.new(instance.address, 357, {
            from: coo,
            gas: 5800000
        });
        test_subject_SiringClockAuction = await SiringClockAuction.new(instance.address, 357, {
            from: coo,
            gas: 5800000
        });
        test_subject_GeneScience = await GeneScienceMock.new({from: coo, gas: 5800000});

        await instance.setCEO(ceo, {from: coo, gas: 5800000});
        await instance.setCFO(cfo, {from: ceo, gas: 5800000});

        await instance.setGeneScienceAddress(test_subject_GeneScience.address, {
            from: ceo,
            gas: 5800000
        });
        await instance.setSiringAuctionAddress(test_subject_SiringClockAuction.address, {
            from: ceo,
            gas: 5800000
        });
        await instance.setSaleAuctionAddress(test_subject_SaleClockAuction.address, {
            from: ceo,
            gas: 5800000
        });
        //获取所有冷却时间，猫孕育下一代需要冷却时间
        if (!cooldowns) {
            cooldowns = [];
            for (var i = 0; i <= 13; i++) {
                cooldowns[i] = (await instance.cooldowns.call(i)).toNumber();
            }
        }
        //生育的费用
        if (!autoBirthPrice) {
            autoBirthPrice = await instance.autoBirthFee();
        }

        await instance.unpause({from: ceo, gas: 5800000});

    });

it('test 0',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.createPromoKitty(266017661, coo, {from: coo,value: 0});
await instance.createPromoKitty(631560439, coo, {from: coo,value: 0});
await instance.createPromoKitty(789150435, coo, {from: coo,value: 0});
await instance.createPromoKitty(721807622, coo, {from: coo,value: 0});
await instance.createPromoKitty(388947338, coo, {from: coo,value: 0});
await instance.createPromoKitty(250731297, coo, {from: coo,value: 0});
await instance.createPromoKitty(178045131, coo, {from: coo,value: 0});
await instance.createPromoKitty(71654041, coo, {from: coo,value: 0});
await instance.createPromoKitty(414963128, coo, {from: coo,value: 0});
await instance.createPromoKitty(841347196, coo, {from: coo,value: 0});
await instance.createPromoKitty(55684382, coo, {from: coo,value: 0});
await instance.createPromoKitty(216395523, coo, {from: coo,value: 0});
await instance.createPromoKitty(267780526, coo, {from: coo,value: 0});
await instance.createPromoKitty(736575236, coo, {from: coo,value: 0});
await instance.createPromoKitty(400308467, coo, {from: coo,value: 0});
await instance.createPromoKitty(86910029, coo, {from: coo,value: 0});
await instance.createPromoKitty(363720557, coo, {from: coo,value: 0});
await instance.createPromoKitty(423812235, coo, {from: coo,value: 0});
await instance.createPromoKitty(468839650, coo, {from: coo,value: 0});
await instance.createPromoKitty(561472120, coo, {from: coo,value: 0});
await instance.createPromoKitty(451232114, coo, {from: coo,value: 0});
await instance.createPromoKitty(516030362, coo, {from: coo,value: 0});
await instance.createPromoKitty(282032767, coo, {from: coo,value: 0});
await instance.createPromoKitty(823606241, coo, {from: coo,value: 0});
await instance.createPromoKitty(866782952, coo, {from: coo,value: 0});
await instance.createPromoKitty(57594690, coo, {from: coo,value: 0});
await instance.createPromoKitty(725290863, coo, {from: coo,value: 0});
await instance.createPromoKitty(260872065, coo, {from: coo,value: 0});
await instance.createPromoKitty(261603439, coo, {from: coo,value: 0});
await instance.createPromoKitty(761732353, coo, {from: coo,value: 0});
await instance.createPromoKitty(616321476, coo, {from: coo,value: 0});
await instance.createPromoKitty(834993426, coo, {from: coo,value: 0});
await instance.createPromoKitty(617080224, coo, {from: coo,value: 0});
await instance.createPromoKitty(721768982, coo, {from: coo,value: 0});
await instance.createPromoKitty(287602359, coo, {from: coo,value: 0});
await instance.createPromoKitty(569743073, coo, {from: coo,value: 0});
await instance.createPromoKitty(118395335, coo, {from: coo,value: 0});
await instance.createPromoKitty(675656255, coo, {from: coo,value: 0});
await instance.createPromoKitty(547162832, coo, {from: coo,value: 0});
await instance.createPromoKitty(603995807, coo, {from: coo,value: 0});
await instance.createPromoKitty(378217042, coo, {from: coo,value: 0});
await instance.createPromoKitty(875424932, coo, {from: coo,value: 0});
await instance.createPromoKitty(912494500, coo, {from: coo,value: 0});
await instance.createPromoKitty(494532972, coo, {from: coo,value: 0});
await instance.createPromoKitty(712736288, coo, {from: coo,value: 0});
await instance.createPromoKitty(357181286, coo, {from: coo,value: 0});
await instance.createPromoKitty(12398623, coo, {from: coo,value: 0});
await instance.createPromoKitty(663147421, coo, {from: coo,value: 0});
await instance.createPromoKitty(38283100, coo, {from: coo,value: 0});
await instance.createPromoKitty(298648140, coo, {from: coo,value: 0});
await instance.createPromoKitty(597985525, coo, {from: coo,value: 0});
await instance.createPromoKitty(701257877, coo, {from: coo,value: 0});
await instance.createPromoKitty(218649149, coo, {from: coo,value: 0});
await instance.createPromoKitty(343585184, coo, {from: coo,value: 0});
await instance.createPromoKitty(633632484, coo, {from: coo,value: 0});
await instance.createPromoKitty(397620078, coo, {from: coo,value: 0});
await instance.createPromoKitty(353093405, coo, {from: coo,value: 0});
await instance.createPromoKitty(386188159, coo, {from: coo,value: 0});
await instance.createPromoKitty(709137145, coo, {from: coo,value: 0});
await instance.createPromoKitty(802183064, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(6, 30, {from: coo});
await instance.breedWith(3, 14, {from: coo});
await instance.breedWith(31, 1, {from: coo});
await instance.breedWith(4, 5, {from: coo});
await instance.breedWith(16, 9, {from: coo});
await instance.breedWith(40, 33, {from: coo});
await instance.breedWith(15, 29, {from: coo});
await instance.breedWith(38, 28, {from: coo});
await instance.breedWith(18, 2, {from: coo});
await instance.breedWith(24, 32, {from: coo});
await instance.breedWith(13, 12, {from: coo});
await instance.breedWith(27, 26, {from: coo});
await instance.breedWith(36, 19, {from: coo});
await instance.breedWith(8, 10, {from: coo});
await instance.breedWith(22, 25, {from: coo});
await instance.breedWith(11, 35, {from: coo});
await instance.breedWith(39, 17, {from: coo});
await instance.breedWith(34, 21, {from: coo});
await instance.breedWith(37, 20, {from: coo});
await instance.breedWith(7, 23, {from: coo});
});
it('test 2',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 3',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 4',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.giveBirth(6);
await instance.giveBirth(3);
await instance.giveBirth(31);
await instance.giveBirth(4);
await instance.giveBirth(16);
await instance.giveBirth(40);
await instance.giveBirth(15);
await instance.giveBirth(38);
await instance.giveBirth(18);
await instance.giveBirth(24);
await instance.giveBirth(13);
await instance.giveBirth(27);
await instance.giveBirth(36);
await instance.giveBirth(8);
await instance.giveBirth(22);
await instance.giveBirth(11);
await instance.giveBirth(39);
await instance.giveBirth(34);
await instance.giveBirth(37);
await instance.giveBirth(7);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('acctack', async() => {
 await instance._breedWith(57,58,{from:coo});
});
});
