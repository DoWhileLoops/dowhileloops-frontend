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
  },
  fetchSingleBlog (context, payload) {
    var url = 'https://api.storyblok.com/v1/cdn/stories/' + payload + '?token=VF26nXY079vJIug3cgsrwwtt'
    return Axios.get(url)
      .then(function (response) {
        console.log('api pinged : ' + response)
        context.commit('pushSingleBlog', response)
        return response.data.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
