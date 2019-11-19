// https://vuex.vuejs.org/en/mutations.html

export default {
  fillStore (state, response) {
    state.rows = response.data
  },
  pushSingleBlog (state, response) {
    if ((state.blogs.filter(b => b.slug === response.slug)).length === 0) {
      state.blogs.push(response)
    }
  }
}
