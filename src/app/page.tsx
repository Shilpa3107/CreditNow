import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/hero";
import { ProductShowcase } from "@/components/product-showcase";
import { ChatbotFab } from "@/components/chatbot-fab";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductShowcase />
      </main>
      <ChatbotFab />
      <Footer />
    </div>
  );
}
