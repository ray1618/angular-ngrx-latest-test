import { createReducer, on, Action } from '@ngrx/store';
import * as CounterActions from './counter.actions';

export interface State {
  home: number;
  away: number;
}

export const scoreboardFeatureKey = 'game';

export const initialState: State = {home: 0, away: 0};

const _counterReducer = createReducer(initialState,
  on(CounterActions.incrementHome, state => ({ ...state, home: state.home + 1 })),
  on(CounterActions.incrementAway, state => ({ ...state, away: state.away + 1 })),
  on(CounterActions.reset, state => initialState),
  // on(CounterActions.setScores, (state, {game})=>{home: game.home, away: game.away})
);

export function counterReducer(state: State | undefined, action: Action) {
  return _counterReducer(state, action);
}