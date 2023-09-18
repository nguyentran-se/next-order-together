'use client';

import { getIsLoggedin } from '@/utils/getIsLoggedin';
import Unauthorized from '../../(errors)/unauthorized/page';

function RoomsLayout({ children }: { children: React.ReactNode }) {
  // TODO: Replace this with AuthGuard and whitelist paths
  return <>{getIsLoggedin() ? <>{children}</> : <Unauthorized />}</>;
}

export default RoomsLayout;
