"use client"

import { useAppSelector } from "@/lib/hooks"
import { Widget } from "@/components/widget"
import { AddWidgetForm } from "@/components/add-widget-form"
import { SearchWidgets } from "@/components/search-widgets"

export function Dashboard() {
  const { categories, searchTerm } = useAppSelector((state) => state.dashboard)

  // Filter widgets based on search term
  const filteredCategories = categories
    .map((category) => ({
      ...category,
      widgets: category.widgets.filter(
        (widget) =>
          widget.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          widget.content.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    }))
    .filter((category) => category.widgets.length > 0)

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <SearchWidgets />
          <AddWidgetForm />
        </div>
      </div>

      {filteredCategories.map((category) => (
        <div key={category.id} className="space-y-4">
          <h2 className="text-xl font-semibold">{category.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {category.widgets.map((widget) => (
              <Widget
                key={widget.id}
                id={widget.id}
                categoryId={category.id}
                name={widget.name}
                content={widget.content}
              />
            ))}
          </div>
        </div>
      ))}

      {filteredCategories.length === 0 && (
        <div className="flex flex-col items-center justify-center h-40 border rounded-lg bg-muted/20">
          <p className="text-muted-foreground">No widgets found</p>
        </div>
      )}
    </div>
  )
}
