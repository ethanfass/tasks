import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    const [dice1, setDice1] = useState<number>(5);
    const [dice2, setDice2] = useState<number>(3);

    function rollDie(dieUsed: string): void {
        if (dieUsed === "left") {
            setDice1(d6());
        } else {
            setDice2(d6());
        }
    }

    let message = "";

    if (dice1 === 1 && dice2 === 1) {
        message = "Lose";
    } else if (dice1 === dice2) {
        message = "Win";
    } else {
        message = "";
    }

    return (
        <span>
            <Button
                onClick={() => {
                    rollDie("left");
                }}
            >
                Roll Left
            </Button>
            <span data-testid="left-die" style={{ marginRight: "20px" }}>
                {dice1}
            </span>
            <Button
                onClick={() => {
                    rollDie("right");
                }}
            >
                Roll Right
            </Button>
            <span data-testid="right-die" style={{ marginRight: "20px" }}>
                {dice2}
            </span>

            {message}
        </span>
    );
}
