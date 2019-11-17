// https://vuex.vuejs.org/en/mutations.html

export default {
  fillStore (state, response) {
    state.rows = response.data
  }
}
