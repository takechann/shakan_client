<template>
  <div>
    <el-card class="box-card login">

      <div slot="header" class="clearfix">
        <span>Login</span>
        <el-button style="float: right; padding: 3px 0" type="text">Forget password</el-button>
      </div>

      <el-form ref="form" label-width="80px">
        <el-form-item label="Name">
          <el-input v-model="userId"></el-input>
        </el-form-item>
        <el-form-item label="Password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="clickLoginBtn">ログイン</el-button>
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
export default class Login extends Vue {
  public userId: string = ''
  public password: string = ''

  public async clickLoginBtn() {
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
    // 本番環境のURLはhttps://shakan.herokuapp.com/Login/auth/login
    // 開発環境のURLはhttp://localhost:8080/Login/auth/login
    await axios.post('https://shakan.herokuapp.com/Login/auth/login', data)
    .then(async response => {
      this.$store.commit('setLoading', false)


      console.log(response)
      alert('ログイン成功')

      // TODO:vuexにユーザIDとアクセストークンの保持


      // TODO:メイン画面への遷移
      router.push('/main')
    })
    .catch(error =>{
      // 画面Loading解除
      this.$store.commit('setLoading', false)

      alert('ログインに失敗しました')
      console.dir(error)
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
