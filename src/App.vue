<template>
  <div id="app">
    <div id="nav">
      <router-link to="/production" active-class="selected">产品介绍</router-link> 
      <router-link to="/cooperation" active-class="selected">商务合作</router-link> 
      <router-link to="/about" active-class="selected">关于我们</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style scoped lang="scss">
@import "../src/assets/style/normal.css";
#app{
  background-color: rgb(255, 255, 255);
  font-size: 16px;
}
#nav{
  width: 825px;
  margin: 0 auto;
  height: 56px;
  line-height: 56px;
  > a{
  margin-right: 40px;
  }
.selected{
      color: blue;
    }
}


</style>
