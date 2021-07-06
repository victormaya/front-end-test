import React from "react";
import { StyledHeader, StyledCover } from "./styled";
const App = () => {
  return (
    <>
      <StyledHeader>
        <nav className='navbar'>
          <p className='name-store'>E-COMICs</p>
          <menu className='menu'>
            <a>
              <p>Loja</p>
            </a>
            <a>
              <p>Carrinho</p>
            </a>
          </menu>
        </nav>
      </StyledHeader>
      <StyledCover>
        <h1 className='title'>E-COMICs</h1>
        <p className='subtitle'>A loja mais insana de HQs!</p>
      </StyledCover>
    </>
  );
};
export default App;
