export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface State {
  tasks: Task[];
}

export interface Action {
  type: string;
  payload: Task;
}
