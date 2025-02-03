
import { createRoot } from 'react-dom/client'
import './index.css'
import Store from './Redux/Store.js'
import App from './App.jsx'
import { Provider } from 'rext-redux'
createRoot(document.getElementById('root')).render(
  <Provider store ={Store}>
    <App />
  </Provider>,
)
