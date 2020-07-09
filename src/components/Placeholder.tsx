import React from 'react';
import styled from 'styled-components';

const PlaceholderWrapper = styled.div`
  width: 180px;
  height: 220px;
  overflow: hidden;
  background: #DADADA;
  color: white;
  display: inline-block;
  font-size: 24px;
  line-height: 28px;
  display: inline-flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 14px;
  margin: 15px;
`;

interface IPlaceholderProps {
  children?: string;
}

export class Placeholder extends React.Component<IPlaceholderProps> {
  render() {
    return (
      <PlaceholderWrapper>
        {this.props.children}
      </PlaceholderWrapper>
    );
  }
}