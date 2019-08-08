<template>
  <div class="leave-words">
    <div class="container">
      <div class="application">
        <div class="application-version-box clearfix" v-for="(item,index) in apps" :key="index">
          <div class="application-line fl"></div>
          <div class="application-name fl">{{item.title}}</div>
        </div>
      </div>
      <div class="foot_right">
        <form action method="get">
          <p class="foot_txt">
            <input class="foot_box" type="text"  placeholder="姓名"  v-model="name"/>
          </p>
          <p class="foot_txt">
            <input class="foot_box" type="text"  placeholder="邮箱"  v-model="email" />
          </p>
          <p class="foot_txt">
            <input class="foot_box" type="text"  placeholder="电话"  v-model="phone"/>
          </p>
          <div class="clear"></div>
          <p class="foot_txt2">
            <textarea class="foot_area" name rows cols placeholder="内容"  v-model="remark"></textarea>
          </p>
          <div class="btn" @click.stop="submit()" >提交</div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./leaveWords.ts"></script>

<style type="text/css" src="./leaveWords.css" scoped="scoped"></style>
