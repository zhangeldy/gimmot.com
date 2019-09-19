import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';

export const Wrapper = styled.div`
  .peoples {
    margin-right: -5px;
    margin-left: -5px;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Header = styled(Paper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 8px 8px 16px;
  margin: 16px 0 11px 0;

  .search {
    display: flex;
    align-items: center;
    flex: 1;
    flex-wrap: nowrap;
    input {
      border: none;
      height: 30px;
      padding-left: 10px;
      flex: 1;
      background-color: transparent;
      :focus {
        outline: none;
      }
      ::placeholder {
        opacity: 0.5;
      }
    }
  }
`;

export const UserItem = styled(Paper)`
  min-width: 305px;
  flex: 1;
  margin: 5px;
  line-height: 1.36;
  .user-avatar {
    user-select: none;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
