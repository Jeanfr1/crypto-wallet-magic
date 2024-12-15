import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { RevenueChart } from "@/components/RevenueChart";
import { WalletCard } from "@/components/WalletCard";
import { ExpenseDonut } from "@/components/ExpenseDonut";
import { useState } from "react";
import { ArrowDownIcon, ArrowUpIcon, PiggyBankIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const [activeTab, setActiveTab] = useState('All');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Withdrawal':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-destructive/20">
                  <ArrowUpIcon className="w-6 h-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold">Quick Withdraw</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {['$50', '$100', '$200', '$500', '$1000', 'Custom'].map((amount) => (
                    <button
                      key={amount}
                      className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Withdraw Now
                </button>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Withdrawals</h3>
              <div className="space-y-4">
                {[
                  { date: '2024-03-15', amount: 200, status: 'Completed' },
                  { date: '2024-03-10', amount: 500, status: 'Completed' },
                  { date: '2024-03-05', amount: 100, status: 'Completed' }
                ].map((withdrawal, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">{withdrawal.date}</p>
                      <p className="font-medium">${withdrawal.amount}</p>
                    </div>
                    <span className="text-sm text-primary">{withdrawal.status}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'Savings':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-secondary/20">
                  <PiggyBankIcon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Savings Goal</h3>
                  <p className="text-sm text-muted-foreground">Track your progress</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-sm text-muted-foreground">Current Savings</p>
                    <p className="text-2xl font-bold">$5,750</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">Goal</p>
                    <p className="text-2xl font-bold">$10,000</p>
                  </div>
                </div>
                <div className="w-full h-3 bg-muted rounded-full overflow-hidden">
                  <div className="w-[57.5%] h-full bg-secondary" />
                </div>
                <p className="text-center text-sm text-muted-foreground">57.5% of goal reached</p>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Savings Plans</h3>
              <div className="space-y-4">
                {[
                  { name: 'Vacation Fund', amount: 2500, goal: 5000 },
                  { name: 'Emergency Fund', amount: 3000, goal: 4000 },
                  { name: 'New Car', amount: 250, goal: 1000 }
                ].map((plan, idx) => (
                  <div key={idx} className="p-4 rounded-lg border border-border">
                    <div className="flex justify-between items-center mb-2">
                      <p className="font-medium">{plan.name}</p>
                      <p className="text-sm text-muted-foreground">${plan.amount}/${plan.goal}</p>
                    </div>
                    <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-secondary" 
                        style={{ width: `${(plan.amount/plan.goal) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      case 'Deposit':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <Card className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-full bg-primary/20">
                  <ArrowDownIcon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Quick Deposit</h3>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  {['$50', '$100', '$200', '$500', '$1000', 'Custom'].map((amount) => (
                    <button
                      key={amount}
                      className="p-3 rounded-lg border border-border hover:bg-accent transition-colors"
                    >
                      {amount}
                    </button>
                  ))}
                </div>
                <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors">
                  Deposit Now
                </button>
              </div>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Recent Deposits</h3>
              <div className="space-y-4">
                {[
                  { date: '2024-03-14', amount: 1000, method: 'Bank Transfer' },
                  { date: '2024-03-09', amount: 500, method: 'Credit Card' },
                  { date: '2024-03-01', amount: 200, method: 'Bank Transfer' }
                ].map((deposit, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-lg border border-border">
                    <div>
                      <p className="text-sm text-muted-foreground">{deposit.date}</p>
                      <p className="font-medium">${deposit.amount}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{deposit.method}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        );

      default:
        return (
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-2 space-y-6">
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
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="space-y-6">
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
          
          {renderTabContent()}
        </div>
      </main>
    </div>
  );
};

export default Index;
