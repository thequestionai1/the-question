
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function GET() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (!url || !key) {
    return NextResponse.json(
      { connected: false, message: "Supabase configuration missing" },
      { status: 500 }
    );
  }

  try {
    const supabase = createClient(url, key);

    const { error } = await supabase
      .from("answers")
      .select("id")
      .limit(1);

    if (error) {
      return NextResponse.json(
        { connected: false, message: "Database query failed" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      connected: true,
      message: "THE QUESTION database connection successful!",
    });
  } catch {
    return NextResponse.json(
      { connected: false, message: "Connection failed" },
      { status: 500 }
    );
  }
}
