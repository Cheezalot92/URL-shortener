import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import CrudCo from "./components/CrudCo";
import LoginForm from "./pages/LoginForm";
import Logout from "./pages/Logout";
import ShowShortUrl from "./components/UrlList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/CrudCo" element={<CrudCo />} />
          <Route path="/ShowShortUrl" element={<ShowShortUrl/>} />
          <Route path="/Logout" element={<Logout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
