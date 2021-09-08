interface TwitterUser {
  username: string
}

const user: Readonly<TwitterUser> = {
  username: 'liurongqing',
}

const foo: number[] = [1, 2, 3, 4, 5]
const bar: ReadonlyArray<number> = foo

