# Dynamic Dashboard

A React application with Redux Toolkit for state management that allows users to dynamically manage widgets across different categories.

## Features

- View widgets organized by categories
- Add new widgets to categories
- Remove widgets from categories
- Search for widgets across all categories
- Responsive design

## Technologies Used

- React
- Next.js
- Redux Toolkit for state management
- Shadcn UI for components
- TypeScript

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/dynamic-dashboard.git
   cd dynamic-dashboard
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Usage

- **View Dashboard**: The dashboard displays widgets organized by categories.
- **Add Widget**: Click the "+ Add Widget" button to open a form where you can select a category and enter widget details.
- **Remove Widget**: Click the X icon on any widget to remove it from its category.
- **Search Widgets**: Use the search box to filter widgets across all categories.

## Project Structure

- `/app`: Next.js app router files
- `/components`: React components
- `/lib`: Redux store, slices, and hooks

## License

MIT
