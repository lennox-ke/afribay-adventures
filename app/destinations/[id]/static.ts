// You can delete this file if you prefer to keep generateStaticParams inside page.tsx
import { getAllDestinations } from "@/lib/data"

export async function generateStaticParams() {
  const destinations = await getAllDestinations()
  return destinations.map((d) => ({ id: d.id }))
}