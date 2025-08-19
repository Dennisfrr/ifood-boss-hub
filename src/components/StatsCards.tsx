import { TrendingUp, TrendingDown, DollarSign, Clock, Package, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  {
    title: "Vendas Hoje",
    value: "R$ 2.847,90",
    change: "+12%",
    trend: "up",
    icon: DollarSign,
    gradient: "bg-gradient-primary",
  },
  {
    title: "Pedidos Ativos",
    value: "18",
    change: "+3",
    trend: "up",
    icon: Clock,
    gradient: "bg-gradient-success",
  },
  {
    title: "Produtos Vendidos",
    value: "124",
    change: "+8%",
    trend: "up",
    icon: Package,
    gradient: "bg-warning",
  },
  {
    title: "Novos Clientes",
    value: "7",
    change: "-2",
    trend: "down",
    icon: Users,
    gradient: "bg-info",
  },
];

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <Card key={index} className="bg-gradient-card shadow-card border-0">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground mb-1">
                  {stat.title}
                </p>
                <p className="text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <div className="flex items-center mt-2">
                  {stat.trend === "up" ? (
                    <TrendingUp className="h-4 w-4 text-success mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 text-destructive mr-1" />
                  )}
                  <span
                    className={`text-sm font-medium ${
                      stat.trend === "up" ? "text-success" : "text-destructive"
                    }`}
                  >
                    {stat.change}
                  </span>
                </div>
              </div>
              <div className={`p-3 rounded-xl ${stat.gradient}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}