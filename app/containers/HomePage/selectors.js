/**
 * Homepage selectors
 */
import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectHome = state => state.home || initialState;

const makeSelectAllColors = () =>
  createSelector(
    selectHome,
    homeState => homeState.colors,
  );

const makeSelectInitialLoad = () =>
  createSelector(
    selectHome,
    homeState => homeState.initialLoad,
  );

const makeSelectIsLoading = () =>
  createSelector(
    selectHome,
    homeState => homeState.isLoading,
  );

export { makeSelectAllColors, makeSelectInitialLoad, makeSelectIsLoading };
