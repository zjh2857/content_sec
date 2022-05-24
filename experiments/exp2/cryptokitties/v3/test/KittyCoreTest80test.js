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
await instance.createPromoKitty(594649391, coo, {from: coo,value: 0});
await instance.createPromoKitty(709630575, coo, {from: coo,value: 0});
await instance.createPromoKitty(150483641, coo, {from: coo,value: 0});
await instance.createPromoKitty(380801018, coo, {from: coo,value: 0});
await instance.createPromoKitty(984909275, coo, {from: coo,value: 0});
await instance.createPromoKitty(240504870, coo, {from: coo,value: 0});
await instance.createPromoKitty(458497328, coo, {from: coo,value: 0});
await instance.createPromoKitty(121678553, coo, {from: coo,value: 0});
await instance.createPromoKitty(616717660, coo, {from: coo,value: 0});
await instance.createPromoKitty(668113177, coo, {from: coo,value: 0});
await instance.createPromoKitty(756756014, coo, {from: coo,value: 0});
await instance.createPromoKitty(720688867, coo, {from: coo,value: 0});
await instance.createPromoKitty(705868501, coo, {from: coo,value: 0});
await instance.createPromoKitty(105339764, coo, {from: coo,value: 0});
await instance.createPromoKitty(316871585, coo, {from: coo,value: 0});
await instance.createPromoKitty(96259071, coo, {from: coo,value: 0});
await instance.createPromoKitty(985426738, coo, {from: coo,value: 0});
await instance.createPromoKitty(851209658, coo, {from: coo,value: 0});
await instance.createPromoKitty(931953685, coo, {from: coo,value: 0});
await instance.createPromoKitty(713021083, coo, {from: coo,value: 0});
await instance.createPromoKitty(154509078, coo, {from: coo,value: 0});
await instance.createPromoKitty(444944344, coo, {from: coo,value: 0});
await instance.createPromoKitty(475035500, coo, {from: coo,value: 0});
await instance.createPromoKitty(394912638, coo, {from: coo,value: 0});
await instance.createPromoKitty(694775316, coo, {from: coo,value: 0});
await instance.createPromoKitty(757606905, coo, {from: coo,value: 0});
await instance.createPromoKitty(745079023, coo, {from: coo,value: 0});
await instance.createPromoKitty(105266619, coo, {from: coo,value: 0});
await instance.createPromoKitty(471597374, coo, {from: coo,value: 0});
await instance.createPromoKitty(351772775, coo, {from: coo,value: 0});
await instance.createPromoKitty(450491235, coo, {from: coo,value: 0});
await instance.createPromoKitty(509339497, coo, {from: coo,value: 0});
await instance.createPromoKitty(649495110, coo, {from: coo,value: 0});
await instance.createPromoKitty(28838202, coo, {from: coo,value: 0});
await instance.createPromoKitty(153971637, coo, {from: coo,value: 0});
await instance.createPromoKitty(439356277, coo, {from: coo,value: 0});
await instance.createPromoKitty(545726492, coo, {from: coo,value: 0});
await instance.createPromoKitty(267954136, coo, {from: coo,value: 0});
await instance.createPromoKitty(689490356, coo, {from: coo,value: 0});
await instance.createPromoKitty(780569159, coo, {from: coo,value: 0});
await instance.createPromoKitty(241794647, coo, {from: coo,value: 0});
await instance.createPromoKitty(736350708, coo, {from: coo,value: 0});
await instance.createPromoKitty(513052278, coo, {from: coo,value: 0});
await instance.createPromoKitty(848487280, coo, {from: coo,value: 0});
await instance.createPromoKitty(963282932, coo, {from: coo,value: 0});
await instance.createPromoKitty(977744130, coo, {from: coo,value: 0});
await instance.createPromoKitty(230376966, coo, {from: coo,value: 0});
await instance.createPromoKitty(912909357, coo, {from: coo,value: 0});
await instance.createPromoKitty(129701888, coo, {from: coo,value: 0});
await instance.createPromoKitty(198178882, coo, {from: coo,value: 0});
await instance.createPromoKitty(505878205, coo, {from: coo,value: 0});
await instance.createPromoKitty(754859443, coo, {from: coo,value: 0});
await instance.createPromoKitty(429669348, coo, {from: coo,value: 0});
await instance.createPromoKitty(379653110, coo, {from: coo,value: 0});
await instance.createPromoKitty(318979667, coo, {from: coo,value: 0});
await instance.createPromoKitty(369263014, coo, {from: coo,value: 0});
await instance.createPromoKitty(418583830, coo, {from: coo,value: 0});
await instance.createPromoKitty(88422663, coo, {from: coo,value: 0});
await instance.createPromoKitty(465819534, coo, {from: coo,value: 0});
await instance.createPromoKitty(423593493, coo, {from: coo,value: 0});
});
it('test 1',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.breedWith(15, 17, {from: coo});
await instance.breedWith(34, 38, {from: coo});
await instance.breedWith(32, 37, {from: coo});
await instance.breedWith(20, 13, {from: coo});
await instance.breedWith(7, 18, {from: coo});
await instance.breedWith(29, 19, {from: coo});
await instance.breedWith(9, 36, {from: coo});
await instance.breedWith(11, 4, {from: coo});
await instance.breedWith(25, 31, {from: coo});
await instance.breedWith(26, 39, {from: coo});
await instance.breedWith(10, 2, {from: coo});
await instance.breedWith(8, 33, {from: coo});
await instance.breedWith(27, 35, {from: coo});
await instance.breedWith(6, 23, {from: coo});
await instance.breedWith(14, 40, {from: coo});
await instance.breedWith(1, 28, {from: coo});
await instance.breedWith(16, 21, {from: coo});
await instance.breedWith(12, 24, {from: coo});
await instance.breedWith(3, 5, {from: coo});
await instance.breedWith(22, 30, {from: coo});
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
await instance.pause();
await instance.unpause();
await instance.giveBirth(15);
await instance.giveBirth(34);
await instance.giveBirth(32);
await instance.giveBirth(20);
await instance.giveBirth(7);
await instance.giveBirth(29);
await instance.giveBirth(9);
await instance.giveBirth(11);
await instance.giveBirth(25);
await instance.giveBirth(26);
await instance.giveBirth(10);
await instance.giveBirth(8);
await instance.giveBirth(27);
await instance.giveBirth(6);
await instance.giveBirth(14);
await instance.giveBirth(1);
await instance.giveBirth(16);
await instance.giveBirth(12);
await instance.giveBirth(3);
await instance.giveBirth(22);
});
it('test 5',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 6',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 7',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('test 8',async() => {
await util.forwardEVMTime(cooldowns[0]);
await instance.pause();
await instance.unpause();
});
it('test 9',async() => {
await util.forwardEVMTime(cooldowns[0]);
});
it('attack', async() => {
 await instance.breedWith(57, bigValue, {from: coo});
});
});
