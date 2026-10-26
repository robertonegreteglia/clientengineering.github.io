import { AlertTriangle, CheckCircle2 } from 'lucide-react';

export const Frauds = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">
      <div className="flex items-center gap-3">
        <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Fraud & Security Center</h2>
          <p className="text-sm text-slate-600">Review suspicious activities and unauthorized link-cable fund transfers.</p>
        </div>
      </div>

      <div className="space-y-3">
        <div className="p-4 rounded-lg border border-red-200 bg-red-50 flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-red-900">Suspicious Pokéball Purchase - Goldenrod Dept Store</p>
            <p className="text-xs text-red-700">Flagged: Unrecognized merchant IP originating from known Team Rocket proxy.</p>
          </div>
          <button className="px-3 py-1.5 bg-red-600 text-white rounded text-xs font-bold hover:bg-red-700 cursor-pointer">
            Freeze Card
          </button>
        </div>

        <div className="p-4 rounded-lg border border-slate-200 bg-slate-50 flex items-center justify-between">
          <div>
            <p className="font-bold text-sm text-slate-800">Overseas ATM Withdrawal - Unova Castelia Port</p>
            <p className="text-xs text-slate-500">Verified via two-factor Rotom-Phone token.</p>
          </div>
          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
            <CheckCircle2 className="w-4 h-4" /> Cleared
          </span>
        </div>
      </div>
    </div>
  );
};

export const FraudsView = Frauds;
export default Frauds;
