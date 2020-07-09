import React, { ReactElement } from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-top: 30px;
  width: calc(100% + 30px);
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

interface IContainerProps {
  children: ReactElement[];
}

export class Container extends React.Component<IContainerProps> {
  render() {
    return (
      <CardContainer>
        {this.props.children}
      </CardContainer>
    );
  }
}
