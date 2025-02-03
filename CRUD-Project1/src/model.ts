export interface Task {
  id: string;
  title: string;
  completed: boolean;
  description: string;
  startDate?: string;
  endDate?: string;
}

export interface TaskListProps {
  tasks: Task[];
  deleteTask: (id: string) => void;
  prepareToEdit: (task: Task) => void;
  handleCheckbox: (id: string) => void;
}

export interface AddEditTaskProps {
  addEditTask: () => void;
  selectedTask: Task;
  setSelectedTask: (e: Task) => void;
}
