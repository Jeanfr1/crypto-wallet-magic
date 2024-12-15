import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Home, TrendingUp, ArrowUpRight, ArrowDownRight, PieChart, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RePieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const navigate = useNavigate();

  const spendingData = [
    { name: 'Jan', amount: 1200 },
    { name: 'Feb', amount: 1800 },
    { name: 'Mar', amount: 1400 },
    { name: 'Apr', amount: 2200 },
    { name: 'May', amount: 1900 },
    { name: 'Jun', amount: 2400 },
  ];

  const categoryData = [
    { name: 'Shopping', value: 35, color: '#0ea5e9' },
    { name: 'Bills', value: 25, color: '#f43f5e' },
    { name: 'Entertainment', value: 20, color: '#8b5cf6' },
    { name: 'Food', value: 15, color: '#22c55e' },
    { name: 'Others', value: 5, color: '#94a3b8' },
  ];

  const stats = [
    {
      title: "Total Balance",
      amount: "$8,547.63",
      change: "+12.5%",
      isPositive: true,
    },
    {
      title: "Monthly Spending",
      amount: "$2,847.21",
      change: "-5.2%",
      isPositive: false,
    },
    {
      title: "Monthly Savings",
      amount: "$1,425.00",
      change: "+8.3%",
      isPositive: true,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <main className="pl-28 pr-8 py-8">
        <Header />
        
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold">Analytics</h2>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 rounded-xl bg-card">
                <h3 className="text-lg font-semibold mb-2">{stat.title}</h3>
                <p className="text-3xl font-bold mb-2">{stat.amount}</p>
                <div className={`flex items-center gap-2 text-sm ${
                  stat.isPositive ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stat.isPositive ? (
                    <ArrowUpRight className="w-4 h-4" />
                  ) : (
                    <ArrowDownRight className="w-4 h-4" />
                  )}
                  {stat.change} this month
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-card">
              <div className="flex items-center gap-2 mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Spending Trends</h3>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={spendingData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="amount" 
                      stroke="#0ea5e9" 
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-card">
              <div className="flex items-center gap-2 mb-6">
                <PieChart className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold">Spending by Category</h3>
              </div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RePieChart>
                    <Pie
                      data={categoryData}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </RePieChart>
                </ResponsiveContainer>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {categoryData.map((category, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-sm">{category.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;