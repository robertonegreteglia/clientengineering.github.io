import { 
  CreditCard, 
  ShieldAlert, 
  Home, 
  Briefcase, 
  Headphones, 
  Landmark 
} from 'lucide-react';

export const Navbar = ({ activeTab, setActiveTab }) => {
  const tabs = [
    { id: 'landing', label: 'Home', icon: Landmark },
    { id: 'cards', label: 'Credit Cards', icon: CreditCard },
    { id: 'payroll', label: 'Payroll', icon: Briefcase },
    { id: 'mortgages', label: 'Mortgages', icon: Home },
    { id: 'frauds', label: 'Frauds', icon: ShieldAlert },
    { id: 'escalations', label: 'Escalations', icon: Headphones },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm">
      <div className="h-1 bg-red-600 w-full" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo PokéBank */}
          <button 
            onClick={() => setActiveTab('landing')} 
            id="pokeLogo"
            className="flex items-center gap-3 cursor-pointer group focus:outline-none"
          >
            <svg 
              className="w-8 h-8 flex-shrink-0 transition-transform group-hover:rotate-45 duration-300" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Fondo blanco base */}
              <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#1e293b" strokeWidth="4" />
              {/* Mitad superior roja */}
              <path 
                d="M 2 50 A 48 48 0 0 1 98 50 Z" 
                fill="#dc2626" 
              />
              {/* Línea divisoria central negra */}
              <line x1="2" y1="50" x2="98" y2="50" stroke="#1e293b" strokeWidth="6" />
              {/* Borde exterior del botón central */}
              <circle cx="50" cy="50" r="14" fill="#ffffff" stroke="#1e293b" strokeWidth="6" />
              {/* Botón interior de la Pokébola */}
              <circle cx="50" cy="50" r="6" fill="#f8fafc" stroke="#94a3b8" strokeWidth="2" />
            </svg>
            
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Poké<span className="text-red-600">Bank</span>
            </span>
          </button>

          {/* Navegación por pestañas */}
          <nav className="flex items-center gap-1 overflow-x-auto py-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-150 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'bg-red-50 text-red-600 border border-red-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
