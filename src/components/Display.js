import React from "react"
import { useFetchPosition } from "./FetchPosition"

const Display = () => {
  // use your own hook to load the data you need
  const { location, loading, error } = useFetchPosition()

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <h1 className="bg-gray-900 text-gray-300 text-center text-3xl">
      {location.message}
    </h1>
  )
}
export default Display
