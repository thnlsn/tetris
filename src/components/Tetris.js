import React, { useState } from 'react';

import { createStage, checkCollision } from '../gameHelpers';

// Styled Components
import { StyledTetrisWrapper, StyledTetris } from './styles/StyledTetris';

// Custom Hooks
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';

// Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    // State
    const [dropTime, setDropTime] = useState(null);
    const [gameOver, setGameOver] = useState(false);

    // Custom Hooks, destructured
    // player is the original state of player (which is technically at the top left of grid, but value 0 which is nothing)
    // updatePlayerPos invokes setPlayer and takes it's previous properties and plus or minuses x/y values depending on keypress
    // resetPlayer is what gives us out first real tetromino and centers it on the grid for it's initial placement
    const [player, updatePlayerPos, resetPlayer] = usePlayer();

    // stage is the inital stage built by createStage() in gameHelpers.js
    const [stage, setStage] = useStage(player, resetPlayer); // Passing in player because we already have access to it

    // Console.log whenever component re-renders
    console.log('re-render');

    // Player movement -- Left/Right
    const moveHorizontal = (direction) => {
        // Check if we are NOT colliding with anything
        if (!checkCollision[(player, stage, { x: direction, y: direction })]) {
            // If so, move the player with collision set to false
            updatePlayerPos({ x: direction, y: 0, collided: false });
        }
    };

    const startGame = () => {
        // Reset everything
        setStage(createStage()); // Creates blank stage
        resetPlayer(); // Sets player to the middle of the grid
    };

    // Player movement -- Down
    const drop = () => {
        // Check if we are NOT colliding with anything
        if (!checkCollision[(player, stage, { x: 0, y: 1 })]) {
            // If so, move the player with collision set to true
            updatePlayerPos({ x: 0, y: 1, collided: true });
        } else {
            if (player.pos.y < 1)
                updatePlayerPos({ x: 0, y: 1, collided: true });
        }
    };

    const dropPlayer = () => {
        drop();
    };

    // Move function using the key pressed (destructured) as parameter
    const move = ({ keyCode }) => {
        console.log(keyCode);
        if (!gameOver) {
            if (keyCode === 37) {
                // Left
                moveHorizontal(-1);
            } else if (keyCode === 39) {
                // Right
                moveHorizontal(1);
            } else if (keyCode === 40) {
                // Down
                dropPlayer();
            } else if (keyCode === 38) {
                // Up
                // Rotate player tetromino
            }
        }
    };

    return (
        <StyledTetrisWrapper
            role='button'
            tabIndex='0'
            onKeyDown={(event) => move(event)}
        >
            <StyledTetris>
                {/* We invoke createStage() in the useStage hook as inital value for stage (this is the grid) */}
                <Stage stage={stage} />
                <aside>
                    {/* If gameOver is true, display a Display component with gameOver value so the styled component will set text to red */}
                    {gameOver ? (
                        <Display gameOver={gameOver} text='Game Over'></Display>
                    ) : (
                        /* Otherwise, if false, then show displays of the current game information */
                        <div>
                            <Display text='Score' />
                            <Display text='Rows' />
                            <Display text='Level' />
                        </div>
                    )}
                    <StartButton callback={startGame} />
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    );
};

export default Tetris;
