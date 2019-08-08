<template>
  <div>
    <div class="background-img-top" :style="{transform:boxTranslate}" v-if="showBackFlag">
      <img
        src="../../../public/images/back/mini-profile-bg-01.jpg"
        :style="{transform:translate}"
        alt
      />
    </div>
    <div
      class="background-img-top"
      :style="{transform:boxTranslateBottom}"
      v-if="showBackFlag == false"
    >
      <img
        src="../../../public/images/back/mini-profile-bg-02.jpg"
        :style="{transform:translateBottom}"
        alt
      />
    </div>
    <div class="contact-way">
      <div class="bottom_fixed_imgs fa fa-comments-o"></div>
      <div class="bottom_fixed_imgs fa fa-weibo"></div>
      <div class="bottom_fixed_imgs fa fa-weixin"></div>
      <div class="bottom_fixed_imgs fa fa-angle-up" @click="goTopClick" v-if="goTopIcon"></div>
    </div>
  </div>
</template>

<script lang="ts" src="./backgroundImage.ts"></script>

<style type="text/css" src="./backgroundImage.css" scoped="scoped"></style>
