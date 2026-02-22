import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <MovieCard movie={{ title: "Ryle's Film", release_date: "2025" }} />
      <MovieCard movie={{ title: "Glavine's Film", release_date: "2025" }} />
    </>
  );
}

export default App;
