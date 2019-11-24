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

    // TODO: clean this up
    // storyblok caching on their end
    // var versionNum;
    // var url;
    // var storyblokVersionUrl = 'https://api.storyblok.com//v1/cdn/spaces/me?token=VF26nXY079vJIug3cgsrwwtt';

    // versionNum = Axios.get(storyblokVersionUrl)
    // .then(function (response) {
    // console.log('story blok version response.data')
    // console.log(response.data)
    // url = 'https://api.storyblok.com/v1/cdn/stories/' + payload + '?token=VF26nXY079vJIug3cgsrwwtt' + '&cv=' + versionNum
    // return response.data.space.version
    // })
    // .catch(function (error) {
    // console.log(error)
    // })

    var versionNum = '1574628520'

    var url = 'https://api.storyblok.com/v1/cdn/stories/' + payload + '?token=VF26nXY079vJIug3cgsrwwtt' + '&cv=' + versionNum

    //var url = 'https://api.storyblok.com/v1/cdn/stories/' + payload + '?token=VF26nXY079vJIug3cgsrwwtt'
    
    return Axios.get(url)
      .then(function (response) {
        context.commit('pushSingleBlog', response.data)
        return response.data
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
