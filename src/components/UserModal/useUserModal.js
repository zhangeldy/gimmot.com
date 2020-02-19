import { useLocation, useHistory } from 'react-router-dom';

export default function useUserModal() {
  const { pathname, search } = useLocation();
  const { replace } = useHistory();
  const user = new URLSearchParams(search);
  return {
    isOpen: !!user.get('user'),
    open: id => {
      user.set('user', id);
      replace(`${pathname}?${user.toString()}`);
    },
    close: () => {
      user.delete('user');
      replace(`${pathname}?${user.toString()}`);
    }
  };
}
