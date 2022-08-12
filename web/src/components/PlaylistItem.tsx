import { Play } from "phosphor-react"

export type PlaylistType = {
  name: string;
  musicsCount: number;
  description: string;
};

export function PlaylistItem({ playlist }: { playlist: PlaylistType }) {
  return (
    <div className="flex flex-row gap-4 my-4 shadow">
      <div className="rounded-lg bg-blue bg-opacity-10 hover:bg-opacity-20 transition-all w-full p-4">
        <header className="font-bold text-lg text-peach">{playlist.name}</header>
        <p className="my-2">{playlist.description}</p>
        <div className="flex flex-row items-center gap-4">
          <button className="flex flex-row items-center outline-none focus:ring-2 ring-peach gap-1 text-peach bg-opacity-20 hover:bg-opacity-30 transition-all uppercase px-2 py-1 bg-peach rounded shadow">
            <Play size={16} weight="fill" />
            Play
          </button>
          <span>Musics: {playlist.musicsCount}</span>
        </div>
      </div>
    </div>
  );
}
