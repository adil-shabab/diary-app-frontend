import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./style.css";
import Header from "./components/Header/Header";
import NoteListPage from "./pages/NoteListPage";
import Notepage from "./pages/Notepage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <NoteListPage/> */}
        <Routes>
          <Route exact path="/" element={<NoteListPage />} />
          <Route path="/notes/:id" element={<Notepage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
