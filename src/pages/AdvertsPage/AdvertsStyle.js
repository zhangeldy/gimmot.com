import styled from 'styled-components';
import { styles } from '../../components/ThemeProvider/Styles';

export const Marks = styled.div`
  .mark-item {
    :first-child {
      margin-left: 0;
    }
    padding: 2px 10px;
    margin: 0 3px;
    border-radius: ${styles.borderRadius};
    opacity: 0.8;
    background-color: ${styles.isDark ? '#676767' : '#ececec'};
  }
`;

export const Comments = styled.div`
  .comment-item {
    margin: 0 50px 5px;
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
  }

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
      :focus {
        border: none;
        box-shadow: none;
        outline: none;
      }
    }
  }
`;
