"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

interface SupportTicketActionsProps {
  ticketId: string
  currentStatus: string
}

export function SupportTicketActions({ ticketId, currentStatus }: SupportTicketActionsProps) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const updateStatus = async (newStatus: string) => {
    setIsLoading(true)
    try {
      const response = await fetch(`/api/support-tickets/${ticketId}`, {
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
      {currentStatus === "open" && (
        <Button size="sm" variant="outline" onClick={() => updateStatus("in_progress")} disabled={isLoading}>
          Start Working
        </Button>
      )}
      {(currentStatus === "open" || currentStatus === "in_progress") && (
        <Button size="sm" variant="outline" onClick={() => updateStatus("resolved")} disabled={isLoading}>
          Resolve
        </Button>
      )}
      {currentStatus === "resolved" && (
        <Button size="sm" variant="outline" onClick={() => updateStatus("closed")} disabled={isLoading}>
          Close
        </Button>
      )}
      <Button size="sm" variant="outline" disabled={isLoading}>
        Reply
      </Button>
    </div>
  )
}
