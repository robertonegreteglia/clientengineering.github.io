export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <div>
          <p>© 2026 PokéBank Financial Group. Regulated by the Indigo Plateau League Authority.</p>
        </div>
        <div className="flex gap-6">
          <span className="hover:text-slate-200 cursor-pointer">Terms of Service</span>
          <span className="hover:text-slate-200 cursor-pointer">Pokédex Privacy Rules</span>
          <span className="hover:text-slate-200 cursor-pointer">Security Center</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
