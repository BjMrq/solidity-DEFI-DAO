import { expect } from "chai"
import { deployments, getNamedAccounts, ethers } from "hardhat"
import { deployERC20TokenMock, deployPriceFeedMockWithRateOf } from "../helpers/contracts/deploy"
import { NamedAddresses, NamedSigners } from "../helpers/types"
import { AstroToken, SwapContractFactory } from "../typechain-types"

describe("SwapContractFactory", () => {
  let SwapContractFactory: SwapContractFactory
  let AstroToken: AstroToken
  let namedAccounts: NamedAddresses
  let namedSigners: NamedSigners

  beforeEach(async () => {
    await deployments.fixture(["sales"])

    namedAccounts = (await getNamedAccounts()) as NamedAddresses
    namedSigners = (await ethers.getNamedSigners()) as NamedSigners

    SwapContractFactory = await ethers.getContract<SwapContractFactory>("SwapContractFactory")
    AstroToken = await ethers.getContract<AstroToken>("AstroToken")
  })

  it("Only owner can deploy swap contract", async () => {
    const erc20TokenInstance = await deployERC20TokenMock("Chain link", "LINK")

    const mockPriceFeedERC20Token = await deployPriceFeedMockWithRateOf(`100000000`)

    await expect(
      SwapContractFactory.connect(namedSigners.maliciousEncounter).deployNewSwapContract(
        AstroToken.address,
        erc20TokenInstance.address,
        mockPriceFeedERC20Token.address
      )
    ).to.be.revertedWith("Ownable: caller is not the owner")
  })

  it("Get deployed swap contract info", async () => {
    const deployedPairs = await SwapContractFactory.getAllSwapPairs()

    const swapAddressesInfo = await SwapContractFactory.deployedSwapContractsRegistry(
      deployedPairs[0]
    )

    expect(deployedPairs[0]).to.equal("BAT/ASTRO")
    expect(Object.keys(swapAddressesInfo)).to.eql([
      "0",
      "1",
      "2",
      "3",
      "swapContractAddress",
      "quoteTokenAddress",
      "baseTokenAddress",
      "deployed",
    ])

    expect(swapAddressesInfo.quoteTokenAddress).to.equal(AstroToken.address)
  })
})
