import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store';
import { Provider } from 'react-redux';
import App from './components/App';

import { Auth0Provider } from "./auth0/react-auth0-spa";
import config from "./auth0/auth_config.json"
import history from "./auth0/utils/history";

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

// create the store with function exported from reducers file:
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      >
        <App />
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

