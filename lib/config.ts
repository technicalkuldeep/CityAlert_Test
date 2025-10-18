// lib/config.ts
export const CONTRACT_ADDRESS = "0x812d977B073eF043631f9692fF1b6F13e5c3A913"; // your deployed address
export const CHAIN_ID = "0x13882"; // Polygon Amoy Testnet

export const CONTRACT_ABI = [
  {
    inputs: [],
    name: "getAllIncidents",
    outputs: [
      {
        components: [
          { internalType: "string", name: "pincode", type: "string" },
          { internalType: "string", name: "category", type: "string" },
          { internalType: "string", name: "description", type: "string" },
          { internalType: "address", name: "creator", type: "address" },
          { internalType: "uint256", name: "timestamp", type: "uint256" },
        ],
        internalType: "struct CityAlert.Incident[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
