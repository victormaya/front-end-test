import styled from "styled-components";
import example from "../../../assets/image-card-example.png";

export const StyledCard = styled.div`
  /* background: url(${example}); */
  background: url(${(props) => props.thumbnail}) no-repeat;
  background-size: cover;
  width: 300px;
  height: 400px;
  border-radius: 0 20px 0 20px;
  margin-bottom: 30px;
  position: relative;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  .button {
    display: none;
  }
  .name {
    display: none;
  }

  :hover {
    z-index: 10;
    transform: scale(1.2);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    ::after {
      content: "";
      width: 100%;
      height: 100%;
      background: rgb(0, 0, 0);
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(32, 32, 32, 0) 90%
      );
      position: absolute;
      border-radius: 0 20px 0 20px;
    }
    .name {
      display: flex;
      justify-content: center;
      position: absolute;
      width: 100%;
      bottom: 80px;
      z-index: 41;
      font-family: "Abril Fatface", cursive;
      font-size: 1.5rem;
      animation: up-name forwards 1s;
      animation-delay: 0.1s;
      opacity: 0;
      text-align: center;
    }
    .button {
      z-index: 40;
      bottom: 30px;
      display: flex;
      opacity: 0;
      position: absolute;
      width: 100%;
      justify-content: center;
      animation: up-button forwards 1s;
      > button {
        background: #f63a2e;
        border: none;
        width: 150px;
        height: 30px;
        border-radius: 5px;
        font-size: 0.875rem;
        text-transform: uppercase;
        font-weight: bold;
        cursor: pointer;
        transition: transform 0.5s;
        :hover {
          transform: scale(1.2);
        }
      }
    }
    @keyframes up-button {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translate(0);
      }
    }
    @keyframes up-name {
      from {
        opacity: 0;
        transform: translateY(60px);
      }
      to {
        opacity: 1;
        transform: translate(0);
      }
    }
  }
`;
