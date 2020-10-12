import styled from "styled-components";
import backgroundImage from "../images/leafy_green_bg_2400x1600.jpg";

const Background = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${backgroundImage});
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Background;
