import { useEffect, useState } from 'react';

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    const mediaListener = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener(`change`, mediaListener);

    setMatches(media.matches);
  }, []);

  return matches;
};
