import { Clock, User, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const orderStatuses = [
  {
    title: "Novos Pedidos",
    count: 5,
    color: "bg-info",
    orders: [
      {
        id: "#1234",
        customer: "João Silva",
        items: "2x Hambúrguer, 1x Batata",
        time: "há 5 min",
        total: "R$ 45,90",
        address: "Rua das Flores, 123",
      },
      {
        id: "#1235",
        customer: "Maria Santos",
        items: "1x Pizza Margherita",
        time: "há 8 min",
        total: "R$ 32,00",
        address: "Av. Principal, 456",
      },
    ],
  },
  {
    title: "Preparando",
    count: 3,
    color: "bg-warning",
    orders: [
      {
        id: "#1230",
        customer: "Carlos Oliveira",
        items: "1x Lasanha, 1x Refrigerante",
        time: "há 15 min",
        total: "R$ 28,50",
        address: "Rua do Centro, 789",
      },
      {
        id: "#1231",
        customer: "Ana Costa",
        items: "3x Açaí, 2x Granola",
        time: "há 20 min",
        total: "R$ 38,00",
        address: "Praça da Paz, 101",
      },
    ],
  },
  {
    title: "Pronto",
    count: 2,
    color: "bg-success",
    orders: [
      {
        id: "#1228",
        customer: "Pedro Alves",
        items: "2x Sanduíche Natural",
        time: "há 2 min",
        total: "R$ 22,00",
        address: "Rua Verde, 321",
      },
    ],
  },
  {
    title: "Entregue",
    count: 12,
    color: "bg-muted",
    orders: [
      {
        id: "#1225",
        customer: "Luiza Ferreira",
        items: "1x Combo Executivo",
        time: "há 1h",
        total: "R$ 35,90",
        address: "Av. Comercial, 654",
      },
    ],
  },
];

function OrderCard({ order }: { order: any }) {
  return (
    <Card className="mb-3 shadow-card hover:shadow-elevated transition-shadow cursor-pointer">
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-3">
          <div>
            <h4 className="font-semibold text-foreground">{order.id}</h4>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <User className="h-3 w-3 mr-1" />
              {order.customer}
            </div>
          </div>
          <div className="text-right">
            <div className="font-semibold text-foreground">{order.total}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="h-3 w-3 mr-1" />
              {order.time}
            </div>
          </div>
        </div>
        
        <p className="text-sm text-foreground mb-2">{order.items}</p>
        
        <div className="flex items-center text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 mr-1" />
          <span className="truncate">{order.address}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function OrderKanban() {
  return (
    <Card className="bg-gradient-card shadow-elevated">
      <CardHeader>
        <CardTitle className="text-foreground">Gestão de Pedidos</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {orderStatuses.map((status, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground">{status.title}</h3>
                <Badge 
                  className={`${status.color} text-white`}
                  variant="secondary"
                >
                  {status.count}
                </Badge>
              </div>
              
              <div className="space-y-3">
                {status.orders.map((order, orderIndex) => (
                  <OrderCard key={orderIndex} order={order} />
                ))}
              </div>
              
              {status.orders.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <p className="text-sm">Nenhum pedido</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}