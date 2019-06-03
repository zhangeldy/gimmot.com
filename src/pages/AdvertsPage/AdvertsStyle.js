import styled from "styled-components";

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  .input-text {
    width: calc(100% - 80px);
  }
  textarea {
    overflow: hidden;
    padding: 0 10px;
  }
`;
