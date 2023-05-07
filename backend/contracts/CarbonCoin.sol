// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CarbonCoin is ERC20{
    address public owner;

    modifier onlyOwner(){
        require(msg.sender == owner, "");
        _;
    }
    constructor() ERC20("CarbonCoin", "OCO") {
        owner = msg.sender;
    }

    function buy(uint256 amount) public payable {
        _mint(msg.sender, amount);
        payable(owner).transfer(msg.value);
    }

    function use(address user, uint256 amount) public onlyOwner {
        require(balanceOf(user) >= amount, "Saldo insuficiente");
        burn(user, amount);
    }

    function burn(address user, uint256 amount) public onlyOwner {
        _burn(user, amount);
    }

    function decimals() public pure override returns (uint8) {
        return 2;
    } 
}