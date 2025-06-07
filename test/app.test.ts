// I am going to write the test here

/*
3A- AAA
A -> Arrange
A -> Act
A -> Assert
*/
import { test} from 'bun:test'; // in node env we have import as "node:test" here i'm using bun js runtime environment.
import assert from 'node:assert';
import { greet } from '../app';

test('greet returns the correct greeting', () => {
    //AAA
    const expected = "Hello, World!"
    const actual = greet("World");
    assert.strictEqual(actual, expected);
})