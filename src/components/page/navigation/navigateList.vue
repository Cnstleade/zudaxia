<template>
  <div id="navigate" :data="navigationList">
    <div class="itemNav" v-for="(item,index) in navigationList" :key="index">
      <h3>{{item.title}}</h3>
      <ul v-for="itemMenu in item.list" :key="itemMenu.name">
        <li>{{itemMenu.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "navigateList",
    data() {
      return {
        navigationList: [
          {
            title: '主要频道',
            list: [
              {
                name: '旧手机回收'
              },
              {
                name: '回收品牌'
              },
              {
                name: '用户评价'
              },
              {
                name: '关于我们'
              }
            ]
          },
          {
            title: '其他频道',
            list: [
              {
                name: '手机快修'
              },
              {
                name: '企业租赁'
              },
              {
                name: '回收加盟商'
              }
            ]
          },
          {
            title: '相关服务',
            list: [
              {
                name: '服务条款'
              },
              {
                name: '在线客服'
              }
            ]
          }
        ]
      }
    }
  }
</script>

<style scoped>
#navigate{
  width: 300px;
  display: flex;
  justify-content: space-between;
  padding: 5px 10px;
}
  .itemNav h3{
    font-size: 15px;
    font-weight: bold;
  }
  .itemNav ul li{
    font-size: 12px;
    padding: 5px 0;
  }
.itemNav ul li:hover{
  color: #589DF6;
}
</style>
