import React from "react";
import { StyledAbout } from "./styled";
import example from "../../assets/image-card-example.png";
const App = ({ comic }) => {
  // console.log(comic)
  // console.log(comic.name)
  // console.log(`${comic.thumbnail.path}/portrait_uncanny.jpg`)
  // const thumbnail = `${comic.thumbnail.path}/portrait_uncanny.jpg`;
  return (
    <>
      <StyledAbout>
        <div className='container'>
          <div className='content'>
            <h1 className='name'>Rick Jones has been Hulk's</h1>
            <p className='description'>
              Rick Jones has been Hulk's best bud since day one, but now he's
              more than a friend...he's a teammate! Transformed by a Gamma
              energy explosion, A-Bomb's thick, armored skin is just as strong
              and powerful as it is blue. And when he curls into action, he uses
              it like a giant bowling ball of destruction!
            </p>
            <button className='add'>
              Adicionar
            </button>
          </div>
          <div className='cover-hq'>
            <img src={example} />
            <div className='gradient' />
          </div>
        </div>
      </StyledAbout>
    </>
  );
};
export default App;
