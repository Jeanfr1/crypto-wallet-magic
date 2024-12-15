import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { CreditCard } from "lucide-react";

const Transactions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="glass-card p-6 rounded-2xl mt-6">
          <h2 className="text-2xl font-bold mb-6">Recent Transactions</h2>
          
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-background/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <CreditCard className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Transaction #{i}</h3>
                    <p className="text-sm text-muted-foreground">2024-03-{i < 10 ? `0${i}` : i}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">0.{i}234 ETH</p>
                  <p className="text-sm text-muted-foreground">${i}23.45</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transactions;