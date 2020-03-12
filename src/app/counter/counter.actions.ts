import { createAction, props } from '@ngrx/store';

export const incrementHome = createAction('[Counter Component] Increment home');
export const incrementAway = createAction('[Counter Component] Increment away');
export const reset = createAction('[Counter Component] Reset');

export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game}>());