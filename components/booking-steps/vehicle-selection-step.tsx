"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ChevronLeft, Plus, Minus, Users, AlertTriangle, CheckCircle } from "lucide-react"
import { vehicles } from "@/lib/data"
import { formatPrice, calculateTotalCapacity } from "@/lib/utils"
import type { BookingFormData } from "@/lib/booking-schema"

interface VehicleSelectionStepProps {
  data: { vehicleId: string; quantity: number }[]
  travelers: BookingFormData["travelers"]
  onUpdate: (data: { vehicleId: string; quantity: number }[]) => void
  onComplete: () => void
  onPrev: () => void
}

export function VehicleSelectionStep({ data, travelers, onUpdate, onComplete, onPrev }: VehicleSelectionStepProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})

  const totalTravelers = travelers.adults + travelers.children
  const totalCapacity = calculateTotalCapacity(data, vehicles)
  const hasInsufficientCapacity = totalCapacity < totalTravelers

  const handleQuantityChange = (vehicleId: string, increment: boolean) => {
    const existingVehicle = data.find((v) => v.vehicleId === vehicleId)

    if (existingVehicle) {
      const newQuantity = increment ? existingVehicle.quantity + 1 : Math.max(0, existingVehicle.quantity - 1)

      const updatedData = data
        .map((v) => (v.vehicleId === vehicleId ? { ...v, quantity: newQuantity } : v))
        .filter((v) => v.quantity > 0)

      onUpdate(updatedData)
    } else if (increment) {
      onUpdate([...data, { vehicleId, quantity: 1 }])
    }

    // Clear errors
    if (errors.vehicles) {
      setErrors((prev) => ({ ...prev, vehicles: "" }))
    }
  }

  const getVehicleQuantity = (vehicleId: string) => {
    return data.find((v) => v.vehicleId === vehicleId)?.quantity || 0
  }

  const validateStep = () => {
    const newErrors: Record<string, string> = {}

    if (data.length === 0) {
      newErrors.vehicles = "Please select at least one vehicle"
    } else if (hasInsufficientCapacity) {
      newErrors.vehicles = `Vehicle capacity (${totalCapacity}) is insufficient for ${totalTravelers} travelers`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleComplete = () => {
    if (validateStep()) {
      onComplete()
    }
  }

  const calculateTotalCost = () => {
    return data.reduce((total, vehicle) => {
      const vehicleInfo = vehicles.find((v) => v.id === vehicle.vehicleId)
      return total + (vehicleInfo ? vehicleInfo.pricePerDay * vehicle.quantity : 0)
    }, 0)
  }

  const totalCost = calculateTotalCost()

  return (
    <div className="space-y-6">
      {/* Capacity Indicator */}
      <div className="bg-[#F2EFED] rounded-lg p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-[#2F3B2F]">Capacity Check</h3>
          {hasInsufficientCapacity ? (
            <Badge className="bg-red-500 text-white">
              <AlertTriangle className="h-3 w-3 mr-1" />
              Insufficient
            </Badge>
          ) : totalCapacity >= totalTravelers ? (
            <Badge className="bg-green-500 text-white">
              <CheckCircle className="h-3 w-3 mr-1" />
              Sufficient
            </Badge>
          ) : (
            <Badge className="bg-gray-500 text-white">No Vehicles</Badge>
          )}
        </div>
        <div className="flex items-center space-x-4 text-sm">
          <div>
            <span className="text-gray-600">Travelers:</span>
            <span className="font-semibold text-[#E8A17D] ml-2">{totalTravelers}</span>
          </div>
          <div>
            <span className="text-gray-600">Vehicle Capacity:</span>
            <span className={`font-semibold ml-2 ${hasInsufficientCapacity ? "text-red-500" : "text-green-500"}`}>
              {totalCapacity}
            </span>
          </div>
        </div>
      </div>

      {/* Vehicle Selection Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => {
          const quantity = getVehicleQuantity(vehicle.id)
          const isSelected = quantity > 0

          return (
            <Card
              key={vehicle.id}
              className={`transition-all duration-200 hover:shadow-lg ${
                isSelected ? "ring-2 ring-[#E8A17D] bg-[#E8A17D]/5" : ""
              }`}
            >
              <CardContent className="p-6">
                <img
                  src={vehicle.image || "/placeholder.svg"}
                  alt={vehicle.name}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />

                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-serif text-lg font-semibold text-[#2F3B2F]">{vehicle.name}</h4>
                    <Badge className="bg-[#7FB5B5] text-white mt-1">
                      <Users className="h-3 w-3 mr-1" />
                      {vehicle.capacity} seats
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#2F3B2F]">{formatPrice(vehicle.pricePerDay)}</div>
                    <div className="text-xs text-gray-600">per day</div>
                  </div>
                </div>

                <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>

                <div className="space-y-2 mb-4">
                  {vehicle.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className="flex items-center text-xs text-gray-600">
                      <CheckCircle className="h-3 w-3 text-[#E8A17D] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(vehicle.id, false)}
                      disabled={quantity === 0}
                      className="h-8 w-8 p-0"
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="text-lg font-bold text-[#2F3B2F] w-8 text-center">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(vehicle.id, true)}
                      className="h-8 w-8 p-0"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  {quantity > 0 && (
                    <Badge className="bg-[#E8A17D] text-white">{quantity * vehicle.capacity} seats</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Error Messages */}
      {hasInsufficientCapacity && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-700">
            Your selected vehicles can accommodate {totalCapacity} travelers, but you have {totalTravelers} travelers.
            Please add more vehicles or reduce the number of travelers.
          </AlertDescription>
        </Alert>
      )}

      {errors.vehicles && (
        <Alert className="border-red-200 bg-red-50">
          <AlertTriangle className="h-4 w-4 text-red-500" />
          <AlertDescription className="text-red-700">{errors.vehicles}</AlertDescription>
        </Alert>
      )}

      {/* Selection Summary */}
      {data.length > 0 && (
        <div className="bg-[#F2EFED] rounded-lg p-4">
          <h3 className="font-semibold text-[#2F3B2F] mb-3">Vehicle Selection Summary</h3>
          <div className="space-y-2 mb-4">
            {data.map((vehicle) => {
              const vehicleInfo = vehicles.find((v) => v.id === vehicle.vehicleId)
              if (!vehicleInfo) return null

              return (
                <div key={vehicle.vehicleId} className="flex items-center justify-between text-sm">
                  <span className="text-gray-700">
                    {vehicle.quantity}x {vehicleInfo.name}
                  </span>
                  <span className="font-semibold text-[#2F3B2F]">
                    {formatPrice(vehicleInfo.pricePerDay * vehicle.quantity)}/day
                  </span>
                </div>
              )
            })}
          </div>
          <div className="border-t pt-2 flex items-center justify-between">
            <span className="font-semibold text-[#2F3B2F]">Total Vehicle Cost:</span>
            <span className="text-lg font-bold text-[#E8A17D]">{formatPrice(totalCost)}/day</span>
          </div>
        </div>
      )}

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={onPrev}
          className="border-[#2F3B2F] text-[#2F3B2F] hover:bg-[#2F3B2F] hover:text-white bg-transparent"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          Back
        </Button>
        <Button
          onClick={handleComplete}
          disabled={hasInsufficientCapacity || data.length === 0}
          className="bg-[#E8A17D] hover:bg-[#7FB5B5] text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Complete Booking
        </Button>
      </div>
    </div>
  )
}
