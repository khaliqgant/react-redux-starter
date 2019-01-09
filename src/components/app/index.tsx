import * as React from 'react';
import { RouteComponentProps, BrowserRouter, Route as ReactRoute, Switch } from 'react-router-dom';
import * as _ from 'lodash';
import { Provider } from 'react-redux';
import styled, { ThemeProvider } from 'styled-components';

import { Route } from '@root/interfaces/route';
import routes from '@root/routes';
import theme from '@root/styles/theme';
import store from '@root/redux/store';

const RoutesContainer = styled.div`
  display: block;
`;

class App extends React.Component<RouteComponentProps<any>, {}> {
  render() {
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <RoutesContainer>
              <Switch>
                {_.map(routes, (route: Route, index: number) => (
                  <ReactRoute
                    key={`${index}-route`}
                    path={route.path}
                    component={route.component}
                    exact={route.exact}
                  />
                ))}
              </Switch>
            </RoutesContainer>
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
