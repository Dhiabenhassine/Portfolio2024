import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";
import jeux2048 from '../../assets/jeux/2048.png';
import tetris from '../../assets/jeux/tetris.jpg';
import pacman from '../../assets/jeux/pacman.png';
import chess from '../../assets/jeux/chess.jpg';
import snake from '../../assets/jeux/snake.jpg';
import './games.css'
function Apps({ isAppOpen, toggleApp, bounds, input }) {
  const [contentLoaded, setContentLoaded] = useState(false);
  const [commands, setCommands] = useState("");
  const [output, setOutput] = useState([]);
  const [isGames, setIsGames] = useState(false);

  const handleToggle = () => {
    setIsGames(!isGames);
  };

  const games = [
    { title: '2048', url: 'https://play2048.co/', image: jeux2048, description: 'A classic tile-matching game.' },
    { title: 'Tetris', url: 'https://tetris.com/play-tetris', image: tetris, description: 'The legendary block-stacking game.' },
    { title: 'Pac-Man', url: 'https://www.google.com/logos/2010/pacman10-i.html', image: pacman, description: 'The arcade classic from the 1980s.' },
    { title: 'Chess', url: 'https://www.chess.com/play/computer', image: chess, description: 'Play against the computer or others.' },
    { title: 'Snake', url: 'https://playsnake.org/', image: snake, description: 'The retro snake game.' }
  ];
  const handleInput = (e) => {
    if (e.key === "Enter") {
      if (input.trim() === "cls") {
        setOutput([]);
      }
      const newOutput = [...output, { commands, result: `Executed: ${input}` }];
      setOutput(newOutput);
      setCommands("");
    }
  };

  useEffect(() => {
    if (isAppOpen && !contentLoaded) {
      setContentLoaded(true);
    }
  }, [isAppOpen, contentLoaded]);

  return (
    <>
      <div
        className={`${
          isAppOpen ? "" : "hidden"
        } z-30 w-full h-screen pointer-events-none absolute`}
      >
        <Draggable handle=".title-bar" bounds={bounds}>
          {input === "game" ? (
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
          )  : input === "terminal" ? (
            <div className="window bg-neutral-800 h-[45rem] w-[70.5rem] rounded-xl overflow-hidden border-neutral-700 border-[1.5px] pointer-events-auto">
              <div className="title-bar">
                <div className="text-white h-9 w-full flex justify-end select-none">
                  <div className="h-full w-full"></div>
                  <div
                    className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-xl"
                    onClick={toggleApp}
                  >
                    minimize
                  </div>
                  <div className="material-symbols-outlined hover:bg-neutral-800 mb-2 w-11 flex justify-center items-center text-sm">
                    check_box_outline_blank
                  </div>
                  <div
                    className="material-symbols-outlined hover:bg-red-700 mb-2 w-12 flex justify-center items-center text-xl"
                    onClick={toggleApp}
                  >
                    close
                  </div>
                </div>
              </div>
              <div className="absolute bg-black top-[6.5px] h-[2em] left-[6px] w-60 rounded-t-lg flex">
                <div className="flex justify-between items-center w-full">
                  <div className="pl-2 text-sm">Windows Powershell</div>
                  <div className="material-symbols-outlined hover:bg-neutral-800 m-0.5 w-6 rounded-md flex justify-center items-center text-lg">
                    close
                  </div>
                </div>
                <div className="material-symbols-outlined absolute left-60 ml-0.5 h-7 w-8 flex justify-center hover:bg-neutral-800 rounded-md items-center text-xl">
                  add
                </div>
              </div>
              <div className="bg-black text-white h-screen p-4 font-mono">
                <div className="">Windows PowerShell</div>
                <div className="text-sm">
                  Copyright (C) Microsoft Corporation. All rights reserved.
                </div>
                <div className="my-4 flex gap-2">
                  Install the latest PowerShell for new features and
                  improvements!
                  <div className="hover:underline hover:cursor-pointer">
                    https://aka.ms/PSWindows
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  {output.map((line, index) => (
                    <div key={index}>
                      <div className="">PS C:\ {line.commands}</div>
                      <div>{line.result}</div>
                    </div>
                  ))}
                </div>
                <div className="flex mt-2 gap-2">
                  <span className="">PS C:\ </span>
                  <input
                    className="bg-transparent focus:outline-none flex-1"
                    value={commands}
                    onChange={(e) => setCommands(e.target.value)}
                    onKeyDown={handleInput}
                    autoFocus
                  />
                </div>
              </div>
            </div>
          ) : (
            <>hi</>
          )}
        </Draggable>
      </div>
    </>
  );
}

export default Apps;
