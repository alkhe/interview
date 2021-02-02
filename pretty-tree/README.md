# Pretty Tree

## Metadata

- Time: 20 minutes
- Role: Frontend Engineer

## Introduction

Trees are ubiquitous in real-world engineering, but their human-readable representations are not as easily obtained as for tuples or lists. `JSON.stringify` is useful in a bind, but a specialized representation can offer far better insight into the data.

Your task is to write a pretty-printer for binary trees. You will need to analyze your input and enrich it with spatial data, then render it to a human-readable string that can be printed to the console.

## Specification

You are given the following code:

```js
function tree(value, left = null, right = null) {
  return { value, left, right }
}

const t = tree(1,
  tree(2,
    tree(4),
    tree(5)
  ),
  tree(3,
    tree(6),
    tree(7)
  )
)

const u = tree(1,
  tree(2,
    tree(4,
      tree(7),
      tree(8)
    ),
    tree(5,
      tree(9)
    )
  ),
  tree(3,
    tree(6)
  )
)

const v = tree(1,
  tree(222,
    tree(3),
    tree(44)
  ),
  tree(55,
    tree(66),
    tree(777)
  )
)
```

Please implement the method `pretty_print: Tree<number> -> string` that produces the following output for the trees given above:

```
   1
 2   3
4 5 6 7

      1
   2    3
 4   5 6
7 8 9

      1
 222     55
3   44 66  777
```

