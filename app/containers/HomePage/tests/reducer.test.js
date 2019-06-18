import homeReducer from '../reducer';
import { getColorsRequest } from '../actionCreators';
import { GET_COLORS_REQUEST } from './constants';

describe('homeReducer', () => {
  it('returns the initial state', () => {
    expect(homeReducer(undefined, {})).toMatchSnapshot();
  });
  it('handles the get all colors request', () => {
    expect(homeReducer({}, getColorsRequest())).toMatchSnapshot();
  });
});

describe('HomePage Actions', () => {
  describe('getColorsRequest', () => {
    it('should return the correct constant', () => {
      expect(getColorsRequest()).toEqual({
        type: GET_COLORS_REQUEST,
      });
    });
  });
});
