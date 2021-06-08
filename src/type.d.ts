interface ITodo {
  id: number;
  title: string;
  status: boolean;
}

type ContextType = {
  todos: ITodo[];
  //saveTodo: (todo: ITodo) => void;
  //updateTodo: (id: number) => void;
};
