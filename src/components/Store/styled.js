import styled from "styled-components";

export const StyledStore = styled.section`
  width: 100%;
  background: #202020;
  padding-top: 120px;
  padding-bottom: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .section-title {
    font-family: "Abril Fatface", cursive;
    font-size: 2.25rem;
    position: relative;
    ::after {
      content: "";
      width: 100%;
      height: 2px;
      background-color: #f63a2e;
      position: absolute;
      bottom: -10px;
      left: 0;
    }
    margin-bottom: 60px;
  }
  .gold-alert {
    display: flex;
    width: 940px;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
  }
  .gold {
    display: flex;
    align-items: center;
    > img {
      margin-right: 10px;
    }
    > p {
      font-size: 0.875rem;
    }
  }
  .search {
    width: 300px;
    height: 50px;
    background: #424242;
    border: none;
    border-radius: 10px;
    padding: 15px;
  }

  .cards {
    display: flex;
    width: 940px;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
