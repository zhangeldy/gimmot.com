import styled from 'styled-components';
import { styles } from '../../../components/ThemeProvider/Styles';

export const CssBox = styled.div`
  .add-comment {
    border-top: 1px solid ${styles.borderColor};
    margin-top: 15px;
    input {
      border: none;
      border-bottom-left-radius: ${styles.borderRadius};
      border-bottom-right-radius: ${styles.borderRadius};
      color: white;
      background-color: transparent;
      width: 100%;
      height: 40px;
      padding: 7px 13px;
      font-size: 13px;
      :focus {
        border: none;
        box-shadow: none;
        outline: none;
      }
    }
  }
`;

export const CommentCss = styled.div`
  margin: 0 50px 5px;
  padding-top: 5px;
  font-size: 13px;
  border-top: 1px solid ${styles.borderColor};
  line-height: 1.36;

  :first-child {
    border: none;
  }

  .reply {
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 500px) {
    margin: 0 10px 5px 30px;
  }
`;
