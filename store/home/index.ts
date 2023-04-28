import { HomeState, HomeActionTypes } from 'types/home';

const initialState: HomeState = {
  title: 'Home',
};

export default function reducer(state = initialState, action: HomeActionTypes) {
  switch (action.type) {
    default:
      return state;
  }
}
