const appContractsDir = 'src/org/esndev/inbox/contracts';
const appContractsInit = 'Inbox.sol';
const path = require('path');
const fs = require('fs');
const solc = require('solc');

const appPath = path.resolve(__dirname, appContractsDir,appContractsInit);
const source = fs.readFileSync(appPath, 'utf8')

module.exports = solc.compile(source, 1).contracts[':Inbox'];


