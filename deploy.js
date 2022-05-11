const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
  'earth giant loyal hockey broom tube script acoustic pyramid excuse shoot gossip',
    'https://rinkeby.infura.io/v3/c018328bde4e4602a602c6f88c52afa5'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode, arguments: ['Contract Started']
        })
        .send({
            gas: '1000000', from: accounts[0]
        });

    console.log('Contract deployed into address', contract.options.address);

    provider.engine.stop();
};

deploy();