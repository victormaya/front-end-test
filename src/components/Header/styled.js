import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  background: #424242;
  flex-direction: column;
  .navbar {
    width:940px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .name-store {
    font-family: "Abril Fatface", cursive;
    color: #f63a2e;
    font-size: 2.25rem;
  }
  .menu {
    display: flex;
    > a {
      cursor: pointer;
      position: relative;

      ::before {
        content: "";
        width: 7px;
        height: 7px;
        background: #202020;
        position: absolute;
        left: -20px;
        top: 45%;
        border-radius: 50%;
      }
      :nth-child(1) {
        margin-right: 37px;
      }
      > p {
        font-size: 1.5rem;
      }
      :hover {
        ::before {
          background: #f63a2e;
        }
        > p {
          color: #f63a2e;
        }
      }
    }
  }
`;
export const StyledCover = styled.header`
  width: 100%;
  height: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background: rgb(32, 32, 32);
  background: linear-gradient(
    90deg,
    rgba(32, 32, 32, 1) 0%,
    rgba(32, 32, 32, 0) 100%
  );

  .title {
    font-size: 4rem;
    font-family: "Abril Fatface", cursive;
    letter-spacing: 2px;
  }
  .subtitle {
    font-size: 1.5rem;
  }
`;
