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

export interface AddEditTaskProps {
  addNewTask: () => void;
  editTask: () => void;
  selectedTask: Task;
  setSelectedTask: (e: Task) => void;
}
