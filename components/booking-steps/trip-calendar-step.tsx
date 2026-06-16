"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ChevronLeft } from "lucide-react"
import type { BookingFormData } from "@/lib/booking-schema"

interface TripCalendarStepProps {
  data: BookingFormData["tripDetails"]
  onUpdate: (data: BookingFormData["tripDetails"]) => void
  onNext: () => void
  onPrev: () => void
}

export function TripCalendarStep({ data, onUpdate, onNext, onPrev }: TripCalendarStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const today = new Date().toISOString().split("T")[0]

  const handleInputChange = (field: keyof BookingFormData["tripDetails"], value: string) => {
    onUpdate({ ...data, [field]: value })
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (!data.arrivalDate) {
      newErrors.arrivalDate = "Please select an arrival date"
    } else if (data.arrivalDate < today) {
      newErrors.arrivalDate = "Arrival date cannot be in the past"
    }

    if (!data.departureDate) {
      newErrors.departureDate = "Please select a departure date"
    } else if (data.arrivalDate && data.departureDate <= data.arrivalDate) {
      newErrors.departureDate = "Departure date must be after arrival date"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      onNext()
    }
  }

  const calculateDuration = () => {
    if (data.arrivalDate && data.departureDate) {
      const arrival = new Date(data.arrivalDate)
      const departure = new Date(data.departureDate)
      const diffTime = Math.abs(departure.getTime() - arrival.getTime())
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return diffDays
    }
    return 0
  }

  const duration = calculateDuration()

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="arrivalDate">Arrival Date *</Label>
          <Input
            id="arrivalDate"
            type="date"
            value={data.arrivalDate}
            min={today}
            onChange={(e) => handleInputChange("arrivalDate", e.target.value)}
            className={`mt-1 ${errors.arrivalDate ? "border-red-500" : ""}`}
          />
          {errors.arrivalDate && <p className="text-red-500 text-sm mt-1">{errors.arrivalDate}</p>}
        </div>

        <div>
          <Label htmlFor="departureDate">Departure Date *</Label>
          <Input
            id="departureDate"
            type="date"
            value={data.departureDate}
            min={data.arrivalDate || today}
            onChange={(e) => handleInputChange("departureDate", e.target.value)}
            className={`mt-1 ${errors.departureDate ? "border-red-500" : ""}`}
          />
          {errors.departureDate && <p className="text-red-500 text-sm mt-1">{errors.departureDate}</p>}
        </div>
      </div>

      {duration > 0 && (
        <div className="bg-[#F2EFED] rounded-lg p-4">
          <h3 className="font-semibold text-[#2F3B2F] mb-2">Trip Summary</h3>
          <p className="text-gray-600">
            Duration: <span className="font-semibold text-[#E8A17D]">{duration} days</span>
          </p>
          <p className="text-sm text-gray-500 mt-1">
            From {new Date(data.arrivalDate).toLocaleDateString()} to{" "}
            {new Date(data.departureDate).toLocaleDateString()}
          </p>
        </div>
      )}

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-800 mb-2">Best Time to Visit Kenya</h4>
        <ul className="text-sm text-blue-700 space-y-1">
          <li>
            • <strong>Great Migration:</strong> July - October
          </li>
          <li>
            • <strong>Dry Season:</strong> June - October, December - March
          </li>
          <li>
            • <strong>Bird Watching:</strong> November - April
          </li>
          <li>
            • <strong>Fewer Crowds:</strong> April - May, November
          </li>
        </ul>
      </div>

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button onClick={handleNext} className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white">
          Continue to Travelers
        </Button>
      </div>
    </div>
  )
}
