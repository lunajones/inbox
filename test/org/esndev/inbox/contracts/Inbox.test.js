const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../../../../../compile');

let accounts;
let contract;
const initialMessage = 'initial message';

before(async () => {

    accounts = await web3.eth.getAccounts();

    contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({
            data: bytecode,
            arguments: [initialMessage]
        })
        .send({
            from : accounts[0],
            gas: '1000000'
        });

});

describe('Inbox', () => {
    it('deploys a contract', () => {
        assert.ok(contract.options.address);
    });
    it('it has correct message',async () => {
        assert.strictEqual(await contract.methods.getMessage().call(), initialMessage);
    });
    it('it changes message',async () => {
        const changedMessage = 'changed message';
        await contract.methods.setMessage(changedMessage)
            .send({ from: accounts[0] });
        assert.strictEqual(await contract.methods.getMessage().call(), changedMessage);
    });
});