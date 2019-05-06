import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

export const Papers = styled(Paper)`

  width: 100%;
  position: relative;
  margin: 0 auto auto;

  .ant-upload {
    width: 100% !important;
    min-height: 200px !important;
    padding: 15px;

    span:first-child {
      width: 100% !important;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
  
  .submitButton {
    margin-bottom: 20px !important;
  }
  
  .ant-upload-list-item .anticon.anticon-close {
    display: ${props => props.readOnly ? "none" : "inherit"};
  }
  
  
  .bid-title {
    font-size: 18px;
    padding: 10px 10px;
    span:nth-of-type(2) {
      float: right;
    }
  }
  
  
  
  
  hr {
    margin-top: 15px;
    border:none;
    border-top:2px dotted #b2b2b2;
    color:#fff;
    background-color:#fff;
    height:1px;
  }

  
`;
