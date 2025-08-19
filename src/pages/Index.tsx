import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { StatsCards } from "@/components/StatsCards";
import { OrderKanban } from "@/components/OrderKanban";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Dashboard
              </h1>
              <p className="text-muted-foreground">
                Visão geral do seu restaurante hoje
              </p>
            </div>
            
            <StatsCards />
            <OrderKanban />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
