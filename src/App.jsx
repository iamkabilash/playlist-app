import "./App.css";
import MoviePlaylist from "./Components/MoviePlaylist";
import SongPlaylist from "./Components/SongPlaylist";

function App() {
  const handleResetClick = () => {
    //
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
