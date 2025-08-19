import { 
  LayoutDashboard, 
  ClipboardList, 
  Package, 
  TrendingUp, 
  Settings, 
  Users,
  Receipt,
  ChefHat
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: ClipboardList, label: "Pedidos", badge: "12" },
  { icon: ChefHat, label: "Cardápio", badge: null },
  { icon: Package, label: "Estoque", badge: "3" },
  { icon: Users, label: "Clientes", badge: null },
  { icon: TrendingUp, label: "Relatórios", badge: null },
  { icon: Receipt, label: "Financeiro", badge: null },
  { icon: Settings, label: "Configurações", badge: null },
];

export function Sidebar() {
  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
              item.active
                ? "bg-primary text-primary-foreground shadow-glow"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            )}
          >
            <item.icon className="h-5 w-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      <div className="p-4 border-t border-border">
        <div className="bg-gradient-primary rounded-lg p-4 text-white">
          <h3 className="font-semibold text-sm mb-1">Upgrade para Pro</h3>
          <p className="text-xs opacity-90 mb-3">
            Desbloqueie recursos avançados
          </p>
          <button className="w-full bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white text-xs py-2 px-3 rounded-md transition-colors">
            Saiba Mais
          </button>
        </div>
      </div>
    </aside>
  );
}