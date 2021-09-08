// 提取

interface UserExtract {
  id: string
  username: string
  followers?: number
  isBlocked?: boolean
}

const logUserList = (user: Extract<UserExtract, string>) => {
  Object.values(user).forEach((u) => logUser(u))
}

const logUser = (prop: string) => {
  console.log(prop)
}

// logUserList({
//   id: 'id1',
//   username: 'name1',
//   followers: 1,
//   isBlocked: 2,
// })
