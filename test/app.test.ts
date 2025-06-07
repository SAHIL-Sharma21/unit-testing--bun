// I am going to write the test here

/*
3A- AAA
A -> Arrange
A -> Act
A -> Assert
*/
import {test, describe} from 'bun:test'; // in node env we have import as "node:test" here i'm using bun js runtime environment.
import assert from 'node:assert';
import { greet, greetInJapanease } from '../app';



test('greet returns the correct greeting', () => {
    //AAA
    const expected = "Hello, World!"
    const actual = greet("World");
    assert.strictEqual(actual, expected);
});

// putting one or more test in club which referred as suites -> In Bun we are using describe and in node we will be using suite
describe("Greeting functions", () => {
    test("greet returns the correct greeting in english", () => {
        const expected = "Hello, World!";
        const actual = greet("World");
        assert.strictEqual(actual, expected);
    });
    test("greet returns the correct greeting in Japanease", () => {
        const expected = "Konnichiwa, Sahil!";
        const actual = greetInJapanease("Sahil");
        assert.strictEqual(actual, expected);
    });
});