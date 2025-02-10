// import React from "react";
// import GlobeImage from '../assets/globe.svg';
// import { Helmet } from "react-helmet";
// const Title: React.FC = () => {
//   const styles = {
//     title: {
//       fontSize: "60px",
//       lineHeight: "60px",
//       fontWeight: 400,
//       fontFamily: "'Press Start 2P', sans-serif",
//       marginBottom: "20px",
//       color: "white",
//       textAlign: "center" as "center",
//       marginTop: "140px",
//     },
//     highlightedText: {
//       color: "#FF1A75",
//     },
//   };

//   return (
//     <h1 style={styles.title}>
//       What is <span style={styles.highlightedText}>CodeW</span> 2025?
//     </h1>
//   );
// };

// const InfoPage: React.FC = () => {
//   const styles = {
//     page: {
//       background: "linear-gradient( #201394 0%, #0A062E 40%)", 
//       color: "white",
//       minHeight: "100vh",
//       padding: "40px 24px",
//       display: "flex",
//       flexDirection: "column" as "column",
//       alignItems: "center",
//     },
//     contentWrapper: {
//       display: "flex",
//       flexDirection: "row" as "row", 
//       justifyContent: "space-between",
//       alignItems: "center",
//       maxWidth: "1172px",
//       width: "100%",
//       gap: "40px", 
//     },
//     textWrapper: {
//       flex: 1, 
//       textAlign: "left" as "left",
//     },
//     infoSection: {
//       marginTop: "40px",
//       marginLeft: "-50px",
//       fontSize: "35px",
//       lineHeight: "40px",
//       fontWeight: 400,
//       fontFamily: "Montserrat, sans-serif",
//       width: "820px",
//     },
//     paragraph: {
//       marginTop: "16px",
//     },
//     globeImageWrapper: {
//       flex: 1, 
//       display: "flex",
//       justifyContent: "center",
//     },
//     globeImage: {
//       //maxWidth: "100%",
//       width:'504px', 
//       height: "auto",
//     },
//   };

//   return (
//     <div style={styles.page}>

//       {/* Title Section */}
//       <Title />
//     <Helmet>
//         <link 
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap" 
//           rel="stylesheet"
//         />
//       </Helmet>
//       {/* Content Section */}
//       <div style={styles.contentWrapper}>
//         {/* Text Section */}
//         <div style={styles.textWrapper}>
//           <div style={styles.infoSection}>
//             <p>
//               <span style={{ color: "#FF1A75" }}>codeW 2025</span> is the sixth annual national competition in{" "}
//               <span style={{ color: "#FF1A75" }}>competitive programming</span> for the university and high school{" "}
//               <span style={{ color: "#FF1A75" }}>female students</span>.
//             </p>
//             <p style={styles.paragraph}>
//               During the competition, the participants will solve a set of problems on{" "}
//               <span style={{ color: "#FF1A75" }}>algorithms</span> and <span style={{ color: "#FF1A75" }}>data structures</span> in their chosen{" "}
//               <span style={{ color: "#FF1A75" }}>programming language</span>.
//             </p>
//             <p style={styles.paragraph}>
//               <span style={{ color: "#FF1A75" }}>codeW 2025</span> will take place at{" "}
//               <span style={{ color: "#FF1A75" }}>Nazarbayev University</span>, on{" "}
//               <span style={{ color: "#FF1A75" }}>March 9th 2025</span>.
//             </p>
//           </div>
//         </div>

//         {/* Globe Image Section */}
//         <div style={styles.globeImageWrapper}>
//           <img
//             src={GlobeImage} // Replace with the actual path to the globe image
//             alt="Globe"
//             style={styles.globeImage}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InfoPage;
import React from "react";
import GlobeImage from "../assets/globe.svg";
import { Helmet } from "react-helmet";
import { useState, useEffect } from "react";
import { CSSProperties } from "react";
// Custom Hook for Media Query
const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(window.matchMedia(query).matches);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);
    const listener = () => setMatches(mediaQueryList.matches);
    mediaQueryList.addEventListener("change", listener);
    return () => mediaQueryList.removeEventListener("change", listener);
  }, [query]);

  return matches;
};

const Title: React.FC = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");  
  const styles: { [key: string]: CSSProperties } = {
    title: {
      fontSize: isMobile ? "25px" : "60px",
      lineHeight: isMobile ? "36px" : "60px",
      fontWeight: 400,
      fontFamily: "'Press Start 2P', sans-serif",
      textAlign: "center" as "center",
      marginTop: isMobile ? "160px" : "160px",
      marginBottom: "60px",
      color: "white",
    },
    highlightedText: {
      color: "#FF1A75",
    },
  };

  return (
    <h1 style={styles.title}>
      What is <span style={styles.highlightedText}>codeW</span> 2025?
    </h1>
  );
};

const InfoPage: React.FC = () => {
  const isTablet = useMediaQuery("(max-width: 1024px)");
  const isMobile = useMediaQuery("(max-width: 768px)");

  const styles = {
    page: {
      background: "linear-gradient( #201394 0%, #0A062E 40%)",
      color: "white",
      minHeight: "100vh",
      padding: "40px 24px",
      display: "flex",
      flexDirection: "column" as "column",
      alignItems: "center",
    },
    contentWrapper: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row" as "column" | "row",
      alignItems: "center",
      justifyContent: "center",
      gap: isMobile ? "24px" : "40px",
      maxWidth: "1080px",
      width: "100%",
    },

    textWrapper: {
      flex: 1,
      textAlign: isMobile ? "center" : "left" as "center" | "left",
    },
    infoText: {
      fontSize: isMobile ? "20px" : isTablet ? "28px" : "35px",
      marginTop: isMobile? "16px": isTablet ? "24px" : "40px",
      lineHeight: isMobile ? "28px" : "35px",
      marginLeft: isMobile?"8%":"20px",
      fontWeight: 400,
      fontFamily: "Montserrat, sans-serif",
      width: isMobile?"80%":"820px",
      marginBottom: isMobile?"0px":"16px",
    },
    highlightedText: {
      color: "#FF1A75",
    },
    globeWrapper: {
    //   flex: 1,
    //   display: "flex",
    //   justifyContent: "center",
    flex: 1,
      display: isMobile ? "none" : "flex", // Hide globe for mobile and tablet
      justifyContent: "center",
    },
    globeImage: {
      width: isMobile ? "0px" : "450px",
      maxWidth: "450px",
      height: "auto",
    },
  };

  return (
    <div id="about" style={styles.page}>
      {/* Title Section */}
      <Title />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      {/* Content Section */}
      <div style={styles.contentWrapper}>
        {/* Text Section */}
        <div style={styles.textWrapper}>
          <p style={styles.infoText}>
            <span style={styles.highlightedText}>codeW 2025</span> is the sixth annual national competition in{" "}
            <span style={styles.highlightedText}>competitive programming</span> for university and high school{" "}
            <span style={styles.highlightedText}>female students</span>.
          </p>
          <p style={styles.infoText}>
            During the competition, participants will solve a set of problems on{" "}
            <span style={styles.highlightedText}>algorithms</span> and{" "}
            <span style={styles.highlightedText}>data structures</span> using their chosen{" "}
            <span style={styles.highlightedText}>programming language</span>.
          </p>
          <p style={styles.infoText}>
            The event will take place at <span style={styles.highlightedText}>Nazarbayev University</span> on{" "}
            <span style={styles.highlightedText}>March 9th, 2025</span>.
          </p>
        </div>

        {/* Globe Image Section */}
        <div style={styles.globeWrapper}>
          <img src={GlobeImage} alt="Globe" style={styles.globeImage} />
        </div>
      </div>
    </div>
  );
};

export default InfoPage;
