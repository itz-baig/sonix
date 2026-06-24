import { useEffect } from 'react';
import gsap            from 'gsap';
import './index.css';
import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import ScrollCanvas    from './components/ScrollCanvas';
import Acoustics       from './components/Acoustics';
import DesignLanguage  from './components/DesignLanguage';
import Order           from './components/Order';
import Footer          from './components/Footer';

export default function App() {
  /* Throttle layout updates when tab is in the background */
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        document.body.classList.add('tab-hidden');
        gsap.ticker.sleep(); // Completely pauses the GSAP requestAnimationFrame engine
      } else {
        document.body.classList.remove('tab-hidden');
        gsap.ticker.wake();  // Wakes up the GSAP engine
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <ScrollCanvas />
        <Acoustics />
        <DesignLanguage />
        <Order />
      </main>

      <Footer />
    </>
  );
}
