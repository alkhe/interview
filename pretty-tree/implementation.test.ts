import tree from './tree'
import pretty_print from './implementation'

test('properly renders tree t', () => {
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

  expect(pretty_print(t)).toBe(
`   1   
 2   3 
4 5 6 7`
  )
})

test('properly renders tree u', () => {
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

  expect(pretty_print(u)).toBe(
`      1  
   2    3
 4   5 6 
7 8 9    `
  )
})

test('properly renders tree v', () => {
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

  expect(pretty_print(v)).toBe(
`      1       
 222     55   
3   44 66  777`
  )
})

