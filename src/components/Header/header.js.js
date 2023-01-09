import { ArrowBackIosNew } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { goToBack } from "../../routes/coordinator";
import { BoxInfo, BoxTitle, ContainerHeader, Time, Title } from "./styled";

const Header = ({ title, back }) => {
  const navigate = useNavigate()
  return (
    <ContainerHeader>
      <BoxInfo>
      </BoxInfo>
      <BoxTitle>
        {back && <ArrowBackIosNew onClick={() => goToBack(navigate)}/>}
        <Title>{title}</Title>
      </BoxTitle>
    </ContainerHeader>
  );
};
export default Header;
