import {WelcomeSection} from './sections/';
import Navbar from "./components/Navbar";
// import Cursor from "./components/Cursor";
import InfoPage from './sections/InfoPage';
import SchedulePage from './sections/SchedulePage';
import OurTeam from './sections/OurTeam/OurTeam'
import { FAQ } from './sections/FAQ/FAQ';
import CodeWinNetwork from './sections/CodeWinNetwork/CodeWinNetwork';
import Sponsors from './sections/Sponsors/Sponsors';
import Line from './components/Line';
import Timeline from './sections/Timeline/Timeline';

function App() {
  return (
    <div className='w-full bg-[#201394]'>
      <Navbar />
      {/* <Cursor /> */}
      <WelcomeSection />
      <Line />
      <InfoPage/>
      <Line />
      <Timeline/>
      <Line />
      <SchedulePage/>
      <Line />
      <Sponsors />
      <Line />
      <OurTeam />
      <Line />
      <FAQ />
      <Line />
      <CodeWinNetwork />
    </div>
  )
}

export default App;
