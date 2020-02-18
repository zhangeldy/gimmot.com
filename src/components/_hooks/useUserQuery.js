import { useLocation } from 'react-router-dom';

export default function useUserQuery() {
  const { pathname, search } = useLocation();
  const user = new URLSearchParams(search);
  return {
    url: pathname,
    get: name => query.get(name),
    delete: name => query.delete(name),
    toString: () => query.toString()
  };
}
