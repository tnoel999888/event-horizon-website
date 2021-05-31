import './music.css';
import songs from './songs';

function Music() {
  return (
    <div className="music">
      {songs.map((song, index) => (
        <div className="song">
          <iframe title={song.songTitle} width="300" height="300" scrolling="no" frameborder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${song.id}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}></iframe>
          <div className="song-details">
            <a href={song.songUrl} className="artist-and-song-name" title={song.songTitle} target="_blank" rel="noreferrer">{song.songTitle}</a>
          </div>
          <br />
        </div>
      ))}
    </div>    
  );
}

export default Music;
