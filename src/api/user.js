export function fetchUserRepositories(user) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([user])
    }, 800)
  })
}