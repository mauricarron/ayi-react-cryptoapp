import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AboutView from "./views/About/AboutView";
import CoinDetailView from "./views/CoinDetail/CoinDetailView";
import CoinsListView from "./views/CoinsList/CoinsListView";
import HomeView from "./views/Home/HomeView";
import NotFoundView from "./views/NotFound/NotFoundView";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/coins" element={<CoinsListView />} />
          <Route path="/coins/:id" element={<CoinDetailView />} />
          <Route path="/about" element={<AboutView />} />
          <Route path="*" element={<NotFoundView />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
