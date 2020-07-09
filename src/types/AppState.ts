import { Character } from './Character';
import { Card } from '../components/Card';

export interface AppState {
  results: Character[];
  hiddenCardIds: string[];
  visibleCards: Card[];
  query: string;
  selection: {
    rick: null | Character,
    morty: null | Character
  }
}
