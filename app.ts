/*
-- Unit testing in node application
-  we can use testing library like Jest, mocha but i am  using nodejs inbuilt test runner functions.

-- create az file name as app.test.ts / js extension to write test in that file alternate we can create the folder name test and create all the test file there.

-- if there is more than one function and there test so we can put them together that is called suites
*/

//function 1 greet
export function greet(name: string): string{
    return `Hello, ${name}!`;
}

// another function
export function greetInJapanease(name: string): string{
    return `Konnichiwa, ${name}!`;
}