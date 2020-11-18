# flexiana-hardhat-truffle-web3-local 

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview

This is a smart contract tooling repository. 

It should provide all the development configuration for working with `ETH` smart contracts.

## Requirements

In order to run the project we need `node>=15.2.0`, `npm>=7.0.9`.

## Folder structure

A quick look at the top-level files and directories you'll see in a Gatsby project.

```
├──── flexiana-hardhat-truffle-web3-local
│  ├── contracts/
│  ├── migrations/
│  ├── test/
│  ├── .editorconfig
│  ├── .eslintrc.js
│  ├── .gitattributes
│  ├── .gitignore
│  ├── .lintstagedrc.js
│  ├── .npmrc
│  ├── hardhat.config.js
│  ├── npm-shrinkwrap.json
│  ├── package.json
│  └── README.md
```

## Installation

Clone the package via `git`:

```shell
git clone git@github.com:0-vortex/flexiana-hardhat-truffle-web3-local.git
```

Go into the cloned repository and install `node` dependencies:

```shell
npm install
```

## How to use

Currently, only available commands are `test` and `compile`

WIP

## Contributing

### ENV files

This repository is featuring granular controls fully orthogonal to environment variables as specified by [the twelve-factor app](https://12factor.net) guidelines.

#### Application requirements

In order for the application to run we need the following environment variables set similar to the following example.
Without these variables the application will fail to start, so in order for the app to start locally we need to create an `.env` file with the following values:

```shell script
REPORT_GAS=true
API_KEY_CMC=1d902a3e-a623-4db6-8653-a5efcf69c0dd
```
