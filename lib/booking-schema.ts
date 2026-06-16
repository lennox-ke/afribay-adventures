import { z } from "zod"

export const bookingSchema = z
  .object({
    personalDetails: z.object({
      firstName: z.string().min(2, "First name must be at least 2 characters"),
      lastName: z.string().min(2, "Last name must be at least 2 characters"),
      email: z.string().email("Please enter a valid email address"),
      phone: z.string().min(10, "Please enter a valid phone number"),
      countryCode: z.string().min(1, "Please select a country code"),
    }),
    tripDetails: z
      .object({
        arrivalDate: z.string().min(1, "Please select an arrival date"),
        departureDate: z.string().min(1, "Please select a departure date"),
      })
      .refine(
        (data) => {
          const arrival = new Date(data.arrivalDate)
          const departure = new Date(data.departureDate)
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          return arrival >= today
        },
        {
          message: "Arrival date cannot be in the past",
          path: ["arrivalDate"],
        },
      )
      .refine(
        (data) => {
          const arrival = new Date(data.arrivalDate)
          const departure = new Date(data.departureDate)

          return departure > arrival
        },
        {
          message: "Departure date must be after arrival date",
          path: ["departureDate"],
        },
      ),
    travelers: z
      .object({
        adults: z.number().min(1, "At least 1 adult is required").max(20, "Maximum 20 adults allowed"),
        children: z.number().min(0, "Cannot be negative").max(10, "Maximum 10 children allowed"),
        childAges: z.array(z.number().min(0).max(17)).optional(),
        rooms: z.number().min(1, "At least 1 room is required").max(10, "Maximum 10 rooms allowed"),
      })
      .refine(
        (data) => {
          if (data.children > 0 && (!data.childAges || data.childAges.length !== data.children)) {
            return false
          }
          return true
        },
        {
          message: "Please provide ages for all children",
          path: ["childAges"],
        },
      ),
    preferences: z.object({
      destinations: z.array(z.string()).min(1, "Please select at least 1 destination"),
      accommodations: z.array(z.string()).min(2, "Please select at least 2 accommodations for availability"),
    }),
    vehicles: z
      .array(
        z.object({
          vehicleId: z.string(),
          quantity: z.number().min(0),
        }),
      )
      .min(1, "Please select at least one vehicle"),
    specialRequests: z.string().optional(),
  })
  .refine(
    (data) => {
      // Calculate total vehicle capacity
      const totalTravelers = data.travelers.adults + data.travelers.children
      // This will be validated in the component with actual vehicle data
      return true
    },
    {
      message: "Vehicle capacity must accommodate all travelers",
      path: ["vehicles"],
    },
  )

export type BookingFormData = z.infer<typeof bookingSchema>
