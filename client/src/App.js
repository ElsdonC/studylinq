import './App.css';
import CreateSession from './components/CreateSession'
import ListSessions from './components/ListSessions';

function App() {
  return (
    <div className="container">
      <CreateSession />
      <ListSessions />
    </div>
  );
}

export default App;
