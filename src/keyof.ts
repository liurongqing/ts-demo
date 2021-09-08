interface Foo {
  bar: number
  baz: string
  qux: Date
}

type Fookey = keyof Foo
const foo: Foo = { bar: 1, baz: '1', qux: new Date() }
const fooLookup = (key: Fookey) => {
  return foo[key]
}
