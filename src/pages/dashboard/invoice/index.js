import { useEffect } from 'react';
// next
import { useRouter } from 'next/router';
// routes
import { PATH_PAGE } from '../../../routes/paths';

// ----------------------------------------------------------------------

export default function Index() {
  const { pathname, push } = useRouter();

  useEffect(() => {
    if (pathname === PATH_PAGE.invoice.root) {
      push(PATH_PAGE.invoice.list);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
