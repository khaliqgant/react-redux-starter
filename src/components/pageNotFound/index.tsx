import * as React from 'react';
import * as _ from 'lodash';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';

interface PageNotFoundProps extends RouteComponentProps<any>, React.Props<any> {
  loading: boolean;
}

const Container = styled.div`
  justify-content: flex-start;
  align-items: stretch;
`;

/**
 * Page Not Found Component
 * @desc displays the message Page Not Found
 * @prop phrases - static text in the selected language
 */
class PageNotFound extends React.Component<PageNotFoundProps, {}> {
  render() {
    return <Container />;
  }
}

export default PageNotFound;
