require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess knee oil skull warrior ridge remember evil install case forget shrimp'; 
let testAccounts = [
"0xfed5010388eb8ecec219031fe18c1545b87dc786d53687a4676a69954074aaee",
"0x8d10a5f5313137560f3f1efb9a9a61f8ef8e8694b4f3dc0eb4fb4ef8d37f69fc",
"0x09ed48804443a5d948df7f2d9be8ae7c62714294eaf9839976ced3e60ca49851",
"0x1e99821cf9a1de038151dc9b86b58eeacd609ed8b76487ba5598d179688c398c",
"0x1c065d71757006e4531e8c812474394ba6623b52b4587362d5a418606b9a92c5",
"0x61ba71c7ba542fb752d0b72ac0571f341799d48ad6d67f9bfed2108c55584b9a",
"0x0ab3f81fd24949b7e45be64b7234f5ff6f7da20e220b28f103ddca79b3b3205c",
"0x964e9bd40c6558946a48717b5b64a7e49e5c72d8d66505e4461fe5249be23aa1",
"0xebfb0ee24092bbbee30ce80b4d889299d0184e80c7610e39e6d38e9da8f97021",
"0xa3a19047ecedb71a4e3f7c7603b967ab4722346ef65680926240fa7be16b64e2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
