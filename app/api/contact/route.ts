import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (!body?.name || !body?.email || !body?.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thanks for reaching out. We will be in touch shortly.",
    });
  } catch {
    return NextResponse.json(
      { error: "Unable to process submission" },
      { status: 500 },
    );
  }
}
