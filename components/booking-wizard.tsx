"use client"

import { useState } from "react"
import emailjs from "emailjs-com"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { PersonalDetailsStep } from "./booking-steps/personal-details-step"
import { TripCalendarStep } from "./booking-steps/trip-calendar-step"
import { TravelersStep } from "./booking-steps/travelers-step"
import { DestinationsStep } from "./booking-steps/destinations-step"
import { VehicleSelectionStep } from "./booking-steps/vehicle-selection-step"
import { BookingConfirmation } from "./booking-confirmation"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { BookingFormData } from "@/lib/booking-schema"
import { generateBookingReference } from "@/lib/utils"

const steps = [
  { id: 1, title: "Personal Details", description: "Your contact information" },
  { id: 2, title: "Trip Calendar", description: "Select your travel dates" },
  { id: 3, title: "Travelers", description: "Number of guests and rooms" },
  { id: 4, title: "Destinations", description: "Choose places and accommodations" },
  { id: 5, title: "Vehicle Selection", description: "Select your safari vehicles" },
]

/* ------------------------------------------------------------------ */
/* 1.  EmailJS – REQUEST ACCOUNT (internal)                             */
/* ------------------------------------------------------------------ */
const REQUEST_SERVICE_ID  = "service_ef5y9rm"
const REQUEST_PUBLIC_KEY  = "9Nil9YuQ9vfGtrukk"
const REQUEST_TEMPLATE_ID = "template_5cb89fd" // e.g. "booking_request"

/* ------------------------------------------------------------------ */
/* 2.  EmailJS – CONFIRMATION ACCOUNT (client)                          */
/* ------------------------------------------------------------------ */
const CONFIRM_SERVICE_ID  = "service_x0frb4m"
const CONFIRM_PUBLIC_KEY  = "3wkMWTOOZHOTKQlEl"
const CONFIRM_TEMPLATE_ID = "template_iz19qgg" // e.g. "booking_confirmation"
/* ------------------------------------------------------------------ */

export function BookingWizard() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete]   = useState(false)
  const [bookingReference, setBookingReference] = useState("")
  const [formData, setFormData] = useState<Partial<BookingFormData>>({
    personalDetails: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      countryCode: "",
    },
    tripDetails: {
      arrivalDate: "",
      departureDate: "",
    },
    travelers: {
      adults: 2,
      children: 0,
      childAges: [],
      rooms: 1,
    },
    preferences: {
      destinations: [],
      accommodations: [],
    },
    vehicles: [],
    specialRequests: "",
  })
  const [loading, setLoading] = useState(false)

  const updateFormData = (stepData: Partial<BookingFormData>) =>
    setFormData((prev) => ({ ...prev, ...stepData }))

  const nextStep = () =>
    currentStep < steps.length && setCurrentStep(currentStep + 1)

  const prevStep = () =>
    currentStep > 1 && setCurrentStep(currentStep - 1)

  /* ------------------------------------------------------------------ */
  /* 3.  Send two e-mails from two different accounts                     */
  /* ------------------------------------------------------------------ */
  const handleComplete = async () => {
    setLoading(true)
    const reference = generateBookingReference()
    setBookingReference(reference)

    const payload = { ...formData, bookingReference: reference } as BookingFormData

    try {
      // Helper function to create HTML tags
      const createTags = (items: string[]) => 
        items.map(item => `<span class="tag">${item}</span>`).join('')

      /* --- A) Internal booking request (REQUEST account) --- */
      const requestPayload = {
        // Booking reference
        bookingReference: reference,
        
        // Personal details (flattened)
        firstName: payload.personalDetails.firstName,
        lastName: payload.personalDetails.lastName,
        email: payload.personalDetails.email,
        phone: payload.personalDetails.phone,
        countryCode: payload.personalDetails.countryCode,
        
        // Trip details (flattened)
        arrivalDate: payload.tripDetails.arrivalDate,
        departureDate: payload.tripDetails.departureDate,
        
        // Travelers (flattened)
        adults: payload.travelers.adults,
        children: payload.travelers.children,
        rooms: payload.travelers.rooms,
        
        // Preferences (converted to HTML tags)
        destinationTags: createTags(payload.preferences.destinations),
        accommodationTags: createTags(payload.preferences.accommodations),
        
        // Vehicles (converted to HTML tags)
        vehicleTags: createTags(payload.vehicles),
        
        // Special requests
        specialRequests: payload.specialRequests || 'None specified'
      }

      await emailjs.send(
        REQUEST_SERVICE_ID,
        REQUEST_TEMPLATE_ID,
        requestPayload,
        REQUEST_PUBLIC_KEY
      )

      /* --- B) Client confirmation (CONFIRMATION account) --- */
      const confirmationPayload = {
        to_email: payload.personalDetails.email,
        firstName: payload.personalDetails.firstName,
        bookingReference: reference,
        arrivalDate: payload.tripDetails.arrivalDate,
        departureDate: payload.tripDetails.departureDate,
        adults: payload.travelers.adults,
        children: payload.travelers.children,
      }

      await emailjs.send(
        CONFIRM_SERVICE_ID,
        CONFIRM_TEMPLATE_ID,
        confirmationPayload,
        CONFIRM_PUBLIC_KEY
      )

      setIsComplete(true)
    } catch (err) {
      console.error("EmailJS error:", err)
      alert("Something went wrong while sending your booking. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setCurrentStep(1)
    setIsComplete(false)
    setBookingReference("")
    setFormData({
      personalDetails: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        countryCode: "",
      },
      tripDetails: {
        arrivalDate: "",
        departureDate: "",
      },
      travelers: {
        adults: 2,
        children: 0,
        childAges: [],
        rooms: 1,
      },
      preferences: {
        destinations: [],
        accommodations: [],
      },
      vehicles: [],
      specialRequests: "",
    })
  }

  if (isComplete) {
    return (
      <BookingConfirmation
        bookingReference={bookingReference}
        formData={formData as BookingFormData}
        onReset={resetForm}
      />
    )
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="space-y-6">
      {/* Progress Header */}
      <Card>
        <CardContent className="p-6">
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-serif text-xl font-bold text-[#2F3B2F]">
                Step {currentStep} of {steps.length}
              </h2>
              <Badge className="bg-[#E8A17D] text-white">
                {Math.round(progress)}% Complete
              </Badge>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={`text-center p-3 rounded-lg transition-colors duration-200 ${
                  step.id === currentStep
                    ? "bg-[#E8A17D] text-white"
                    : step.id < currentStep
                      ? "bg-[#7FB5B5] text-white"
                      : "bg-gray-100 text-gray-600"
                }`}
              >
                <div className="font-semibold text-sm">{step.title}</div>
                <div className="text-xs opacity-90">{step.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Step Content */}
      <Card>
        <CardHeader>
          <CardTitle className="font-serif text-2xl text-[#2F3B2F]">
            {steps[currentStep - 1].title}
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          {currentStep === 1 && (
            <PersonalDetailsStep
              data={formData.personalDetails!}
              onUpdate={(data) => updateFormData({ personalDetails: data })}
              onNext={nextStep}
            />
          )}
          {currentStep === 2 && (
            <TripCalendarStep
              data={formData.tripDetails!}
              onUpdate={(data) => updateFormData({ tripDetails: data })}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 3 && (
            <TravelersStep
              data={formData.travelers!}
              onUpdate={(data) => updateFormData({ travelers: data })}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 4 && (
            <DestinationsStep
              data={formData.preferences!}
              onUpdate={(data) => updateFormData({ preferences: data })}
              onNext={nextStep}
              onPrev={prevStep}
            />
          )}
          {currentStep === 5 && (
            <VehicleSelectionStep
              data={formData.vehicles!}
              travelers={formData.travelers!}
              onUpdate={(data) => updateFormData({ vehicles: data })}
              onComplete={handleComplete}
              onPrev={prevStep}
              loading={loading}
            />
          )}
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Previous
        </Button>
        <Button
          onClick={nextStep}
          disabled={currentStep === steps.length}
          className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white"
        >
          Next
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  )
}