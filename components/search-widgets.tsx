"use client"

import type React from "react"

import { Input } from "@/components/ui/input"
import { useAppDispatch } from "@/lib/hooks"
import { setSearchTerm } from "@/lib/dashboardSlice"
import { Search } from "lucide-react"

export function SearchWidgets() {
  const dispatch = useAppDispatch()

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value))
  }

  return (
    <div className="relative">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input type="search" placeholder="Search widgets..." className="w-full pl-8" onChange={handleSearch} />
    </div>
  )
}
