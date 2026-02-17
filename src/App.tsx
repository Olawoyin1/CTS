import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Movement from './components/Movement';
import WhyCalabar from './components/WhyCalabar';
import WhatToExpect from './components/WhatToExpect';
import Tracks from './components/Tracks';
import WhoShouldAttend from './components/WhoShouldAttend';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Opportunities from './components/Opportunities';
import Sponsors from './components/Sponsors';
import Vision from './components/Vision';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-white text-brand-navy antialiased">
      <Navbar />
      <Hero />
      <Movement />
      <WhyCalabar />
      <WhatToExpect />
      <Tracks />
      <WhoShouldAttend />
      <Speakers />
      <Tickets />
      <Opportunities />
      <Sponsors />
      <Vision />
      <FinalCTA />
      <Footer />
    </main>
  );
}

export default App;
