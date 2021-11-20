import DbTable from "./DbTable";
import Chart from "./Chart";
import { students } from "./data";

function App() {
  return (
    <div className="App">
      <DbTable data={students} />
    </div>
  );
}

export default App;
