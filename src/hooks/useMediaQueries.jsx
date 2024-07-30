import { useMediaQuery } from 'react-responsive';

const useMediaQueries = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 1025px) and (max-width: 1440px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1441px)' });
  const isTabletAndDesktop = useMediaQuery({ query: '(min-width: 768px)' });
  const isLaptopAndDesktop = useMediaQuery({ query: '(min-width: 1025px)' });
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return {
    isMobile,
    isTablet,
    isLaptop,
    isDesktop,
    isLaptopAndDesktop,
    isTabletAndDesktop,
    isPortrait,
    isRetina,
  };
};

export default useMediaQueries;
