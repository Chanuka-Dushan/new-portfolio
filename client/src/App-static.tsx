import { Route, Switch, Router as WouterRouter } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient-static";
import { ThemeProvider } from "@/components/ui/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomeStatic from "@/pages/home-static";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomeStatic} />
      <Route component={NotFound} />
    </Switch>
  );
}

function AppStatic() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
        <Toaster />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default AppStatic;
