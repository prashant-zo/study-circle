import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';
import Home from './pages/Home';
import Projects from './pages/Projects';
import PeerGroups from './pages/PeerGroups';
import Auth from './pages/Auth';
import Resources from './pages/resources/Resources';
import GettingStarted from './pages/resources/GettingStarted';
import Guidelines from './pages/resources/Guidelines';
import FAQ from './pages/resources/FAQ';
import Support from './pages/resources/Support';

export default function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/peer-groups" element={<PeerGroups />} />
          <Route path="/login" element={<Auth />} />
          
          {/* Resource Routes */}
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/getting-started" element={<GettingStarted />} />
          <Route path="/resources/guidelines" element={<Guidelines />} />
          <Route path="/resources/faq" element={<FAQ />} />
          <Route path="/resources/support" element={<Support />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}