# axios 安裝 (未完)

## 大綱
- 安裝
- vue-axios 全域使用
- 結合 Vuex action 使用

## 安裝
```
  npm i --save axios
  npm i vue-axios 
```

## vue-axios 方法
- 寫於 main.js
- 元件中 使用 this.axios 
```js
  // main.js
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)

  // 元件
  mounted() {
    this.axios.get('http://localhost:3000/users')
      .then((res) => { console.table(res.data) })
      .catch((error) => { console.error(error) })

    this.axios({
      method: 'get',
      baseURL: 'http://localhost:3000',
      url: '/users',
      'Content-Type': 'application/json',
    })
      .then((result) => { console.log(result.data) })
      .catch((err) => { console.error(err) })
  },
```

## Vuex action & axios 實體
- 寫於 store.js
```js
  //  寫於 store.js
  import axios from 'axios'

  const userRequest = axios.create({
    baseURL: 'http://localhost:3000',
    headers: { 'Content-Type': 'application/json' },
  })
  
  actions: {
    getUsers() { return userRequest.get('/users') },
  },

  // 使用
  created(){
    this.$store.dispatch('getUsers')
      .then((result) => { console.table(result.data) })
      .catch((err) => { console.error(err) })
  }
```

## 參考資料
- [vue全域性使用axios的方法](https://www.itread01.com/content/1541568153.html)
