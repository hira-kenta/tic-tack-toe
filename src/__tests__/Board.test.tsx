import React from 'react';
import renderer from 'react-test-renderer';
import * as stories from '../components/Board/Board.stories';
import { composeStories } from '@storybook/react';

const {Default: DefaultBoard, Playing: PlayingBoard, WinningOfCircle: WinningOfCircleBoard, WinningOfCross: WinningOfCrossBoard, FilledWithTriangle: FilledWithTriangleBoard} = composeStories(stories);

describe('Boardのスナップショットテスト', () => {
    test('初期表示', () => {
        const component = renderer.create(
            <DefaultBoard />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('プレイ中', () => {
        const component = renderer.create(
            <PlayingBoard />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Xが勝利した場合の盤面', () => {
        const component = renderer.create(
            <WinningOfCrossBoard />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('Oが勝利した場合の盤面', () => {
        const component = renderer.create(
            <WinningOfCircleBoard />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
    test('すべてのマスに△がセットされた場合', () => {
        const component = renderer.create(
            <FilledWithTriangleBoard />
        )
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    })
})