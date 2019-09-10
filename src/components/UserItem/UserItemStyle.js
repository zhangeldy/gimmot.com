import styled from "styled-components";

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
    color: blueviolet;
    cursor: pointer;
    font-size: 13px;
    font-weight: 600;
    line-height: 20px;
    :hover {
      text-decoration: underline;
    }
  }
`;
