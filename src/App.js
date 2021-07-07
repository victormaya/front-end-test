import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Store from "./components/Store";
import Loading from "./components/Loading";
import About from "./components/About";
import { StyledApp } from "./styled";

const App = () => {
  const [comics, setComics] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  const chamarApi = () => {
    const urlComics = `https://gateway.marvel.com:443/v1/public/characters?ts=1625612971&apikey=ddd50c98d7d1a7e97029ab16428e3eb9&hash=4e28ed21c04891deeb1ee38daf786aa5&limit=18`;
    fetch(urlComics)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        const results = responseJson.data.results;
        setComics(results);
        setShowLoading(false);
      });
  };

  useEffect(() => {
    if (comics.length === 0) {
      chamarApi();
    }
  }, []);

  return (
    <>
      {showLoading && <Loading />}
      <StyledApp>
        <Header />
        {/* <Store comics={comics} /> */}
        <About comic={comics[0]} />
      </StyledApp>
    </>
  );
};
export default App;
