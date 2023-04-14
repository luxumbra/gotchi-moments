export const contractABI1155 = [
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "PetOperatorApprovalForAll",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "aavegotchiClaimTime",
    "outputs": [
      { "internalType": "uint256", "name": "claimTime_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "addInterfaces",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "allAavegotchisOfOwner",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "address", "name": "owner", "type": "address" },
          {
            "internalType": "uint256",
            "name": "randomNumber",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "status", "type": "uint256" },
          {
            "internalType": "int16[6]",
            "name": "numericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "int16[6]",
            "name": "modifiedNumericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "uint16[16]",
            "name": "equippedWearables",
            "type": "uint16[16]"
          },
          {
            "internalType": "address",
            "name": "collateral",
            "type": "address"
          },
          { "internalType": "address", "name": "escrow", "type": "address" },
          {
            "internalType": "uint256",
            "name": "stakedAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumStake",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "kinship", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "lastInteracted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "experience",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toNextLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usedSkillPoints",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "level", "type": "uint256" },
          { "internalType": "uint256", "name": "hauntId", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "baseRarityScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "modifiedRarityScore",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "locked", "type": "bool" },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "itemId",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "author",
                    "type": "string"
                  },
                  {
                    "internalType": "int8[6]",
                    "name": "traitModifiers",
                    "type": "int8[6]"
                  },
                  {
                    "internalType": "bool[16]",
                    "name": "slotPositions",
                    "type": "bool[16]"
                  },
                  {
                    "internalType": "uint8[]",
                    "name": "allowedCollaterals",
                    "type": "uint8[]"
                  },
                  {
                    "components": [
                      { "internalType": "uint8", "name": "x", "type": "uint8" },
                      { "internalType": "uint8", "name": "y", "type": "uint8" },
                      {
                        "internalType": "uint8",
                        "name": "width",
                        "type": "uint8"
                      },
                      {
                        "internalType": "uint8",
                        "name": "height",
                        "type": "uint8"
                      }
                    ],
                    "internalType": "struct Dimensions",
                    "name": "dimensions",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "ghstPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "maxQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint32",
                    "name": "svgId",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint8",
                    "name": "rarityScoreModifier",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "canPurchaseWithGhst",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint16",
                    "name": "minLevel",
                    "type": "uint16"
                  },
                  {
                    "internalType": "bool",
                    "name": "canBeTransferred",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "category",
                    "type": "uint8"
                  },
                  {
                    "internalType": "int16",
                    "name": "kinshipBonus",
                    "type": "int16"
                  },
                  {
                    "internalType": "uint32",
                    "name": "experienceBonus",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct ItemType",
                "name": "itemType",
                "type": "tuple"
              }
            ],
            "internalType": "struct ItemTypeIO[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AavegotchiInfo[]",
        "name": "aavegotchiInfos_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_approved", "type": "address" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "approve",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "balanceOf",
    "outputs": [
      { "internalType": "uint256", "name": "balance_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" }
    ],
    "name": "batchOwnerOf",
    "outputs": [
      { "internalType": "address[]", "name": "owners_", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "getAavegotchi",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "address", "name": "owner", "type": "address" },
          {
            "internalType": "uint256",
            "name": "randomNumber",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "status", "type": "uint256" },
          {
            "internalType": "int16[6]",
            "name": "numericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "int16[6]",
            "name": "modifiedNumericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "uint16[16]",
            "name": "equippedWearables",
            "type": "uint16[16]"
          },
          {
            "internalType": "address",
            "name": "collateral",
            "type": "address"
          },
          { "internalType": "address", "name": "escrow", "type": "address" },
          {
            "internalType": "uint256",
            "name": "stakedAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumStake",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "kinship", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "lastInteracted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "experience",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toNextLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usedSkillPoints",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "level", "type": "uint256" },
          { "internalType": "uint256", "name": "hauntId", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "baseRarityScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "modifiedRarityScore",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "locked", "type": "bool" },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "itemId",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "author",
                    "type": "string"
                  },
                  {
                    "internalType": "int8[6]",
                    "name": "traitModifiers",
                    "type": "int8[6]"
                  },
                  {
                    "internalType": "bool[16]",
                    "name": "slotPositions",
                    "type": "bool[16]"
                  },
                  {
                    "internalType": "uint8[]",
                    "name": "allowedCollaterals",
                    "type": "uint8[]"
                  },
                  {
                    "components": [
                      { "internalType": "uint8", "name": "x", "type": "uint8" },
                      { "internalType": "uint8", "name": "y", "type": "uint8" },
                      {
                        "internalType": "uint8",
                        "name": "width",
                        "type": "uint8"
                      },
                      {
                        "internalType": "uint8",
                        "name": "height",
                        "type": "uint8"
                      }
                    ],
                    "internalType": "struct Dimensions",
                    "name": "dimensions",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "ghstPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "maxQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint32",
                    "name": "svgId",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint8",
                    "name": "rarityScoreModifier",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "canPurchaseWithGhst",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint16",
                    "name": "minLevel",
                    "type": "uint16"
                  },
                  {
                    "internalType": "bool",
                    "name": "canBeTransferred",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "category",
                    "type": "uint8"
                  },
                  {
                    "internalType": "int16",
                    "name": "kinshipBonus",
                    "type": "int16"
                  },
                  {
                    "internalType": "uint32",
                    "name": "experienceBonus",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct ItemType",
                "name": "itemType",
                "type": "tuple"
              }
            ],
            "internalType": "struct ItemTypeIO[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AavegotchiInfo",
        "name": "aavegotchiInfo_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "getApproved",
    "outputs": [
      { "internalType": "address", "name": "approved_", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "address", "name": "_operator", "type": "address" }
    ],
    "name": "isApprovedForAll",
    "outputs": [
      { "internalType": "bool", "name": "approved_", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "address", "name": "_operator", "type": "address" }
    ],
    "name": "isPetOperatorForAll",
    "outputs": [
      { "internalType": "bool", "name": "approved_", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "name",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "ownerOf",
    "outputs": [
      { "internalType": "address", "name": "owner_", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" },
      { "internalType": "bytes", "name": "_data", "type": "bytes" }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "bytes", "name": "_data", "type": "bytes" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_operator", "type": "address" },
      { "internalType": "bool", "name": "_approved", "type": "bool" }
    ],
    "name": "setApprovalForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_operator", "type": "address" },
      { "internalType": "bool", "name": "_approved", "type": "bool" }
    ],
    "name": "setPetOperatorForAll",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "symbol",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_index", "type": "uint256" }
    ],
    "name": "tokenByIndex",
    "outputs": [
      { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "tokenIdsOfOwner",
    "outputs": [
      { "internalType": "uint32[]", "name": "tokenIds_", "type": "uint32[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_index", "type": "uint256" }
    ],
    "name": "tokenOfOwnerByIndex",
    "outputs": [
      { "internalType": "uint256", "name": "tokenId_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "tokenURI",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalSupply",
    "outputs": [
      { "internalType": "uint256", "name": "totalSupply_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "transferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "ClaimAavegotchi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
      }
    ],
    "name": "LockAavegotchi",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_oldName",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "_newName",
        "type": "string"
      }
    ],
    "name": "SetAavegotchiName",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_batchId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "SetBatchId",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "int16[4]",
        "name": "_values",
        "type": "int16[4]"
      }
    ],
    "name": "SpendSkillpoints",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_time",
        "type": "uint256"
      }
    ],
    "name": "UnLockAavegotchi",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_experience", "type": "uint256" }
    ],
    "name": "aavegotchiLevel",
    "outputs": [
      { "internalType": "uint256", "name": "level_", "type": "uint256" }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }],
    "name": "aavegotchiNameAvailable",
    "outputs": [
      { "internalType": "bool", "name": "available_", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "availableSkillPoints",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int16[6]",
        "name": "_numericTraits",
        "type": "int16[6]"
      }
    ],
    "name": "baseRarityScore",
    "outputs": [
      { "internalType": "uint256", "name": "rarityScore_", "type": "uint256" }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_option", "type": "uint256" },
      { "internalType": "uint256", "name": "_stakeAmount", "type": "uint256" }
    ],
    "name": "claimAavegotchi",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "currentHaunt",
    "outputs": [
      { "internalType": "uint256", "name": "hauntId_", "type": "uint256" },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "hauntMaxSize",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "portalPrice",
            "type": "uint256"
          },
          { "internalType": "bytes3", "name": "bodyColor", "type": "bytes3" },
          { "internalType": "uint24", "name": "totalCount", "type": "uint24" }
        ],
        "internalType": "struct Haunt",
        "name": "haunt_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "getNumericTraits",
    "outputs": [
      {
        "internalType": "int16[6]",
        "name": "numericTraits_",
        "type": "int16[6]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "ghstAddress",
    "outputs": [
      { "internalType": "address", "name": "contract_", "type": "address" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" }
    ],
    "name": "interact",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "kinship",
    "outputs": [
      { "internalType": "uint256", "name": "score_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "modifiedTraitsAndRarityScore",
    "outputs": [
      {
        "internalType": "int16[6]",
        "name": "numericTraits_",
        "type": "int16[6]"
      },
      { "internalType": "uint256", "name": "rarityScore_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "portalAavegotchiTraits",
    "outputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "randomNumber",
            "type": "uint256"
          },
          {
            "internalType": "int16[6]",
            "name": "numericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "address",
            "name": "collateralType",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "minimumStake",
            "type": "uint256"
          }
        ],
        "internalType": "struct PortalAavegotchiTraitsIO[10]",
        "name": "portalAavegotchiTraits_",
        "type": "tuple[10]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "int16[6]",
        "name": "_numericTraits",
        "type": "int16[6]"
      }
    ],
    "name": "rarityMultiplier",
    "outputs": [
      { "internalType": "uint256", "name": "multiplier_", "type": "uint256" }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "realmInteract",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "revenueShares",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "burnAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "daoAddress",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "rarityFarming",
            "type": "address"
          },
          { "internalType": "address", "name": "pixelCraft", "type": "address" }
        ],
        "internalType": "struct AavegotchiGameFacet.RevenueSharesIO",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "string", "name": "_name", "type": "string" }
    ],
    "name": "setAavegotchiName",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_realm", "type": "address" }
    ],
    "name": "setRealmAddress",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "int16[4]", "name": "_values", "type": "int16[4]" }
    ],
    "name": "spendSkillPoints",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_count", "type": "uint256" },
      { "internalType": "uint256", "name": "_skip", "type": "uint256" },
      { "internalType": "bool", "name": "all", "type": "bool" }
    ],
    "name": "tokenIdsWithKinship",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
          { "internalType": "uint256", "name": "kinship", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "lastInteracted",
            "type": "uint256"
          }
        ],
        "internalType": "struct AavegotchiGameFacet.TokenIdsWithKinship[]",
        "name": "tokenIdsWithKinship_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_experience", "type": "uint256" }
    ],
    "name": "xpUntilNextLevel",
    "outputs": [
      { "internalType": "uint256", "name": "requiredXp_", "type": "uint256" }
    ],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "AddedAavegotchiBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "AddedItemsBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "WithdrawnBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "values",
        "type": "uint256[]"
      }
    ],
    "name": "WithdrawnItems",
    "type": "event"
  },
  {
    "inputs": [],
    "name": "childChainManager",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_user", "type": "address" },
      { "internalType": "bytes", "name": "_depositData", "type": "bytes" }
    ],
    "name": "deposit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_newChildChainManager",
        "type": "address"
      }
    ],
    "name": "setChildChainManager",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" }
    ],
    "name": "withdrawAavegotchiBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "withdrawItemsBatch",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_reduceAmount",
        "type": "uint256"
      }
    ],
    "name": "DecreaseStake",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "experience",
        "type": "uint256"
      }
    ],
    "name": "ExperienceTransfer",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_stakeAmount",
        "type": "uint256"
      }
    ],
    "name": "IncreaseStake",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "collateralBalance",
    "outputs": [
      {
        "internalType": "address",
        "name": "collateralType_",
        "type": "address"
      },
      { "internalType": "address", "name": "escrow_", "type": "address" },
      { "internalType": "uint256", "name": "balance_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" },
      { "internalType": "uint256", "name": "_collateralId", "type": "uint256" }
    ],
    "name": "collateralInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "collateralType",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "int16[6]",
                "name": "modifiers",
                "type": "int16[6]"
              },
              {
                "internalType": "bytes3",
                "name": "primaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "secondaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "cheekColor",
                "type": "bytes3"
              },
              { "internalType": "uint8", "name": "svgId", "type": "uint8" },
              {
                "internalType": "uint8",
                "name": "eyeShapeSvgId",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "conversionRate",
                "type": "uint16"
              },
              { "internalType": "bool", "name": "delisted", "type": "bool" }
            ],
            "internalType": "struct AavegotchiCollateralTypeInfo",
            "name": "collateralTypeInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct AavegotchiCollateralTypeIO",
        "name": "collateralInfo_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" }
    ],
    "name": "collaterals",
    "outputs": [
      {
        "internalType": "address[]",
        "name": "collateralTypes_",
        "type": "address[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_toId", "type": "uint256" }
    ],
    "name": "decreaseAndDestroy",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_reduceAmount", "type": "uint256" }
    ],
    "name": "decreaseStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllCollateralTypes",
    "outputs": [
      { "internalType": "address[]", "name": "", "type": "address[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" }
    ],
    "name": "getCollateralInfo",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "collateralType",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "int16[6]",
                "name": "modifiers",
                "type": "int16[6]"
              },
              {
                "internalType": "bytes3",
                "name": "primaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "secondaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "cheekColor",
                "type": "bytes3"
              },
              { "internalType": "uint8", "name": "svgId", "type": "uint8" },
              {
                "internalType": "uint8",
                "name": "eyeShapeSvgId",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "conversionRate",
                "type": "uint16"
              },
              { "internalType": "bool", "name": "delisted", "type": "bool" }
            ],
            "internalType": "struct AavegotchiCollateralTypeInfo",
            "name": "collateralTypeInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct AavegotchiCollateralTypeIO[]",
        "name": "collateralInfo_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_stakeAmount", "type": "uint256" }
    ],
    "name": "increaseStake",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_collateralToken",
        "type": "address"
      },
      { "internalType": "uint8", "name": "_svgId", "type": "uint8" }
    ],
    "name": "setCollateralEyeShapeSvgId",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "collateralType",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "int16[6]",
                "name": "modifiers",
                "type": "int16[6]"
              },
              {
                "internalType": "bytes3",
                "name": "primaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "secondaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "cheekColor",
                "type": "bytes3"
              },
              { "internalType": "uint8", "name": "svgId", "type": "uint8" },
              {
                "internalType": "uint8",
                "name": "eyeShapeSvgId",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "conversionRate",
                "type": "uint16"
              },
              { "internalType": "bool", "name": "delisted", "type": "bool" }
            ],
            "internalType": "struct AavegotchiCollateralTypeInfo",
            "name": "collateralTypeInfo",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct AavegotchiCollateralTypeIO",
        "name": "_collateralType",
        "type": "tuple"
      }
    ],
    "name": "AddCollateralType",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "author", "type": "string" },
          {
            "internalType": "int8[6]",
            "name": "traitModifiers",
            "type": "int8[6]"
          },
          {
            "internalType": "bool[16]",
            "name": "slotPositions",
            "type": "bool[16]"
          },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          },
          { "internalType": "uint256", "name": "ghstPrice", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "maxQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          { "internalType": "uint32", "name": "svgId", "type": "uint32" },
          {
            "internalType": "uint8",
            "name": "rarityScoreModifier",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "canPurchaseWithGhst",
            "type": "bool"
          },
          { "internalType": "uint16", "name": "minLevel", "type": "uint16" },
          {
            "internalType": "bool",
            "name": "canBeTransferred",
            "type": "bool"
          },
          { "internalType": "uint8", "name": "category", "type": "uint8" },
          { "internalType": "int16", "name": "kinshipBonus", "type": "int16" },
          {
            "internalType": "uint32",
            "name": "experienceBonus",
            "type": "uint32"
          }
        ],
        "indexed": false,
        "internalType": "struct ItemType",
        "name": "_itemType",
        "type": "tuple"
      }
    ],
    "name": "AddItemType",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "indexed": false,
        "internalType": "struct WearableSet",
        "name": "_wearableSet",
        "type": "tuple"
      }
    ],
    "name": "AddWearableSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_hauntId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_hauntMaxSize",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_portalPrice",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bytes32",
        "name": "_bodyColor",
        "type": "bytes32"
      }
    ],
    "name": "CreateHaunt",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousDao",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newDao",
        "type": "address"
      }
    ],
    "name": "DaoTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousDaoTreasury",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newDaoTreasury",
        "type": "address"
      }
    ],
    "name": "DaoTreasuryTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "gameManager_",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "limit_",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "refreshTime_",
        "type": "uint256"
      }
    ],
    "name": "GameManagerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "gameManager_",
        "type": "address"
      }
    ],
    "name": "GameManagerRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_xpValues",
        "type": "uint256[]"
      }
    ],
    "name": "GrantExperience",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "newItemManager_",
        "type": "address"
      }
    ],
    "name": "ItemManagerAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "itemManager_",
        "type": "address"
      }
    ],
    "name": "ItemManagerRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_wearableId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "int8[6]",
        "name": "_traitModifiers",
        "type": "int8[6]"
      },
      {
        "indexed": false,
        "internalType": "uint8",
        "name": "_rarityScoreModifier",
        "type": "uint8"
      }
    ],
    "name": "ItemModifiersSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_itemIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_maxQuanities",
        "type": "uint256[]"
      }
    ],
    "name": "ItemTypeMaxQuantity",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_xpValues",
        "type": "uint256[]"
      }
    ],
    "name": "RemoveExperience",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "int16[6]",
        "name": "_oldModifiers",
        "type": "int16[6]"
      },
      {
        "indexed": false,
        "internalType": "int16[6]",
        "name": "_newModifiers",
        "type": "int16[6]"
      }
    ],
    "name": "UpdateCollateralModifiers",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_itemId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_priceInWei",
        "type": "uint256"
      }
    ],
    "name": "UpdateItemPrice",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_setId",
        "type": "uint256"
      },
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "indexed": false,
        "internalType": "struct WearableSet",
        "name": "_wearableSet",
        "type": "tuple"
      }
    ],
    "name": "UpdateWearableSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_wearableId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "bool[16]",
        "name": "_slotPositions",
        "type": "bool[16]"
      }
    ],
    "name": "WearableSlotPositionsSet",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" },
      {
        "components": [
          {
            "internalType": "address",
            "name": "collateralType",
            "type": "address"
          },
          {
            "components": [
              {
                "internalType": "int16[6]",
                "name": "modifiers",
                "type": "int16[6]"
              },
              {
                "internalType": "bytes3",
                "name": "primaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "secondaryColor",
                "type": "bytes3"
              },
              {
                "internalType": "bytes3",
                "name": "cheekColor",
                "type": "bytes3"
              },
              { "internalType": "uint8", "name": "svgId", "type": "uint8" },
              {
                "internalType": "uint8",
                "name": "eyeShapeSvgId",
                "type": "uint8"
              },
              {
                "internalType": "uint16",
                "name": "conversionRate",
                "type": "uint16"
              },
              { "internalType": "bool", "name": "delisted", "type": "bool" }
            ],
            "internalType": "struct AavegotchiCollateralTypeInfo",
            "name": "collateralTypeInfo",
            "type": "tuple"
          }
        ],
        "internalType": "struct AavegotchiCollateralTypeIO[]",
        "name": "_collateralTypes",
        "type": "tuple[]"
      }
    ],
    "name": "addCollateralTypes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_newGameManagers",
        "type": "address[]"
      },
      { "internalType": "uint256[]", "name": "_limits", "type": "uint256[]" }
    ],
    "name": "addGameManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_newItemManagers",
        "type": "address[]"
      }
    ],
    "name": "addItemManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "author", "type": "string" },
          {
            "internalType": "int8[6]",
            "name": "traitModifiers",
            "type": "int8[6]"
          },
          {
            "internalType": "bool[16]",
            "name": "slotPositions",
            "type": "bool[16]"
          },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          },
          { "internalType": "uint256", "name": "ghstPrice", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "maxQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          { "internalType": "uint32", "name": "svgId", "type": "uint32" },
          {
            "internalType": "uint8",
            "name": "rarityScoreModifier",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "canPurchaseWithGhst",
            "type": "bool"
          },
          { "internalType": "uint16", "name": "minLevel", "type": "uint16" },
          {
            "internalType": "bool",
            "name": "canBeTransferred",
            "type": "bool"
          },
          { "internalType": "uint8", "name": "category", "type": "uint8" },
          { "internalType": "int16", "name": "kinshipBonus", "type": "int16" },
          {
            "internalType": "uint32",
            "name": "experienceBonus",
            "type": "uint32"
          }
        ],
        "internalType": "struct ItemType[]",
        "name": "_itemTypes",
        "type": "tuple[]"
      }
    ],
    "name": "addItemTypes",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "author", "type": "string" },
          {
            "internalType": "int8[6]",
            "name": "traitModifiers",
            "type": "int8[6]"
          },
          {
            "internalType": "bool[16]",
            "name": "slotPositions",
            "type": "bool[16]"
          },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          },
          { "internalType": "uint256", "name": "ghstPrice", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "maxQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          { "internalType": "uint32", "name": "svgId", "type": "uint32" },
          {
            "internalType": "uint8",
            "name": "rarityScoreModifier",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "canPurchaseWithGhst",
            "type": "bool"
          },
          { "internalType": "uint16", "name": "minLevel", "type": "uint16" },
          {
            "internalType": "bool",
            "name": "canBeTransferred",
            "type": "bool"
          },
          { "internalType": "uint8", "name": "category", "type": "uint8" },
          { "internalType": "int16", "name": "kinshipBonus", "type": "int16" },
          {
            "internalType": "uint32",
            "name": "experienceBonus",
            "type": "uint32"
          }
        ],
        "internalType": "struct ItemType[]",
        "name": "_itemTypes",
        "type": "tuple[]"
      },
      { "internalType": "string", "name": "_svg", "type": "string" },
      {
        "components": [
          { "internalType": "bytes32", "name": "svgType", "type": "bytes32" },
          { "internalType": "uint256[]", "name": "sizes", "type": "uint256[]" }
        ],
        "internalType": "struct LibSvg.SvgTypeAndSizes[]",
        "name": "_typesAndSizes",
        "type": "tuple[]"
      }
    ],
    "name": "addItemTypesAndSvgs",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "internalType": "struct WearableSet[]",
        "name": "_wearableSets",
        "type": "tuple[]"
      }
    ],
    "name": "addWearableSets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_newPrices", "type": "uint256[]" }
    ],
    "name": "batchUpdateItemsPrice",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint24", "name": "_hauntMaxSize", "type": "uint24" },
      { "internalType": "uint96", "name": "_portalPrice", "type": "uint96" },
      { "internalType": "bytes3", "name": "_bodyColor", "type": "bytes3" }
    ],
    "name": "createHaunt",
    "outputs": [
      { "internalType": "uint256", "name": "hauntId_", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint24",
            "name": "_hauntMaxSize",
            "type": "uint24"
          },
          {
            "internalType": "uint96",
            "name": "_portalPrice",
            "type": "uint96"
          },
          { "internalType": "bytes3", "name": "_bodyColor", "type": "bytes3" },
          {
            "components": [
              {
                "internalType": "address",
                "name": "collateralType",
                "type": "address"
              },
              {
                "components": [
                  {
                    "internalType": "int16[6]",
                    "name": "modifiers",
                    "type": "int16[6]"
                  },
                  {
                    "internalType": "bytes3",
                    "name": "primaryColor",
                    "type": "bytes3"
                  },
                  {
                    "internalType": "bytes3",
                    "name": "secondaryColor",
                    "type": "bytes3"
                  },
                  {
                    "internalType": "bytes3",
                    "name": "cheekColor",
                    "type": "bytes3"
                  },
                  { "internalType": "uint8", "name": "svgId", "type": "uint8" },
                  {
                    "internalType": "uint8",
                    "name": "eyeShapeSvgId",
                    "type": "uint8"
                  },
                  {
                    "internalType": "uint16",
                    "name": "conversionRate",
                    "type": "uint16"
                  },
                  { "internalType": "bool", "name": "delisted", "type": "bool" }
                ],
                "internalType": "struct AavegotchiCollateralTypeInfo",
                "name": "collateralTypeInfo",
                "type": "tuple"
              }
            ],
            "internalType": "struct AavegotchiCollateralTypeIO[]",
            "name": "_collateralTypes",
            "type": "tuple[]"
          },
          {
            "internalType": "string",
            "name": "_collateralSvg",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "svgType",
                "type": "bytes32"
              },
              {
                "internalType": "uint256[]",
                "name": "sizes",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct LibSvg.SvgTypeAndSizes[]",
            "name": "_collateralTypesAndSizes",
            "type": "tuple[]"
          },
          {
            "internalType": "string",
            "name": "_eyeShapeSvg",
            "type": "string"
          },
          {
            "components": [
              {
                "internalType": "bytes32",
                "name": "svgType",
                "type": "bytes32"
              },
              {
                "internalType": "uint256[]",
                "name": "sizes",
                "type": "uint256[]"
              }
            ],
            "internalType": "struct LibSvg.SvgTypeAndSizes[]",
            "name": "_eyeShapeTypesAndSizes",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct DAOFacet.CreateHauntPayload",
        "name": "_payload",
        "type": "tuple"
      }
    ],
    "name": "createHauntWithPayload",
    "outputs": [
      { "internalType": "uint256", "name": "hauntId_", "type": "uint256" }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_manager", "type": "address" }
    ],
    "name": "gameManagerBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_manager", "type": "address" }
    ],
    "name": "gameManagerRefreshTime",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_xpValues", "type": "uint256[]" }
    ],
    "name": "grantExperience",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_manager", "type": "address" }
    ],
    "name": "isGameManager",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "mintItems",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_xpValues", "type": "uint256[]" }
    ],
    "name": "removeExperience",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_gameManagers",
        "type": "address[]"
      }
    ],
    "name": "removeGameManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address[]",
        "name": "_itemManagers",
        "type": "address[]"
      }
    ],
    "name": "removeItemManagers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_newDao", "type": "address" },
      {
        "internalType": "address",
        "name": "_newDaoTreasury",
        "type": "address"
      }
    ],
    "name": "setDao",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_wearableId", "type": "uint256" },
      {
        "internalType": "int8[6]",
        "name": "_traitModifiers",
        "type": "int8[6]"
      },
      {
        "internalType": "uint8",
        "name": "_rarityScoreModifier",
        "type": "uint8"
      }
    ],
    "name": "setItemTraitModifiersAndRarityModifier",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_wearableId", "type": "uint256" },
      {
        "internalType": "bool[16]",
        "name": "_slotPositions",
        "type": "bool[16]"
      }
    ],
    "name": "setWearableSlotPositions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_collateralType",
        "type": "address"
      },
      { "internalType": "int16[6]", "name": "_modifiers", "type": "int16[6]" }
    ],
    "name": "updateCollateralModifiers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "internalType": "uint256[]",
        "name": "_maxQuantities",
        "type": "uint256[]"
      }
    ],
    "name": "updateItemTypeMaxQuantity",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_setIds", "type": "uint256[]" },
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "internalType": "struct WearableSet[]",
        "name": "_wearableSets",
        "type": "tuple[]"
      }
    ],
    "name": "updateWearableSets",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "listingFeeInWei",
        "type": "uint256"
      }
    ],
    "name": "ChangedListingFee",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "erc1155TokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc1155TypeId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_quantity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceInWei",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC1155ExecutedListing",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "ERC1155ExecutedToRecipient",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "erc1155TokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc1155TypeId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceInWei",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC1155ListingAdd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      }
    ],
    "name": "ERC1155ListingCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint16[2]",
        "name": "principalSplit",
        "type": "uint16[2]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "affiliate",
        "type": "address"
      }
    ],
    "name": "ERC1155ListingSplit",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "cancelERC1155Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_listingIds",
        "type": "uint256[]"
      }
    ],
    "name": "cancelERC1155Listings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" }
    ],
    "name": "executeERC1155Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_contractAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_itemId", "type": "uint256" },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" },
      { "internalType": "address", "name": "_recipient", "type": "address" }
    ],
    "name": "executeERC1155ListingToRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_erc1155TypeId", "type": "uint256" }
    ],
    "name": "getERC1155Category",
    "outputs": [
      { "internalType": "uint256", "name": "category_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "getERC1155Listing",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc1155TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc1155TypeId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeLastPurchased",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sourceListingId",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "sold", "type": "bool" },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC1155Listing",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc1155TypeId",
        "type": "uint256"
      },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "getERC1155ListingFromToken",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc1155TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc1155TypeId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeLastPurchased",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sourceListingId",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "sold", "type": "bool" },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC1155Listing",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getERC1155Listings",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc1155TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc1155TypeId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeLastPurchased",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sourceListingId",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "sold", "type": "bool" },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC1155Listing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getListingFeeInWei",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getOwnerERC1155Listings",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc1155TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc1155TypeId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          { "internalType": "uint256", "name": "quantity", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeLastPurchased",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "sourceListingId",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "sold", "type": "bool" },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC1155Listing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "erc1155TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc1155TypeId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" }
        ],
        "internalType": "struct ERC1155MarketplaceFacet.Category[]",
        "name": "_categories",
        "type": "tuple[]"
      }
    ],
    "name": "setERC1155Categories",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc1155TypeId",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" }
    ],
    "name": "setERC1155Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc1155TypeId",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "_quantity", "type": "uint256" },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" },
      {
        "internalType": "uint16[2]",
        "name": "_principalSplit",
        "type": "uint16[2]"
      },
      { "internalType": "address", "name": "_affiliate", "type": "address" }
    ],
    "name": "setERC1155ListingWithSplit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_listingFeeInWei",
        "type": "uint256"
      }
    ],
    "name": "setListingFee",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256[]",
        "name": "_erc1155TypeIds",
        "type": "uint256[]"
      },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "updateBatchERC1155Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc1155TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc1155TypeId",
        "type": "uint256"
      },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "updateERC1155Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "erc721TokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceInWei",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC721ExecutedListing",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "recipient",
        "type": "address"
      }
    ],
    "name": "ERC721ExecutedToRecipient",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "seller",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "erc721TokenAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "erc721TokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC721ListingAdd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint16[2]",
        "name": "principalSplit",
        "type": "uint16[2]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "affiliate",
        "type": "address"
      }
    ],
    "name": "ERC721ListingSplit",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc721TokenId",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" }
    ],
    "name": "addERC721Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc721TokenId",
        "type": "uint256"
      },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" },
      {
        "internalType": "uint16[2]",
        "name": "_principalSplit",
        "type": "uint16[2]"
      },
      { "internalType": "address", "name": "_affiliate", "type": "address" }
    ],
    "name": "addERC721ListingWithSplit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "cancelERC721Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_erc721TokenId", "type": "uint256" }
    ],
    "name": "cancelERC721ListingByToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_listingIds",
        "type": "uint256[]"
      }
    ],
    "name": "cancelERC721Listings",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "executeERC721Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_contractAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_priceInWei", "type": "uint256" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "address", "name": "_recipient", "type": "address" }
    ],
    "name": "executeERC721ListingToRecipient",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "getAavegotchiListing",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timePurchased",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC721Listing",
        "name": "listing_",
        "type": "tuple"
      },
      {
        "components": [
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "address", "name": "owner", "type": "address" },
          {
            "internalType": "uint256",
            "name": "randomNumber",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "status", "type": "uint256" },
          {
            "internalType": "int16[6]",
            "name": "numericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "int16[6]",
            "name": "modifiedNumericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "uint16[16]",
            "name": "equippedWearables",
            "type": "uint16[16]"
          },
          {
            "internalType": "address",
            "name": "collateral",
            "type": "address"
          },
          { "internalType": "address", "name": "escrow", "type": "address" },
          {
            "internalType": "uint256",
            "name": "stakedAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumStake",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "kinship", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "lastInteracted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "experience",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toNextLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usedSkillPoints",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "level", "type": "uint256" },
          { "internalType": "uint256", "name": "hauntId", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "baseRarityScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "modifiedRarityScore",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "locked", "type": "bool" },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "itemId",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "author",
                    "type": "string"
                  },
                  {
                    "internalType": "int8[6]",
                    "name": "traitModifiers",
                    "type": "int8[6]"
                  },
                  {
                    "internalType": "bool[16]",
                    "name": "slotPositions",
                    "type": "bool[16]"
                  },
                  {
                    "internalType": "uint8[]",
                    "name": "allowedCollaterals",
                    "type": "uint8[]"
                  },
                  {
                    "components": [
                      { "internalType": "uint8", "name": "x", "type": "uint8" },
                      { "internalType": "uint8", "name": "y", "type": "uint8" },
                      {
                        "internalType": "uint8",
                        "name": "width",
                        "type": "uint8"
                      },
                      {
                        "internalType": "uint8",
                        "name": "height",
                        "type": "uint8"
                      }
                    ],
                    "internalType": "struct Dimensions",
                    "name": "dimensions",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "ghstPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "maxQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint32",
                    "name": "svgId",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint8",
                    "name": "rarityScoreModifier",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "canPurchaseWithGhst",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint16",
                    "name": "minLevel",
                    "type": "uint16"
                  },
                  {
                    "internalType": "bool",
                    "name": "canBeTransferred",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "category",
                    "type": "uint8"
                  },
                  {
                    "internalType": "int16",
                    "name": "kinshipBonus",
                    "type": "int16"
                  },
                  {
                    "internalType": "uint32",
                    "name": "experienceBonus",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct ItemType",
                "name": "itemType",
                "type": "tuple"
              }
            ],
            "internalType": "struct ItemTypeIO[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AavegotchiInfo",
        "name": "aavegotchiInfo_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getAavegotchiListings",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "erc721TokenAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "erc721TokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "category",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "priceInWei",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timeCreated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timePurchased",
                "type": "uint256"
              },
              { "internalType": "bool", "name": "cancelled", "type": "bool" },
              {
                "internalType": "uint16[2]",
                "name": "principalSplit",
                "type": "uint16[2]"
              },
              {
                "internalType": "address",
                "name": "affiliate",
                "type": "address"
              }
            ],
            "internalType": "struct ERC721Listing",
            "name": "listing_",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              { "internalType": "string", "name": "name", "type": "string" },
              { "internalType": "address", "name": "owner", "type": "address" },
              {
                "internalType": "uint256",
                "name": "randomNumber",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
              },
              {
                "internalType": "int16[6]",
                "name": "numericTraits",
                "type": "int16[6]"
              },
              {
                "internalType": "int16[6]",
                "name": "modifiedNumericTraits",
                "type": "int16[6]"
              },
              {
                "internalType": "uint16[16]",
                "name": "equippedWearables",
                "type": "uint16[16]"
              },
              {
                "internalType": "address",
                "name": "collateral",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "escrow",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "stakedAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minimumStake",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "kinship",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lastInteracted",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "experience",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "toNextLevel",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usedSkillPoints",
                "type": "uint256"
              },
              { "internalType": "uint256", "name": "level", "type": "uint256" },
              {
                "internalType": "uint256",
                "name": "hauntId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "baseRarityScore",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "modifiedRarityScore",
                "type": "uint256"
              },
              { "internalType": "bool", "name": "locked", "type": "bool" },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "author",
                        "type": "string"
                      },
                      {
                        "internalType": "int8[6]",
                        "name": "traitModifiers",
                        "type": "int8[6]"
                      },
                      {
                        "internalType": "bool[16]",
                        "name": "slotPositions",
                        "type": "bool[16]"
                      },
                      {
                        "internalType": "uint8[]",
                        "name": "allowedCollaterals",
                        "type": "uint8[]"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint8",
                            "name": "x",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "y",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "width",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "height",
                            "type": "uint8"
                          }
                        ],
                        "internalType": "struct Dimensions",
                        "name": "dimensions",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "ghstPrice",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "maxQuantity",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "totalQuantity",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint32",
                        "name": "svgId",
                        "type": "uint32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "rarityScoreModifier",
                        "type": "uint8"
                      },
                      {
                        "internalType": "bool",
                        "name": "canPurchaseWithGhst",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint16",
                        "name": "minLevel",
                        "type": "uint16"
                      },
                      {
                        "internalType": "bool",
                        "name": "canBeTransferred",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint8",
                        "name": "category",
                        "type": "uint8"
                      },
                      {
                        "internalType": "int16",
                        "name": "kinshipBonus",
                        "type": "int16"
                      },
                      {
                        "internalType": "uint32",
                        "name": "experienceBonus",
                        "type": "uint32"
                      }
                    ],
                    "internalType": "struct ItemType",
                    "name": "itemType",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct ItemTypeIO[]",
                "name": "items",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct AavegotchiInfo",
            "name": "aavegotchiInfo_",
            "type": "tuple"
          }
        ],
        "internalType": "struct ERC721MarketplaceFacet.AavegotchiListing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_erc721TokenId", "type": "uint256" }
    ],
    "name": "getERC721Category",
    "outputs": [
      { "internalType": "uint256", "name": "category_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_listingId", "type": "uint256" }
    ],
    "name": "getERC721Listing",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timePurchased",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC721Listing",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc721TokenId",
        "type": "uint256"
      },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "getERC721ListingFromToken",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timePurchased",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC721Listing",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getERC721Listings",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timePurchased",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC721Listing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getOwnerAavegotchiListings",
    "outputs": [
      {
        "components": [
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "listingId",
                "type": "uint256"
              },
              {
                "internalType": "address",
                "name": "seller",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "erc721TokenAddress",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "erc721TokenId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "category",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "priceInWei",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timeCreated",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "timePurchased",
                "type": "uint256"
              },
              { "internalType": "bool", "name": "cancelled", "type": "bool" },
              {
                "internalType": "uint16[2]",
                "name": "principalSplit",
                "type": "uint16[2]"
              },
              {
                "internalType": "address",
                "name": "affiliate",
                "type": "address"
              }
            ],
            "internalType": "struct ERC721Listing",
            "name": "listing_",
            "type": "tuple"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "tokenId",
                "type": "uint256"
              },
              { "internalType": "string", "name": "name", "type": "string" },
              { "internalType": "address", "name": "owner", "type": "address" },
              {
                "internalType": "uint256",
                "name": "randomNumber",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "status",
                "type": "uint256"
              },
              {
                "internalType": "int16[6]",
                "name": "numericTraits",
                "type": "int16[6]"
              },
              {
                "internalType": "int16[6]",
                "name": "modifiedNumericTraits",
                "type": "int16[6]"
              },
              {
                "internalType": "uint16[16]",
                "name": "equippedWearables",
                "type": "uint16[16]"
              },
              {
                "internalType": "address",
                "name": "collateral",
                "type": "address"
              },
              {
                "internalType": "address",
                "name": "escrow",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "stakedAmount",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "minimumStake",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "kinship",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "lastInteracted",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "experience",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "toNextLevel",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "usedSkillPoints",
                "type": "uint256"
              },
              { "internalType": "uint256", "name": "level", "type": "uint256" },
              {
                "internalType": "uint256",
                "name": "hauntId",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "baseRarityScore",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "modifiedRarityScore",
                "type": "uint256"
              },
              { "internalType": "bool", "name": "locked", "type": "bool" },
              {
                "components": [
                  {
                    "internalType": "uint256",
                    "name": "balance",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "itemId",
                    "type": "uint256"
                  },
                  {
                    "components": [
                      {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "description",
                        "type": "string"
                      },
                      {
                        "internalType": "string",
                        "name": "author",
                        "type": "string"
                      },
                      {
                        "internalType": "int8[6]",
                        "name": "traitModifiers",
                        "type": "int8[6]"
                      },
                      {
                        "internalType": "bool[16]",
                        "name": "slotPositions",
                        "type": "bool[16]"
                      },
                      {
                        "internalType": "uint8[]",
                        "name": "allowedCollaterals",
                        "type": "uint8[]"
                      },
                      {
                        "components": [
                          {
                            "internalType": "uint8",
                            "name": "x",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "y",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "width",
                            "type": "uint8"
                          },
                          {
                            "internalType": "uint8",
                            "name": "height",
                            "type": "uint8"
                          }
                        ],
                        "internalType": "struct Dimensions",
                        "name": "dimensions",
                        "type": "tuple"
                      },
                      {
                        "internalType": "uint256",
                        "name": "ghstPrice",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "maxQuantity",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint256",
                        "name": "totalQuantity",
                        "type": "uint256"
                      },
                      {
                        "internalType": "uint32",
                        "name": "svgId",
                        "type": "uint32"
                      },
                      {
                        "internalType": "uint8",
                        "name": "rarityScoreModifier",
                        "type": "uint8"
                      },
                      {
                        "internalType": "bool",
                        "name": "canPurchaseWithGhst",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint16",
                        "name": "minLevel",
                        "type": "uint16"
                      },
                      {
                        "internalType": "bool",
                        "name": "canBeTransferred",
                        "type": "bool"
                      },
                      {
                        "internalType": "uint8",
                        "name": "category",
                        "type": "uint8"
                      },
                      {
                        "internalType": "int16",
                        "name": "kinshipBonus",
                        "type": "int16"
                      },
                      {
                        "internalType": "uint32",
                        "name": "experienceBonus",
                        "type": "uint32"
                      }
                    ],
                    "internalType": "struct ItemType",
                    "name": "itemType",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct ItemTypeIO[]",
                "name": "items",
                "type": "tuple[]"
              }
            ],
            "internalType": "struct AavegotchiInfo",
            "name": "aavegotchiInfo_",
            "type": "tuple"
          }
        ],
        "internalType": "struct ERC721MarketplaceFacet.AavegotchiListing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_category", "type": "uint256" },
      { "internalType": "string", "name": "_sort", "type": "string" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getOwnerERC721Listings",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "listingId", "type": "uint256" },
          { "internalType": "address", "name": "seller", "type": "address" },
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "erc721TokenId",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "priceInWei",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timeCreated",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "timePurchased",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "cancelled", "type": "bool" },
          {
            "internalType": "uint16[2]",
            "name": "principalSplit",
            "type": "uint16[2]"
          },
          { "internalType": "address", "name": "affiliate", "type": "address" }
        ],
        "internalType": "struct ERC721Listing[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "erc721TokenAddress",
            "type": "address"
          },
          { "internalType": "uint256", "name": "category", "type": "uint256" }
        ],
        "internalType": "struct ERC721MarketplaceFacet.Category[]",
        "name": "_categories",
        "type": "tuple[]"
      }
    ],
    "name": "setERC721Categories",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_erc721TokenAddress",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "_erc721TokenId",
        "type": "uint256"
      },
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "updateERC721Listing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_erc20Contract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_depositAmount",
        "type": "uint256"
      }
    ],
    "name": "Erc20Deposited",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_erc20Contract",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_transferAmount",
        "type": "uint256"
      }
    ],
    "name": "TransferEscrow",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" },
      {
        "internalType": "address[]",
        "name": "_erc20Contracts",
        "type": "address[]"
      },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "batchDepositERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "batchDepositGHST",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_erc20Contract",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "depositERC20",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "address", "name": "_erc20Contract", "type": "address" }
    ],
    "name": "escrowBalance",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "gotchiEscrow",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_erc20Contract",
        "type": "address"
      },
      { "internalType": "address", "name": "_recipient", "type": "address" },
      {
        "internalType": "uint256",
        "name": "_transferAmount",
        "type": "uint256"
      }
    ],
    "name": "transferEscrow",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" },
      { "internalType": "uint96", "name": "_initialCost", "type": "uint96" },
      { "internalType": "uint32", "name": "_period", "type": "uint32" },
      {
        "internalType": "uint8[3]",
        "name": "_revenueSplit",
        "type": "uint8[3]"
      },
      {
        "internalType": "address",
        "name": "_originalOwner",
        "type": "address"
      },
      { "internalType": "address", "name": "_thirdParty", "type": "address" },
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      {
        "internalType": "address[]",
        "name": "_revenueTokens",
        "type": "address[]"
      }
    ],
    "name": "addGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint32", "name": "tokenId", "type": "uint32" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLendingFacet.AddGotchiListing",
        "name": "p",
        "type": "tuple"
      }
    ],
    "name": "addGotchiListing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_listingId", "type": "uint32" },
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" },
      { "internalType": "uint96", "name": "_initialCost", "type": "uint96" },
      { "internalType": "uint32", "name": "_period", "type": "uint32" },
      {
        "internalType": "uint8[3]",
        "name": "_revenueSplit",
        "type": "uint8[3]"
      }
    ],
    "name": "agreeGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint32", "name": "tokenId", "type": "uint32" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLendingFacet.AddGotchiListing[]",
        "name": "listings",
        "type": "tuple[]"
      }
    ],
    "name": "batchAddGotchiListing",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32[]", "name": "_listingIds", "type": "uint32[]" }
    ],
    "name": "batchCancelGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint32[]",
        "name": "_erc721TokenIds",
        "type": "uint32[]"
      }
    ],
    "name": "batchCancelGotchiLendingByToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32[]", "name": "_tokenIds", "type": "uint32[]" }
    ],
    "name": "batchClaimAndEndAndRelistGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32[]", "name": "_tokenIds", "type": "uint32[]" }
    ],
    "name": "batchClaimAndEndGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32[]", "name": "_tokenIds", "type": "uint32[]" }
    ],
    "name": "batchClaimGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint32", "name": "tokenId", "type": "uint32" },
          { "internalType": "uint32", "name": "extension", "type": "uint32" }
        ],
        "internalType": "struct GotchiLendingFacet.BatchRenew[]",
        "name": "_batchRenewParams",
        "type": "tuple[]"
      }
    ],
    "name": "batchExtendGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_listingId", "type": "uint32" }
    ],
    "name": "cancelGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" }
    ],
    "name": "cancelGotchiLendingByToken",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" }
    ],
    "name": "claimAndEndAndRelistGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" }
    ],
    "name": "claimAndEndGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" }
    ],
    "name": "claimGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" },
      { "internalType": "uint32", "name": "extension", "type": "uint32" }
    ],
    "name": "extendGotchiLending",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint16[16]",
        "name": "_oldWearables",
        "type": "uint16[16]"
      },
      {
        "indexed": false,
        "internalType": "uint16[16]",
        "name": "_newWearables",
        "type": "uint16[16]"
      }
    ],
    "name": "EquipWearables",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_toContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenTypeId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferToParent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_itemIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "UseConsumables",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "balanceOf",
    "outputs": [
      { "internalType": "uint256", "name": "bal_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "_owners", "type": "address[]" },
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" }
    ],
    "name": "balanceOfBatch",
    "outputs": [
      { "internalType": "uint256[]", "name": "bals", "type": "uint256[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenContract",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" }
    ],
    "name": "balanceOfToken",
    "outputs": [
      { "internalType": "uint256", "name": "value", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      {
        "internalType": "uint16[16]",
        "name": "_wearablesToEquip",
        "type": "uint16[16]"
      }
    ],
    "name": "equipWearables",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "equippedWearables",
    "outputs": [
      {
        "internalType": "uint16[16]",
        "name": "wearableIds_",
        "type": "uint16[16]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256[]",
        "name": "_wearableIds",
        "type": "uint256[]"
      }
    ],
    "name": "findWearableSets",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "wearableSetIds_",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_itemId", "type": "uint256" }
    ],
    "name": "getItemType",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "author", "type": "string" },
          {
            "internalType": "int8[6]",
            "name": "traitModifiers",
            "type": "int8[6]"
          },
          {
            "internalType": "bool[16]",
            "name": "slotPositions",
            "type": "bool[16]"
          },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          },
          { "internalType": "uint256", "name": "ghstPrice", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "maxQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          { "internalType": "uint32", "name": "svgId", "type": "uint32" },
          {
            "internalType": "uint8",
            "name": "rarityScoreModifier",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "canPurchaseWithGhst",
            "type": "bool"
          },
          { "internalType": "uint16", "name": "minLevel", "type": "uint16" },
          {
            "internalType": "bool",
            "name": "canBeTransferred",
            "type": "bool"
          },
          { "internalType": "uint8", "name": "category", "type": "uint8" },
          { "internalType": "int16", "name": "kinshipBonus", "type": "int16" },
          {
            "internalType": "uint32",
            "name": "experienceBonus",
            "type": "uint32"
          }
        ],
        "internalType": "struct ItemType",
        "name": "itemType_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" }
    ],
    "name": "getItemTypes",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "string", "name": "description", "type": "string" },
          { "internalType": "string", "name": "author", "type": "string" },
          {
            "internalType": "int8[6]",
            "name": "traitModifiers",
            "type": "int8[6]"
          },
          {
            "internalType": "bool[16]",
            "name": "slotPositions",
            "type": "bool[16]"
          },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          },
          { "internalType": "uint256", "name": "ghstPrice", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "maxQuantity",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "totalQuantity",
            "type": "uint256"
          },
          { "internalType": "uint32", "name": "svgId", "type": "uint32" },
          {
            "internalType": "uint8",
            "name": "rarityScoreModifier",
            "type": "uint8"
          },
          {
            "internalType": "bool",
            "name": "canPurchaseWithGhst",
            "type": "bool"
          },
          { "internalType": "uint16", "name": "minLevel", "type": "uint16" },
          {
            "internalType": "bool",
            "name": "canBeTransferred",
            "type": "bool"
          },
          { "internalType": "uint8", "name": "category", "type": "uint8" },
          { "internalType": "int16", "name": "kinshipBonus", "type": "int16" },
          {
            "internalType": "uint32",
            "name": "experienceBonus",
            "type": "uint32"
          }
        ],
        "internalType": "struct ItemType[]",
        "name": "itemTypes_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_index", "type": "uint256" }
    ],
    "name": "getWearableSet",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "internalType": "struct WearableSet",
        "name": "wearableSet_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWearableSets",
    "outputs": [
      {
        "components": [
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "uint8[]",
            "name": "allowedCollaterals",
            "type": "uint8[]"
          },
          {
            "internalType": "uint16[]",
            "name": "wearableIds",
            "type": "uint16[]"
          },
          {
            "internalType": "int8[5]",
            "name": "traitsBonuses",
            "type": "int8[5]"
          }
        ],
        "internalType": "struct WearableSet[]",
        "name": "wearableSets_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_account", "type": "address" }
    ],
    "name": "itemBalances",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          { "internalType": "uint256", "name": "balance", "type": "uint256" }
        ],
        "internalType": "struct ItemsFacet.ItemIdIO[]",
        "name": "bals_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenContract",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "itemBalancesOfToken",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          { "internalType": "uint256", "name": "balance", "type": "uint256" }
        ],
        "internalType": "struct ItemsFacet.ItemIdIO[]",
        "name": "bals_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_tokenContract",
        "type": "address"
      },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "itemBalancesOfTokenWithTypes",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "balance", "type": "uint256" },
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          {
            "components": [
              { "internalType": "string", "name": "name", "type": "string" },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              { "internalType": "string", "name": "author", "type": "string" },
              {
                "internalType": "int8[6]",
                "name": "traitModifiers",
                "type": "int8[6]"
              },
              {
                "internalType": "bool[16]",
                "name": "slotPositions",
                "type": "bool[16]"
              },
              {
                "internalType": "uint8[]",
                "name": "allowedCollaterals",
                "type": "uint8[]"
              },
              {
                "components": [
                  { "internalType": "uint8", "name": "x", "type": "uint8" },
                  { "internalType": "uint8", "name": "y", "type": "uint8" },
                  { "internalType": "uint8", "name": "width", "type": "uint8" },
                  { "internalType": "uint8", "name": "height", "type": "uint8" }
                ],
                "internalType": "struct Dimensions",
                "name": "dimensions",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "ghstPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "maxQuantity",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalQuantity",
                "type": "uint256"
              },
              { "internalType": "uint32", "name": "svgId", "type": "uint32" },
              {
                "internalType": "uint8",
                "name": "rarityScoreModifier",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "canPurchaseWithGhst",
                "type": "bool"
              },
              {
                "internalType": "uint16",
                "name": "minLevel",
                "type": "uint16"
              },
              {
                "internalType": "bool",
                "name": "canBeTransferred",
                "type": "bool"
              },
              { "internalType": "uint8", "name": "category", "type": "uint8" },
              {
                "internalType": "int16",
                "name": "kinshipBonus",
                "type": "int16"
              },
              {
                "internalType": "uint32",
                "name": "experienceBonus",
                "type": "uint32"
              }
            ],
            "internalType": "struct ItemType",
            "name": "itemType",
            "type": "tuple"
          }
        ],
        "internalType": "struct ItemTypeIO[]",
        "name": "itemBalancesOfTokenWithTypes_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_owner", "type": "address" }
    ],
    "name": "itemBalancesWithTypes",
    "outputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "balance", "type": "uint256" },
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          {
            "components": [
              { "internalType": "string", "name": "name", "type": "string" },
              {
                "internalType": "string",
                "name": "description",
                "type": "string"
              },
              { "internalType": "string", "name": "author", "type": "string" },
              {
                "internalType": "int8[6]",
                "name": "traitModifiers",
                "type": "int8[6]"
              },
              {
                "internalType": "bool[16]",
                "name": "slotPositions",
                "type": "bool[16]"
              },
              {
                "internalType": "uint8[]",
                "name": "allowedCollaterals",
                "type": "uint8[]"
              },
              {
                "components": [
                  { "internalType": "uint8", "name": "x", "type": "uint8" },
                  { "internalType": "uint8", "name": "y", "type": "uint8" },
                  { "internalType": "uint8", "name": "width", "type": "uint8" },
                  { "internalType": "uint8", "name": "height", "type": "uint8" }
                ],
                "internalType": "struct Dimensions",
                "name": "dimensions",
                "type": "tuple"
              },
              {
                "internalType": "uint256",
                "name": "ghstPrice",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "maxQuantity",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "totalQuantity",
                "type": "uint256"
              },
              { "internalType": "uint32", "name": "svgId", "type": "uint32" },
              {
                "internalType": "uint8",
                "name": "rarityScoreModifier",
                "type": "uint8"
              },
              {
                "internalType": "bool",
                "name": "canPurchaseWithGhst",
                "type": "bool"
              },
              {
                "internalType": "uint16",
                "name": "minLevel",
                "type": "uint16"
              },
              {
                "internalType": "bool",
                "name": "canBeTransferred",
                "type": "bool"
              },
              { "internalType": "uint8", "name": "category", "type": "uint8" },
              {
                "internalType": "int16",
                "name": "kinshipBonus",
                "type": "int16"
              },
              {
                "internalType": "uint32",
                "name": "experienceBonus",
                "type": "uint32"
              }
            ],
            "internalType": "struct ItemType",
            "name": "itemType",
            "type": "tuple"
          }
        ],
        "internalType": "struct ItemTypeIO[]",
        "name": "output_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_value", "type": "string" }
    ],
    "name": "setBaseURI",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "totalWearableSets",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
    "name": "uri",
    "outputs": [{ "internalType": "string", "name": "", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "useConsumables",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_toContract", "type": "address" },
      {
        "internalType": "uint256[]",
        "name": "_toTokenIds",
        "type": "uint256[]"
      },
      { "internalType": "uint256[][]", "name": "_ids", "type": "uint256[][]" },
      {
        "internalType": "uint256[][]",
        "name": "_values",
        "type": "uint256[][]"
      }
    ],
    "name": "batchBatchTransferToParent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_fromContract", "type": "address" },
      { "internalType": "uint256", "name": "_fromTokenId", "type": "uint256" },
      { "internalType": "address", "name": "_toContract", "type": "address" },
      { "internalType": "uint256", "name": "_toTokenId", "type": "uint256" },
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "batchTransferAsChild",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_fromContract", "type": "address" },
      { "internalType": "uint256", "name": "_fromTokenId", "type": "uint256" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "batchTransferFromParent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_toContract", "type": "address" },
      { "internalType": "uint256", "name": "_toTokenId", "type": "uint256" },
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "batchTransferToParent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "extractItemsFromDiamond",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" }
    ],
    "name": "extractItemsFromSacrificedGotchi",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "", "type": "uint256[]" },
      { "internalType": "bytes", "name": "", "type": "bytes" }
    ],
    "name": "onERC1155BatchReceived",
    "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "address", "name": "", "type": "address" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "uint256", "name": "", "type": "uint256" },
      { "internalType": "bytes", "name": "", "type": "bytes" }
    ],
    "name": "onERC1155Received",
    "outputs": [{ "internalType": "bytes4", "name": "", "type": "bytes4" }],
    "stateMutability": "pure",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_ids", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "_values", "type": "uint256[]" },
      { "internalType": "bytes", "name": "_data", "type": "bytes" }
    ],
    "name": "safeBatchTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" },
      { "internalType": "uint256", "name": "_value", "type": "uint256" },
      { "internalType": "bytes", "name": "_data", "type": "bytes" }
    ],
    "name": "safeTransferFrom",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_fromContract", "type": "address" },
      { "internalType": "uint256", "name": "_fromTokenId", "type": "uint256" },
      { "internalType": "address", "name": "_toContract", "type": "address" },
      { "internalType": "uint256", "name": "_toTokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" },
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "transferAsChild",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_fromContract", "type": "address" },
      { "internalType": "uint256", "name": "_fromTokenId", "type": "uint256" },
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" },
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "transferFromParent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_from", "type": "address" },
      { "internalType": "address", "name": "_toContract", "type": "address" },
      { "internalType": "uint256", "name": "_toTokenId", "type": "uint256" },
      { "internalType": "uint256", "name": "_id", "type": "uint256" },
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "transferToParent",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lendingOperator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "isLendingOperator",
        "type": "bool"
      }
    ],
    "name": "LendingOperatorSet",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "tokens", "type": "address[]" }
    ],
    "name": "allowRevenueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_lendingOperator",
        "type": "address"
      },
      {
        "components": [
          { "internalType": "uint32", "name": "_tokenId", "type": "uint32" },
          {
            "internalType": "bool",
            "name": "_isLendingOperator",
            "type": "bool"
          }
        ],
        "internalType": "struct LendingGetterAndSetterFacet.LendingOperatorInputs[]",
        "name": "_inputs",
        "type": "tuple[]"
      }
    ],
    "name": "batchSetLendingOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address[]", "name": "tokens", "type": "address[]" }
    ],
    "name": "disallowRevenueTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" }
    ],
    "name": "getGotchiLendingFromToken",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "lender", "type": "address" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "address", "name": "borrower", "type": "address" },
          { "internalType": "uint32", "name": "listingId", "type": "uint32" },
          {
            "internalType": "uint32",
            "name": "erc721TokenId",
            "type": "uint32"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          { "internalType": "uint40", "name": "timeCreated", "type": "uint40" },
          { "internalType": "uint40", "name": "timeAgreed", "type": "uint40" },
          { "internalType": "bool", "name": "canceled", "type": "bool" },
          { "internalType": "bool", "name": "completed", "type": "bool" },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          { "internalType": "uint40", "name": "lastClaimed", "type": "uint40" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLending",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" }
    ],
    "name": "getGotchiLendingIdByToken",
    "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_listingId", "type": "uint32" }
    ],
    "name": "getGotchiLendingListingInfo",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "lender", "type": "address" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "address", "name": "borrower", "type": "address" },
          { "internalType": "uint32", "name": "listingId", "type": "uint32" },
          {
            "internalType": "uint32",
            "name": "erc721TokenId",
            "type": "uint32"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          { "internalType": "uint40", "name": "timeCreated", "type": "uint40" },
          { "internalType": "uint40", "name": "timeAgreed", "type": "uint40" },
          { "internalType": "bool", "name": "canceled", "type": "bool" },
          { "internalType": "bool", "name": "completed", "type": "bool" },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          { "internalType": "uint40", "name": "lastClaimed", "type": "uint40" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLending",
        "name": "listing_",
        "type": "tuple"
      },
      {
        "components": [
          { "internalType": "uint256", "name": "tokenId", "type": "uint256" },
          { "internalType": "string", "name": "name", "type": "string" },
          { "internalType": "address", "name": "owner", "type": "address" },
          {
            "internalType": "uint256",
            "name": "randomNumber",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "status", "type": "uint256" },
          {
            "internalType": "int16[6]",
            "name": "numericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "int16[6]",
            "name": "modifiedNumericTraits",
            "type": "int16[6]"
          },
          {
            "internalType": "uint16[16]",
            "name": "equippedWearables",
            "type": "uint16[16]"
          },
          {
            "internalType": "address",
            "name": "collateral",
            "type": "address"
          },
          { "internalType": "address", "name": "escrow", "type": "address" },
          {
            "internalType": "uint256",
            "name": "stakedAmount",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "minimumStake",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "kinship", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "lastInteracted",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "experience",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "toNextLevel",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "usedSkillPoints",
            "type": "uint256"
          },
          { "internalType": "uint256", "name": "level", "type": "uint256" },
          { "internalType": "uint256", "name": "hauntId", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "baseRarityScore",
            "type": "uint256"
          },
          {
            "internalType": "uint256",
            "name": "modifiedRarityScore",
            "type": "uint256"
          },
          { "internalType": "bool", "name": "locked", "type": "bool" },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "balance",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "itemId",
                "type": "uint256"
              },
              {
                "components": [
                  {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "description",
                    "type": "string"
                  },
                  {
                    "internalType": "string",
                    "name": "author",
                    "type": "string"
                  },
                  {
                    "internalType": "int8[6]",
                    "name": "traitModifiers",
                    "type": "int8[6]"
                  },
                  {
                    "internalType": "bool[16]",
                    "name": "slotPositions",
                    "type": "bool[16]"
                  },
                  {
                    "internalType": "uint8[]",
                    "name": "allowedCollaterals",
                    "type": "uint8[]"
                  },
                  {
                    "components": [
                      { "internalType": "uint8", "name": "x", "type": "uint8" },
                      { "internalType": "uint8", "name": "y", "type": "uint8" },
                      {
                        "internalType": "uint8",
                        "name": "width",
                        "type": "uint8"
                      },
                      {
                        "internalType": "uint8",
                        "name": "height",
                        "type": "uint8"
                      }
                    ],
                    "internalType": "struct Dimensions",
                    "name": "dimensions",
                    "type": "tuple"
                  },
                  {
                    "internalType": "uint256",
                    "name": "ghstPrice",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "maxQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint256",
                    "name": "totalQuantity",
                    "type": "uint256"
                  },
                  {
                    "internalType": "uint32",
                    "name": "svgId",
                    "type": "uint32"
                  },
                  {
                    "internalType": "uint8",
                    "name": "rarityScoreModifier",
                    "type": "uint8"
                  },
                  {
                    "internalType": "bool",
                    "name": "canPurchaseWithGhst",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint16",
                    "name": "minLevel",
                    "type": "uint16"
                  },
                  {
                    "internalType": "bool",
                    "name": "canBeTransferred",
                    "type": "bool"
                  },
                  {
                    "internalType": "uint8",
                    "name": "category",
                    "type": "uint8"
                  },
                  {
                    "internalType": "int16",
                    "name": "kinshipBonus",
                    "type": "int16"
                  },
                  {
                    "internalType": "uint32",
                    "name": "experienceBonus",
                    "type": "uint32"
                  }
                ],
                "internalType": "struct ItemType",
                "name": "itemType",
                "type": "tuple"
              }
            ],
            "internalType": "struct ItemTypeIO[]",
            "name": "items",
            "type": "tuple[]"
          }
        ],
        "internalType": "struct AavegotchiInfo",
        "name": "aavegotchiInfo_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_status", "type": "bytes32" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getGotchiLendings",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "lender", "type": "address" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "address", "name": "borrower", "type": "address" },
          { "internalType": "uint32", "name": "listingId", "type": "uint32" },
          {
            "internalType": "uint32",
            "name": "erc721TokenId",
            "type": "uint32"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          { "internalType": "uint40", "name": "timeCreated", "type": "uint40" },
          { "internalType": "uint40", "name": "timeAgreed", "type": "uint40" },
          { "internalType": "bool", "name": "canceled", "type": "bool" },
          { "internalType": "bool", "name": "completed", "type": "bool" },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          { "internalType": "uint40", "name": "lastClaimed", "type": "uint40" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLending[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getGotchiLendingsLength",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_listingId", "type": "uint32" }
    ],
    "name": "getLendingListingInfo",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "lender", "type": "address" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "address", "name": "borrower", "type": "address" },
          { "internalType": "uint32", "name": "listingId", "type": "uint32" },
          {
            "internalType": "uint32",
            "name": "erc721TokenId",
            "type": "uint32"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          { "internalType": "uint40", "name": "timeCreated", "type": "uint40" },
          { "internalType": "uint40", "name": "timeAgreed", "type": "uint40" },
          { "internalType": "bool", "name": "canceled", "type": "bool" },
          { "internalType": "bool", "name": "completed", "type": "bool" },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          { "internalType": "uint40", "name": "lastClaimed", "type": "uint40" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLending",
        "name": "listing_",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_lender", "type": "address" },
      { "internalType": "bytes32", "name": "_status", "type": "bytes32" },
      { "internalType": "uint256", "name": "_length", "type": "uint256" }
    ],
    "name": "getOwnerGotchiLendings",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "lender", "type": "address" },
          { "internalType": "uint96", "name": "initialCost", "type": "uint96" },
          { "internalType": "address", "name": "borrower", "type": "address" },
          { "internalType": "uint32", "name": "listingId", "type": "uint32" },
          {
            "internalType": "uint32",
            "name": "erc721TokenId",
            "type": "uint32"
          },
          { "internalType": "uint32", "name": "whitelistId", "type": "uint32" },
          {
            "internalType": "address",
            "name": "originalOwner",
            "type": "address"
          },
          { "internalType": "uint40", "name": "timeCreated", "type": "uint40" },
          { "internalType": "uint40", "name": "timeAgreed", "type": "uint40" },
          { "internalType": "bool", "name": "canceled", "type": "bool" },
          { "internalType": "bool", "name": "completed", "type": "bool" },
          {
            "internalType": "address",
            "name": "thirdParty",
            "type": "address"
          },
          {
            "internalType": "uint8[3]",
            "name": "revenueSplit",
            "type": "uint8[3]"
          },
          { "internalType": "uint40", "name": "lastClaimed", "type": "uint40" },
          { "internalType": "uint32", "name": "period", "type": "uint32" },
          {
            "internalType": "address[]",
            "name": "revenueTokens",
            "type": "address[]"
          }
        ],
        "internalType": "struct GotchiLending[]",
        "name": "listings_",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_lender", "type": "address" },
      { "internalType": "bytes32", "name": "_status", "type": "bytes32" }
    ],
    "name": "getOwnerGotchiLendingsLength",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" },
      {
        "internalType": "address[]",
        "name": "_revenueTokens",
        "type": "address[]"
      }
    ],
    "name": "getTokenBalancesInEscrow",
    "outputs": [
      {
        "internalType": "uint256[]",
        "name": "revenueBalances",
        "type": "uint256[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" }
    ],
    "name": "isAavegotchiLent",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_erc721TokenId", "type": "uint32" }
    ],
    "name": "isAavegotchiListed",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_lender", "type": "address" },
      {
        "internalType": "address",
        "name": "_lendingOperator",
        "type": "address"
      },
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" }
    ],
    "name": "isLendingOperator",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "token", "type": "address" }
    ],
    "name": "revenueTokenAllowed",
    "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "_lendingOperator",
        "type": "address"
      },
      { "internalType": "uint32", "name": "_tokenId", "type": "uint32" },
      { "internalType": "bool", "name": "_isLendingOperator", "type": "bool" }
    ],
    "name": "setLendingOperator",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "userAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address payable",
        "name": "relayerAddress",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "functionSignature",
        "type": "bytes"
      }
    ],
    "name": "MetaTransactionExecuted",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "userAddress", "type": "address" },
      { "internalType": "bytes", "name": "functionSignature", "type": "bytes" },
      { "internalType": "bytes32", "name": "sigR", "type": "bytes32" },
      { "internalType": "bytes32", "name": "sigS", "type": "bytes32" },
      { "internalType": "uint8", "name": "sigV", "type": "uint8" }
    ],
    "name": "executeMetaTransaction",
    "outputs": [{ "internalType": "bytes", "name": "", "type": "bytes" }],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "user", "type": "address" }
    ],
    "name": "getNonce",
    "outputs": [
      { "internalType": "uint256", "name": "nonce_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_numAavegotchisToPurchase",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "BuyPortals",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_numAavegotchisToPurchase",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_hauntId",
        "type": "uint256"
      }
    ],
    "name": "MintPortals",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_numAavegotchisToPurchase",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_hauntId",
        "type": "uint256"
      }
    ],
    "name": "Xingyun",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_itemIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "PurchaseItemsWithGhst",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_itemIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "PurchaseItemsWithVouchers",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_buyer",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_itemIds",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_totalPrice",
        "type": "uint256"
      }
    ],
    "name": "PurchaseTransferItemsWithGhst",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_ghst", "type": "uint256" }
    ],
    "name": "buyPortals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_amount", "type": "uint256" }
    ],
    "name": "mintPortals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "purchaseItemsWithGhst",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "internalType": "uint256[]",
        "name": "_quantities",
        "type": "uint256[]"
      }
    ],
    "name": "purchaseTransferItemsWithGhst",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_svgType", "type": "bytes32" },
      { "internalType": "uint256", "name": "_numLayers", "type": "uint256" }
    ],
    "name": "deleteLastSvgLayers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "getAavegotchiSvg",
    "outputs": [{ "internalType": "string", "name": "ag_", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_itemId", "type": "uint256" }
    ],
    "name": "getItemSvg",
    "outputs": [{ "internalType": "string", "name": "ag_", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getNextSleeveId",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_svgType", "type": "bytes32" },
      { "internalType": "uint256", "name": "_itemId", "type": "uint256" }
    ],
    "name": "getSvg",
    "outputs": [{ "internalType": "string", "name": "svg_", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_svgType", "type": "bytes32" },
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" }
    ],
    "name": "getSvgs",
    "outputs": [
      { "internalType": "string[]", "name": "svgs_", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "portalAavegotchisSvg",
    "outputs": [
      { "internalType": "string[10]", "name": "svg_", "type": "string[10]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_collateralType",
        "type": "address"
      },
      {
        "internalType": "int16[6]",
        "name": "_numericTraits",
        "type": "int16[6]"
      },
      {
        "internalType": "uint16[16]",
        "name": "equippedWearables",
        "type": "uint16[16]"
      }
    ],
    "name": "previewAavegotchi",
    "outputs": [{ "internalType": "string", "name": "ag_", "type": "string" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" },
      {
        "components": [
          { "internalType": "uint8", "name": "x", "type": "uint8" },
          { "internalType": "uint8", "name": "y", "type": "uint8" },
          { "internalType": "uint8", "name": "width", "type": "uint8" },
          { "internalType": "uint8", "name": "height", "type": "uint8" }
        ],
        "internalType": "struct Dimensions[]",
        "name": "_dimensions",
        "type": "tuple[]"
      }
    ],
    "name": "setItemsDimensions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "sleeveId", "type": "uint256" },
          { "internalType": "uint256", "name": "wearableId", "type": "uint256" }
        ],
        "internalType": "struct SvgFacet.Sleeve[]",
        "name": "_sleeves",
        "type": "tuple[]"
      }
    ],
    "name": "setSleeves",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_svg", "type": "string" },
      {
        "components": [
          { "internalType": "bytes32", "name": "svgType", "type": "bytes32" },
          { "internalType": "uint256[]", "name": "sizes", "type": "uint256[]" }
        ],
        "internalType": "struct LibSvg.SvgTypeAndSizes[]",
        "name": "_typesAndSizes",
        "type": "tuple[]"
      }
    ],
    "name": "storeSvg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_svg", "type": "string" },
      {
        "components": [
          { "internalType": "bytes32", "name": "svgType", "type": "bytes32" },
          { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" },
          { "internalType": "uint256[]", "name": "sizes", "type": "uint256[]" }
        ],
        "internalType": "struct LibSvg.SvgTypeAndIdsAndSizes[]",
        "name": "_typesAndIdsAndSizes",
        "type": "tuple[]"
      }
    ],
    "name": "updateSvg",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_tokenId", "type": "uint256" }
    ],
    "name": "getAavegotchiSideSvgs",
    "outputs": [
      { "internalType": "string[]", "name": "ag_", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_itemId", "type": "uint256" }
    ],
    "name": "getItemSvgs",
    "outputs": [
      { "internalType": "string[]", "name": "svg_", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_itemIds", "type": "uint256[]" }
    ],
    "name": "getItemsSvgs",
    "outputs": [
      { "internalType": "string[][]", "name": "svgs_", "type": "string[][]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_hauntId", "type": "uint256" },
      {
        "internalType": "address",
        "name": "_collateralType",
        "type": "address"
      },
      {
        "internalType": "int16[6]",
        "name": "_numericTraits",
        "type": "int16[6]"
      },
      {
        "internalType": "uint16[16]",
        "name": "equippedWearables",
        "type": "uint16[16]"
      }
    ],
    "name": "previewSideAavegotchi",
    "outputs": [
      { "internalType": "string[]", "name": "ag_", "type": "string[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          { "internalType": "string", "name": "side", "type": "string" },
          {
            "components": [
              { "internalType": "uint8", "name": "x", "type": "uint8" },
              { "internalType": "uint8", "name": "y", "type": "uint8" },
              { "internalType": "uint8", "name": "width", "type": "uint8" },
              { "internalType": "uint8", "name": "height", "type": "uint8" }
            ],
            "internalType": "struct Dimensions",
            "name": "dimensions",
            "type": "tuple"
          }
        ],
        "internalType": "struct SvgViewsFacet.SideViewDimensionsArgs[]",
        "name": "_sideViewDimensions",
        "type": "tuple[]"
      }
    ],
    "name": "setSideViewDimensions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "uint256", "name": "itemId", "type": "uint256" },
          {
            "internalType": "uint256",
            "name": "slotPosition",
            "type": "uint256"
          },
          { "internalType": "bytes32", "name": "side", "type": "bytes32" },
          { "internalType": "bool", "name": "exceptionBool", "type": "bool" }
        ],
        "internalType": "struct SvgViewsFacet.SideViewExceptions[]",
        "name": "_sideViewExceptions",
        "type": "tuple[]"
      }
    ],
    "name": "setSideViewExceptions",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_tokenIds",
        "type": "uint256[]"
      }
    ],
    "name": "OpenPortals",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      }
    ],
    "name": "PortalOpened",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "randomNumber",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_vrfTimeSet",
        "type": "uint256"
      }
    ],
    "name": "VrfRandomNumber",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_newFee", "type": "uint256" },
      { "internalType": "bytes32", "name": "_keyHash", "type": "bytes32" },
      {
        "internalType": "address",
        "name": "_vrfCoordinator",
        "type": "address"
      },
      { "internalType": "address", "name": "_link", "type": "address" }
    ],
    "name": "changeVrf",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "keyHash",
    "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "link",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "linkBalance",
    "outputs": [
      { "internalType": "uint256", "name": "linkBalance_", "type": "uint256" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256[]", "name": "_tokenIds", "type": "uint256[]" }
    ],
    "name": "openPortals",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "bytes32", "name": "_requestId", "type": "bytes32" },
      { "internalType": "uint256", "name": "_randomNumber", "type": "uint256" }
    ],
    "name": "rawFulfillRandomness",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "address", "name": "_to", "type": "address" },
      { "internalType": "uint256", "name": "_value", "type": "uint256" }
    ],
    "name": "removeLinkTokens",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "vrfCoordinator",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "MigrateVouchers",
    "type": "event"
  },
  {
    "inputs": [
      {
        "components": [
          { "internalType": "address", "name": "owner", "type": "address" },
          { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" },
          { "internalType": "uint256[]", "name": "values", "type": "uint256[]" }
        ],
        "internalType": "struct VoucherMigrationFacet.VouchersOwner[]",
        "name": "_vouchersOwners",
        "type": "tuple[]"
      }
    ],
    "name": "migrateVouchers",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      }
    ],
    "name": "WhitelistCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "WhitelistOwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      }
    ],
    "name": "WhitelistUpdated",
    "type": "event"
  },
  {
    "inputs": [
      { "internalType": "string", "name": "_name", "type": "string" },
      {
        "internalType": "address[]",
        "name": "_whitelistAddresses",
        "type": "address[]"
      }
    ],
    "name": "createWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" }
    ],
    "name": "getBorrowLimit",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" }
    ],
    "name": "getWhitelist",
    "outputs": [
      {
        "components": [
          { "internalType": "address", "name": "owner", "type": "address" },
          { "internalType": "string", "name": "name", "type": "string" },
          {
            "internalType": "address[]",
            "name": "addresses",
            "type": "address[]"
          }
        ],
        "internalType": "struct Whitelist",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      { "internalType": "uint256", "name": "_actionRight", "type": "uint256" }
    ],
    "name": "getWhitelistAccessRight",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getWhitelistsLength",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      {
        "internalType": "address",
        "name": "_whitelistAddress",
        "type": "address"
      }
    ],
    "name": "isWhitelisted",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      {
        "internalType": "address[]",
        "name": "_whitelistAddresses",
        "type": "address[]"
      }
    ],
    "name": "removeAddressesFromWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      { "internalType": "uint256", "name": "_borrowlimit", "type": "uint256" }
    ],
    "name": "setBorrowLimit",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      { "internalType": "uint256", "name": "_actionRight", "type": "uint256" },
      { "internalType": "uint256", "name": "_accessRight", "type": "uint256" }
    ],
    "name": "setWhitelistAccessRight",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      {
        "internalType": "address",
        "name": "_whitelistOwner",
        "type": "address"
      }
    ],
    "name": "transferOwnershipOfWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" },
      {
        "internalType": "address[]",
        "name": "_whitelistAddresses",
        "type": "address[]"
      }
    ],
    "name": "updateWhitelist",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "whitelistId", "type": "uint32" }
    ],
    "name": "whitelistExists",
    "outputs": [{ "internalType": "bool", "name": "exists", "type": "bool" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint32", "name": "_whitelistId", "type": "uint32" }
    ],
    "name": "whitelistOwner",
    "outputs": [{ "internalType": "address", "name": "", "type": "address" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "kinship",
        "type": "uint256"
      }
    ],
    "name": "AavegotchiInteract",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC1155ListingCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC1155ListingRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "quantity",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "priceInWei",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "UpdateERC1155Listing",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC721ListingCancelled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "listingId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "category",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "ERC721ListingRemoved",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      }
    ],
    "name": "GotchiLendingAdd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "initialCost",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "period",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint8[3]",
        "name": "revenueSplit",
        "type": "uint8[3]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originalOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "thirdParty",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "revenueTokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeCreated",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingAdded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "time",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingCancel",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "initialCost",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "period",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint8[3]",
        "name": "revenueSplit",
        "type": "uint8[3]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originalOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "thirdParty",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "revenueTokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeCanceled",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingCanceled",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "tokenAddresses",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      }
    ],
    "name": "GotchiLendingClaim",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "initialCost",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "period",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint8[3]",
        "name": "revenueSplit",
        "type": "uint8[3]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originalOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "thirdParty",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "revenueTokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "amounts",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeClaimed",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingClaimed",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      }
    ],
    "name": "GotchiLendingEnd",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "initialCost",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "period",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint8[3]",
        "name": "revenueSplit",
        "type": "uint8[3]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originalOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "thirdParty",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "revenueTokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeEnded",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingEnded",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      }
    ],
    "name": "GotchiLendingExecute",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "listingId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "lender",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "borrower",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "tokenId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint96",
        "name": "initialCost",
        "type": "uint96"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "period",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint8[3]",
        "name": "revenueSplit",
        "type": "uint8[3]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "originalOwner",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "thirdParty",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "address[]",
        "name": "revenueTokens",
        "type": "address[]"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "timeAgreed",
        "type": "uint256"
      }
    ],
    "name": "GotchiLendingExecuted",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          { "internalType": "bytes32", "name": "svgType", "type": "bytes32" },
          { "internalType": "uint256[]", "name": "sizes", "type": "uint256[]" }
        ],
        "indexed": false,
        "internalType": "struct LibSvg.SvgTypeAndSizes[]",
        "name": "_typesAndSizes",
        "type": "tuple[]"
      }
    ],
    "name": "StoreSvg",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          { "internalType": "bytes32", "name": "svgType", "type": "bytes32" },
          { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" },
          { "internalType": "uint256[]", "name": "sizes", "type": "uint256[]" }
        ],
        "indexed": false,
        "internalType": "struct LibSvg.SvgTypeAndIdsAndSizes[]",
        "name": "_typesAndIdsAndSizes",
        "type": "tuple[]"
      }
    ],
    "name": "UpdateSvg",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "uint32",
        "name": "whitelistId",
        "type": "uint32"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "actionRight",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "accessRight",
        "type": "uint256"
      }
    ],
    "name": "WhitelistAccessRightSet",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "facetAddress",
            "type": "address"
          },
          {
            "internalType": "enum IDiamondCut.FacetCutAction",
            "name": "action",
            "type": "uint8"
          },
          {
            "internalType": "bytes4[]",
            "name": "functionSelectors",
            "type": "bytes4[]"
          }
        ],
        "indexed": false,
        "internalType": "struct IDiamondCut.FacetCut[]",
        "name": "_diamondCut",
        "type": "tuple[]"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "_init",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "_calldata",
        "type": "bytes"
      }
    ],
    "name": "DiamondCut",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "previousOwner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "newOwner",
        "type": "address"
      }
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_ids",
        "type": "uint256[]"
      },
      {
        "indexed": false,
        "internalType": "uint256[]",
        "name": "_values",
        "type": "uint256[]"
      }
    ],
    "name": "TransferBatch",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_fromContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_fromTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenTypeId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferFromParent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferSingle",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_toContract",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_toTokenId",
        "type": "uint256"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenTypeId",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_value",
        "type": "uint256"
      }
    ],
    "name": "TransferToParent",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "_value",
        "type": "string"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "URI",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_approved",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "Approval",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_owner",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_operator",
        "type": "address"
      },
      {
        "indexed": false,
        "internalType": "bool",
        "name": "_approved",
        "type": "bool"
      }
    ],
    "name": "ApprovalForAll",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "internalType": "address",
        "name": "_from",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "address",
        "name": "_to",
        "type": "address"
      },
      {
        "indexed": true,
        "internalType": "uint256",
        "name": "_tokenId",
        "type": "uint256"
      }
    ],
    "name": "Transfer",
    "type": "event"
  }
]
