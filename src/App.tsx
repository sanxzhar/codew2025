import {WelcomeSection} from './sections/';
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";
import InfoPage from './sections/InfoPage';
import SchedulePage from './sections/SchedulePage';
import OurTeam from './sections/OurTeam/OurTeam'

function App() {
  return (
    <div>
      <Navbar />
      <Cursor />
      <WelcomeSection />
      <InfoPage/>
      <OurTeam />
      <SchedulePage/>
    </div>
  )
}

export default App;
