export const Payroll = () => {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-8 shadow-sm space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">League & Corporate Payroll</h2>
        <p className="text-sm text-slate-600 mt-1">Manage institutional salary deposits for Gyms, Research Labs, and Rangers.</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 text-slate-700 uppercase text-xs font-semibold">
            <tr>
              <th className="p-3 rounded-l-lg">Organization</th>
              <th className="p-3">Role</th>
              <th className="p-3">Cycle</th>
              <th className="p-3">Amount</th>
              <th className="p-3 rounded-r-lg">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-3 font-semibold text-slate-900">Cerulean Gym</td>
              <td className="p-3 text-slate-600">Water Gym Leader</td>
              <td className="p-3 text-slate-600">Bi-Weekly</td>
              <td className="p-3 font-mono font-bold text-slate-900">₽ 32,500.00</td>
              <td className="p-3"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold">Processed</span></td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">Professor Oak Laboratory</td>
              <td className="p-3 text-slate-600">Field Fieldwork Assistant</td>
              <td className="p-3 text-slate-600">Monthly</td>
              <td className="p-3 font-mono font-bold text-slate-900">₽ 18,200.00</td>
              <td className="p-3"><span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 text-xs rounded-full font-bold">Processed</span></td>
            </tr>
            <tr>
              <td className="p-3 font-semibold text-slate-900">Silph Co. HQ</td>
              <td className="p-3 text-slate-600">Ball Engineering Consultant</td>
              <td className="p-3 text-slate-600">Bi-Weekly</td>
              <td className="p-3 font-mono font-bold text-slate-900">₽ 54,000.00</td>
              <td className="p-3"><span className="px-2.5 py-1 bg-amber-100 text-amber-800 text-xs rounded-full font-bold">Pending Review</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const PayrollView = Payroll;
export default Payroll;
