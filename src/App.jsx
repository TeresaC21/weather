import React, { useState, useEffect } from 'react';

// Components
import Header from './components/Header';
import Form from './components/Form';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {
  // State
  const [search, setSearch] = useState({
    city: '',
    country: '',
  });
  const [consult, setConsult] = useState(false);
  const [resultAPI, setResultAPI] = useState({});
  const [error, setError] = useState(false);

  const { city, country } = search;

  useEffect(() => {

    const consultAPI = async () => {
      if (consult) {
        const apiID = 'e11eba9b0c45529ac50c35793be6572b';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiID}`;

        const response = await fetch(url);
        const result = await response.json();
        setResultAPI(result);
        setConsult(false);

        // Confirm results
        if (result.cod === "404") {
          setError(true);
        } else {
          setError(false);
        }
      }

    }
    consultAPI();
    // eslint-disable-next-line
  }, [consult]);/* city, country */

  // Confirm Errors result
  let componentError;
  if (error) {
    componentError = <Error message="There isn't such data" />
  } else {
    componentError = <Weather
      resultAPI={resultAPI}
    />
  }

  return (
    <>
      <Header
        tittle='Wheather React App'
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Form
                search={search}
                setSearch={setSearch}
                setConsult={setConsult}
              />
            </div>
            <div className="col m6 s12">
              {componentError}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
