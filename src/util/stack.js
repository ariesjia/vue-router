export const stack = []

window.addEventListener('popstate', e => {
  if (e.state && e.state.key) {
    const index = stack.findIndex((item) => item.key === e.state.key)
    if (index >= 0) {
      stack.splice(index + 1, stack.length)
    }
  }
})

export const pushStack = (key, url) => {
  stack.push({
    key,
    url
  })
}

export const replaceStack = (key, url) => {
  const index = stack.length ? stack.length - 1 : 0;
  stack[index] = {
    key,
    url
  }
}
