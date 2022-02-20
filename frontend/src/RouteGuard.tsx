import { useRouter } from 'next/router';
import { ReactChild, useEffect, useState } from 'react';

export function RouteGuard({ children }: { children: ReactChild }) {
  const router = useRouter();
  const [canRender, setCanRender] = useState<boolean>(false);

  function redirect() {
    router.push('/login');
  }

  useEffect(() => {
    if (['/favicon.ico', '/manifest.json', '/sw.js'].includes(router.asPath)) return setCanRender(true);
    if (['/login', '/signup'].includes(router.asPath)) return setCanRender(true);

    (async () => {
      if (document.cookie === '') document.cookie = JSON.stringify({});
      const cookies = JSON.parse(document.cookie);

      document.cookie = JSON.stringify(cookies);

      const { jwt } = JSON.parse(document.cookie);

      if (!jwt) return redirect();

      const response = await fetch(`http://localhost:5000/api/users/validate?token=${jwt}`);
      const data = await response.json();
      if (!data.valid) return redirect();

      setCanRender(true);
    })();
  }, [canRender]);

  return <>{children}</>;
}
