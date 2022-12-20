import { BoxInfo, BoxTitle, ContainerHeader, Time, Title } from "./styled";

const Header = ({ title }) => {
  return (
    <ContainerHeader>
      <BoxInfo>
        <Time>9:41 AM</Time>
      </BoxInfo>
      <BoxTitle>
        <Title>{title}</Title>
      </BoxTitle>
    </ContainerHeader>
  );
};
export default Header;
