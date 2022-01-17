export const getAppName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: 'newApp name' })
      else reject(err)
    })
  })
}

export const getUserName = () => {
  return new Promise((resolve, reject) => {
    const err = null
    setTimeout(() => {
      if (!err) resolve({ code: 200, info: 'newUser name' })
      else reject(err)
    })
  })
}
