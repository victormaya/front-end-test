import React from "react";
import Header from "./components/Header";
import Store from "./components/Store";
import { StyledApp } from "./styled";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Store />
    </StyledApp>
  );
};
export default App;
