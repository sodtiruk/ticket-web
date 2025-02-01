import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import AppRoutes from "./routes/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Router basename='/app'>
        <AppRoutes />
      </Router>
    </ThemeProvider>
  )
}

export default App
