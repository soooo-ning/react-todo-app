import DoneList from './DoneList';
import TodoList from './TodoList';
import '../style/Style.scss';

export default function ListContainer() {
  return (
    <div className="todo-container">
      <TodoList />
      <DoneList />
    </div>
  );
}
