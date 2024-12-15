import { Home, CreditCard, BarChart2, Bell, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";

export function Sidebar() {
  return (
    <div className="fixed left-0 top-0 h-screen w-20 flex flex-col items-center py-8 glass-card">
      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-8">
        <img src="/lovable-uploads/df687393-7197-4f54-929b-f431cae24d55.png" alt="Logo" className="w-8 h-8" />
      </div>
      
      <nav className="flex-1 flex flex-col items-center gap-4">
        <button className="nav-icon active">
          <Home className="w-6 h-6" />
        </button>
        <button className="nav-icon">
          <CreditCard className="w-6 h-6" />
        </button>
        <button className="nav-icon">
          <BarChart2 className="w-6 h-6" />
        </button>
        <button className="nav-icon">
          <Bell className="w-6 h-6" />
        </button>
        <button className="nav-icon">
          <Settings className="w-6 h-6" />
        </button>
      </nav>

      <button className="nav-icon mt-auto">
        <LogOut className="w-6 h-6" />
      </button>
    </div>
  );
}