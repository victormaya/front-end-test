import styled from "styled-components";

export const StyledAbout = styled.section`
  padding-top: 120px;
  padding-bottom: 120px;
  width: 100%;
  background: #202020;
  display: flex;
  justify-content: center;
  .container {
    width: 940px;
    display: flex;
    justify-content: flex-end;
    position: relative;
  }
  .cover-hq {
    width: 460px;
    box-sizing: border-box;
    padding-left: 2rem;
    padding-right: 2rem;
    > img {
      width: 100%;
      box-sizing: border-box;
    }
    opacity: 0;
    position: relative;
    animation: opacity forwards 1s;
    animation-delay: 3s;
  }

  .gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
        90deg,
        #202020 0%,
        rgba(32, 32, 32, 0.640777) 31.25%,
        rgba(32, 32, 32, 0) 53.65%,
        rgba(32, 32, 32, 0.516854) 61.19%,
        #202020 100%
      ),
      linear-gradient(
        180deg,
        #202020 0%,
        rgba(32, 32, 32, 0.640777) 31.23%,
        rgba(32, 32, 32, 0) 53.62%,
        rgba(32, 32, 32, 0.516854) 67.15%,
        #202020 99.95%
      );
    top: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    width: 65%;
    position: absolute;
    left: 0;
    top: 60px;
  }
  .name {
    z-index: 50;
    font-family: "Abril Fatface", cursive;
    font-size: 3rem;
    letter-spacing: 2px;
    animation: surge-left forwards 1s;
    animation-delay: 1s;
    opacity: 0;
  }
  .description {
    margin-top: 15px;
    right: 0;
    top: 120px;
    z-index: 50;
    font-size: 0.875rem;
    letter-spacing: 2px;
    animation: surge-left forwards 1s;
    animation-delay: 2s;
    opacity: 0;
  }
  .add {
    animation: surge-left forwards 1s;
    animation-delay: 4s;
    opacity: 0;
    background: #f63a2e;
    display: flex;
    justify-content: center;
    width: 40%;
    padding: 1rem;
    border: none;
    margin-left: 25%;
    margin-top: 30px;
    box-sizing: border-box;
    cursor: pointer;
    border-radius: 7px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.3s;
    :hover {
      transform: scale(1.1) !important;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
  }

  @keyframes opacity {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes surge-left {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`;
