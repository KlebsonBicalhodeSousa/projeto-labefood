import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../routes/coordinator";
import { BoxInfo, BoxTitle, ContainerHeader, Time, Title } from "./styled";

const Header = ({ title, back }) => {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      <BoxInfo>
        <Time>9:41 AM</Time>
      </BoxInfo>
      <BoxTitle>
        {back && <ArrowBackIosNew onClick={() => goToBack(navigate)}/>}
        <Title>{title}</Title>
      </BoxTitle>
    </ContainerHeader>
  );
};
export default Header;
