import ListContainer from './components/ListContainer';

function App() {
  console.log(process.env.REACT_APP_API_SERVER);
  return (
    <>
      <div className="todo-app">
        <h1>Todo app</h1>
        <ListContainer />
      </div>
    </>
  );
}

export default App;
