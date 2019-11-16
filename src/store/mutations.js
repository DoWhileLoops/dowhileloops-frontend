// https://vuex.vuejs.org/en/mutations.html

import Axios from 'axios'

export default {
  fillStore (state) {
    Axios.get('https://dowhileloopsapi.azurewebsites.net/api/content')
      .then(function (response) {
        state.rows = response
        console.log(state.contents)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
