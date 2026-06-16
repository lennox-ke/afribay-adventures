"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { countryCodes } from "@/lib/data"
import { validateEmail, validatePhone } from "@/lib/utils"
import type { BookingFormData } from "@/lib/booking-schema"

interface PersonalDetailsStepProps {
  data: BookingFormData["personalDetails"]
  onUpdate: (data: BookingFormData["personalDetails"]) => void
  onNext: () => void
}

export function PersonalDetailsStep({ data, onUpdate, onNext }: PersonalDetailsStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleInputChange = (field: keyof BookingFormData["personalDetails"], value: string) => {
    onUpdate({ ...data, [field]: value })
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (!data.firstName.trim()) newErrors.firstName = "First name is required"
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!data.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(data.email)) {
      newErrors.email = "Please enter a valid email address"
    }
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!validatePhone(data.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }
    if (!data.countryCode) newErrors.countryCode = "Please select a country code"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep()) {
      onNext()
    }
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName">First Name *</Label>
          <Input
            id="firstName"
            value={data.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className={`mt-1 ${errors.firstName ? "border-red-500" : ""}`}
            placeholder="Enter your first name"
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>

        <div>
          <Label htmlFor="lastName">Last Name *</Label>
          <Input
            id="lastName"
            value={data.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className={`mt-1 ${errors.lastName ? "border-red-500" : ""}`}
            placeholder="Enter your last name"
          />
          {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
        </div>
      </div>

      <div>
        <Label htmlFor="email">Email Address *</Label>
        <Input
          id="email"
          type="email"
          value={data.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
          className={`mt-1 ${errors.email ? "border-red-500" : ""}`}
          placeholder="Enter your email address"
        />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="countryCode">Country Code *</Label>
          <Select onValueChange={(value) => handleInputChange("countryCode", value)}>
            <SelectTrigger className={`mt-1 ${errors.countryCode ? "border-red-500" : ""}`}>
              <SelectValue placeholder="Select country" />
            </SelectTrigger>
            <SelectContent>
              {countryCodes.map((country) => (
                <SelectItem key={country.code} value={country.dialCode}>
                  {country.flag} {country.name} ({country.dialCode})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.countryCode && <p className="text-red-500 text-sm mt-1">{errors.countryCode}</p>}
        </div>

        <div className="md:col-span-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            value={data.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            className={`mt-1 ${errors.phone ? "border-red-500" : ""}`}
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleNext} className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white">
          Continue to Trip Dates
        </Button>
      </div>
    </div>
  )
}
