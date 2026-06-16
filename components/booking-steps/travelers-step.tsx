"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, Plus, Minus, Users, Baby, Home } from "lucide-react"
import type { BookingFormData } from "@/lib/booking-schema"

interface TravelersStepProps {
  data: BookingFormData["travelers"]
  onUpdate: (data: BookingFormData["travelers"]) => void
  onNext: () => void
  onPrev: () => void
}

export function TravelersStep({ data, onUpdate, onNext, onPrev }: TravelersStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleCounterChange = (field: "adults" | "children" | "rooms", increment: boolean) => {
    const currentValue = data[field]
    const newValue = increment ? currentValue + 1 : Math.max(field === "adults" ? 1 : 0, currentValue - 1)

    const updatedData = { ...data, [field]: newValue }

    // Handle child ages array
    if (field === "children") {
      if (newValue > currentValue) {
        // Adding children - add empty slots
        updatedData.childAges = [...(data.childAges || []), undefined as any] // <- empty slot
      } else if (newValue < currentValue) {
        // Removing children - remove age slots
        updatedData.childAges = (data.childAges || []).slice(0, newValue)
      }
    }

    onUpdate(updatedData)

    // Clear errors
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const handleChildAgeChange = (index: number, age: number | undefined) => {
    const newChildAges = [...(data.childAges || [])]
    newChildAges[index] = age
    onUpdate({ ...data, childAges: newChildAges })
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (data.adults < 1) newErrors.adults = "At least 1 adult is required"
    if (data.adults > 20) newErrors.adults = "Maximum 20 adults allowed"
    if (data.children < 0) newErrors.children = "Cannot be negative"
    if (data.children > 10) newErrors.children = "Maximum 10 children allowed"
    if (data.rooms < 1) newErrors.rooms = "At least 1 room is required"
    if (data.rooms > 10) newErrors.rooms = "Maximum 10 rooms allowed"

    if (data.children > 0) {
      if (
        !data.childAges ||
        data.childAges.length !== data.children ||
        data.childAges.some((age) => age === undefined || age < 0 || age > 17)
      ) {
        newErrors.childAges = "Please provide ages for all children (0-17)"
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      onNext()
    }
  }

  const totalTravelers = data.adults + data.children

  return (
    <div className="space-y-6">
      {/* Travelers Counter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="h-8 w-8 text-[#E8A17D] mx-auto mb-3" />
            <Label className="text-lg font-semibold text-[#2F3B2F]">Adults</Label>
            <p className="text-sm text-gray-600 mb-4">Age 18+</p>
            <div className="flex items-center justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("adults", false)}
                disabled={data.adults <= 1}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-bold text-[#2F3B2F] w-8">{data.adults}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("adults", true)}
                disabled={data.adults >= 20}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {errors.adults && <p className="text-red-500 text-sm mt-2">{errors.adults}</p>}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Baby className="h-8 w-8 text-[#7FB5B5] mx-auto mb-3" />
            <Label className="text-lg font-semibold text-[#2F3B2F]">Children</Label>
            <p className="text-sm text-gray-600 mb-4">Age 0-17</p>
            <div className="flex items-center justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("children", false)}
                disabled={data.children <= 0}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-bold text-[#2F3B2F] w-8">{data.children}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("children", true)}
                disabled={data.children >= 10}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {errors.children && <p className="text-red-500 text-sm mt-2">{errors.children}</p>}
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6 text-center">
            <Home className="h-8 w-8 text-[#E8A17D] mx-auto mb-3" />
            <Label className="text-lg font-semibold text-[#2F3B2F]">Rooms</Label>
            <p className="text-sm text-gray-600 mb-4">Accommodation</p>
            <div className="flex items-center justify-center space-x-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("rooms", false)}
                disabled={data.rooms <= 1}
                className="h-8 w-8 p-0"
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="text-xl font-bold text-[#2F3B2F] w-8">{data.rooms}</span>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCounterChange("rooms", true)}
                disabled={data.rooms >= 10}
                className="h-8 w-8 p-0"
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            {errors.rooms && <p className="text-red-500 text-sm mt-2">{errors.rooms}</p>}
          </CardContent>
        </Card>
      </div>

      {/* Child Ages */}
      {data.children > 0 && (
        <Card>
          <CardContent className="p-6">
            <Label className="text-lg font-semibold text-[#2F3B2F] mb-4 block">Children's Ages</Label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: data.children }, (_, index) => (
                <div key={index}>
                  <Label htmlFor={`child-${index}`} className="text-sm">
                    Child {index + 1} Age
                  </Label>
                  <Input
                    id={`child-${index}`}
                    type="number"
                    min="0"
                    max="17"
                    placeholder="Age"
                    value={data.childAges?.[index] ?? ""} // <- empty by default
                    onChange={(e) => {
                      const val = e.target.value
                      handleChildAgeChange(index, val === "" ? undefined : Number(val))
                    }}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
            {errors.childAges && <p className="text-red-500 text-sm mt-2">{errors.childAges}</p>}
          </CardContent>
        </Card>
      )}

      {/* Summary */}
      <div className="bg-[#F2EFED] rounded-lg p-4">
        <h3 className="font-semibold text-[#2F3B2F] mb-2">Travelers Summary</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Total Travelers:</span>
            <span className="font-semibold text-[#E8A17D] ml-2">{totalTravelers}</span>
          </div>
          <div>
            <span className="text-gray-600">Adults:</span>
            <span className="font-semibold text-[#2F3B2F] ml-2">{data.adults}</span>
          </div>
          <div>
            <span className="text-gray-600">Children:</span>
            <span className="font-semibold text-[#2F3B2F] ml-2">{data.children}</span>
          </div>
          <div>
            <span className="text-gray-600">Rooms:</span>
            <span className="font-semibold text-[#2F3B2F] ml-2">{data.rooms}</span>
          </div>
        </div>
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
          Continue to Destinations
        </Button>
      </div>
    </div>
  )
}