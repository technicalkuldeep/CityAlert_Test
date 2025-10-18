import { NextResponse } from "next/server";
import { getIncidents } from "@/lib/incident-store";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x812d977B073eF043631f9692fF1b6F13e5c3A913";
const CONTRACT_ABI = [
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
];

const RPC_URL =
  process.env.ALCHEMY_RPC_URL ||
  "https://polygon-amoy.g.alchemy.com/v2/demo";

export async function GET() {
  try {
    // Step 1: try local memory first
    const localIncidents = getIncidents();
    if (localIncidents.length > 0) {
      console.log("[GET /api/incidents] Returning in-memory incidents");
      return NextResponse.json(localIncidents, { status: 200 });
    }

    // Step 2: fallback to blockchain
    const provider = new ethers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);
    const incidents = await contract.getAllIncidents();

    const formatted = incidents.map((i: any, index: number) => ({
      incident_id: String(index),
      pincode: i.pincode,
      category: i.category,
      description: i.description,
      reporter: i.creator,
      timestamp: i.timestamp.toString(),
    }));

    console.log("[GET /api/incidents] Returning blockchain data");
    return NextResponse.json(formatted, { status: 200 });
  } catch (error: any) {
    console.error("[GET /api/incidents] Error:", error);
    return NextResponse.json({ error: "Failed to fetch incidents" }, { status: 500 });
  }
}
