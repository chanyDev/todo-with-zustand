import create from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

export interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(set => ({
      todos: [
        { id: 1, title: 'TypeScript 공부', isDone: false },
        { id: 2, title: 'GraphQL 공부', isDone: false },
        { id: 3, title: 'React 공부', isDone: true },
      ],
      addTodo: todo => set(state => ({ todos: [...state.todos, todo] })),
      removeTodo: id =>
        set(state => ({ todos: state.todos.filter(todo => todo.id !== id) })),
      toggleTodo: id =>
        set(state => ({
          todos: state.todos.map(todo => ({
            ...todo,
            isDone: todo.id === id ? !todo.isDone : todo.isDone,
          })),
        })),
    }))
  )
);
