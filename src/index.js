/* Global imports */
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

/* App imports */
import store from 'state/store'

/* Component imports */
import App from 'component/App'
import 'css/bulma.min.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)