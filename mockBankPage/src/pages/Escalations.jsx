export const Escalations = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">High-Priority Escalations</h2>
        <p className="text-sm text-slate-600 mt-1">Submit high-tier disputes directly to the Regional Champion Council.</p>
      </div>

      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Trainer ID</label>
          <input 
            type="text" 
            placeholder="e.g. TR-994821" 
            className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Escalation Category</label>
          <select className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm">
            <option>Elite Four Battle Prize Discrepancy</option>
            <option>Unauthorized Daycare Fee Withdrawal</option>
            <option>International HM Navigation Toll Dispute</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Incident Details</label>
          <textarea 
            rows={4} 
            placeholder="Explain the incident with dates and locations..." 
            className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-sm"
          />
        </div>

        <button 
          type="submit" 
          className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg text-sm transition-colors cursor-pointer"
        >
          Submit Ticket to Champion Support
        </button>
      </form>
    </div>
  );
};

export const EscalationsView = Escalations;
export default Escalations;
