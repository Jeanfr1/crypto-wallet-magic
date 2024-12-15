import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Transactions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Transactions</h2>
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
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-lg font-semibold">Recent Transactions</h3>
                <p className="text-muted-foreground">Your latest financial activities</p>
              </div>
              <Button>Add Transaction</Button>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🛒</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Grocery Shopping</h4>
                    <p className="text-sm text-muted-foreground">Mar 15, 2024</p>
                  </div>
                </div>
                <span className="text-destructive font-medium">-$85.50</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">💰</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Salary Deposit</h4>
                    <p className="text-sm text-muted-foreground">Mar 14, 2024</p>
                  </div>
                </div>
                <span className="text-green-500 font-medium">+$2,500.00</span>
              </div>

              <div className="flex items-center justify-between p-4 bg-card rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-lg">🏠</span>
                  </div>
                  <div>
                    <h4 className="font-medium">Rent Payment</h4>
                    <p className="text-sm text-muted-foreground">Mar 10, 2024</p>
                  </div>
                </div>
                <span className="text-destructive font-medium">-$1,200.00</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Transactions;