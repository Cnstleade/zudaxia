<template>
  <div class="menu-list" :data="menuList">
    <div class="left-menu">
      <div v-for="item in menuList" :key="item.title">
        <ul class="nav-menu">
          <li class="nav-menu-item">
            <span @click="showInfo" :class="item.icon">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>

  </div>

</template>

<script>
export default {
  name: "menuList",
  isShow: false,
  data() {
    return {
      tabPosition: "left",
      menuList: [
        {
          title: "手机回收",
          icon: "el-icon-phone",
          list: [
            {
              phoneName: "苹果",
              list: [
                {
                  name: "苹果 iphone X"
                },
                {
                  name: "苹果 iphone 8 Plus"
                },
                {
                  name: "苹果 iphone 8"
                },
                {
                  name: "苹果 iphone 7 Plus"
                },
                {
                  name: "苹果 iphone 7"
                }
              ]
            },
            {
              phoneName: "三星",
              list: [
                {
                  name: "三星 GALAXY Tab S T705C（4G版）"
                },
                {
                  name: "三星 N8000"
                }
              ]
            },
            {
              phoneName: "小米",
              list: [
                {
                  name: "小米 6"
                },
                {
                  name: "小米 5"
                },
                {
                  name: "红米 Note4"
                },
                {
                  name: "红米 Note3"
                }
              ]
            }
          ]
        },
        {
          title: "平板电脑回收",
          icon: "el-icon-menu",
          list: [
            {
              phoneName: "苹果",
              list: [
                {
                  name: "苹果 iphone X"
                },
                {
                  name: "苹果 iphone 8 Plus"
                },
                {
                  name: "苹果 iphone 8"
                },
                {
                  name: "苹果 iphone 7 Plus"
                },
                {
                  name: "苹果 iphone 7"
                }
              ]
            },
            {
              phoneName: "三星",
              list: [
                {
                  name: "三星 GALAXY Tab S T705C（4G版）"
                },
                {
                  name: "三星 N8000"
                }
              ]
            },
            {
              phoneName: "小米",
              list: [
                {
                  name: "小米 6"
                },
                {
                  name: "小米 5"
                },
                {
                  name: "红米 Note4"
                },
                {
                  name: "红米 Note3"
                }
              ]
            }
          ]
        },
        {
          title: "笔记本回收",
          icon: "el-icon-tickets",
          list: [
            {
              phoneName: "苹果",
              list: [
                {
                  name: "苹果 iphone X"
                },
                {
                  name: "苹果 iphone 8 Plus"
                },
                {
                  name: "苹果 iphone 8"
                },
                {
                  name: "苹果 iphone 7 Plus"
                },
                {
                  name: "苹果 iphone 7"
                }
              ]
            },
            {
              phoneName: "三星",
              list: [
                {
                  name: "三星 GALAXY Tab S T705C（4G版）"
                },
                {
                  name: "三星 N8000"
                }
              ]
            },
            {
              phoneName: "小米",
              list: [
                {
                  name: "小米 6"
                },
                {
                  name: "小米 5"
                },
                {
                  name: "红米 Note4"
                },
                {
                  name: "红米 Note3"
                }
              ]
            }
          ]
        },
        {
          title: "摄影摄像回收",
          icon: "el-icon-view",
          list: [
            {
              phoneName: "苹果",
              list: [
                {
                  name: "苹果 iphone X"
                },
                {
                  name: "苹果 iphone 8 Plus"
                },
                {
                  name: "苹果 iphone 8"
                },
                {
                  name: "苹果 iphone 7 Plus"
                },
                {
                  name: "苹果 iphone 7"
                }
              ]
            },
            {
              phoneName: "三星",
              list: [
                {
                  name: "三星 GALAXY Tab S T705C（4G版）"
                },
                {
                  name: "三星 N8000"
                }
              ]
            },
            {
              phoneName: "小米",
              list: [
                {
                  name: "小米 6"
                },
                {
                  name: "小米 5"
                },
                {
                  name: "红米 Note4"
                },
                {
                  name: "红米 Note3"
                }
              ]
            }
          ]
        },
        {
          title: "智能数码回收",
          icon: "el-icon-star-on",
          list: [
            {
              phoneName: "苹果",
              list: [
                {
                  name: "苹果 iphone X"
                },
                {
                  name: "苹果 iphone 8 Plus"
                },
                {
                  name: "苹果 iphone 8"
                },
                {
                  name: "苹果 iphone 7 Plus"
                },
                {
                  name: "苹果 iphone 7"
                }
              ]
            },
            {
              phoneName: "三星",
              list: [
                {
                  name: "三星 GALAXY Tab S T705C（4G版）"
                },
                {
                  name: "三星 N8000"
                }
              ]
            },
            {
              phoneName: "小米",
              list: [
                {
                  name: "小米 6"
                },
                {
                  name: "小米 5"
                },
                {
                  name: "红米 Note4"
                },
                {
                  name: "红米 Note3"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    showInfo() {
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
.menu-list {
  position: absolute;
  top: 40px;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 400px;
}
.left-menu {
  width: 210px;
  height: 400px;
  background: rgba(0, 0, 0, 0.5);
  float: left;
  padding: 10px 0;
}
.right-content {
  width: 640px;
  height: 400px;
  color: #ccc;
  margin-left: 210px;
  background: #fff;
}
.left-menu{
  padding:0;
}
.nav-menu{
  margin:0;
  padding:0;
}
.nav-menu-item {
  width: 100%;
  height: 60px;
  line-height: 60px;
  font-size: 15px;
}
.nav-menu-item span {
  display: block;
  height: 40px;
  line-height: 40px;
  color: #fff;
  text-align: left;
  padding: 0 20px;
}
.nav-menu-item span:hover {
  background: #fff;
  color: #659fff;
}
</style>
