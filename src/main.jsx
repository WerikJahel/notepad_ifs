import { GlobalProvider } from "./contexts/GlobalContext.jsx";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import Loading from "./components/_universal/loading/Loading.jsx";
import Footer from "./components/_universal/footer/footer.jsx";
import App from "./App.jsx";
import "./index.css";
import Header from "./components/_universal/header/header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <Loading />
      <Header />
      <App />
      <Footer />
    </GlobalProvider>
  </StrictMode>
);
