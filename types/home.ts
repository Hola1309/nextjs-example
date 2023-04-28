export interface HomeState {
  title: string | null;
}

interface DefaultAction {
  type: string;
  action: any;
}

export type HomeActionTypes = DefaultAction;
