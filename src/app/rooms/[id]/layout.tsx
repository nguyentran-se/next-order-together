'use client';

import * as nextCookie from 'cookies-next';
import Unauthorized from '../../(errors)/unauthorized/page';

function RoomsLayout({ children }: { children: React.ReactNode }) {
  const hasBearerToken = nextCookie.hasCookie('sessionToken');
  // TODO: Replace this with AuthGuard and whitelist paths
  return <>{hasBearerToken ? <>{children}</> : <Unauthorized />}</>;
}

export default RoomsLayout;
