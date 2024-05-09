import "./App.css";
import Form from "./Form";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <Form />
      <h1>Sydney NSW, Australia</h1>
      <ul>
        <li>Wednesday 22:00</li>
        <li>Partly Cloudy</li>
      </ul>
      <Weather />
    </div>
  );
}
