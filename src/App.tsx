import "./App.css";
import { AppContent, AppFooter, AppHeader } from "./components";

function App() {

  return (
    <div className="flex flex-col">
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;
