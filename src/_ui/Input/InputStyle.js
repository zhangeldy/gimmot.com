import styled from "styled-components";
import Color from "../../_helpers/Color";

export const InputField = styled.input`
  border-radius: 4px;
  border: 1px solid #d3d9de;
  height: 30px;
  padding: 5px 9px 7px 9px;
  transition: border-color 0.3s;
  width: 100%;
  :focus {
    box-shadow: none;
    outline: none;
    border-color: ${Color.primaryLight};
  }
`;
