// https://vuex.vuejs.org/en/getters.html

export default {
  getAllRows: state => {
    return state.rows
  },
  getAllShuffledRows: state => {
    if (state.rows) {
      var currentIndex = state.rows.length
      var temporaryValue, randomIndex

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        temporaryValue = state.rows[currentIndex]
        state.rows[currentIndex] = state.rows[randomIndex]
        state.rows[randomIndex] = temporaryValue
      }
    }
    return state.rows
  },
  getSingleBlog: (state) => (slug) => {
    return state.blogs.find(b => b.slug === slug)
  }
}
