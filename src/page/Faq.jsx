import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import TheLoader from "../components/TheLoader";

function About() {
  const { id } = useParams();

  const [dataFromAPI, setDataFromAPI] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    fetch("http://www.omdbapi.com/?apikey=8e3f600b&s=batman").then((response) =>
      response
        .json()
        .then(({ Search }) => {
          setTimeout(() => {
            setDataFromAPI(Search);
            setDataLoading(false);
          }, 500);
        })
        .catch((error) => console.log(error))
    );
  }, []);
  return (
    <div className="App">
      <div>
        <h1>Here is the faq number {id}</h1>.
        {isDataLoading ? (
          <TheLoader />
        ) : (
          dataFromAPI.map(({ Title, imdbID, Year, Type }) => (
            <div key={imdbID}>
              <h2>{Title}</h2>
              <p>
                {Type} release on {Year}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default About;
