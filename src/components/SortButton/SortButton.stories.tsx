import { Meta, StoryObj } from "@storybook/react";
import SortButton from "./SortButton";

const meta: Meta<typeof SortButton> = {
    title: "tic-tac-toe/SortButton",
    component: SortButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    args: {
        ascOrder: true,
    }
}

export default meta;
type Story = StoryObj<typeof SortButton>;

/**
 * 初期表示（昇順）
 */
export const Default: Story = {};

/**
 * 降順ボタン
 */
export const Desc: Story = {
    args: {
        ascOrder: false,
    }
}