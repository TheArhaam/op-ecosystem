import { Address } from "viem";

export const L1BlockInteropAddress = '0x4200000000000000000000000000000000000015' as Address

export const L1BlockInteropABI = [
    {
      "inputs": [],
      "name": "DEPOSITOR_ACCOUNT",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr_",
          "type": "address"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "baseFeeScalar",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "basefee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "batcherHash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "blobBaseFee",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "blobBaseFeeScalar",
      "outputs": [
        {
          "internalType": "uint32",
          "name": "",
          "type": "uint32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "dependencySetSize",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gasPayingToken",
      "outputs": [
        {
          "internalType": "address",
          "name": "addr_",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "decimals_",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gasPayingTokenName",
      "outputs": [
        {
          "internalType": "string",
          "name": "name_",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "gasPayingTokenSymbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "hash",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "isCustomGasToken",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_chainId",
          "type": "uint256"
        }
      ],
      "name": "isInDependencySet",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "l1FeeOverhead",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "l1FeeScalar",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "number",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sequenceNumber",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum ConfigType",
          "name": "_type",
          "type": "uint8"
        },
        {
          "internalType": "bytes",
          "name": "_value",
          "type": "bytes"
        }
      ],
      "name": "setConfig",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "uint8",
          "name": "_decimals",
          "type": "uint8"
        },
        {
          "internalType": "bytes32",
          "name": "_name",
          "type": "bytes32"
        },
        {
          "internalType": "bytes32",
          "name": "_symbol",
          "type": "bytes32"
        }
      ],
      "name": "setGasPayingToken",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "_number",
          "type": "uint64"
        },
        {
          "internalType": "uint64",
          "name": "_timestamp",
          "type": "uint64"
        },
        {
          "internalType": "uint256",
          "name": "_basefee",
          "type": "uint256"
        },
        {
          "internalType": "bytes32",
          "name": "_hash",
          "type": "bytes32"
        },
        {
          "internalType": "uint64",
          "name": "_sequenceNumber",
          "type": "uint64"
        },
        {
          "internalType": "bytes32",
          "name": "_batcherHash",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "_l1FeeOverhead",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_l1FeeScalar",
          "type": "uint256"
        }
      ],
      "name": "setL1BlockValues",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "setL1BlockValuesEcotone",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "timestamp",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "version",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        }
      ],
      "name": "DependencyAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "chainId",
          "type": "uint256"
        }
      ],
      "name": "DependencyRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "token",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint8",
          "name": "decimals",
          "type": "uint8"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "name",
          "type": "bytes32"
        },
        {
          "indexed": false,
          "internalType": "bytes32",
          "name": "symbol",
          "type": "bytes32"
        }
      ],
      "name": "GasPayingTokenSet",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "AlreadyDependency",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "CantRemovedDependency",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "DependencySetSizeTooLarge",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotDependency",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "NotDepositor",
      "type": "error"
    }
  ] as const
