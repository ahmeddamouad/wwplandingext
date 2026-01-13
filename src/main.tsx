import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { initMetaPixel, trackPageView } from "./lib/metaPixel";

// Initialize Meta Pixel
initMetaPixel();
trackPageView();

createRoot(document.getElementById("root")!).render(<App />);
