import styled from "styled-components";

export const CssBox = styled.div`
  margin-top: 15px;
  input {
    border: 1px solid #dadee3;
    border-radius: 4px;
    width: 100%;
    height: 32px;
    padding: 7px 13px;
    :focus {
      border: 1px solid #dadee3;
      box-shadow: none;
      outline: none;
    }
  }
`;
