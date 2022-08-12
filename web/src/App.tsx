import { PlaylistItem, PlaylistType } from "./components/PlaylistItem";

const playslists: PlaylistType[] = [
  {
    name: "Rock Today",
    musicsCount: 10,
    description: "Rock from all over the world",
  },
  {
    name: "Lofi 8Bit",
    musicsCount: 47,
    description: "Cover of songs in 8bit style and lofi",
  },
];

function App() {
  return (
    <div className="max-w-xl mx-auto px-4">
      <h1 className="text-bold text-4xl">Playlists</h1>
      {playslists.map((p) => (
        <PlaylistItem playlist={p} />
      ))}
    </div>
  );
}

export default App;
