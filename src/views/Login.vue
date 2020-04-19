<template>
  <div id="app">
    <div>
      <span>ユーザーID：</span>
      <input type="text" v-model="userId">
    </div>

    <div>
      <span>パスワード：</span>
      <input type="password" v-model="password">
    </div>

    <button @click="clickLoginBtn">ログインボタン</button>

    <div>
      <p>ID：{{ userId }}</p>
      <p>パスワード：{{ password }}</p>
    </div>
    <router-view />
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'

@Component
export default class Login extends Vue {
  public userId: string = ''
  public password: string = ''

  public async clickLoginBtn() {
    // ログインIDとパスワードの空白文字をトリム
    this.userId = this.userId.trim()
    this.password = this.password.trim()

    // 入力値が空の場合、エラーメッセージを出力し、後続の処理を行わない
    if (this.userId.length < 1 || this.password.length < 1){
      alert('値を入力してください')
      return
    }

    // リクエストデータ
    let data: object = {
        userId: this.userId,
        password: this.password
    }

    // APIに対して、ログインIDとパスワードをPOST送信
    // 本番環境のURLはhttps://shakan.herokuapp.com/Login/auth/login
    // 開発環境のURLはhttp://localhost:8080/Login/auth/login
    await axios.post('https://shakan.herokuapp.com/Login/auth/login', data)
    .then(async response => {
      console.log(response)
      alert('ログイン成功')

      // TODO:vuexにユーザIDとアクセストークンの保持


      // TODO:メイン画面への遷移

    })
    .catch(error =>{
      alert('ログインに失敗しました')
      console.dir(error)
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
