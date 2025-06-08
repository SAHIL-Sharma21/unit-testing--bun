// writing test for mocking the api call which define in the mocking.ts file
import {describe, test, mock} from 'bun:test';
import { processOrder } from '../mocking';
import assert from 'node:assert'

describe("Process order", () => {
    test("that it process the order correctly", () => {
        //AAA

        const mockedProcessPayment = mock((amount: number) => {
            // dont call any api or dont do any side effect
            console.log("I am  mocked...")
            return {id: "123", amount: amount};
        });

        const expected = {id: "123", amount: 3000};
        assert.strictEqual(mockedProcessPayment.mock.calls.length, 0); //we are doing SPY on the function -- call should be 0 before running the function
        const result = processOrder({amount: 3000}, mockedProcessPayment);
        assert.deepStrictEqual(result, expected);
        assert.strictEqual(mockedProcessPayment.mock.calls.length, 1); // call should be 1 after running the function

        const call = mockedProcessPayment.mock.calls;
        assert.deepStrictEqual(call[0], [3000]);
    });
})