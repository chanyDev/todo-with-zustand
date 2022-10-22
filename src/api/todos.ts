export interface Todo {
  id: number;
  title: string;
  isDone: boolean;
}

const TODO_LIST: Todo[] = [
  { id: 1, title: 'TypeScript 공부', isDone: false },
  { id: 2, title: 'GraphQL 공부', isDone: false },
  { id: 3, title: 'React 공부', isDone: true },
];

export const getTodos = (): Promise<Todo[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(TODO_LIST);
    }, 1000);
  });
};
