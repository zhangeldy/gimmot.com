import styled from "styled-components";

export const Wrapper = styled.div`


  .rt-fullscreen {
    position: fixed;
    z-index: 1000;
    width: 100%;
    height: 100%;
    overflow: auto;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: #f0f2f5;
    padding: 0 20px 20px;
  }

  .rt-thead.-header {
    top: 0;
    z-index: 200;
    position: sticky;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1),
      0px 2px 2px 0px rgba(0, 0, 0, 0.08), 0px 3px 1px -2px rgba(0, 0, 0, 0.05) !important;
  }
  .rt-thead.-filters {
    position: sticky;
    top: 55px;
    z-index: 150;
    background-color: #f9f9f9;
  }

  .ReactTable {
    z-index: 1;
    border: none;
    overflow: auto;

    .rt-table {
      border: 1px solid rgba(0, 0, 0, 0.1);
      overflow: inherit;
      border-radius: 8px;
    }
    .rt-tbody {
      background-color: white;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
    }
    .rt-pagination {
      text-align: right;
      margin-top: 10px;
    }
    .rt-tr-group {
      cursor: ${props => (props.pointer ? "pointer" : "inherit")};
    }
  }

  .top-block {
    position: relative;
    padding: 5px 5px 5px 0px;
    text-align: right;
    min-height: 53px;
    border-bottom: none;
    .rt-search {
      display: inline-block;
      position: relative;
      transform: translateY(3px);

      svg {
        position: absolute;
        color: #6e6f70;
        top: 7px;
        left: 10px;
        z-index: 2;
      }
      input {
        margin-right: 10px;
        padding-left: 45px;
        height: 36px;
        border: none;
        border-radius: 4px;
        background-color: rgba(0, 0, 0, 0.05);
        width: 200px;
        transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      input:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }
      input:focus {
        box-shadow: none;
        outline: none;
        width: 280px;
      }
    }

    @media screen and (max-width: 600px) {
      .rt-search {
        display: none;
      }
    }

    @media screen and (max-width: 800px) {
      .rt-search {
        input:focus {
          width: 200px;
        }
      }
    }
  }
`;

export const Loading = styled.div`
  z-index: 100 !important;
  .-loading-inner {
    margin-top: -20px;
    .rt-loading-circle {
      padding: 10px;
      width: 61px;
      height: 61px;
      margin: auto;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1),
        0px 2px 2px 0px rgba(0, 0, 0, 0.08),
        0px 3px 1px -2px rgba(0, 0, 0, 0.05);
    }
  }
`;

export const Item = styled.div`
  :focus {
    outline: none;
  }
  li {
    font-size: 15px;
    height: 18px;
    padding: 8px 15px;
  }
`;
