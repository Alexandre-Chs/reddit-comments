import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { ThemeProvider } from "./components/theme";
import { Toaster } from "sonner";

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  scrollRestoration: true,
});

function InnerApp() {
  return <RouterProvider router={router} />;
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <InnerApp />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
