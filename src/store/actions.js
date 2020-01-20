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
  async fetchSingleBlog (context, payload) {
    try {
      var storyblokVersionUrl = 'https://api.storyblok.com//v1/cdn/spaces/me?token=VF26nXY079vJIug3cgsrwwtt'
      var blogUrl = 'https://api.storyblok.com/v1/cdn/stories/' + payload + '?token=VF26nXY079vJIug3cgsrwwtt' + '&cv='
      let versionData = await Axios.get(storyblokVersionUrl)
  
      var versionNum = versionData.data.space.version !== null ? versionData.data.space.version : '1579552699'
  
      let blogResponse = await Axios.get(blogUrl + versionNum)
  
      context.commit('pushSingleBlog', blogResponse.data)
      return blogResponse.data
    } catch (err) {
      console.log(err)
    }
  }  
}
