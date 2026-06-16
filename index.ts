// Main entry point for Afribay Adventures website
import type { NextApiRequest, NextApiResponse } from "next"

// API configuration
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
}

// Main API handler
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json({
      message: "Welcome to Afribay Adventures API",
      version: "1.0.0",
      endpoints: {
        contact: "/api/contact",
        booking: "/api/booking",
        packages: "/api/packages",
      },
    })
  } else {
    res.setHeader("Allow", ["GET"])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
