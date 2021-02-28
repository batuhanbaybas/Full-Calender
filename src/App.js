import Calendar from "./component/Calendar";
import SideBar from "./component/sideBar";
import "./App.css";

function App() {
  return (
    <div className="demo-app">
      <SideBar />
      <div className="demo-app-main">
        <Calendar />
      </div>
    </div>
  );
}

export default App;
