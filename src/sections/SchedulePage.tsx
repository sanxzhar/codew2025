import { CSSProperties } from 'react';
import scheduleImage from '../assets/schedule.png';
import { Helmet } from 'react-helmet';
import starImage from '../assets/star.svg';
import { useState, useEffect } from 'react';

// Custom Hook for Media Query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener('change', listener);
    return () => mediaQueryList.removeEventListener('change', listener);
  }, [query]);

  return matches;
};

const ScheduleHeader = () => {
  const isTablet = useMediaQuery('(max-width: 1024px)');
  const isMobile = useMediaQuery('(max-width: 768px)');

  const scheduleHeaderStyles: { [key: string]: CSSProperties } = {
    container: {
      width: '100%',
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      justifyItems: 'center',
      alignItems: 'center',
      
      maxWidth: '1080px',
      gap: isMobile ? '16px' : '32px',
      color: '#fff',
      fontFamily: '"Press Start 2P", sans-serif',
      padding: isMobile ? '20px' : '0',
      marginTop: isMobile ? '20px' : '90px',
    },
    textWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: isMobile ? 'center' : 'flex-start',
      justifyContent: 'center',
      position: 'relative',
      //top: isMobile ? '0' : '200px', // Move 200px down for desktop
      //left: isMobile ? '0' : '-50px', // Move 50px left for desktop
    },
    text: {
      fontSize: isMobile ? '24px' : isTablet ? '40px' : '60px',
      fontWeight: '400',
      lineHeight: isMobile ? '28px' : isTablet ? '45px' : '60px',
      textAlign: isMobile ? 'center' : 'left',
    },
    codeW: {
      color: '#EC2B8C',
      marginBottom: '10px',
    },
    scheduleText: {
      color: '#FFFFFF',
    },
    starWrapper: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: isMobile ? '20px' : '0',
    },
    starImage: {
      width: isMobile ? '90px' : isTablet ? '150px' : '210px',
      height: isMobile ? '40px' : isTablet ? '65px' : '80px',
      marginBottom: isMobile ? '10px' : '0',
      marginLeft: isMobile ? '0' : '-90px', // Move 20px right for desktop
    },
    imageWrapper: {
      flex: '1',
      display: 'flex',
      justifyContent: isMobile ? 'center' : 'flex-start',
      marginLeft: isMobile ? '0px' : '70px', // Move 70px left for desktop
    },
    image: {
      maxWidth: isMobile ? '100%' : isTablet ? '80%' : '550px',
      height: isMobile ? 'auto' : isTablet ? '500px' : '680px',
      marginLeft: isMobile ? '20px' : '0', // Move 50px right for desktop
    },
  };

  return (
    <div style={scheduleHeaderStyles.container}>
      <div style={scheduleHeaderStyles.starWrapper}>
        <img
          src={starImage}
          alt="Star"
          style={scheduleHeaderStyles.starImage}
        /> 
        <div style={scheduleHeaderStyles.textWrapper}>
        
          <div style={scheduleHeaderStyles.text}>
          
            <div style={scheduleHeaderStyles.codeW}>codeW</div>
            <div style={scheduleHeaderStyles.scheduleText}>Schedule</div>
          </div>
        </div>
      </div>
      <div style={scheduleHeaderStyles.imageWrapper}>
        <img
          src={scheduleImage}
          alt="Event Schedule"
          style={scheduleHeaderStyles.image}
        />
      </div>
    </div>
  );
};

const SchedulePage = () => (
  <div
    style={{
      width: '100vw',
      background: 'linear-gradient(180deg, #0A062E 25%, #201394 100%)',
      //overflow: 'hidden', // Prevent scrolling
      padding: 0,
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      <style>
        {`
          body, html {
            margin: 0;
            padding: 0;
            overflow-x: hidden; /* Prevent horizontal scrolling */
            width: 100%;
            
          }
        `}
      </style>
    </Helmet>
    <ScheduleHeader />
  </div>
);

export default SchedulePage;
