const axios = require('axios')

class APIService {
  axiosInst = axios.create({
    // baseURL: 'http://52.79.145.5:8080/',
    // timeout:1000
  })

  async getAllNotice(section){
    try {
      const items = await this.axiosInst.get(`notice/${section}`)
      return items.data
    } catch(error) {
      console.log(error)
      return null
    }
  }

  async getNoticeWithCategory(section, category) {
    // 학사: haksa
    // 입학 : admission
    // 취업 : employment
    // 창업 : startup
    // 모집채용 : recruit
    // 경조사 : gyeongjosa
    // 일반 : normal
    // 산학연구 : research
    // 장학 : scholarship
    // 행사안내 : event

    try {
      const items = await this.axiosInst.get(`notice/${section}/${category}`)
      return items.data
    } catch (error) {
      console.log(error)
      return null
    }
  }
}

export default APIService




