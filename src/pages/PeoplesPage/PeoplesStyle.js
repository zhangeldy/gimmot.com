import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import { styles } from '../../components/ThemeProvider/Styles';

export const Wrapper = styled(Paper)`
  padding: 20px;
`;

export const UserItem = styled.div`
  padding: 15px 0;
  :first-child {
    padding-top: 0;
  }

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
  border-bottom: 1px solid ${styles.borderColor};
  :last-child {
    border-bottom: none;
    padding-bottom: 0;
  }
`;
