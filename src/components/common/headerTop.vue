<template>
  <div id="head">
    <div class="head">
      <el-row>
        <el-col :span="10">
          <el-dropdown>
          <span class="el-dropdown-link" style="padding-left: 20px;">
            <i class="el-icon-location"></i>
            <span class="demonstration">南京</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>北京</el-dropdown-item>
              <el-dropdown-item>天津</el-dropdown-item>
              <el-dropdown-item>上海</el-dropdown-item>
              <el-dropdown-item>广州</el-dropdown-item>
              <el-dropdown-item>苏州</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
        <el-col :span="14" type="flex" align="center">
          <el-col :span="2">
            <span @click="go">登录</span>
          </el-col>
          <el-col :span="1">|</el-col>
          <el-col :span="4">
            <el-dropdown>
          <span class="el-dropdown-link">
            <span class="demonstration">回收车0件</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <div style="padding: 10px;font-size: 12px;color: #999;">回收车中还没有商品，赶紧回收吧！</div>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
          <el-col :span="1">|</el-col>
          <el-col :span="3">
            <span>关于我们</span>
          </el-col>
          <el-col :span="1">|</el-col>
          <el-col :span="3">
            <span>企业回收</span>
          </el-col>
          <el-col :span="1">|</el-col>
          <el-col :span="3">
            <span>帮助中心</span>
          </el-col>
          <el-col :span="1">|</el-col>
          <el-col :span="4">
            <el-dropdown>
          <span class="el-dropdown-link">
            <span class="demonstration">网站导航</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
              <el-dropdown-menu slot="dropdown">
                <navigation></navigation>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
  import navigation from '../page/navigation/navigateList';

  export default {
    components: {
      navigation,
    },
    methods:{
        go(){
            this.$router.push('/login')
        }
    }
  }
</script>

<style scoped>
  #head {
    background: #F4F4F4;
    height: 30px;
    line-height: 30px;
  }

  .head {
    max-width: 1200px;
    margin: 0 auto;
    font-size: 14px;
  }
</style>
