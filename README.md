### How To Mint NFT

In `/scripts/mint-nft.js`, do the following:

Update `mintNFT` function call param to use correct NFT metadata JSON from IPS (end of file)

```zsh
node scripts/mint-nft.js
```

### Verify Contract
```
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"
```
npx hardhat verify --network mainnet 0x621a547429B4666E46E2e84E21bef26BC0708Cf2 "Constructor argument 1"

### People

Phil: 0x1040259f6Fe4f1C6ed1044b9Df6a8A4eBD2d3511 (philmohun.eth)
