import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

// Define types for our state
export interface Widget {
  id: string
  name: string
  content: string
}

export interface Category {
  id: string
  name: string
  widgets: Widget[]
}

interface DashboardState {
  categories: Category[]
  searchTerm: string
}

// Initial dashboard data
const initialState: DashboardState = {
  categories: [
    {
      id: "cat1",
      name: "CSPM Executive Dashboard",
      widgets: [
        {
          id: "widget1",
          name: "Security Score",
          content: "Current security score is 85/100. Improved by 5% since last month.",
        },
        {
          id: "widget2",
          name: "Critical Alerts",
          content: "3 critical alerts detected in the last 24 hours. Requires immediate attention.",
        },
        {
          id: "widget3",
          name: "Compliance Status",
          content: "92% compliant with industry standards. 2 policies need review.",
        },
      ],
    },
    {
      id: "cat2",
      name: "Infrastructure Monitoring",
      widgets: [
        {
          id: "widget4",
          name: "Server Uptime",
          content: "99.9% uptime across all servers. One scheduled maintenance upcoming.",
        },
        {
          id: "widget5",
          name: "Resource Utilization",
          content: "CPU usage at 45%, Memory at 60%. All systems operating normally.",
        },
      ],
    },
    {
      id: "cat3",
      name: "User Activity",
      widgets: [
        {
          id: "widget6",
          name: "Active Users",
          content: "1,245 active users in the last hour. Peak time is between 2-4 PM.",
        },
        {
          id: "widget7",
          name: "Login Attempts",
          content: "15 failed login attempts detected. Security team notified.",
        },
      ],
    },
  ],
  searchTerm: "",
}

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<{ categoryId: string; widget: Widget }>) => {
      const { categoryId, widget } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        category.widgets.push(widget)
      }
    },
    removeWidget: (state, action: PayloadAction<{ categoryId: string; widgetId: string }>) => {
      const { categoryId, widgetId } = action.payload
      const category = state.categories.find((cat) => cat.id === categoryId)
      if (category) {
        category.widgets = category.widgets.filter((widget) => widget.id !== widgetId)
      }
    },
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload
    },
  },
})

export const { addWidget, removeWidget, setSearchTerm } = dashboardSlice.actions
export default dashboardSlice.reducer
