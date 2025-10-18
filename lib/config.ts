export const CONTRACT_ADDRESS = "0xYOUR_CONTRACT_ADDRESS"; // replace with deployed address
export const CHAIN_ID = "0x13882"; // Polygon Amoy Testnet

export const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "string", name: "_pincode", type: "string" },
      { internalType: "string", name: "_category", type: "string" },
      { internalType: "string", name: "_description", type: "string" },
    ],
    name: "registerIncident",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: "uint256", name: "incidentId", type: "uint256" },
      { indexed: false, internalType: "string", name: "pincode", type: "string" },
      { indexed: false, internalType: "string", name: "category", type: "string" },
      { indexed: false, internalType: "string", name: "description", type: "string" },
      { indexed: false, internalType: "address", name: "creator", type: "address" },
      { indexed: false, internalType: "uint256", name: "timestamp", type: "uint256" },
    ],
    name: "IncidentRegistered",
    type: "event",
  },
];
