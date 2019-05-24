import styled from "styled-components";

export const CssBox = styled.div`
  font-size: 12px;
  font-style: italic;
  text-transform: lowercase;
  margin: 5px 0;
  color: #939393;
  user-select: none;

  .mark-item {
    :first-child {
      margin-left: 0;
    }
    padding: 0 10px 4px;
    margin: 0 3px;
    border-radius: 4px;
    background-color: #ececec;
  }
`;
