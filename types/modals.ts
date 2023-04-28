import types from 'store/modals/types';

export interface ModalsState {
  name: string | null;
  cabinet: string[] | null;
}

export interface OpenModal {
  type: typeof types.OPEN;
  name: string;
}

export interface CloseModal {
  type: typeof types.CLOSE_ALL;
}
interface DefaultAction {
  type: string;
  action: any;
}

export type ModalsActionTypes = OpenModal | CloseModal | DefaultAction;
