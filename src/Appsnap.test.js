import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

describe("test that App renders consistently", () => {
    test("matches a snapshot", () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
})