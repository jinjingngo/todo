import React from 'react';
import List from '@mui/material/List';

import TodoAdd from '@charleserious/todos/lib/src/components/TodoAdd';
import TodoItem from '@charleserious/todos/lib/src/components/TodoItem';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

const Todo = (): JSX.Element => {
  const [tasks, setTasks] = React.useState<Task[]>([]);
  const onAdd = (task: Task): void => {
    setTasks([...tasks, task]);
  };

  const onChange = (task: Task): void => {
    setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
  };

  return (
    <React.Fragment>
      <TodoAdd onAdd={onAdd} />
      <List>
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onChange={onChange} />
        ))}
      </List>
    </React.Fragment>
  );
};

export default Todo;
