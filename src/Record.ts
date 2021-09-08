// bad
interface User {
  name: string
}
// const users: {[key: string]: User} = {
//   say: {
//     name: 'liurongqing'
//   }
// }

// good
const users: Record<string, User> = {
  say: {
    name: 'liurongqing',
  },
}
