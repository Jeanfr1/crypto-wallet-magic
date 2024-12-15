import { Home, CreditCard, BarChart2, Bell, Settings, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/use-toast";

export function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  const handleLogout = () => {
    toast({
      title: "Logging out",
      description: "You have been successfully logged out",
    });
    // In a real app, you would handle the logout logic here
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 glass-card">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-8">
        <img src="/lovable-uploads/df687393-7197-4f54-929b-f431cae24d55.png" alt="Logo" className="w-8 h-8" />
      </div>
      
      <nav className="flex-1 flex flex-col items-center gap-4">
        <button 
          className={cn("nav-icon", isActive("/") && "active")}
          onClick={() => navigate("/")}
        >
          <Home className="w-6 h-6" />
        </button>
        <button 
          className={cn("nav-icon", isActive("/transactions") && "active")}
          onClick={() => navigate("/transactions")}
        >
          <CreditCard className="w-6 h-6" />
        </button>
        <button 
          className={cn("nav-icon", isActive("/analytics") && "active")}
          onClick={() => navigate("/analytics")}
        >
          <BarChart2 className="w-6 h-6" />
        </button>
        <button 
          className={cn("nav-icon", isActive("/notifications") && "active")}
          onClick={() => navigate("/notifications")}
        >
          <Bell className="w-6 h-6" />
        </button>
        <button 
          className={cn("nav-icon", isActive("/settings") && "active")}
          onClick={() => navigate("/settings")}
        >
          <Settings className="w-6 h-6" />
        </button>
      </nav>

      <button 
        className="nav-icon mt-auto"
        onClick={handleLogout}
      >
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
}