// snapshot testing
import {describe, test, it, expect} from 'bun:test'
import assert from 'node:assert'
import { fetchData } from '../snapshot';

describe("user feature", () => {
    it("fetched the data from the server", () => {
        const data = fetchData(1);
        expect(data).toMatchSnapshot();
    })
});