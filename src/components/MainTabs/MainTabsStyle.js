import styled from "styled-components";
import { styles } from "../ThemeProvider/Styles";

export const Wrapper = styled.div`
  border-bottom: 1px solid ${styles.borderColor};
  outline: 1px solid ${styles.bgColor} ;
  background-color: ${styles.bgColor} !important;
  position: sticky;
  top: 48px;
  z-index: 2;
`;
