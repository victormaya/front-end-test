import styled from "styled-components";
import example from "../../../assets/image-card-example.png";

export const StyledCard = styled.div`
  background: url(${example});
  width: 300px;
  height: 400px;
  border-radius: 0 20px 0 20px;
  margin-bottom: 30px;
  position: relative;
  transition: transform 0.5s;
  .button {
    display: none;
  }
  :hover {
    z-index: 10;
    transform: scale(1.2);
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
    .button {
      z-index: 40;
      bottom: 30px;
      display: flex;
      opacity: 0;
      position: absolute;
      width: 100%;
      justify-content: center;
      animation: breath-animation forwards 1s;
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
    @keyframes breath-animation {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translate(0);
      }
    }
  }
`;
