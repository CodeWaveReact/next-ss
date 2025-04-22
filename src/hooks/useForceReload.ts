'use client';

import { useEffect } from 'react';

export const useForceReload = () => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('shouldReload') === 'true') {
      // Remove the parameter and reload
      urlParams.delete('shouldReload');
      const newUrl = window.location.pathname + 
        (urlParams.toString() ? '?' + urlParams.toString() : '');
      window.history.replaceState({}, '', newUrl);
      window.location.reload();
    }
  }, []);
};
