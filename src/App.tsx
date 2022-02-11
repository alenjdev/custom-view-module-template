import "./App.css";
import { Fleet, Device, Authentication } from "@formant/data-sdk";
import { Teleop } from "./components/Teleop";

function App() {
  return (
    <div className="App">
      <Teleop />
    </div>
  );
}

export default App;
