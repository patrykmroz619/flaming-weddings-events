import { useMediaQuery } from '@/utils/useMediaQuery';
import { useContext } from 'react';
import { SliderContext } from './context';

type UseHandleSlideType = (title: string) => [boolean, () => void];

export const useHandleSlide: UseHandleSlideType = (title) => {
  const { activeSlide, setActiveSlide } = useContext(SliderContext);
  const isActive = activeSlide === title;

  const isSliderDisable = useMediaQuery(`(orientation: portrait)`);

  const isContentVisible = isActive || isSliderDisable;

  const onHoverStart = () => {
    if (!isContentVisible) {
      setActiveSlide(title);
    }
  };

  return [isContentVisible, onHoverStart];
};
