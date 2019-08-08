<template>
  <div class="welcome">
    <div class="container clearfix">
      <div class="card fr">
        <h1>Mini Profile</h1>
        <p>simple parallax template</p>
      </div>
    </div>
    <div class="welcome-introduce">
      <div class="container clearfix">
        <div class="welcome-introduce-char-box fl">
          <div class="welcome-introduce-title"></div>
          <div class="welcome-introduce-center">
            <p
              class="welcome-leave-words"
              v-for="(item,index) in leaveWordData"
              :key="index"
            >{{item.remark}}</p>
          </div>
        </div>
        <div class="welcome-introduce-card fl"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./welcome.ts"></script>

<style type="text/css" src="./welcome.css" scoped="scoped"></style>
