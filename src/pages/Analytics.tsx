import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { RevenueChart } from "@/components/RevenueChart";
import { ExpenseDonut } from "@/components/ExpenseDonut";

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="grid grid-cols-2 gap-6 mt-6">
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Revenue Analysis</h2>
            <RevenueChart />
          </div>
          
          <div className="glass-card p-6 rounded-2xl">
            <h2 className="text-2xl font-bold mb-6">Expense Breakdown</h2>
            <ExpenseDonut />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;