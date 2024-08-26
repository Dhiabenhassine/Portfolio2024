import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import jeux2048 from '../../assets/jeux/2048.png';
import tetris from '../../assets/jeux/tetris.jpg';
import pacman from '../../assets/jeux/pacman.png';
import chess from '../../assets/jeux/chess.jpg';
import snake from '../../assets/jeux/snake.jpg';

function Apps({ isAppOpen, toggleApp, bounds, input }) {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [isGames, setIsGames] = useState(false);

  const handleToggle = () => {
    setIsGames(!isGames);
    toggleApp(); 
  };

  const games = [
    { title: '2048', url: 'https://play2048.co/', image: jeux2048, description: 'A classic tile-matching game.' },
    { title: 'Tetris', url: 'https://tetris.com/play-tetris', image: tetris, description: 'The legendary block-stacking game.' },
    { title: 'Pac-Man', url: 'https://www.google.com/logos/2010/pacman10-i.html', image: pacman, description: 'The arcade classic from the 1980s.' },
    { title: 'Chess', url: 'https://www.chess.com/play/computer', image: chess, description: 'Play against the computer or others.' },
    { title: 'Snake', url: 'https://playsnake.org/', image: snake, description: 'The retro snake game.' }
  ];

  useEffect(() => {
    if (isAppOpen && !contentLoaded) {
      setContentLoaded(true);
    }
  }, [isAppOpen, contentLoaded]);

  return (
    <>
      {isAppOpen && input === "game" && (
        <Draggable handle=".title-bar" bounds={bounds}>
          <div className="w-96 h-128 bg-gray-100 border border-gray-300 rounded-lg shadow-lg overflow-hidden">
            <div className="title-bar flex justify-between items-center bg-blue-600 text-white p-2 cursor-move">
              <div className="font-bold">Games</div>
              <div className="flex space-x-1">
                <button className="w-6 h-6 text-center leading-none rounded hover:bg-white hover:bg-opacity-20">−</button>
                <button className="w-6 h-6 text-center leading-none rounded hover:bg-white hover:bg-opacity-20">□</button>
                <button className="w-6 h-6 text-center leading-none rounded hover:bg-white hover:bg-opacity-20" onClick={handleToggle}>×</button>
              </div>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto">
              {games.map((game, index) => (
                <a
                  href={game.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={index}
                  className="flex items-center p-3 bg-white rounded-lg shadow hover:bg-gray-100 transition-transform transform hover:scale-105"
                  onClick={(e) => e.stopPropagation()} // Prevent drag event from interfering with the click
                >
                  <img src={game.image} alt={game.title} className="w-16 h-16 rounded-md mr-4" />
                  <div>
                    <div className="font-semibold text-lg">{game.title}</div>
                    <div className="text-sm text-gray-600">{game.description}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
}

export default Apps;
