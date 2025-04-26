"use client"

import type React from "react"

import { useState } from "react"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import { addWidget } from "@/lib/dashboardSlice"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function AddWidgetForm() {
  const [open, setOpen] = useState(false)
  const [categoryId, setCategoryId] = useState("")
  const [widgetName, setWidgetName] = useState("")
  const [widgetContent, setWidgetContent] = useState("")

  const dispatch = useAppDispatch()
  const categories = useAppSelector((state) => state.dashboard.categories)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!categoryId || !widgetName || !widgetContent) return

    dispatch(
      addWidget({
        categoryId,
        widget: {
          id: `widget-${Date.now()}`,
          name: widgetName,
          content: widgetContent,
        },
      }),
    )

    // Reset form
    setWidgetName("")
    setWidgetContent("")
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="default">+ Add Widget</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Add New Widget</DialogTitle>
            <DialogDescription>Create a new widget and add it to a category.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="category">Category</Label>
              <Select value={categoryId} onValueChange={setCategoryId} required>
                <SelectTrigger id="category">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="name">Widget Name</Label>
              <Input
                id="name"
                value={widgetName}
                onChange={(e) => setWidgetName(e.target.value)}
                placeholder="Enter widget name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="content">Widget Content</Label>
              <Textarea
                id="content"
                value={widgetContent}
                onChange={(e) => setWidgetContent(e.target.value)}
                placeholder="Enter widget content"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Add Widget</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
