interface UserPick {
  id: string
  username: string
  followers: number
  isBlocked: boolean
}

const updateUser = (user: Pick<UserPick, 'id' | 'username'>) => {
  // getUser()
}

updateUser({ id: '1234', username: 'liurongqing' })
