import { useState } from 'react';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import CreditCards from './pages/CreditCards';
import Payroll from './pages/Payroll';
import Mortgages from './pages/Mortgages';
import Frauds from './pages/Frauds';
import Escalations from './pages/Escalations';

// Re-exports for backward compatibility
export { Navbar } from './components/Navbar';
export { Footer } from './components/Footer';
export { Layout } from './components/Layout';
export { LandingPage, LandingView } from './pages/LandingPage';
export { CreditCards, CreditCardsView } from './pages/CreditCards';
export { Payroll, PayrollView } from './pages/Payroll';
export { Mortgages, MortgagesView } from './pages/Mortgages';
export { Frauds, FraudsView } from './pages/Frauds';
export { Escalations, EscalationsView } from './pages/Escalations';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');

  const renderContent = () => {
    switch (activeTab) {
      case 'landing':
        return <LandingPage setActiveTab={setActiveTab} />;
      case 'cards':
        return <CreditCards />;
      case 'payroll':
        return <Payroll />;
      case 'mortgages':
        return <Mortgages />;
      case 'frauds':
        return <Frauds />;
      case 'escalations':
        return <Escalations />;
      default:
        return <LandingPage setActiveTab={setActiveTab} />;
    }
  };

  return (
    <Layout activeTab={activeTab} setActiveTab={setActiveTab}>
      {renderContent()}
    </Layout>
  );
}
