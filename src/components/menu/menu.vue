<template>
  <div class="menu">
    <div class="menu-icon ease5" @click="menuIconClick">
      <span :class="[ifMenuOpen ?'fa-close' :'fa-bars', 'fa' ,'ease5','menu-font']"></span>
    </div>
    <div class="menu-list-box ease1 clearfix">
      <div
        class="menu-list relative ease3"
        @mouseover="menuMouseOver(item.line,index)"
        @mouseout="menuMouseOut(index)"
        v-for="(item,index) in menus"
        :key="index"
        :style="{marginLeft:(ifMenuOpen ? 0 : 150) + 'px',transitionDelay:((index + 1)/5)+'s' }"
      >
        {{item.title}}
        <div class="wire absolute ease3" :style="{width: (item.line ? 150 : 0) +'px' }"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./menu.ts"></script>

<style type="text/css" src="./menu.css" scoped="scoped"></style>
