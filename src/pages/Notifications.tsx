import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home, Bell, ArrowUpRight, ArrowDownRight, Shield, CreditCard } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const navigate = useNavigate();

  const notifications = [
    {
      id: 1,
      type: "payment",
      title: "Payment Received",
      description: "You received $250.00 from John Doe",
      icon: <ArrowDownRight className="w-5 h-5 text-green-500" />,
      time: "2 hours ago",
    },
    {
      id: 2,
      type: "security",
      title: "Security Alert",
      description: "New device logged into your account",
      icon: <Shield className="w-5 h-5 text-orange-500" />,
      time: "5 hours ago",
    },
    {
      id: 3,
      type: "payment",
      title: "Payment Sent",
      description: "You sent $120.00 to Jane Smith",
      icon: <ArrowUpRight className="w-5 h-5 text-red-500" />,
      time: "Yesterday",
    },
    {
      id: 4,
      type: "card",
      title: "Card Update",
      description: "Your virtual card will expire in 30 days",
      icon: <CreditCard className="w-5 h-5 text-blue-500" />,
      time: "2 days ago",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Notifications</h2>
          </div>
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

        <div className="glass-card p-6 rounded-2xl space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Recent Notifications</h3>
            <Button variant="ghost" size="sm">Mark all as read</Button>
          </div>

          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-start gap-4 p-4 rounded-xl bg-card hover:bg-accent/50 transition-colors cursor-pointer"
              >
                <div className="p-2 rounded-full bg-background">
                  {notification.icon}
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{notification.title}</h4>
                  <p className="text-sm text-muted-foreground">{notification.description}</p>
                  <span className="text-xs text-muted-foreground mt-1 block">{notification.time}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline">Load More</Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;