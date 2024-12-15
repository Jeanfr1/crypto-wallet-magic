import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { RevenueChart } from "@/components/RevenueChart";
import { WalletCard } from "@/components/WalletCard";
import { ExpenseDonut } from "@/components/ExpenseDonut";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    // In a real application, you would filter the data based on the selected tab
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2 space-y-6">
            <div className="flex gap-4">
              {['All', 'Withdrawal', 'Savings', 'Deposit'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  className={`px-6 py-2 rounded-full transition-colors ${
                    tab === activeTab
                      ? 'bg-primary text-white'
                      : 'text-muted-foreground hover:text-primary'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            
            <RevenueChart />
            
            <div className="grid grid-cols-2 gap-6">
              <ExpenseDonut />
              <div className="glass-card rounded-2xl p-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Income</h3>
                  <p className="text-3xl font-bold">$2,240</p>
                  <p className="text-sm text-muted-foreground">This week's income</p>
                  <span className="inline-block px-2 py-1 text-sm rounded bg-primary/20 text-primary">+12%</span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">Expense</h3>
                  <p className="text-3xl font-bold">$1,750</p>
                  <p className="text-sm text-muted-foreground">This week's expense</p>
                  <span className="inline-block px-2 py-1 text-sm rounded bg-secondary/20 text-secondary">+9%</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-span-1">
            <WalletCard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;