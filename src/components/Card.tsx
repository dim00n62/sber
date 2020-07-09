import React, { MouseEvent } from 'react';
import styled from 'styled-components';

import { Character } from '../types/Character';

const Wrapper = styled.div`
  width: 180px;
  height: 220px;
  overflow: hidden;
  position: relative;
  margin: 15px;
  cursor: pointer;

  &.readonly {
    cursor: default;
  }

  &:hover .close {
    display: block;
  }

  & img {
    height: 100%;
  }
`;

const Close = styled.div`
  position: absolute;
  cursor: pointer;
  top: 8px;
  right: 8px;
  width: 30px;
  height: 30px;
  display: none;
`;

interface ICard {
  character: Character;
  readonly?: boolean;
  handleCloseClick?: (e: MouseEvent, id: string) => void;
  handleCardClick?: (character: Character) => void;
}

export class Card extends React.Component<ICard> {

  render() {
    return (
      <Wrapper
        className={this.props.readonly ? 'readonly' : ''}
        onClick={() => this.props.handleCardClick?.(this.props.character)}
      >
        <img alt="Card" src={this.props.character.image}/>

        {!this.props.readonly ? 
          <Close
            className="close"
            onClick={(e) => this.props.handleCloseClick?.(e, this.props.character.id)}
          >
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15Z" fill="white" fillOpacity="0.75"/>
              <path d="M20 11.0071L18.9929 10L15 13.9929L11.0071 10L10 11.0071L13.9929 15L10 18.9929L11.0071 20L15 16.0071L18.9929 20L20 18.9929L16.0071 15L20 11.0071Z" fill="black"/>
            </svg>

          </Close>
          : ''
        }
      </Wrapper>
    );
  }
}
