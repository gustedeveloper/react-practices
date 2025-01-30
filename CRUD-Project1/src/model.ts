export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  prepareToEdit: (task: Task) => void;
  handleCheckbox: (id: string) => void;
}

export interface AddEditTaskProp {
  inputValue: string;
  setInputValue: (e: string) => void;
  addNewTask: () => void;
  editTask: () => void;
  checkboxValue: boolean;
  setCheckboxValue: (e: boolean) => void;
}
