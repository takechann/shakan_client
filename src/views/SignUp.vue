<template>
  <div>
    <div>
      <span>サインインアップID：</span>
      <input type="text" v-model="userId">
    </div>

    <div>
      <span>パスワード：</span>
      <input type="password" v-model="password">
    </div>

    <button @click="clickSignUpBtn">登録ボタン</button>
    <button @click="clickLoginBtn2">検証ボタン</button>

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
export default class SignUp extends Vue {
  public userId: string = ''
  public password: string = ''

  public async clickLoginBtn2() {
    await axios.post('http://localhost:8080/SignUp/init')
    .then(async response => {
      console.log(response)
      alert('init')
    })
  }
  public async clickSignUpBtn() {
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
    // 本番環境のURLはhttps://shakan.herokuapp.com/SignUp/auth/signup
    // 開発環境のURLはhttp://localhost:8080/SignUp/auth/signup
    await axios.post('https://shakan.herokuapp.com/SignUp/auth/signup', data)
    .then(async response => {
      alert('登録完了')
      console.dir(response)

      // TODO: ログイン画面へ遷移

    })
    .catch(error =>{
      console.dir(error)
      if(error.response.data.message = "Error: Username is already taken!"){
        alert('すでにアカウントが存在しています')
      } else {
        alert('その他エラー')
      }
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
