import React, { MouseEvent, useState, ReactElement } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { Input } from './Input';
import { Container } from './Container';
import { Party } from './Party';
import { Card } from './Card';
import { Placeholder } from './Placeholder';

import { Character } from '../types/Character';
import { AppState } from '../types/AppState';

import { debounce } from '../utils/debounce';

const GET_CHARACTERS = gql`
  query Query($query: String) {
    characters(filter: { name: $query }) {
      results {
        name,
        id,
        image
      } 
    }
  }
`;

export function Home(): ReactElement {

  const [state, setState] = useState<AppState>({
    results: [],
    hiddenCardIds: [],
    visibleCards: [],
    query: '',
    selection: {
      rick: null,
      morty: null
    }
  });

  const handleCloseClick = (e: MouseEvent, id: string) => {
    e.stopPropagation();
    const hiddenIds: string[] = state.hiddenCardIds.slice();

    hiddenIds.push(id);
    setState({ ...state, hiddenCardIds: hiddenIds });
  }

  const handleCardClick = (item: Character) => {
    if (item.name.includes('Rick')) {
      setState({ ...state, selection: { rick: item, morty: state.selection.morty } });
    }
    if (item.name.includes('Morty')) {
      setState({ ...state, selection: { morty: item, rick: state.selection.rick } });
    }
  }

  const handleInput = debounce((value: string) => {
    value.length > 2 && setState({...state, query: value });
  }, 300);

  const { error, data, loading } = useQuery(GET_CHARACTERS, {
    variables: { query: state.query },
  });
  let list = [];
  if (error) {
    list = [];
  } else if (data) {
    list = data.characters.results
      .filter((character: Character) => !state.hiddenCardIds.includes(character.id))
      .map((item: Character) => (
        <Card
          character={item}
          key={item.id}
          handleCloseClick={handleCloseClick}
          handleCardClick={handleCardClick}
        />
      ));
  } else if (loading) {
    list = new Array(20).fill(0).map((_, i) => <Placeholder key={i}/>);
  }
  return (
    <div className="App">
      <Input onInput={handleInput}/>
      <Container>{list}</Container>
      <Party selection={state.selection}/>
    </div>
  );
}
