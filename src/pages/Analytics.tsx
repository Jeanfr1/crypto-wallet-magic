import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Analytics = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Analytics</h2>
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Button>
        </div>

        <div className="glass-card p-6 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 rounded-xl bg-card">
              <h3 className="text-lg font-semibold mb-2">Total Expenses</h3>
              <p className="text-3xl font-bold">$2,547.63</p>
            </div>
            <div className="p-4 rounded-xl bg-card">
              <h3 className="text-lg font-semibold mb-2">Monthly Average</h3>
              <p className="text-3xl font-bold">$849.21</p>
            </div>
            <div className="p-4 rounded-xl bg-card">
              <h3 className="text-lg font-semibold mb-2">Largest Expense</h3>
              <p className="text-3xl font-bold">$425.00</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Expense Categories</h3>
            <div className="h-[300px] bg-card rounded-xl p-4">
              {/* Placeholder for chart */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Chart will be implemented here
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4">Monthly Trends</h3>
            <div className="h-[300px] bg-card rounded-xl p-4">
              {/* Placeholder for chart */}
              <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                Chart will be implemented here
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;