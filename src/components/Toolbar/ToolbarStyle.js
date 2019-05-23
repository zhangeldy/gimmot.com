import styled from "styled-components";
import Color from "../../_helpers/Color";

export const CssBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 20px;
  background-color: ${Color.primary};
  color: white;
  .logo {
    flex-grow: 1;
    img {
      transform: translateY(3px);
    }
  }
`;
