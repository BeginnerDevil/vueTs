<template>
  <div class="background">
    <div class="logo">
      <input type="text" v-model="userData.name" placeholder="name" v-focus/>
      <input type="password" v-model="userData.password" placeholder="password" />
	  <div class="btn" @click="singin()">注册</div>
    </div>
  </div>
</template>

<script lang="ts" src="./login.ts"></script>

<style type="text/css" src="./login.css" scoped="scoped"></style>
