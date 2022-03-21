import type {Task} from '@charleserious/todos/lib/Types';

export interface State {
  tasks: Task[];
}

export interface Action {
  type: string;
  payload: Task;
}
