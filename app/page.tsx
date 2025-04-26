import { Dashboard } from "@/components/dashboard"
import { Providers } from "@/components/providers"

export default function Home() {
  return (
    <Providers>
      <main className="container mx-auto py-8 px-4">
        <Dashboard />
      </main>
    </Providers>
  )
}
