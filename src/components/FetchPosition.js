import { useEffect, useState } from "react";

export const issUrl = "http://api.open-notify.org/iss-now.json";

export const useFetchPosition = () => {

  // First we define the necessary states for our hook
  // this includes book, the loading state and potential errors
  const [location, setLocation] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

 
  useEffect(() => {

    // First we set the loading and error states
    setLoading(true)
    setError(null)

    fetch(issUrl)
      .then(res => res.json())
      .then(json => {
        setLoading(false)
        if (json) {
          setLocation(json)
          console.log(json)
        } else {
          setLocation([])
        }
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])
  return { location, loading, error }
}

