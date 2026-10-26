import { TrendingUp, Home, ShieldAlert } from 'lucide-react';

export const LandingPage = ({ setActiveTab }) => {
  return (
    <div className="space-y-10">
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <span className="inline-block px-3 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full uppercase">
            Next-Gen Pokémon Banking
          </span>
          <h1 className="text-4xl font-black text-slate-900 leading-tight">
            Financial solutions built for trainers across every region.
          </h1>
          <p className="text-slate-600 text-base">
            From funding your gym journey in Kanto to protecting your battle rewards against Team Rocket scams, we keep your PokéDollars safe.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <button 
              onClick={() => setActiveTab('cards')}
              className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg text-sm shadow transition-colors cursor-pointer"
            >
              Explore Credit Cards
            </button>
            <button 
              onClick={() => setActiveTab('frauds')}
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold rounded-lg text-sm transition-colors cursor-pointer"
            >
              Fraud Protection
            </button>
          </div>
        </div>

        <div className="w-full md:w-80 bg-slate-900 text-white rounded-xl p-6 shadow-md border border-slate-800">
          <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-1">Trainer Balance</p>
          <p className="text-3xl font-extrabold text-amber-400 font-mono">₽ 845,290.00</p>
          <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs">
            <div className="flex justify-between text-slate-300">
              <span>Silph Co. Payroll:</span>
              <span className="font-semibold text-emerald-400">+ ₽ 45,000</span>
            </div>
            <div className="flex justify-between text-slate-300">
              <span>PokéMart Celadon:</span>
              <span className="font-semibold text-red-400">- ₽ 1,200</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Direct League Payroll</h3>
          <p className="text-sm text-slate-600">Immediate access to your Gym Leader honorarium and trainer rewards on battle day.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <Home className="w-8 h-8 text-emerald-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Property & Ranches</h3>
          <p className="text-sm text-slate-600">Fixed-rate mortgages for daycare centers, berry farms, and secret base expansions.</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <ShieldAlert className="w-8 h-8 text-red-600 mb-3" />
          <h3 className="font-bold text-lg mb-1">Anti-Syndicate Security</h3>
          <p className="text-sm text-slate-600">Real-time fraud screening against unauthorized trades and black market transactions.</p>
        </div>
      </div>
    </div>
  );
};

export const LandingView = LandingPage;
export default LandingPage;
