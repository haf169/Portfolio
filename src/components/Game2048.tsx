"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { RotateCcw, Trophy, Gamepad2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const sectionText = {
   vi: {
      title: "Giải trí",
      subtitle: "Chơi game 2048",
      score: "Điểm",
      best: "Cao nhất",
      newGame: "Chơi lại",
      gameOver: "Game Over!",
      youWin: "Bạn thắng!",
      instruction: "Dùng phím mũi tên hoặc vuốt để di chuyển",
   },
   en: {
      title: "Fun",
      subtitle: "Play 2048",
      score: "Score",
      best: "Best",
      newGame: "New Game",
      gameOver: "Game Over!",
      youWin: "You Win!",
      instruction: "Use arrow keys or swipe to move",
   },
   ja: {
      title: "ゲーム",
      subtitle: "2048で遊ぶ",
      score: "スコア",
      best: "ベスト",
      newGame: "新しいゲーム",
      gameOver: "ゲームオーバー!",
      youWin: "勝利!",
      instruction: "矢印キーまたはスワイプで移動",
   },
};

type Grid = number[][];

const GRID_SIZE = 4;

const getTileColor = (value: number): string => {
   const colors: Record<number, string> = {
      2: "bg-amber-100 text-gray-800",
      4: "bg-amber-200 text-gray-800",
      8: "bg-orange-300 text-white",
      16: "bg-orange-400 text-white",
      32: "bg-orange-500 text-white",
      64: "bg-red-400 text-white",
      128: "bg-yellow-400 text-white",
      256: "bg-yellow-500 text-white",
      512: "bg-yellow-600 text-white",
      1024: "bg-green-500 text-white",
      2048: "bg-primary-500 text-white",
   };
   return colors[value] || "bg-purple-600 text-white";
};

const createEmptyGrid = (): Grid => {
   return Array(GRID_SIZE).fill(null).map(() => Array(GRID_SIZE).fill(0));
};

const addRandomTile = (grid: Grid): Grid => {
   const newGrid = grid.map(row => [...row]);
   const emptyCells: [number, number][] = [];

   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         if (newGrid[i][j] === 0) {
            emptyCells.push([i, j]);
         }
      }
   }

   if (emptyCells.length > 0) {
      const [row, col] = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      newGrid[row][col] = Math.random() < 0.9 ? 2 : 4;
   }

   return newGrid;
};

const initializeGrid = (): Grid => {
   let grid = createEmptyGrid();
   grid = addRandomTile(grid);
   grid = addRandomTile(grid);
   return grid;
};

const rotateGrid = (grid: Grid): Grid => {
   const newGrid = createEmptyGrid();
   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         newGrid[j][GRID_SIZE - 1 - i] = grid[i][j];
      }
   }
   return newGrid;
};

const slideRow = (row: number[]): { newRow: number[]; score: number } => {
   let newRow = row.filter(val => val !== 0);
   let score = 0;

   for (let i = 0; i < newRow.length - 1; i++) {
      if (newRow[i] === newRow[i + 1]) {
         newRow[i] *= 2;
         score += newRow[i];
         newRow.splice(i + 1, 1);
      }
   }

   while (newRow.length < GRID_SIZE) {
      newRow.push(0);
   }

   return { newRow, score };
};

const moveLeft = (grid: Grid): { newGrid: Grid; score: number } => {
   let totalScore = 0;
   const newGrid = grid.map(row => {
      const { newRow, score } = slideRow(row);
      totalScore += score;
      return newRow;
   });
   return { newGrid, score: totalScore };
};

const move = (grid: Grid, direction: "left" | "right" | "up" | "down"): { newGrid: Grid; score: number } => {
   let rotatedGrid = grid;
   let rotations = 0;

   switch (direction) {
      case "right": rotations = 2; break;
      case "up": rotations = 1; break;
      case "down": rotations = 3; break;
   }

   for (let i = 0; i < rotations; i++) {
      rotatedGrid = rotateGrid(rotatedGrid);
   }

   const { newGrid, score } = moveLeft(rotatedGrid);

   let finalGrid = newGrid;
   for (let i = 0; i < (4 - rotations) % 4; i++) {
      finalGrid = rotateGrid(finalGrid);
   }

   return { newGrid: finalGrid, score };
};

const hasWon = (grid: Grid): boolean => {
   return grid.some(row => row.some(cell => cell >= 2048));
};

const canMove = (grid: Grid): boolean => {
   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         if (grid[i][j] === 0) return true;
         if (j < GRID_SIZE - 1 && grid[i][j] === grid[i][j + 1]) return true;
         if (i < GRID_SIZE - 1 && grid[i][j] === grid[i + 1][j]) return true;
      }
   }
   return false;
};

const gridsEqual = (a: Grid, b: Grid): boolean => {
   for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
         if (a[i][j] !== b[i][j]) return false;
      }
   }
   return true;
};

export default function Game2048() {
   const { language } = useLanguage();
   const text = sectionText[language];

   const [mounted, setMounted] = useState(false);
   const [grid, setGrid] = useState<Grid>(() => createEmptyGrid());
   const [score, setScore] = useState(0);
   const [bestScore, setBestScore] = useState(0);
   const [gameOver, setGameOver] = useState(false);
   const [won, setWon] = useState(false);

   useEffect(() => {
      setMounted(true);
      setGrid(initializeGrid());
      const saved = localStorage.getItem("2048-best");
      if (saved) setBestScore(parseInt(saved));
   }, []);

   const handleMove = useCallback((direction: "left" | "right" | "up" | "down") => {
      if (gameOver && !won) return;

      const { newGrid, score: moveScore } = move(grid, direction);

      if (!gridsEqual(grid, newGrid)) {
         const gridWithNewTile = addRandomTile(newGrid);
         setGrid(gridWithNewTile);

         const newScore = score + moveScore;
         setScore(newScore);

         if (newScore > bestScore) {
            setBestScore(newScore);
            localStorage.setItem("2048-best", newScore.toString());
         }

         if (hasWon(gridWithNewTile) && !won) {
            setWon(true);
         }

         if (!canMove(gridWithNewTile)) {
            setGameOver(true);
         }
      }
   }, [grid, score, bestScore, gameOver, won]);

   useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
         if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"].includes(e.key)) {
            e.preventDefault();
            const directionMap: Record<string, "left" | "right" | "up" | "down"> = {
               ArrowUp: "up",
               ArrowDown: "down",
               ArrowLeft: "left",
               ArrowRight: "right",
            };
            handleMove(directionMap[e.key]);
         }
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
   }, [handleMove]);

   const resetGame = () => {
      setGrid(initializeGrid());
      setScore(0);
      setGameOver(false);
      setWon(false);
   };

   // Touch handling
   const [touchStart, setTouchStart] = useState<{ x: number; y: number } | null>(null);

   const handleTouchStart = (e: React.TouchEvent) => {
      setTouchStart({ x: e.touches[0].clientX, y: e.touches[0].clientY });
   };

   const handleTouchEnd = (e: React.TouchEvent) => {
      if (!touchStart) return;

      const deltaX = e.changedTouches[0].clientX - touchStart.x;
      const deltaY = e.changedTouches[0].clientY - touchStart.y;
      const minSwipe = 50;

      if (Math.abs(deltaX) > Math.abs(deltaY)) {
         if (Math.abs(deltaX) > minSwipe) {
            handleMove(deltaX > 0 ? "right" : "left");
         }
      } else {
         if (Math.abs(deltaY) > minSwipe) {
            handleMove(deltaY > 0 ? "down" : "up");
         }
      }

      setTouchStart(null);
   };

   return (
      <section id="game" className="section">
         <div className="container-custom">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="text-center mb-8"
            >
               <span className="text-primary-400 text-sm uppercase tracking-wider flex items-center justify-center gap-2">
                  <Gamepad2 size={16} />
                  {text.title}
               </span>
               <h2 className="text-3xl md:text-4xl font-bold mt-2">{text.subtitle}</h2>
               <p className="text-gray-500 text-sm mt-2">{text.instruction}</p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="flex flex-col items-center"
            >
               {/* Score board */}
               <div className="flex gap-4 mb-4">
                  <div className="bg-primary-900/50 px-4 py-2 rounded-lg text-center min-w-[80px]">
                     <div className="text-xs text-gray-400 uppercase">{text.score}</div>
                     <div className="text-xl font-bold text-primary-400">{score}</div>
                  </div>
                  <div className="bg-primary-900/50 px-4 py-2 rounded-lg text-center min-w-[80px]">
                     <div className="text-xs text-gray-400 uppercase flex items-center justify-center gap-1">
                        <Trophy size={12} />
                        {text.best}
                     </div>
                     <div className="text-xl font-bold text-yellow-400">{bestScore}</div>
                  </div>
                  <button
                     onClick={resetGame}
                     className="bg-primary-500 hover:bg-primary-600 px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
                  >
                     <RotateCcw size={16} />
                     <span className="hidden sm:inline">{text.newGame}</span>
                  </button>
               </div>

               {/* Game board */}
               <div
                  className="relative bg-primary-900/30 p-3 rounded-xl"
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
               >
                  <div className="grid grid-cols-4 gap-2">
                     {grid.map((row, i) =>
                        row.map((cell, j) => (
                           <motion.div
                              key={`${i}-${j}`}
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className={`w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center font-bold text-lg sm:text-2xl ${cell === 0 ? "bg-white/5" : getTileColor(cell)
                                 }`}
                           >
                              {cell !== 0 && cell}
                           </motion.div>
                        ))
                     )}
                  </div>

                  {/* Game over overlay */}
                  {(gameOver || won) && (
                     <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 bg-black/70 rounded-xl flex flex-col items-center justify-center"
                     >
                        <div className="text-2xl font-bold mb-4">
                           {won ? text.youWin : text.gameOver}
                        </div>
                        <button
                           onClick={resetGame}
                           className="bg-primary-500 hover:bg-primary-600 px-6 py-2 rounded-lg font-medium transition-colors"
                        >
                           {text.newGame}
                        </button>
                     </motion.div>
                  )}
               </div>
            </motion.div>
         </div>
      </section>
   );
}
