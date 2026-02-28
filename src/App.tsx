import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Movement from './components/Movement';
import CTSStats from './components/CTSStats';
import WhyCalabar from './components/WhyCalabar';
import Objectives from './components/Objectives';
import KeyFeatures from './components/KeyFeatures';
import Tracks from './components/Tracks';
import TargetAudience from './components/TargetAudience';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Opportunities from './components/Opportunities';
import Sponsors from './components/Sponsors';
// import Vision from './components/Vision';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white text-brand-navy antialiased">
      <Navbar />
      <Hero />
      <Movement />
      <CTSStats />
      <WhyCalabar />
      <Speakers />
      <Objectives />
      <KeyFeatures />
      <Tracks />
      <TargetAudience />
      <Tickets />
      <Opportunities />
      <Sponsors />
      {/* <Vision /> */}
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
