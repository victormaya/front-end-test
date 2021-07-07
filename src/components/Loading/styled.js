import styled from "styled-components";

export const StyledLoading = styled.header`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #424242;
  z-index: 2000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > h1 {
    font-family: "Abril Fatface", cursive;
    letter-spacing: 2px;
    animation: piscar 1s infinite;
  }

  @keyframes piscar {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
