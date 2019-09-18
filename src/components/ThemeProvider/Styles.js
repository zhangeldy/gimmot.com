import styled from 'styled-components';
import { theme } from './Theme';

export const styles = {
  isDark: theme.dark,
  primary: theme.palette.primary.main,
  secondary: theme.palette.secondary.main,
  textPrimary: theme.palette.text.primary,
  textSecondary: theme.palette.text.secondary,
  bgColor: theme.palette.background.default,
  borderColor: theme.palette.border.default,
  borderRadius: '4px',
};

export const Wrapper = styled.main`
  background-color: ${styles.bgColor};
  min-height: 100vh;

  .colorPrimary {
    color: ${styles.primary};
  }

  .colorSecondary {
    color: ${styles.secondary};
  }

  .textPrimary {
    color: ${styles.textPrimary};
  }

  .textSecondary {
    color: ${styles.textSecondary};
  }

  .content {
    max-width: 650px;
    width: 90%;
    margin: auto;
    padding: 0 !important;
  }

  .user-name {
    cursor: pointer;
    font-weight: 600;
    line-height: 20px;
    :hover {
      text-decoration: underline;
    }
  }

  .scroll-fix {
    width: calc(100vw - 20px);
  }

  @media only screen and (max-width: 500px) {
    .scroll-fix {
      width: 100vw;
    }
  }
`;
