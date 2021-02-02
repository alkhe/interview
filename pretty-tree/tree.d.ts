export type Tree<T> = { value: T, left: Tree<T>, right: Tree<T> } | null

export default function tree<T>(value: T, left?: Tree<T>, right?: Tree<T>): Tree<T>
