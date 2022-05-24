module.exports = {
	networks: {
        test: {
            host: "172.20.34.19",
            port: 8545,
            network_id: "5777", // Match any network id
        }
    },
    compilers: {
        solc: {
            version: "0.4.25"
        }
    }
};
