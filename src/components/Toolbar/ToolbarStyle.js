import styled from "styled-components";

export const CssBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 20px;
  .logo {
    flex-grow: 1;
    img {
      transform: translateY(3px);
    }
  }
`;
