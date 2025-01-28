export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  prepareToEdit: (task: Task) => void;
}

export interface AddEditTaskProp {
  inputValue: string;
  setInputValue: (e: string) => void;
  addNewTask: () => void;
  editTask: () => void;
}
