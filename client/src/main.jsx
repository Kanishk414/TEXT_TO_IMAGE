import { createRoot } from 'react-dom/client'
// for react dom
import {BrowserRouter} from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  
  // to set the react router 
  <BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>
)


