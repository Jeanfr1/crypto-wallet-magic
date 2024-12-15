import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Bell, ArrowUpRight, ArrowDownLeft, Wallet } from "lucide-react";

const Notifications = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="glass-card p-6 rounded-2xl mt-6">
          <h2 className="text-2xl font-bold mb-6">Notifications</h2>
          
          <div className="space-y-4">
            {[
              { icon: ArrowUpRight, title: "Sent 0.5 ETH", time: "2 hours ago", type: "send" },
              { icon: ArrowDownLeft, title: "Received 1.2 ETH", time: "5 hours ago", type: "receive" },
              { icon: Wallet, title: "Wallet Connected", time: "1 day ago", type: "wallet" },
              { icon: Bell, title: "Price Alert: ETH +5%", time: "2 days ago", type: "alert" }
            ].map((notification, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  notification.type === 'send' ? 'bg-red-500/20 text-red-500' :
                  notification.type === 'receive' ? 'bg-green-500/20 text-green-500' :
                  notification.type === 'wallet' ? 'bg-blue-500/20 text-blue-500' :
                  'bg-primary/20 text-primary'
                }`}>
                  <notification.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{notification.title}</h3>
                  <p className="text-sm text-muted-foreground">{notification.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Notifications;