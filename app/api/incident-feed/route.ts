import { NextResponse } from "next/server";
import { addIncident } from "@/lib/incident-store";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("[Kwala] New incident received:", body);

    addIncident({
      incident_id: body.incident_id,
      pincode: body.pincode,
      category: body.category,
      description: body.description,
      reporter: body.reporter,
      timestamp: body.timestamp,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error handling Kwala webhook:", error);
    return NextResponse.json({ error: "Failed to process webhook" }, { status: 500 });
  }
}
