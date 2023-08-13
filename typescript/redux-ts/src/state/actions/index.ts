import { ActionType } from '../action-types';

interface ISearchPackagesAction {
  type: ActionType.SEARCH_PACKAGES;
}

interface ISearchPackagesSuccessAction {
  type: ActionType.SEARCH_PACKAGES_SUCCESS;
  payload: string[];
}

interface ISearchPackagesErrorAction {
  type: ActionType.SEARCH_PACKAGES_ERROR;
  payload: string;
}

export type Action =
  | ISearchPackagesAction
  | ISearchPackagesSuccessAction
  | ISearchPackagesErrorAction;
