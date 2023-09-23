'use client';

import React, { useLayoutEffect, useState } from 'react';

const ClientOnly = ({ children }: { children: React.ReactNode }) => {
  const [isMounted, setIsMounted] = useState(false);
  useLayoutEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return (
    <div>Loading....</div>
  );
  return <>{children}</>;
};

export default ClientOnly;
