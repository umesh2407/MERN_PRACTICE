import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
// import { store } from './app/store.js'
import appStore from './utils/appStore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Provider store={store}> */}
    {/* // i am wrapping APP with Store to use it in the whole app  */}
    <Provider store={appStore}>
    <App />
    </Provider>
    {/* </Provider> */}
  </StrictMode>,
)
