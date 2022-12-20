import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 360px;
  height: 64px;
  margin: 0 0 8px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom: solid 1px rgba(0, 0, 0, 0.25);
  background-color: #fff;
`;

export const BoxInfo = styled.div`
  width: 100%;
  height: 20px;
  /* padding: 0 5px 0 0; */
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid gray 1px; */
`;

export const Time = styled.time`
  width: 69px;
  height: 14px;
  /* margin: 3.5px 69px 2.5px 5px; */
  font-family: Roboto;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  color: #030303;
  /* border: solid gray 1px; */
`

export const BoxTitle = styled.div`
  width: 175px;
  height: 44px;
  margin: 0 92px 0 93px;
  padding: 13px 63.5px 12px;
  /* border: solid gray 1px; */
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  text-align: center;
  color: #000;
`;
