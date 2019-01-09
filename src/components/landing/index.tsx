import * as React from 'react';
import * as _ from 'lodash';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

interface LandingProps extends RouteComponentProps<any>, React.Props<any> {
  loading: boolean;
}

const Container = styled.div`
  display: block;
`;

class Landing extends React.Component<LandingProps, {}> {
  render() {
    return (
      <Container>
        <h1>Welcome To React Starter!</h1>
      </Container>
    );
  }
}

export default withRouter(Landing);
