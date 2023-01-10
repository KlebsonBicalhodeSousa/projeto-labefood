import styled from "styled-components";
import { primaryColor, quaternaryColor, quinternaryColor, tertiaryColor } from "../../constants/colors";

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 94vh;
  margin-bottom: 3.063rem;

`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  height: 4.75rem;
  margin-top: 10px;
  background-color: ${quinternaryColor};
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
  height: uto;
  min-height: 50%;
  display: flex;
  flex-direction: column;
  h3 {
    width: 328px;
  margin: 1rem 1rem 0;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  }
`;

export const Line = styled.div`
  margin: 0.5rem 1rem 0.438rem 1rem;
  border: solid 1px ${tertiaryColor};
`
export const OrderHistory = styled.div`
  display: flex;
  height: 40.5vh;
  flex-direction: column;
  overflow: auto;
  p {
    margin-left: 1rem;
  }
`

  export const Logout = styled.button`
    font-size: 1rem;
    font-family: 'Roboto';
    align-self: flex-start;
    border: none;
    background: transparent;
    color: ${quaternaryColor};
    padding: 0.625rem 0.625rem 1rem 1rem;
    :hover {
      color: ${primaryColor};
    }
  `