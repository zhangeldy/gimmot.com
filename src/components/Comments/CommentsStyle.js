import styled from "styled-components";
import Color from "../../_helpers/Color";

export const CssBox = styled.div`
  .add-comment {
    border-top: 1px solid #dadee3;
    margin-top: 15px;
    input {
      border: none;
      border-radius: 4px;
      width: 100%;
      height: 40px;
      padding: 7px 13px;
      font-size: 14px;
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
  border-top: 1px solid #e7e8ec;
  line-height: 1.36;

  :first-child {
    border: none;
  }

  .reply {
    color: ${Color.primary};
    cursor: pointer;
    :hover {
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 500px) {
    margin: 0 10px 5px 30px;
  }
`;
