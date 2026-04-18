export async function POST(request) {
  try {
    const body = await request.json();
    const { mobile, name } = body;

    if (!name || !name.trim()) {
      return Response.json(
        { success: false, message: "Please enter your name." },
        { status: 400 },
      );
    }

    if (!mobile) {
      return Response.json(
        { success: false, message: "Mobile number is required." },
        { status: 400 },
      );
    }

    const mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobile.replace(/\s/g, ""))) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid 10-digit Indian mobile number.",
        },
        { status: 400 },
      );
    }

    // Return success with the script URL so the client can POST directly
    // This bypasses server-to-server restrictions Google imposes
    return Response.json({
      success: true,
      message: `You're on the list${name ? `, ${name.trim().split(" ")[0]}` : ""}! Free samples coming soon 🚀`,
      scriptUrl: process.env.GOOGLE_SCRIPT_URL || "",
      payload: {
        name: name.trim(),
        mobile: mobile.trim(),
        timestamp: new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),
        source: "Yeni Landing Page",
      },
    });
  } catch (error) {
    console.error("Waitlist API error:", error);
    return Response.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
