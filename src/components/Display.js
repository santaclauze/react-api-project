import React from "react"
import { useFetchPosition } from "./FetchPosition"

const Display = () => {
  //call hook and hook data
  const { location, loading, error } = useFetchPosition()

  // loading and error 
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <>
    <h2 className="bg-gray-900 text-gray-300 text-center text-6xl">
      {location.message}
    </h2>
    <h2 className="bg-gray-900 text-gray-300 text-center text-3xl">
      response timestamp: {location.timestamp}
    </h2>
    <h2 className="bg-gray-900 text-gray-300 text-center text-3xl">
      current latitude: {JSON.stringify(location) !== '{}' && location.iss_position.latitude}
    </h2>
    <h2 className="bg-gray-900 text-gray-300 text-center text-3xl">
      current longitude: {JSON.stringify(location) !== '{}' && location.iss_position.longitude}
    </h2>
    </>
  )
}
export default Display
