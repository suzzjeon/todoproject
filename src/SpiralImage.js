import styled from "styled-components";
import spiralImage from "./spiral.png";

const ImageContainer = styled.div`
  content: "";
  background-image: url(${spiralImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 1;
`;

export default ImageContainer;
