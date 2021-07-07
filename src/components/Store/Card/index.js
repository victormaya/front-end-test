import React from "react";
import { StyledCard } from "./styled";

const App = ({ dataItem }) => {
  const thumbnail = `${dataItem.thumbnail.path}/portrait_uncanny.jpg`;
  const name = dataItem.name;

  return (
    <>
      <StyledCard thumbnail={thumbnail}>
        <div className='name'>
          <p>{name}</p>
        </div>
        <div className='button'>
          <button>Adicionar</button>
        </div>
      </StyledCard>
    </>
  );
};
export default App;
