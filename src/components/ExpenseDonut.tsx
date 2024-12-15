import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Food', value: 950, color: '#0EA5E9' },
  { name: 'Clothes', value: 420, color: '#9b87f5' },
  { name: 'Other', value: 480, color: '#10B981' }
];

export function ExpenseDonut() {
  return (
    <div className="glass-card rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold">Available</h2>
        <button className="text-sm text-muted-foreground hover:text-primary">View All</button>
      </div>
      
      <div className="flex items-center gap-8">
        <div className="w-[180px] h-[180px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        
        <div className="space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
              <div>
                <p className="text-sm text-muted-foreground">{item.name}</p>
                <p className="font-medium">${item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}