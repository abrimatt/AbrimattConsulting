"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface DemoRequestActionsProps {
  requestId: string
  currentStatus: string
}

export function DemoRequestActions({ requestId, currentStatus }: DemoRequestActionsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const updateStatus = async (newStatus: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/demo-requests/${requestId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (response.ok) {
        router.refresh()
      }
    } catch (error) {
      console.error("Failed to update status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex gap-2">
      {currentStatus === "pending" && (
        <>
          <Button size="sm" variant="outline" onClick={() => updateStatus("scheduled")} disabled={isLoading}>
            Schedule Demo
          </Button>
          <Button size="sm" variant="outline" onClick={() => updateStatus("cancelled")} disabled={isLoading}>
            Cancel
          </Button>
        </>
      )}
      {currentStatus === "scheduled" && (
        <Button size="sm" variant="outline" onClick={() => updateStatus("completed")} disabled={isLoading}>
          Mark Complete
        </Button>
      )}
      <Button size="sm" variant="outline" disabled={isLoading}>
        Contact Customer
      </Button>
    </div>
  )
}
