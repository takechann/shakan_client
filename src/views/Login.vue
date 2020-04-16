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

    // APIに対して、ログインIDとパスワードをPOST送信
    // 本番環境のURLはhttps://shakan.herokuapp.com/login
    // 開発環境のURLはhttp://localhost:8080/login
    await axios.post('https://shakan.herokuapp.com/login',
      {
        userId: this.userId,
        password: this.password
      }
    )
    .then(async response => {
      console.log(response)
      alert('入力値は' + response.config.data)

      // TODO:ログイン成功フラグの場合は画面遷移
      // 返却値は response.config.data.isLogin(trueがログイン成功、falseが失敗)

      // ログイン成功
      if(response.config.data.isLogin){
        // 次画面遷移
      } else {
        // ログイン失敗
        // エラーメッセージ(ログインに失敗しました)
      }
    })
    .catch(error =>{
      alert('通信エラー')
      alert(error)
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
