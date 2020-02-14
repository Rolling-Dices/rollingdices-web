export function loadUser(slug) {
  return {
    type: 'ASYNC_LOAD_USER',
    slug
  }
}