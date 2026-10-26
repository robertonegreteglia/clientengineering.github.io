import { CreditCard } from 'lucide-react';

export const CreditCards = () => {
  const cards = [
    {
      name: "Pika Basic",
      tier: "Novice Trainer",
      number: "**** **** **** 0025",
      exp: "12/28",
      background: "linear-gradient(135deg, #f59e0b 0%, #eab308 100%)",
      textColor: "#78350f",
      benefit: "1% Cashback at PokéMarts. No annual fee."
    },
    {
      name: "Charizard Platinum",
      tier: "Gym Leader",
      number: "**** **** **** 0006",
      exp: "09/27",
      background: "linear-gradient(135deg, #ea580c 0%, #dc2626 100%)",
      textColor: "#ffffff",
      benefit: "Free Charizard flights (HM02). 3% Cashback."
    },
    {
      name: "Mewtwo Black",
      tier: "Elite Four Only",
      number: "**** **** **** 0150",
      exp: "INFINITE",
      background: "linear-gradient(135deg, #1e1b4b 0%, #581c87 100%)",
      textColor: "#ffffff",
      benefit: "Unlimited credit line and Master Lounge access."
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-3xl font-black text-slate-900">PokéBank Credit Cards</h2>
        <p className="text-slate-600 mt-2 text-sm">
          Choose the payment tier matching your license. Every card includes 24/7 emergency teleport dispatch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div 
              style={{ background: card.background, color: card.textColor }}
              className="w-full h-52 rounded-2xl p-6 shadow-lg flex flex-col justify-between transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="flex justify-between items-start">
                <span className="font-extrabold text-lg uppercase tracking-wide">
                  {card.name.split(' ')[0]}
                </span>
                <CreditCard className="w-6 h-6 opacity-80" />
              </div>

              <div>
                <p className="font-mono text-base tracking-widest mb-4 opacity-90">{card.number}</p>
                <div className="flex justify-between items-end text-xs font-semibold opacity-80">
                  <div>
                    <span className="block text-[10px] uppercase">Cardholder</span>
                    <span className="font-bold text-sm tracking-normal">{card.tier}</span>
                  </div>
                  <div className="text-right">
                    <span className="block text-[10px] uppercase">Exp</span>
                    <span className="font-bold text-sm">{card.exp}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 text-center">
              <h3 className="font-bold text-slate-900">{card.name}</h3>
              <p className="text-xs text-slate-600 mt-1 max-w-xs">{card.benefit}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const CreditCardsView = CreditCards;
export default CreditCards;
