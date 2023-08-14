import axios from 'axios';
import { ActionType } from '../action-types';

export const searchPackages = (searchTerm: string) => {
  return async (dispatch: any) => {
    dispatch({
      type: ActionType.SEARCH_PACKAGES,
    });

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.org/-/v1/search',
        {
          params: {
            text: searchTerm,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_PACKAGES_SUCCESS,
        payload: names,
      });
    } catch (err) {
      dispatch({
        type: ActionType.SEARCH_PACKAGES_ERROR,
        payload: err.message,
      });
    }
  };
};
