import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import Providers from "./providers";
import "./App.css";

function App() {
  
  const router = createRouter({ routeTree });
  
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  );
}

export default App;
