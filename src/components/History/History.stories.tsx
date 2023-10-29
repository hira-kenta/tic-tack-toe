import { Meta, StoryObj } from "@storybook/react";
import History from "./History";

const meta : Meta<typeof History> = {
    title: "tic-tac-toe/History",
    component: History,
    parameters: {
        layout: 'centered'
    },
    args: {
        locations: [''],
        history: [Array(9).fill('')],
        setCurrentMove: () => {}
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
          <div className="game-info">
            <Story />
          </div>
        )
    ]
};

export default meta;
type Story = StoryObj<typeof History>

/**
 * 初期表示時
 */
export const Default: Story = {};

/**
 * プレイ中
 */
export const Playing: Story = {
    args: {
        currentMove: 5,
        locations: ['','(1,2)','(1,3)','(2,1)','(2,2)','(2,3)'],
        history: [[''],[''],[''],[''],[''],['']],
    }
}