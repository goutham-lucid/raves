import HomePage from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/raves/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
