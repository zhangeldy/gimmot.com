import styled from "styled-components";

export const CssBox = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  margin-bottom: 20px;
  color: white;
  .logo {
    flex-grow: 1;
    svg {
      width: 40px;
      height: 40px;
      transform: translateY(3px);
    }
  }
`;
