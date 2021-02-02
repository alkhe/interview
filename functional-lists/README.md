# Functional Lists

## Metadata

- Time: 20-25 minutes
- Role: Senior Frontend Engineer

## Introduction

This challenge tests your familiarity with the functional paradigm, dealing with concepts like higher-order functions and persistent data structures. Many real-world Javascript interfaces like the Promise, Node's Filesystem API, and DOM event systems use callbacks to implement reactive behaviors. As a frontend engineer you will also often need to filter relevant data for a display and then map a renderer over that data to produce a set of elements that the view layer can consume. Lastly, folding and persistence are crucial elements of state management frameworks like Redux or Cycle.js.

Your task is to implement the persistent, singly-linked list, with a special restriction: you must structure the data using only closures. **<ins>Do not use objects, arrays, prototypes, or classes for storage.</ins>** This strips the task down to its purest form, whose solution is reminiscent of functional programming languages like Lisp, Haskell, and OCaml.

## Specification

Please implement the following methods in the specified complexity class:
- `list`: construct a new list that holds the given value and points to the given list (the tail) `O(1) constant`
- `head`: return the value stored at the head of a list `O(1) constant`
- `tail`: return the tail of a list `O(1) constant`
- `nth`: given a list, return the nth value down; calling this with `n = 0` is equivalent to using head `O(n) linear`
- `map`: given a list and a transform function, produce a new list with that transform applied to every value in the list `O(n) linear`
- `filter`: given a list and a predicate (boolean-valued) function, produce a new list with only values in the original list for which the predicate returns true `O(n) linear`
- `foldl`: given a list, a reducer function, and an initial accumulator value, reduce the list from the left `O(n) linear`
- `foldr`: given a list, a reducer function, and an initial accumulator value, reduce the list from the right `O(n) linear`
- `append`: given two lists, produce a new list containing the values of the first and second lists in sequence `O(n) linear`
- `compare`: given two lists, return whether they hold the same values (if one list is a prefix or suffix of the other, this should return false) `O(n) linear`
- `from_array`: given a Javascript array, construct a new list that holds the values of the array in order `O(n) linear`
- `to_array`: given a list, produce a Javascript array that holds the values of the list in order `O(n) linear`

The interfaces for the methods are as follows:
```
list: (T, List<T>) -> List<T>
head: List<T> -> T
tail: List<T> -> List<T>
nth: (List<T>, number) -> T
map: (List<T>, T -> U) -> List<U>
filter: (List<T>, T -> boolean) -> List<T>
foldl: (List<T>, (A, T) -> A, A) -> A
foldr: (List<T>, (A, T) -> A, A) -> A
append: (List<T>, List<T>) -> List<T>
compare: (List<T>, List<T>) -> boolean
from_array: T[] -> List<T>
to_array: List<T> -> T[]
```

- Do not worry about index out-of-bound errors (assume `head`, `tail`, and `nth` will only be called on lists that have values in the requested position)
- However, you still need to support empty lists.
- As the data structure is persistent, `map`, `filter`, and `append` should not modify any of the input lists.
- Also, bonus points are assigned for implementing each method in a single return expression.

