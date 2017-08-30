export const stack = []

window.addEventListener('popstate', function (e) {
  if (e.state && e.state.key) {
    const index = stack.findIndex((item) => item.key === e.state.key)
    if (index >= 0) {
      return stack.splice(index + 1, stack.length)
    }
  }
  stack.length = 0
})

export const pushStack = (key, url) => {
  stack.push({
    key,
    url
  })
}

export const replaceStack = (key, url) => {
  const index = stack.length
  if (index > 1) {
    stack[index - 1] = {
      key,
      url
    }
  }
}
