import { AuthProvider } from "./contexts/AuthContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
