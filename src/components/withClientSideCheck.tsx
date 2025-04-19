import { ComponentType, useEffect, useState } from 'react';

export function withClientSideCheck<P extends object>(
  WrappedComponent: ComponentType<P>
) {
  return function WithClientSideCheck(props: P) {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(typeof window !== 'undefined');
    }, []);

    if (!isClient) {
      return null; // or a loading spinner, or any other fallback
    }

    return <WrappedComponent {...props} />;
  };
} 