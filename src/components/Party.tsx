import React from 'react';
import styled from 'styled-components';

import { Card } from './Card';
import { Placeholder } from './Placeholder';

import { Character } from '../types/Character';

interface IParty {
  selection: {
    rick: null | Character,
    morty: null | Character
  }
}

const FlexWrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
    font-size: 30px;
    line-height: 35px;
    margin-bottom: 5px;
    margin-top: 100px;
    font-weight: bold;
`;


export class Party extends React.Component<IParty> {
  render() {
    return (
      <div>
        <Title>PARTY</Title>
        <FlexWrapper>
          { this.props.selection.rick
            ? <Card character={this.props.selection.rick} readonly/>
            : <Placeholder>RICK</Placeholder>
          }
          { this.props.selection.morty
            ? <Card character={this.props.selection.morty} readonly/>
            : <Placeholder>MORTY</Placeholder>
          }
        </FlexWrapper>
      </div>
    );
  }
}