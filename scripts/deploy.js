const {ethers} = require('hardhat');
async function main() {
  // get contract to deploy
  const Greeter = await ethers.getContractFactory('Greeter')
  const greeter = await Greeter.deploy()
  console.log(`Deployed to : ${greeter.address}`)

}

main().then(() => {
  console.log('deeeeeeeeeeeploying')
  process.exit(0)
}).catch((error) => {
  console.error(error)
  process.exit(1)
})