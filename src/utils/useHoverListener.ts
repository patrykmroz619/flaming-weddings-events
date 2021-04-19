import { useState, RefObject, useEffect } from 'react';

export const useHoverListener = (ref: RefObject<HTMLElement>) => {
  const [isHover, setHover] = useState(false);

  const onHoverStart = () => setHover(true);

  const onHoverEnd = () => setHover(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(`mouseenter`, onHoverStart);
      ref.current.addEventListener(`mouseleave`, onHoverEnd);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener(`mouseenter`, onHoverStart);
        ref.current.removeEventListener(`mouseleave`, onHoverEnd);
      }
    };
  }, [ref.current]);

  return isHover;
};
