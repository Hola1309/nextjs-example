import { createSelector } from 'reselect';
import { RootState } from 'store/index';

export const ModalsSelector = createSelector(
  (state: RootState) => state.home,
  (home) => ({ title: home.title }),
);
