import "./App.css";
import { useDispatch } from "react-redux";
import { reset } from "./store";
import MoviePlaylist from "./Components/MoviePlaylist";
import SongPlaylist from "./Components/SongPlaylist";

function App() {
  const dispatch = useDispatch();

  const handleResetClick = () => {
    dispatch(reset());
  };

  return (
    <div className="container is-fluid">
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  );
}

export default App;
