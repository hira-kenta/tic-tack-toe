import { Meta, StoryObj } from "@storybook/react";
import Square from "./Square";

const meta: Meta<typeof Square> = {
    title: "tic-tac-toe/Square",
    component: Square,
    parameters: {
        layout: 'centered'
    },
    args: {
        isWinning: false,
        value: ''
    },
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Square>;

/**
 * 初期表示
 */
export const Default: Story = {}

/**
 * X
 */
export const Cross: Story = {
    args: {
        isWinning: false,
        value: 'X',
    },
};

/**
 * O
 */
export const Circle: Story = {
    args: {
        isWinning: false,
        value: 'O',
    },
};

/**
 * X(勝利時)
 */
export const Winning: Story = {
    args: {
        isWinning: true,
        value: 'X'
    }
}

/**
 * △
 */
export const Triangle: Story = {
    args: {
        isWinning: false,
        value: '△',
    },
};