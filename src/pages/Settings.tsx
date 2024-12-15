import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Home, Shield, Bell, CreditCard, UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

const Settings = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings updated",
      description: "Your settings have been saved successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Settings</h2>
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

        <div className="space-y-6">
          {/* Profile Settings */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <UserRound className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Profile Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input id="fullName" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 000-0000" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="timezone">Timezone</Label>
                  <Input id="timezone" placeholder="UTC-5 (Eastern Time)" />
                </div>
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Security</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Two-Factor Authentication</Label>
                  <p className="text-sm text-muted-foreground">Add an extra layer of security to your account</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Biometric Login</Label>
                  <p className="text-sm text-muted-foreground">Use fingerprint or face recognition to login</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Transaction PIN</Label>
                  <p className="text-sm text-muted-foreground">Require PIN for all transactions</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Payment Settings */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Payment Preferences</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Default Payment Method</Label>
                  <p className="text-sm text-muted-foreground">Choose your preferred payment method</p>
                </div>
                <Button variant="outline" size="sm">Configure</Button>
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Auto-convert Cryptocurrencies</Label>
                  <p className="text-sm text-muted-foreground">Automatically convert received crypto to fiat</p>
                </div>
                <Switch />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Payment Limits</Label>
                  <p className="text-sm text-muted-foreground">Set daily and monthly transaction limits</p>
                </div>
                <Button variant="outline" size="sm">Set Limits</Button>
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="glass-card p-6 rounded-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Payment Notifications</Label>
                  <p className="text-sm text-muted-foreground">Get notified about incoming and outgoing payments</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Security Alerts</Label>
                  <p className="text-sm text-muted-foreground">Receive alerts about suspicious activities</p>
                </div>
                <Switch defaultChecked />
              </div>
              <Separator />
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Marketing Updates</Label>
                  <p className="text-sm text-muted-foreground">Stay updated with our latest features and offers</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          <Button onClick={handleSave} className="w-full">
            Save Changes
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Settings;