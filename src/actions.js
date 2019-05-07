let URL = 'http://www.shouzi.ltd'
let actions = {
     getData(state)
    {
        //在创建后获取数据
        this._vm.$axios.get(URL + '/quner/page.php')
            .then(response => {
                state.commit('indexData', response.data.data)
            })
            .catch(function (error) {
                console.log(error);
            })
        this._vm.$axios.get('http://www.shouzi.ltd/quner/city.php')
            .then(res => {
                    state.commit('cityData', res.data.data)
                    // console.log(res)
                }
            )
            .catch(function (error) {
                console.log(error);
            })
        this._vm.$axios.get(URL + '/quner/detail.php')
            .then(res => {
                    state.commit('detailData', res.data.data)
                    // console.log(res.data.data)
                }
            )
            .catch(function (error) {
                console.log(error);
            })
        this._vm.$axios.get('./static/hotaction.json')
            .then(res => {
                    console.log(res)
                    state.commit('myJson', res.data.data)

                }
            )
            .catch(function (error) {
                console.log(error);
            })
    }
}
export default actions
