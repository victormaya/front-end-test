import React from "react";
import { StyledStore } from "./styled";
import gold from "../../assets/gold.png";
import Card from "./Card";

const App = () => {
  return (
    <>
      <StyledStore>
        <h2 className='section-title'>HQs disponíveis</h2>
        <section className='gold-input'>
          <div className='gold'>
            <img src={gold} />
            <p>item raro</p>
          </div>
          <input className='search' placeholder='Buscar HQ' />
        </section>
        <section className='cards'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </section>
      </StyledStore>
    </>
  );
};
export default App;
