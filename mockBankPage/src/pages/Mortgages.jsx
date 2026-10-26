export const Mortgages = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">Mortgage Loan Calculator</h2>
        <p className="text-sm text-slate-600">Calculate rates for homes in Pallet Town, ranches in Johto, or modern penthouses in Castelia City.</p>

        <div className="space-y-3 pt-2">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Property Value (₽)</label>
            <input 
              type="text" 
              readOnly 
              value="₽ 3,500,000" 
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Down Payment (20%)</label>
            <input 
              type="text" 
              readOnly 
              value="₽ 700,000" 
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg font-mono text-sm"
            />
          </div>
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Term (Years)</label>
            <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
              <option>15 Years (4.2% Fixed APR)</option>
              <option>30 Years (5.1% Fixed APR)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-8 rounded-xl border border-slate-800 shadow-sm flex flex-col justify-between">
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-bold">Estimated Monthly Payment</span>
          <p className="text-4xl font-extrabold text-amber-400 font-mono mt-2">₽ 15,220.40</p>
          <p className="text-xs text-slate-400 mt-2">Includes standard Pokémon League property insurance and Daycare tax exemption.</p>
        </div>

        <button className="w-full py-3 bg-red-600 hover:bg-red-700 font-bold rounded-lg text-sm text-white transition-colors cursor-pointer mt-6">
          Submit Mortgage Pre-Approval
        </button>
      </div>
    </div>
  );
};

export const MortgagesView = Mortgages;
export default Mortgages;
