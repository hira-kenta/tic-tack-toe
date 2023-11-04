import { Meta, StoryObj } from "@storybook/react";
import Game from "./Game";
import { useState } from "react";

const meta = {
    title: 'tic-tac-toe/Game',
    component: Game,
    parameters: {
        layout: 'centered'
    },
    args:{
        history: [Array(9).fill('')],
        locations: [''],
        currentMove: 0,
        xIsNext:  true,
        currentSquares: ['']
    },
    tags: ['autodocs'],
    decorators: [
        (_Game, context) => {
            const [history, setHistory] = useState<string[][]>(context.args.history);
            const [locations, setLocations] = useState<string[]>(context.args.locations);
            const [currentMove, setCurrentMove] = useState<number>(context.args.currentMove);
            const xIsNext = currentMove % 2 === 0;
            const currentSquares: string[] = history[currentMove];
          
            const handlePlay = (nextSquares: string[], location: {row: number, column: number}) => {
              const nextHistory: string[][] = [...history.slice(0, currentMove + 1), nextSquares]
              const currentLocation: string[] = [...locations.slice(0, currentMove + 1), `(${location.row},${location.column})`];
              setHistory(nextHistory);
              setLocations(currentLocation);
              setCurrentMove(nextHistory.length - 1);
            }

            return (
                <_Game args={{...context.args,history, locations, currentMove,xIsNext, currentSquares, setCurrentMove, handlePlay}} />
            )
        }
    ]
} satisfies Meta<typeof Game>

export default meta;
type Story = StoryObj<typeof Game>;

/**
 * 初期表示時
 */
export const Default: Story = {
}