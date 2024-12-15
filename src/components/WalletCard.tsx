import { Plus } from "lucide-react";

export function WalletCard() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-xl font-semibold">My Card</h2>
        <button className="text-sm text-muted-foreground hover:text-primary">View All</button>
      </div>
      
      <div className="relative">
        <div className="absolute -right-4 -top-4">
          <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
            <Plus className="w-5 h-5 text-primary" />
          </button>
        </div>
        
        <div className="bg-gradient-to-br from-primary/80 to-primary rounded-2xl p-6 mb-6">
          <div className="mb-8">
            <p className="text-sm opacity-80 mb-1">Total Balance</p>
            <h3 className="text-3xl font-bold">$22,350.50</h3>
          </div>
          
          <div className="flex justify-between items-end">
            <p className="text-sm opacity-80">4358 4445 0968 2323</p>
            <p className="text-sm opacity-80">08/24</p>
          </div>
        </div>
        
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Transactions</h3>
            <button className="text-sm text-muted-foreground hover:text-primary">View All</button>
          </div>
          
          <div className="space-y-4">
            {[
              { name: 'Figma', amount: -15.00 },
              { name: 'Grammarly', amount: -10.00 },
              { name: 'Blender', amount: -15.00 }
            ].map((tx) => (
              <div key={tx.name} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20"></div>
                  <span>{tx.name}</span>
                </div>
                <span className="text-destructive">${tx.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}