import {WelcomeSection} from './sections/';
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import InfoPage from './sections/InfoPage';
import SchedulePage from './sections/SchedulePage';
import OurTeam from './sections/OurTeam/OurTeam'
import Timeline from './sections/Timeline/Timeline';

function App() {
  return (
    <div>
      <Navbar />
      <Cursor />
      <WelcomeSection />
      <InfoPage/>
      <Timeline/>
      <OurTeam />
      <SchedulePage/>
    </div>
  )
}

export default App;
