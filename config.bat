@rem initialize files
echo mkdir src
echo mkdir src/org
echo mkdir src/org/esndev
echo mkdir src/org/esndev/%1
echo mkdir src/org/esndev/%1/contracts
echo vi src/org/esndev/%1/contracts/%1.sol

echo mkdir test
echo mkdir test/org
echo mkdir test/org/esndev
echo mkdir test/org/esndev/%1
echo mkdir test/org/esndev/%1/contracts
echo vi test/org/esndev/%1/contracts/%1.test.sol


@rem initialize dependencies
echo npm init
echo npm install --save solc@0.4.17 mocha ganache-cli web3@1.0.0-beta.26 @truffle/hdwallet-provider



