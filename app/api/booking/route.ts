import { type NextRequest, NextResponse } from "next/server"
import { bookingSchema } from "@/lib/booking-schema"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = bookingSchema.parse(body)

    // Generate booking reference
    const bookingRef = `AFB${Date.now().toString().slice(-6)}`

    // In a real application, you would:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Process payment
    // 4. Send notification to admin

    console.log("Booking submission:", { ...validatedData, bookingRef })

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000))

    return NextResponse.json(
      {
        success: true,
        bookingRef,
        message:
          "Booking submitted successfully! We will contact you within 24 hours to confirm your safari adventure.",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("Booking error:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      { status: 500 },
    )
  }
}
