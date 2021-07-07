import React, { useEffect, useState } from "react";
import { StyledStore } from "./styled";
import gold from "../../assets/gold.png";
import Card from "./Card";

const App = ({ comics }) => {
  console.log(comics);
  return (
    <>
      <StyledStore>
        <h2 className='section-title'>HQs disponíveis</h2>
        <section className='gold-alert'>
          <div className='gold'>
            <img src={gold} />
            <p>item raro</p>
          </div>
        </section>
        <section className='cards'>
          {comics.map((item) => {
            if (item.name) {
              return <Card key={item.id} dataItem={item} />;
            }
          })}
        </section>
      </StyledStore>
    </>
  );
};
export default App;
