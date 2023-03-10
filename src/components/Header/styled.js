import styled from "styled-components";

export const ContainerHeader = styled.div`
  width: 100%;
  min-width: 320px;
  height: 64px;
  margin: 0 0 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #fff;
`;

export const BoxInfo = styled.div`
  width: 100%;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxTitle = styled.div`
  width: 100%;
  height: 44px;
  margin: 0 92px 0 93px;
  display: flex;
  display: grid;
  grid-template-columns: 24px 1fr 24px;
  align-items: center;
  justify-items: center;
`;

export const Title = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  text-align: center;
  grid-column-start: 2;
  color: #000;
`;
