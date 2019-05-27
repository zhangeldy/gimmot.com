import styled from "styled-components";
import Color from "../../_helpers/Color";

export const CssBox = styled.div`
  .user-item {
    user-select: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .user-name {
    color: ${Color.primary};
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    :hover {
      text-decoration: underline;
    }
  }
  .user-params {
    line-height: 20px;
    color: #939393;
    font-size: 12.5px;
    user-select: none;
  }
`;
