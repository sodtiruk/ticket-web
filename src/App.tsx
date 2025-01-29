import './App.css'
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <Router basename='/app'>
      <AppRoutes />
    </Router>
  )
}

export default App
