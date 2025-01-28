export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
}

export interface AddEditTaskProp {
  inputValue: string;
  setInputValue: (e: string) => void;
  addNewTask: () => void;
}
