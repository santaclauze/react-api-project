import React from "react"
import useFetchPosition from './useFetchPosition'




const Display = () => {
  
  //call hook and hook data
  const { response, loading, error } = useFetchPosition()
  const lat = JSON.stringify(response) !== '{}' && response.iss_position.latitude
  const long = JSON.stringify(response) !== '{}' && response.iss_position.longitude
  const transmission = response.message
  const transDate = new Date(response.timestamp * 1000).toLocaleDateString("en-NZ")
  const transTime = new Date(response.timestamp * 1000).toLocaleTimeString("en-NZ")

  // loading and error 
  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>


  return (
    <div className="font-mono">
    <h2 className="text-gray-300 text-center text-3xl">
      transmission request: {transmission}
    </h2>
    <h2 className="text-gray-300 text-center text-3xl">
      response timestamp:  {transTime} {transDate}
    </h2>
    <h2 className="text-gray-300 text-center text-3xl">
      current latitude: {lat}
    </h2>
    <h2 className="text-gray-300 text-center text-3xl">
      current longitude: {long}
    </h2>

    </div>
  )
}

export default Display
