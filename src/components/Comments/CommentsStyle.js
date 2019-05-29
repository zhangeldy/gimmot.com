import styled from "styled-components";

export const CssBox = styled.div`
  margin-top: 15px;

  .comment {
    margin-left: 30px;
    display: flex;
    font-size: 14px;
  }

  .add-comment {
    border-top: 1px solid #dadee3;
    margin-top: 15px;
    input {
      border: none;
      border-radius: 4px;
      width: 100%;
      height: 32px;
      padding: 7px 13px;
      :focus {
        border: none;
        box-shadow: none;
        outline: none;
      }
    }
  }
`;
