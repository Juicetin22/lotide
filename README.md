# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @justinh22/lotide`

**Require it:**

`const _ = require('@justinh22/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* countLetters(): Give a list of the count of unique characters in a string
* countOnly(): Give count of a select number of strings chosen
* eqArrays(): Determines if two arrays are identical
* eqObjects(): Determines if two objects are identical
* findKey(): Returns key given an object and a callback
* findKeyByValue(): Returns key when given an object and a value in object
* head(): Returns first value of an array
* letterPositions(): Given a string, returns an object with a list of each unique character and their position
* map(): Given an array and callback function, returns a transformed array
* middle(): Given an array, returns the middle value
* tail(): Given an array, returns the array without the first value
* takeUntil(): Given an array and callback function, returns an array up until a value that satisfies the condition
* without(): Given two arrays, returns a new array without values from the second array