import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <main>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
}

export default App;
