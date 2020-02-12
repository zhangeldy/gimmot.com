import styled from 'styled-components';
import { styles } from '../../components/ThemeProvider/Styles';

export const Wrapper = styled.div`
  .advert-item {
    padding: 20px 20px 15px;
  }
`;

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
  margin: 15px 0 0 50px;
  .comment-item {
    line-height: 1.36;
    margin-bottom: 12px;
    .reply {
      cursor: pointer;
      :hover {
        text-decoration: underline;
      }
    }
  }

  .add-comment {
    position: relative;
    .cmt-field {
      width: 100%;
      background-color: ${styles.isDark ? styles.borderColor : 'white'};
      border-radius: ${styles.borderRadius};
      border: ${styles.isDark ? 'none' : `1px solid ${styles.borderColor}`};
      margin-right: 10px;
      padding-right: 3px;
      input {
        background-color: transparent;
        border: none;
        width: 100%;
        height: 34px;
        padding: 7px 0 7px 13px;
        :focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }

  @media only screen and (max-width: 500px) {
    margin: 0 10px 0 30px;
  }
`;
