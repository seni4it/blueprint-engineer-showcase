import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Beaker, Eye, BarChart } from "lucide-react";
import { useState } from "react";

interface VariantSwitcherProps {
  currentVariant: 'A' | 'B';
}

export function VariantSwitcher({ currentVariant }: VariantSwitcherProps) {
  const [showStats, setShowStats] = useState(false);
  
  // Mock stats for demonstration
  const stats = {
    A: { views: 1234, conversions: 45, rate: 3.65 },
    B: { views: 1198, conversions: 62, rate: 5.18 }
  };
  
  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2">
              <Beaker className="w-4 h-4" />
              A/B Test: Variant {currentVariant}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>Testing Controls</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => window.location.href = '?variant=A'}>
              <Eye className="w-4 h-4 mr-2" />
              View Variant A {currentVariant === 'A' && '✓'}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => window.location.href = '?variant=B'}>
              <Eye className="w-4 h-4 mr-2" />
              View Variant B {currentVariant === 'B' && '✓'}
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => setShowStats(!showStats)}>
              <BarChart className="w-4 h-4 mr-2" />
              Toggle Stats
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem 
              onClick={() => {
                localStorage.removeItem('ab-variant');
                window.location.href = window.location.pathname;
              }}
            >
              Reset Selection
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      
      {/* Stats Panel */}
      {showStats && (
        <div className="fixed bottom-20 right-4 z-50 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 w-64 border">
          <h3 className="font-semibold mb-3 text-sm">A/B Test Statistics</h3>
          <div className="space-y-3">
            {(['A', 'B'] as const).map(v => (
              <div key={v} className={`p-2 rounded ${currentVariant === v ? 'bg-accent/10' : 'bg-gray-50 dark:bg-gray-700'}`}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Variant {v}</span>
                  {currentVariant === v && <span className="text-xs text-accent">Active</span>}
                </div>
                <div className="text-xs text-muted-foreground">
                  <div>Views: {stats[v].views}</div>
                  <div>Conversions: {stats[v].conversions}</div>
                  <div className="font-medium text-foreground">Rate: {stats[v].rate}%</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-muted-foreground">
            {stats.B.rate > stats.A.rate ? (
              <span className="text-green-600">Variant B performing {((stats.B.rate / stats.A.rate - 1) * 100).toFixed(0)}% better</span>
            ) : (
              <span className="text-red-600">Variant A performing {((stats.A.rate / stats.B.rate - 1) * 100).toFixed(0)}% better</span>
            )}
          </div>
        </div>
      )}
    </>
  );
}