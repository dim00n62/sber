import React from 'react';
import styled from 'styled-components';

interface IInput {
  onInput: (value: string) => void;
}

const CustomInput = styled.input`
  padding: 0 27px;
  color: black;
  background: white;
  border: none;
  font-weight: 300;
  font-size: 30px;
  line-height: 35px;
  border: 1px solid #A0A0A0;
  height: 80px;
  min-width: 100%;
`;

export class Input extends React.Component<IInput> {
  render() {
    return (
      <CustomInput onInput={(e) => this.props.onInput(e.currentTarget.value)}/>
    );
  }
}
