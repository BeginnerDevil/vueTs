<template>
  <div class="center">
    <div class="container">
      <div class="center-menus clearfix">
        <div
          class="menus-item fl relative"
          @click.stop="menuClick(item.comment,index)"
          @mouseover="menuMouseOver(item.line,index)"
          @mouseout="menuMouseOut(index)"
          v-for="(item,index) in menus"
          :key="index"
        >
          {{item.title}}
          <div class="wire absolute ease3" :style="{width: (item.line ? 150 : 0) +'px' }"></div>
        </div>
      </div>
      <div class="center-ul clearfix">
        <div class="center-li fl" v-for="list in cards" :key="list.id">
          <div class="center-li-img relative">
            <img :src="list.url" alt />
            <div class="center-li-cards absolute ease3">
              <div class="add-icon">
                <img src="/" alt="">
              </div>
              <p class="center-li-cards-title">{{list.title}}</p>
              <p class="center-li-cards-content">{{list.content}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./content.ts"></script>

<style type="text/css" src="./content.css" scoped="scoped"></style>
