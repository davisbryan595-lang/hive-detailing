import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    // Basic validation
    const name = String(body.name || "").trim()
    const email = String(body.email || "").trim()
    if (!name || !email) {
      return NextResponse.json({ error: "Name and email are required." }, { status: 400 })
    }

    // Here you could integrate email or a DB. For now, we log.
    console.log("[hive-contact] submission", {
      name,
      email,
      phone: body.phone || "",
      vehicle: body.vehicle || "",
      message: body.message || "",
    })

    return NextResponse.json({ ok: true, message: "Thanks! We’ll get back to you shortly." })
  } catch (e) {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }
}
