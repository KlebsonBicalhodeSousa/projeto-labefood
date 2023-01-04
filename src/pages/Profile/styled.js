import styled from "styled-components";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ProfileContainer = styled.div`
  /* height: 5%;
  text-align: center; */
  /* border-bottom: 1px solid black; */
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  margin-top: 1rem;
  border-top: 1px solid black;
`;
export const ProfilePerson = styled.div`
  height: 55%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  div:nth-child(1) {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 6px;
  }
  div:nth-child(2) {
    width: 20%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;
export const AddressPerson = styled.div`
  height: 45%;
  margin-top: 10px;
  background-color: lightgray;
  display: flex;
  justify-content: space-between;

  div:nth-child(1) {
    width: 80%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  div:nth-child(2) {
    width: 20%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    cursor: pointer;
    :hover {
      background-color: gray;
    }
  }
`;
export const HistoryPurchase = styled.div`
  height: 70%;
  /* height: 55%; */
  /* padding: 10px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border-radius: 5px;
  overflow: auto;
  background-color: lightgray;
  #history {
    text-align: center;
    padding-bottom: 10px;
    border-bottom: solid 1px #908e8e;
  }
  #container-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    text-align: center;
    overflow: auto;
    border-bottom: solid 1px #908e8e;
  } */
`;

export const GoTOBack = styled(ArrowBackIosNewIcon)`
  && {
    cursor: pointer;
    font-size: 2rem;
    margin: 20px 20px 0 20px;
    :hover {
      box-shadow: 0 5px 0;
    }
    :active {
      position: relative;
      top: 5px;
      box-shadow: none;
    }
    @media (min-width: 300px) and (max-width: 500px) {
      margin: 5px 5px 0 0;
      :active {
        position: relative;
        top: 5px;
      }
    }
  }
`;
