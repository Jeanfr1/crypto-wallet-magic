import { Search, UserRound } from "lucide-react";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { useUser } from "@supabase/auth-helpers-react";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useToast } from "@/components/ui/use-toast";

export function Header() {
  const [open, setOpen] = useState(false);
  const user = useUser();
  const { toast } = useToast();

  const { data: transactions } = useQuery({
    queryKey: ['transactions', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', user?.id)
        .order('created_at', { ascending: false });
      
      if (error) {
        toast({
          variant: "destructive",
          title: "Error fetching transactions",
          description: error.message,
        });
        return [];
      }
      
      return data || [];
    },
    enabled: !!user,
  });

  return (
    <header className="flex items-center justify-between mb-8">
      <h1 className="text-4xl font-bold">My Dashboard</h1>
      
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search 
            className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground cursor-pointer" 
            onClick={() => setOpen(true)}
          />
          <input 
            type="text"
            placeholder="Search payment"
            className="bg-card/50 rounded-full pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 ring-primary/20 cursor-pointer"
            onClick={() => setOpen(true)}
            readOnly
          />
          
          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command>
              <CommandInput placeholder="Search transactions..." />
              <CommandList>
                <CommandEmpty>No transactions found.</CommandEmpty>
                <CommandGroup heading="Recent Transactions">
                  {transactions?.map((transaction) => (
                    <CommandItem
                      key={transaction.id}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          {transaction.icon || '💰'}
                        </div>
                        <span>{transaction.name}</span>
                      </div>
                      <span className={transaction.amount < 0 ? "text-destructive" : "text-green-500"}>
                        ${Math.abs(transaction.amount).toFixed(2)}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </CommandDialog>
        </div>
        
        <div className="flex items-center gap-2">
          <span>Hi {user?.email?.split('@')[0] || 'User'}!</span>
          <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <UserRound className="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>
    </header>
  );
}