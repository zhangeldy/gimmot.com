import styled from "styled-components";
import { styles } from "../../../components/ThemeProvider/Styles";

export const Wrapper = styled.div`
  .mark-item {
    :first-child {
      margin-left: 0;
    }
    padding: 2px 10px;
    margin: 0 3px;
    border-radius: ${styles.borderRadius};
    opacity: 0.6;
    background-color: ${styles.isDark ? '#676767' : '#ececec'};
  }
`;
