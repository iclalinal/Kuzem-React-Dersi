import {Routes, Route} from "react-router-dom";
import ToDoApp from "./components/ToDoApp";
import Layout from "./components/Layout";

function AnaSayfa() {
  return (
    <div>
      <h1>Ana Sayfa</h1>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AnaSayfa />} />
        <Route path="todo" element={<ToDoApp />} />
        <Route path="hakkimizda" element={<h1>Hakkımızda</h1>} />
      </Route>
    </Routes>
  );
}
export default App;