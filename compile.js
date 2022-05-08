const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'src/org/esndev/inbox/contracts','Inbox.sol')