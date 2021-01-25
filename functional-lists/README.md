# Functional Lists

## Metadata

- Time: 20-25 minutes
- Role: Senior Frontend Engineer

## Introduction

This challenge tests your familiarity with the functional paradigm, dealing with concepts like higher-order functions and immutable data structures. Many real-world Javascript interfaces like the Promise, Node's Filesystem API, and DOM event systems use callbacks to implement reactive behaviors. As a frontend engineer you will also often need to filter relevant data for a display and then map a renderer over that data to produce a set of elements that the view layer can consume. Lastly, folding (reducing) and immutable data structures are crucial elements of state management frameworks like Redux or Cycle.js.

Your task is to implement the immutable singly-linked list, with a special restriction: you must structure the data using only closures, and are otherwise not allowed to use Object, Array, prototypes, or classes for storage. This strips the task down to its purest form, whose solution is reminiscent of functional programming languages like Lisp, Haskell, and OCaml.

## Specification

Please implement the following methods:
- `list`: construct a new list that holds the given value and points to the given list (the tail)
- `head`: return the value stored at the head of a list
- `tail`: return the tail of a list
- `nth`: given a list, return the nth value down; calling this with `n = 0` is equivalent to using head
- `map`: given a list and a transform function, produce a new list with that transform applied to every value in the list
- `filter`: given a list and a predicate (boolean-valued) function, produce a new list with only values in the original list for which the predicate returns true
- `foldl`: given a list, a reducer function, and an initial accumulator value, reduce the list from the left
- `foldr`: given a list, a reducer function, and an initial accumulator value, reduce the list from the right
- `append`: given two lists, produce a new list containing the values of the first and second lists in sequence
- `compare`: given two lists, return whether they hold the same values (if one list is a prefix or suffix of the other, this should return false)
- `from_array`: given a Javascript array, construct a new list that holds the values of the array in order
- `to_array`: given a list, produce a Javascript array that holds the values of the list in order

The interfaces for the methods are as follows:
```
list: (T, List<T>) -> List<T>
head: List<T> -> T
tail: List<T> -> List<T>
nth: (List<T>, Number) -> T
map: (List<T>, T -> U) -> List<U>
filter: (List<T>, T -> Boolean) -> List<T>
foldl: (List<T>, (A, T) -> A, A) -> A
foldr: (List<T>, (A, T) -> A, A) -> A
append: (List<T>, List<T>) -> List<T>
compare: (List<T>, List<T>) -> Boolean
from_array: T[] -> List<T>
to_array: List<T> -> T[]
```

Do not worry about index out-of-bound errors (assume `head` and `nth` will only be called on lists that have values in the requested position).

As the data structure is immutable, `map`, `filter`, and `append` should not modify any of the input lists.

Also, bonus points are assigned for implementing each method in a single return expression.

## Testing

Export your methods in `implementation.js` or `implementation.ts`, and run `yarn test` or `npm run test`.
