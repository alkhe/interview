import { list, head, tail, nth, map, filter, foldl, foldr, append, compare, to_array, from_array } from './implementation'

test('creates list and can retrieve head and tail', () => {
  const l = list(1, list(2, null))

  expect(head(l)).toBe(1)
  expect(head(tail(l))).toBe(2)
  expect(tail(tail(l))).toBe(null)
})

test('can compare lists', () => {
  const l1 = list(1, list(2, list(3, list(4, list(5, null)))))
  const l2 = list(1, list(2, list(3, list(4, list(5, null)))))
  const l3 = list(1, list(2, list(3, list(4, null))))
  const l4 = list(2, list(3, list(4, list(5, null))))

  expect(compare(l1, l2)).toBe(true)
  expect(compare(l1, l3)).toBe(false)
  expect(compare(tail(l1), l4)).toBe(true)
})

test('can construct list from array', () => {
  const l = list(1, list(2, list(3, list(4, list(5, null)))))

  expect(compare(l, from_array([1, 2, 3, 4, 5]))).toBe(true)
})

test('can convert list to array', () => {
  const l = list(1, list(2, list(3, list(4, list(5, null)))))

  expect(to_array(l)).toEqual([1, 2, 3, 4, 5])
})

test('can retrieve nth element from list', () => {
  const l = list(1, list(2, list(3, list(4, list(5, null)))))

  expect(nth(l, 4)).toBe(5)
})

test('can map over list', () => {
  const l1 = from_array([1, 2, 3, 4, 5])
  const l2 = from_array(['1', '2', '3', '4', '5'])

  expect(compare(map(l1, String), l2)).toBe(true)
})

test('can filter over list', () => {
  const l1 = from_array([1, 2, 3, 4, 5])
  const l2 = from_array([1, 3, 5])

  expect(compare(filter(l1, x => (x & 1) === 1), l2)).toBe(true)
})

test('can foldl over list', () => {
  const l = from_array(['a', 'b', 'c'])

  expect(foldl(l, (s1, s2) => s1 + s2, '')).toEqual('abc')
})

test('can foldr over list', () => {
  const l = from_array(['a', 'b', 'c'])

  expect(foldr(l, (s1, s2) => s1 + s2, '')).toEqual('cba')
})

test('can append two lists', () => {
  const l1 = from_array([1, 2, 3])
  const l2 = from_array([4, 5, 6])
  const l3 = from_array([1, 2, 3, 4, 5, 6])

  expect(compare(append(l1, l2), l3)).toBe(true)
})

