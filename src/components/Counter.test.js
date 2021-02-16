import React from 'react';
import { screen, cleanup, fireEvent, render } from '@testing-library/react';
import Counter from './Counter';

afterEach(cleanup);

describe("tests to make sure the Counter component works as expected", () => {
    test("that Counter renders", () => {
        render(<Counter/>);
        const buttonCount = screen.getByTestId('counter-button');
        expect(buttonCount).toBeInTheDocument();
    });
    test("that button counts on click", () => {
        render(<Counter/>);
        const buttonCount = screen.getByTestId('counter-button');
        fireEvent.click(buttonCount);
        expect(buttonCount.textContent).toBe('1');
    })
});