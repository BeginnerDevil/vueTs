<template>
  <div class="background relative">
    <div class="logo absolute" v-if="sign">
      <input type="text" v-model="userData.name" placeholder="name" v-focus>
      <input type="password" v-model="userData.password" placeholder="password">
      <div class="btn" @click="singin()">注册</div>
      <div class="btn" @click="setSign(1)">登入</div>
    </div>
    <div class="logo absolute" v-if="sign == false"> 
      <input type="text" v-model="userData.name" placeholder="name" v-focus>
      <input type="password" v-model="userData.password" placeholder="password">
      <div class="btn" @click="singup()">登入</div>
      <div class="btn" @click="setSign(2)">注册</div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style type="text/css" src="./login.css" scoped="scoped"></style>
