async function deploy() {
  const MyNFT = await ethers.getContractFactory("ImmortalBulldogs");

  // Start deployment, returning a promise that resolves to a contract object
  const myNFT = await MyNFT.deploy();
  console.log("Immortal Bulldog Contract deployed to address:", myNFT.address);
}

deploy();
