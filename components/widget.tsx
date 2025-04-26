"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { X } from "lucide-react"
import { useAppDispatch } from "@/lib/hooks"
import { removeWidget } from "@/lib/dashboardSlice"

interface WidgetProps {
  id: string
  categoryId: string
  name: string
  content: string
}

export function Widget({ id, categoryId, name, content }: WidgetProps) {
  const dispatch = useAppDispatch()

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: id }))
  }

  return (
    <Card className="h-full">
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <button
          onClick={handleRemove}
          className="text-muted-foreground hover:text-destructive"
          aria-label={`Remove ${name} widget`}
        >
          <X size={18} />
        </button>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{content}</p>
      </CardContent>
    </Card>
  )
}
