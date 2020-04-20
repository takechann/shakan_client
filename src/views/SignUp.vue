<template>
  <div>
    <el-card class="box-card login">

      <div slot="header" class="clearfix">
        <span>SignUp</span>
      </div>

      <el-form ref="form" label-width="80px">
        <el-form-item label="Name">
          <el-input v-model="userId"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clickSignUpBtn">ユーザ登録</el-button>
        </el-form-item>
      </el-form>

    </el-card>

    <div>
      <p>ID：{{ userId }}</p>
      <p>パスワード：{{ password }}</p>
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import axios from 'axios'
import router from '../router'

@Component
export default class SignUp extends Vue {
  public userId: string = ''
  public password: string = ''

  public async clickSignUpBtn() {
    this.$store.commit('setLoading', true)

    // ログインIDとパスワードの空白文字をトリム
    this.userId = this.userId.trim()
    this.password = this.password.trim()

    // 入力値が空の場合、エラーメッセージを出力し、後続の処理を行わない
    if (this.userId.length < 1 || this.password.length < 1){
      this.$store.commit('setLoading', false)
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
      this.$store.commit('setLoading', false)
      alert('登録完了')
      console.dir(response)

      // TODO: ログイン画面へ遷移
      router.push('/')
    })
    .catch(error =>{
      this.$store.commit('setLoading', false)
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
.box-card
{
  width: 480px;
}

.login
{
  position: relative;
  margin: auto;
}
</style>
