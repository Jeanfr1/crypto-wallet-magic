import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Notifications</h2>
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
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="font-medium">New Transaction Alert</h3>
                <p className="text-sm text-muted-foreground">You received a new payment of $50.00</p>
              </div>
              <span className="text-sm text-muted-foreground">2 hours ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="font-medium">Security Update</h3>
                <p className="text-sm text-muted-foreground">Your password was changed successfully</p>
              </div>
              <span className="text-sm text-muted-foreground">1 day ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4 border-b">
              <div>
                <h3 className="font-medium">Account Update</h3>
                <p className="text-sm text-muted-foreground">Your profile information has been updated</p>
              </div>
              <span className="text-sm text-muted-foreground">3 days ago</span>
            </div>
            
            <div className="flex items-center justify-between p-4">
              <div>
                <h3 className="font-medium">Welcome!</h3>
                <p className="text-sm text-muted-foreground">Thank you for joining our platform</p>
              </div>
              <span className="text-sm text-muted-foreground">1 week ago</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;