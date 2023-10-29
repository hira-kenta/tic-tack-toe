import { Meta, StoryObj } from "@storybook/react";
import Board from "./Board";

const meta = {
    title: "tic-tac-toe/Board",
    component: Board,
    parameters: {
        layout: 'centered'
    },
    args:{
        xIsNext: true,
        squares: Array(9).fill('')
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Board>

export default meta;
type Story = StoryObj<typeof Board>;

/**
 * 初期表示時
 */
export const Default: Story = {
    args:{
        xIsNext: true,
    }
}

/**
 * プレイ中
 */
export const Playing: Story = {
    args:{
        xIsNext: false,
        squares: ['X','O','X','O','X','','','','',],
    }
}

/**
 * X が勝利した場合の盤面
 */
export const WinningOfCross: Story = {
    args:{
        xIsNext: false,
        squares: ['X','O','X','O','X','O','X','','',],
    }
}

/**
 * O が勝利した場合の盤面
 */
export const WinningOfCircle: Story = {
    args:{
        xIsNext: false,
        squares: ['O','X','O','O','X','X','O','','X'],
    }
}

/**
 * すべてのマスに△がセットされた場合
 */
export const FilledWithTriangle: Story = {
    args:{
        xIsNext: false,
        squares: Array(9).fill('△'),
    }
}