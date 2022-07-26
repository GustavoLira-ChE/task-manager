import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";
import Layout1 from "./components/Layouts/Layout1";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Layout1>
            <AppRouter />
          </Layout1>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
