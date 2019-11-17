// https://vuex.vuejs.org/en/actions.html

import Axios from 'axios'

export default {
  fetchDoWhileData (context) {
    return Axios.get('https://dowhileloopsapi.azurewebsites.net/api/content')
      .then(function (response) {
        context.commit('fillStore', response)
        return response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
