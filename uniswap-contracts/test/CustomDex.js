const ethers = require("ethers");

const CustomDex = artifacts.require("CustomDex.sol");

contract("CustomDex", () => {
  it("Get Total supply for CoinA", async () => {
    const dex = await CustomDex.new();
    const total = await dex.getTotalSupply("CoinA");
    assert(total.toString() === "1000000000000000000000");
  });
});

contract("CustomDex", () => {
  it("Swap eth for token", async () => {
    const dex = await CustomDex.new();

    // Swap eth to token (CoinA)
    const output = await dex.swapEthToToken("CoinA", {
      value: ethers.utils.parseEther("0.001"),
    });

    // Sender
    const { from } = output.receipt;

    // Validate the eth balance of dex
    const ethBalance = await dex.getEthBalance();
    assert(ethBalance.toString() === "1000000000000000");

    // Vaidate token balance of CoinA
    const tokenBalanceOfDex = await dex.getBalance("CoinA", dex.address);
    assert(tokenBalanceOfDex.toString() === "999999999999999999990");

    // Vaidate token balance of CoinA
    const tokenBalanceOfWallet = await dex.getBalance("CoinA", from);
    assert(tokenBalanceOfWallet.toString() === "10");
  });
});

contract("CustomDex", () => {
  it("Swap token for token", async () => {
    const dex = await CustomDex.new();

    // Get CoinA
    const output = await dex.swapEthToToken("CoinA", {
      value: ethers.utils.parseEther("0.001"),
    });

    // Sender
    const { from } = output.receipt;

    const tokenAddress = await dex.getTokenAddress("CoinA");

    // ------------- Increasing allowance of CoinA --------------
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:7545"
    );

    const abi = require("./CustomToken.json");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, abi, signer);

    await contract.approve(dex.address, 100);
    // ------------- Increasing allowance of CoinA --------------

    // Swap CoinA for CoinB
    await dex.swapTokenToToken("CoinA", "CoinB", "10");

    // Vaidate token balance of CoinA
    const tokenBalanceOfDex = await dex.getBalance("CoinA", dex.address);
    assert(tokenBalanceOfDex.toString() === "1000000000000000000000");

    // Vaidate token balance of CoinA
    const tokenBalanceOfWallet = await dex.getBalance("CoinA", from);
    assert(tokenBalanceOfWallet.toString() === "0");
  });
});

contract("CustomDex", () => {
  it("Swap token for eth", async () => {
    const dex = await CustomDex.new();

    // Get CoinA
    const output = await dex.swapEthToToken("CoinA", {
      value: ethers.utils.parseEther("0.001"),
    });

    // Sender
    const { from } = output.receipt;

    const tokenAddress = await dex.getTokenAddress("CoinA");

    // ------------- Increasing allowance of CoinA --------------
    const provider = new ethers.providers.JsonRpcProvider(
      "http://localhost:7545"
    );

    const abi = require("./CustomToken.json");
    const signer = provider.getSigner();
    const contract = new ethers.Contract(tokenAddress, abi, signer);

    await contract.approve(dex.address, 100);
    // ------------- Increasing allowance of CoinA --------------

    await dex.swapTokenToEth("CoinA", "10");

    // Vaidate token balance of CoinA
    const tokenBalanceOfDex = await dex.getBalance("CoinA", dex.address);
    assert(tokenBalanceOfDex.toString() === "1000000000000000000000");

    // Vaidate token balance of CoinA
    const tokenBalanceOfWallet = await dex.getBalance("CoinA", from);
    assert(tokenBalanceOfWallet.toString() === "0");
  });
});
