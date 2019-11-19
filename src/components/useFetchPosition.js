import { useEffect, useState } from "react";

export const issUrl = "http://api.open-notify.org/iss-now.json";

const useFetchPosition = () => {
  // define states for the hook
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // init loading and error states
    setLoading(true);
    setError(null);

    // fetch api url
    fetch(issUrl)
      // return response as promise with json content
      .then(res => res.json())
      // return json promise, setLoading state, console log
      .then(json => {
        setLoading(false);
        if (json) {
          setResponse(json);
          console.dir(json);
        } else {
          // this else prevents infinite loop
          setResponse([]);
        }
      })
      // errors update state here
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);
  // return updated states for export to display
  return { response, loading, error };
};

export default useFetchPosition