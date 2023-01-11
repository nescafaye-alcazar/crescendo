import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard, Searchbar, Sidebar, MusicPlayer, TopPlay } from '../components';
import { genres} from '../assets/constants';

import { useGetSongsByGenreQuery } from '../redux/services/shazamCore';
import { selectGenreListId } from '../redux/features/playerSlice';

const Discover = () => {
    document.title = "Crescendo | Home";
    const dispatch = useDispatch();
    const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);
    const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

    if(isFetching) return <Loader title="Loading songs..." />;
    if(error) return <Error />;

    const genreTitle = genres.find(({ value }) => value === genreListId )?.title;

    return(
        <div className="flex relative">
            <Sidebar />
                <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#064d5a]">
                    <div className="flex flex-col">
                        <div className="w-full flex justify-between items-center sm:flex-row flex-col mt-4 mb-10">
                            <h2 className="font-bold text-4xl text-white text-left">
                                Discover {genreTitle}</h2>
                            <select 
                                onChange={(e) => dispatch(selectGenreListId(e.target.value))}
                                value={genreListId || 'pop'}
                                className="bg-black text-gray-300 p-2 text-3xl text-medium rounded-lg outline-none sm:mt-0 mt-5">
                                {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
                            </select>
                        </div>
                        <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                            {data?.map((song, i) => (
                                <SongCard 
                                key={song.key}
                                song={song}
                                isPlaying={isPlaying}
                                activeSong={activeSong}
                                data={data}
                                i={i}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <div className="xl:sticky relative top-0 h-fit flex flex-col">
                    <TopPlay />
                </div>
                </div>
            );
        };

export default Discover;
