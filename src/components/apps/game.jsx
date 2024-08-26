import React, { useState } from 'react';
import Draggable from 'react-draggable';
import jeux2048 from '../../assets/jeux/2048.png';
import tetris from '../../assets/jeux/tetris.jpg';
import pacman from '../../assets/jeux/pacman.png';
import chess from '../../assets/jeux/chess.jpg';
import snake from '../../assets/jeux/snake.jpg';
import "../apps/game.css"
const GameLauncher = ({ isAppOpen, toggleGame, bounds }) => {
  const [isGames, setIsGames] = useState(isAppOpen);

  const handleToggle = () => {
    setIsGames(!isGames);
    toggleGame();
  };

  const games = [
    { title: '2048', url: 'https://play2048.co/', image: jeux2048, description: 'A classic tile-matching game.' },
    { title: 'Tetris', url: 'https://tetris.com/play-tetris', image: tetris, description: 'The legendary block-stacking game.' },
    { title: 'Pac-Man', url: 'https://www.google.com/logos/2010/pacman10-i.html', image: pacman, description: 'The arcade classic from the 1980s.' },
    { title: 'Chess', url: 'https://www.chess.com/play/computer', image: chess, description: 'Play against the computer or others.' },
    { title: 'Snake', url: 'https://playsnake.org/', image: snake, description: 'The retro snake game.' }
  ];

  return (
    isGames && (
      <Draggable bounds={bounds}>
        <div className="game-window">
          <div className="title-bar">
            <div className="title">Games</div>
            <div className="controls">
              <button className="control-button">−</button>
              <button className="control-button">□</button>
              <button className="control-button" onClick={handleToggle}>×</button>
            </div>
          </div>
          <div className="game-list">
            {games.map((game, index) => (
              <a href={game.url} target="_blank" rel="noopener noreferrer" key={index} className="game-item">
                <img src={game.image} alt={game.title} className="game-image" />
                <div className="game-details">
                  <div className="game-title">{game.title}</div>
                  <div className="game-description">{game.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </Draggable>
    )
  );
};

export default GameLauncher;
