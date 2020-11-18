// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.7.3;

contract Migrations {
  address public owner = msg.sender;

  // A function with the signature `last_completed_migration()`, returning a uint, is required.
  uint public last_completed_migration;

  modifier restricted() {
    require(
      msg.sender == owner,
      "This function is restricted to the contract's owner"
    );
    _;
  }

  function setCompleted(uint completed) public restricted {
    last_completed_migration = completed;
  }

  function upgrade(address new_address) public restricted {
    Migrations upgraded = Migrations(new_address);
    upgraded.setCompleted(last_completed_migration);
  }
}
