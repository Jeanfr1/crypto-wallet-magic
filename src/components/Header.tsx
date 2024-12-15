import { Search, UserRound } from "lucide-react";

export function Header() {
  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold">My Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input 
            type="text"
            placeholder="Search payment"
            className="bg-card/50 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 ring-primary/20"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <span>Hi Stefan!</span>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <UserRound className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}