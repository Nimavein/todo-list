interface ITodo {
  id: number;
  title: string;
  status: boolean;
  priority: "low" | "medium" | "high";
  category?: Category;
  description: string;
}

type ContextType = {
  todos: ITodo[];
  categories: Category[];
  createCategory: (todo: Category) => void;
  deleteCategory: (id: number) => void;
  createTodo: (todo: ITodo) => void;
  updateTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

interface Category {
  id: number;
  name: string;
}
