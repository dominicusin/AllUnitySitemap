import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/Home";
import Manifest from "@/pages/Manifest";
import Codex from "@/pages/Codex";
import Institute from "@/pages/Institute";
import Journal from "@/pages/Journal";
import News from "@/pages/News";
import Forum from "@/pages/Forum";
import Projects from "@/pages/Projects";
import Library from "@/pages/Library";
import Dictionary from "@/pages/Dictionary";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/manifest" component={Manifest} />
          <Route path="/codex" component={Codex} />
          <Route path="/institute" component={Institute} />
          <Route path="/journal" component={Journal} />
          <Route path="/news" component={News} />
          <Route path="/forum" component={Forum} />
          <Route path="/projects" component={Projects} />
          <Route path="/library" component={Library} />
          <Route path="/dictionary" component={Dictionary} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
}

export default App;
