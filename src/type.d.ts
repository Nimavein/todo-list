interface ITodo {
  id: number;
  title: string;
  status: boolean;
  priority: "low" | "medium" | "high";
  category: Category;
  description: string;
}

type ContextType = {
  todos: ITodo[];
  categories: Category[];
  createTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

interface Category {
  id: number;
  name: string;
}
