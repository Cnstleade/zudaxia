<template>
  <div>
    <div id="menu">
      <el-row class="picStyle" :gutter="20">
        <el-col :span="4">
          <img src="../../assets/logo.jpg" alt="LOGO" width="100%">
        </el-col>
        <el-col :span="4">
          <img src="../../assets/home_entrance.png" width="100%">
        </el-col>
        <el-col :span="6" :offset="10">
          <el-input size="medium">
            <el-autocomplete
              class="inline-input"
              v-model="state1"
              :fetch-suggestions="querySearch"
              placeholder="请输入内容"
              @select="handleSelect">
            </el-autocomplete>
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
      </el-row>
      <!-- <el-row style="text-align:center;" class="position">
        <el-col class="menu-item bg-menu" :span="3" style="background:#FCDB00">旧机回收</el-col>
        <el-col class="menu-item" :span="3">租大侠公众号</el-col>
        <el-col class="menu-item" :span="3">小程序</el-col>
        <el-col class="menu-item" :span="3">公益助学</el-col>
        <el-col class="menu-item" :span="3">手机快修</el-col>
      </el-row> -->
    </div>
    <div>
      <template>
        <el-carousel :interval="4000" height="400px" arrow="never">
          <el-carousel-item v-for="(item,index) in carousels" :key="index">
            <img :src="item.url" alt="item.url" width="100%" style="height:400px">
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>
  </div>
</template>

<script>
  import menuList from "./menuList/menuList";
  export default {
    data() {
      return {
        restaurants: [],
        activeIndex: "1",
        state1: "",
        carousels: [
          {
            url: require("../../assets/banner1.jpg")
          },
          {
            url: require("../../assets/banner2.jpg")
          },
          {
            url: require("../../assets/banner3.jpg")
          }
        ]
      };
    },
    components: {
      menuList
    },
    methods: {
      querySearch(queryString, cb) {
        var restaurants = this.restaurants;
        var results = queryString
          ? restaurants.filter(this.createFilter(queryString))
          : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return restaurant => {
          return (
            restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) ===
            0
          );
        };
      },
      loadAll() {
        return [
          
        ];
      },
      handleSelect(item) {
        console.log(item);
      }
    },
    mounted() {
      this.restaurants = this.loadAll();
    }
  };
</script>

<style scoped>
  #menu {
    max-width: 1200px;
    margin: 0 auto;
  }

  .picStyle {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }

  .bg-menu {
    width: 210px;
  }

  .menu-item {
    height: 40px;
    line-height: 40px;
  }

  .position {
    position: relative;
  }

</style>
