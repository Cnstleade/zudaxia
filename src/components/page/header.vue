<template>
<div>
    <div >
      <div class="w margin" id="section-flow">
          <ul>
              <li>
                  <i></i>
                  <span>1. 搜索机型</span>
              </li>
              <li>
                  <i></i>
                  <span>2. 商家报价</span>
              </li>
              <li>
                  <i></i>
                  <span>3. 提交订单</span>
              </li>
              <li>
                  <i></i>
                  <span>4. 租用手机</span>
              </li>
          </ul>
      </div>      
    </div>
    <div class="w margin">
        <div class="hotsale dw">
            <div class="hotsale-header">
                <h3>手机租用</h3>
                <ul class="category-list">
                    <li class="category-item current">手机</li>
                    <li class="category-item">笔记本</li>
                    <li class="category-item">平板</li>
                </ul>
            </div>
            <div class="hotsales-body">
                <div class="tab current">
                    <div class="brand-list-wrap " style="float:right">
                        <ul class="brand-list">
                            <li v-for="(temp,index) in imgs" :key="index" class="brand-item current"
                                @click='chang(index)'>
                                <img class="brand-logo " :class="{color:currentInde!==index,gray:currentInde==index}"
                                     :src="temp.src1" alt="热门">
                                <img class="brand-logo   current"
                                     :class="{color:currentInde==index,gray:currentInde!==index}" :src="temp.src2"
                                     alt="热门">
                                <span class="line" href=""></span>
                            </li>
                        </ul>
                    </div>
                    <div class="product-list-wrap " style="float:left">
                        <div>
                            <div v-for="(temp,index) in imgsss" :key="index">
                                <div v-if="index == currentInde">
                                    <ul class="product-list">
                                        <li class="product-item" v-for="tem in temp.detail" :key="tem.title">
                                            <a class="link"
                                            @click="g()"
                                               href="javascript:void(0)"
                                               style="text-decoration:none"
                                               target="_blank">
                                                <img class="product-logo" :src="tem.src"
                                                     alt="iPhone 6"/>
                                                <h3 class="product-name">{{tem.title}}</h3>
                                                <p class="product-desc">
                                                    手机租用价格
                                                </p>
                                                <p class="product-price">最低约¥{{tem.money}}/12期</p>
                                            </a>
                                        </li>
                                        <a class="show-more-product" href="#">
                                            <span class="text">更多</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <!-- <ul class="product-list">
                                <li class="product-item" v-for="tem in ims" :key="tem.title">
                                    <a class="link"
                                       href="javascript:void(0)"
                                       style="text-decoration:none"
                                       target="_blank">
                                        <img class="product-logo" :src="tem.src"
                                             alt="iPhone 6"/>
                                        <h3 class="product-name">iPhone 6</h3>
                                        <p class="product-desc">
                                            最高回收价
                                        </p>
                                        <p class="product-price">{{tem.money}}</p>
                                    </a>
                                </li>
                                <a class="show-more-product" href="#">
                                    <span class="text">更多</span>
                                </a>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>  
    <div class="s">
        <div class="w margin ">
            <div class="flex">
                <div class="img-1">
                    <img src="../../assets/img/5_06.png">
                </div>
                <div class="img-2">
                    <img src="../../assets/img/5_03.png">
                </div>
                <div class="img-3">
                    <img src="../../assets/img/5_09.png">
                </div>
            </div>
            <div class="flex">
                <div class="step-1">1、极速下单，顺丰包邮</div>
                <div class="step-2">2、专业检测，保障隐私</div>
                <div class="step-3">3、高价回收，闪电付款</div>
            </div>
        </div>
    </div>      
    <div class="w margin">
        <div class="hotsale dw">
            <div class="hotsale-header">
                <h3>手机回收</h3>
                <ul class="category-list">
                    <li class="category-item current">手机</li>
                    <li class="category-item">笔记本</li>
                    <li class="category-item">平板</li>
                </ul>
            </div>
            <div class="hotsales-body">
                <div class="tab current">
                    <div class="brand-list-wrap">
                        <ul class="brand-list">
                            <li v-for="(temp,index) in imgs" :key="index" class="brand-item current"
                                @click='change(index)'>
                                <img class="brand-logo " :class="{color:currentIndex!==index,gray:currentIndex==index}"
                                     :src="temp.src1" alt="热门">
                                <img class="brand-logo   current"
                                     :class="{color:currentIndex==index,gray:currentIndex!==index}" :src="temp.src2"
                                     alt="热门">
                                <span class="line" href=""></span>
                            </li>
                        </ul>
                    </div>
                    <div class="product-list-wrap">
                        <div>
                            <div v-for="(temp,index) in imgss" :key="index">
                                <div v-if="index == currentIndex">
                                    <ul class="product-list">
                                        <li class="product-item" v-for="tem in temp.detail" :key="tem.title">
                                            <a class="link"
                                               href="javascript:void(0)"
                                               @click="go"
                                               style="text-decoration:none"
                                               target="_blank">
                                                <img class="product-logo" :src="tem.src"
                                                     alt="iPhone 6"/>
                                                <h3 class="product-name">{{tem.title}}</h3>
                                                <p class="product-desc">
                                                    最高回收价
                                                </p>
                                                <p class="product-price">{{tem.money}}</p>
                                            </a>
                                        </li>
                                        <a class="show-more-product" href="#">
                                            <span class="text">更多</span>
                                        </a>
                                    </ul>
                                </div>
                            </div>
                            <!-- <ul class="product-list">
                                <li class="product-item" v-for="tem in ims" :key="tem.title">
                                    <a class="link"
                                       href="javascript:void(0)"
                                       style="text-decoration:none"
                                       target="_blank">
                                        <img class="product-logo" :src="tem.src"
                                             alt="iPhone 6"/>
                                        <h3 class="product-name">iPhone 6</h3>
                                        <p class="product-desc">
                                            最高回收价
                                        </p>
                                        <p class="product-price">{{tem.money}}</p>
                                    </a>
                                </li>
                                <a class="show-more-product" href="#">
                                    <span class="text">更多</span>
                                </a>
                            </ul> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w margin">
        <div class="common-appraise ">
            <div class="hsb-section-title animates-1">
                <h2 class="h1">粉丝眼中的租大侠</h2>
                <div style="width: 50px;"></div>
                <p>450万+用户选择了租大侠，400万用户好评</p>
            </div>
            <div class="appraise">
                <div class="appraise_box">
                    <div class="swiper-container swiper-container-2 animates-1 flex">
                        <div class="swiper-wrapper apprise-1"
                             style=" transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s;">
                            <div class="swiper-slide apprise-2 swiper-slide-visible swiper-slide-active"
                                 style="width: 303px; height: 465px;"><img class="icon"
                                                                           src="../../assets/img/12_03.png">
                                <div><p class="comment">用了一年多的小米手机，在租大侠还能卖合适的价格。哈哈，下次卖旧手机还来这。</p>
                                    <div class="head-img"><img src="../../assets/img/comment_25.jpg.jpg"></div>
                                    <h3>188****5514</h3>
                                    <p class="comment-1">在<span>潮州</span>，回收了<span>1</span>台<b>手机</b><br></p>
                                    <p class="comment-1">2018-06-12</p>
                                    <p></p></div>
                            </div>
                        </div>
                        <div class="swiper-wrapper apprise-1"
                             style=" transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s;">
                            <div class="swiper-slide apprise-2 swiper-slide-visible"
                                 style="width: 303px; height: 465px;"><img
                                    class="icon" src="../../assets/img/12_03.png">
                                <div><p class="comment">很满意啊，就是碰上快递慢了点，觉得挺靠谱，以后回收就到这儿了</p>
                                    <div class="head-img"><img src="../../assets/img/comment_68.jpg.jpg"></div>
                                    <h3>188****4605</h3>
                                    <p class="comment-1">在<span>青岛</span>，回收了<span>2</span>台<b>手机</b><br></p>
                                    <p class="comment-1">2018-06-11</p>
                                    <p></p></div>
                            </div>
                        </div>
                        <div class="swiper-wrapper apprise-1"
                             style=" transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s;">
                            <div class="swiper-slide apprise-2 swiper-slide-visible"
                                 style="width: 303px; height: 465px;"><img
                                    class="icon" src="../../assets/img/12_03.png">
                                <div><p class="comment">效率挺高的，物流显示收到之后马上就进行了质检，质检通过立即就给打款了。挺满意的，谢谢</p>
                                    <div class="head-img"><img src="../../assets/img/comment_27.jpg.jpg"></div>
                                    <h3>136****6470</h3>
                                    <p class="comment-1">在<span>常州</span>，回收了<span>2</span>台<b>手机</b><br></p>
                                    <p class="comment-1">2018-06-11</p>
                                    <p></p></div>
                            </div>
                        </div>
                        <div class="swiper-wrapper apprise-1"
                             style=" transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s;">
                            <div class="swiper-slide apprise-2 swiper-slide-visible"
                                 style="width: 303px; height: 465px;"><img
                                    class="icon" src="../../assets/img/12_03.png">
                                <div><p class="comment">还可以吧，在华为商城看到组大侠的，客服服务态度很好，回收评估过程也比其他家的简单！赞一个。。</p>
                                    <div class="head-img"><img src="../../assets/img/comment_65.jpg.jpg"></div>
                                    <h3>136****2750</h3>
                                    <p class="comment-1">在<span>贵阳</span>，回收了<span>5</span>台<b>平板</b><br></p>
                                    <p class="comment-1">2018-06-09</p>
                                    <p></p></div>
                            </div>
                        </div>
                        <!-- <div class="swiper-slide apprise-2" style="width: 303px; height: 465px;"><img class="icon"
                                                                                                      src="/static/pc/1001/img/12_03.png">
                            <div><p class="comment">想换新手机，旧手机直接卖给回收宝了，价格很合理，很快就收到钱了。</p>
                                <div class="head-img"><img src="/static/pc/1001/img/avator/comment_5.jpg.jpg"></div>
                                <h3>137****4126</h3>
                                <p class="comment-1">在<span>武汉</span>，回收了<span>2</span>台<b>平板</b><br></p>
                                <p class="comment-1">2018-06-09</p>
                                <p></p></div>
                        </div>
                        <div class="swiper-slide apprise-2" style="width: 303px; height: 465px;"><img class="icon"
                                                                                                      src="/static/pc/1001/img/12_03.png">
                            <div><p class="comment">回收宝提供来回包邮服务~手机不用我拿出去寄，邮费不用我出，顺丰上门取件寄出后，坐等收钱就好。这一点真心便利。</p>
                                <div class="head-img"><img src="/static/pc/1001/img/avator/comment_7.jpg.jpg"></div>
                                <h3>137****2947</h3>
                                <p class="comment-1">在<span>绍兴</span>，回收了<span>2</span>台<b>手机</b><br></p>
                                <p class="comment-1">2018-06-08</p>
                                <p></p></div>
                        </div>                  -->
                    </div>
                    <!-- <i class="el-icon-arrow-left"></i>
                    <i class="el-icon-arrow-right"></i> -->
                </div>
            </div>
        </div>
    </div>
    <div class="w margin">
        <div class="common-appraise ">
            <div class="hsb-section-title animates-1">
                <h2 class="h1">我们的合作伙伴</h2>
                <div style="width: 50px;"></div>
                <p>专业的支持，官方的保障 </p>
            </div>
        </div>
    </div>
    <div id="section-partners">
        <div class="ahs-partners">
            <table>
                <tbody>
                <tr>
                    <td rowspan="3">
                        <i class="coop-worldbank"></i>
                        <span>世界银行投资企业</span>
                    </td>
                    <td rowspan="3">
                        <a title="京东" href="http://huishou.jd.com/" rel="external nofollow" class="jd" target="_blank"
                           style="text-decoration:none">
                            <i class="coop-jd"></i>
                            <span>京东战略投资伙伴</span>
                        </a>
                    </td>
                    <td><i class="coop-mi"></i></td>
                    <td><i class="coop-tencent"></i></td>
                    <td>
                        <i class="coop-samsung"></i>
                    </td>
                </tr>
                <tr class="bottom-border">
                    <td>
                        <a title="一号店" style="cursor: default;" href="javascript:void(0);" rel="external nofollow"
                           target="_blank">
                            <i class="coop-yhd"></i>
                        </a>
                    </td>
                    <td><i class="coop-dji"></i></td>
                    <td>
                        <i class="coop-58-1"></i>
                        <i class="coop-58-2"></i>
                    </td>
                </tr>
                <tr>
                    <td>
                        <i class="coop-fiil"></i>
                    </td>
                    <td><i class="coop-gionee"></i></td>
                    <td>
                        <i class="coop-guomei"></i>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div id="section-strengths">
        <ul class="flex w margin" style="padding:0px;">
            <li>
                <i></i>
                <span class="strengths">高价</span>
                <span>百家竞价 价格公道</span>
            </li>
            <li>
                <i></i>
                <span class="strengths">便捷</span>
                <span>交易便利 节省时间</span>
            </li>
            <li>
                <i></i>
                <span class="strengths">安全</span>
                <span>放心回收 保障有我</span>
            </li>
            <li>
                <i></i>
                <span class="strengths">环保</span>
                <span>综合利用 避免污染</span>
            </li>
        </ul>
    </div>
    <div id="foot">
        <div class=" w margin">
            <div class="footer_info">
                <div id="footerinfo_left">
                    <dl>
                        <dt>交易方式</dt>
                        <dd><a href="javascript:void(0)" title="上海交易方式" class="no_hover"
                               target="_blank">上海交易方式</a>
                        </dd>
                        <dd><a href="javascript:void(0)" title="北京交易方式" class="no_hover"
                               target="_blank">北京交易方式</a>
                        </dd>
                        <dd><a href="javascript:void(0)" title="全国交易方式" class="no_hover"
                               target="_blank">全国交易方式</a>
                        </dd>
                    </dl>
                    <dl>
                        <dt>质检说明</dt>
                        <dd><a href="javascript:void(0)" title="质检名词解释" class="no_hover"
                               target="_blank">质检名词解释</a></dd>
                        <dd><a href="javascript:void(0)" title="专业质检说明" class="no_hover"
                               target="_blank">专业质检说明</a></dd>
                    </dl>
                    <dl>
                        <dt>帮助中心</dt>
        
                        <dd><a href="javascript:void(0)" title="手机回收常见问题" class="no_hover"
                               target="_blank">常见问题</a></dd>
                        <dd><a href="javascript:void(0)" title="服务条款" class="no_hover"
                               target="_blank">服务条款</a></dd>
                    </dl>
                    <dl>
                        <dt>关于我们</dt>
                        <dd><a href="javascript:void(0)" title="了解租大侠" class="no_hover" target="_blank">了解我们</a></dd>
                        <dd><a href="javascript:void(0)" title="加入租大侠" class="no_hover" target="_blank">加入我们</a>
                        </dd>
                        <dd><a href="javascript:void(0)" title="商务合作" class="no_hover"
                               target="_blank">商务合作</a></dd>
                        <dd><a href="javascript:void(0)"
                               title="回收商加盟"
                               class="no_hover" target="_blank">回收商加盟</a></dd>
                    </dl>
                    <dl>
                        <dt>合作伙伴</dt>

                        <dd><a title="京东" target="_blank" class="no_hover" href="http://huishou.jd.com">京东</a></dd>
                    </dl>

                </div>
                <div id="footerinfo_right">
                    <div class="icon_kefu_footer kefu_pop">
                        <div class="icon_kefu_text">在线客服</div>
                    </div>
                    <div class="footerinfo_time">
                        周一至周日<br>
                        24小时在线
                    </div>
                    <div class="footerinfo_addr">
                        <p></p>
                        <p></p>
                        <br><br>
                        <a href="/pc/index.html#/helpcenter/nationaltrade" target="_blank" class="no_hover"
                           title="租大侠免费快递说明">快递费用说明</a>
                    </div>

                </div>
                <br>
                <br>
            </div>
            <div class="copyright">
                <div class="backlinks" id="ff">
                    <dl>
                        <dt>友情链接：</dt>
                        <dd><a href="http://yp.jd.com/" target="_blank" title="京东优评">京东优评</a></dd>
                        <dd><a href="http://shanghai.baixing.com/" target="_blank" rel="nofollow">百姓网</a></dd>
                        <dd><a href="http://bj.58.com/shouji/" target="_blank" rel="nofollow">北京二手手机</a></dd>
                        <dd><a href="http://bj.58.com/ershoushichang/" target="_blank" rel="nofollow">北京二手手机回收</a></dd>
                        <dd><a href="http://www.imobile.com.cn/" target="_blank" rel="nofollow">手机之家</a></dd>
                        <dd>
                            <a href="http://xhj.aihuishou.com/?utm_source=portal&amp;utm_medium=portal_header&amp;utm_campaign=pc"
                               target="_blank" rel="nofollow">信用租机</a></dd>
                        <dd><a href="https://www.kjershou.com" target="_blank" rel="nofollow">二手手机</a></dd>
                    </dl>
                </div>
                <!-- <div class="company-addr">南京运营中心：江苏省南京市建邺区康源智慧港11楼</div>
                <span style="font-size:12px">Copyright 2010 - 2018 南京租大侠网络信息技术有限公司 &nbsp; &nbsp;</span> -->
            </div>
        </div>
    </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      imgs: [
        {
          src1: require("../../assets/img/mid-0(1).png"),
          src2: require("../../assets/img/mid-0.png")
        },
        {
          src1: require("../../assets/img/主页1_10a.png"),
          src2: require("../../assets/img/123 (21).png")
        },
        {
          src1: require("../../assets/img/主页1_13.png"),
          src2: require("../../assets/img/123 (22).png")
        },
        {
          src1: require("../../assets/img/12 (15).png"),
          src2: require("../../assets/img/主页1_05.png")
        },
        {
          src1: require("../../assets/img/12 (19).png"),
          src2: require("../../assets/img/主页1_14.png")
        },
        {
          src1: require("../../assets/img/95 (2).png"),
          src2: require("../../assets/img/Artboard 3.png")
        },
        {
          src1: require("../../assets/img/12 (16).png"),
          src2: require("../../assets/img/主页1_09.png")
        },
        {
          src1: require("../../assets/img/12 (21).png"),
          src2: require("../../assets/img/主页1_18.png")
        },
        {
          src1: require("../../assets/img/主页1_21.png"),
          src2: require("../../assets/img/123 (26).png")
        },
        {
          src1: require("../../assets/img/12 (23).png"),
          src2: require("../../assets/img/主页1_22.png")
        },
        {
          src1: require("../../assets/img/Artboard 2 Copy 3.png"),
          src2: require("../../assets/img/Artboard 2 Copy 3.png")
        },
        {
          src1: require("../../assets/img/more.png"),
          src2: require("../../assets/img/more.png")
        }
      ],
      imgss: [
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "¥586"
            }
          ]
        },
        {
          index: 1,
          detail: [
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 Mate RS 保时捷设计",
              money: "¥8106"
            },
            {
              src: require("../../assets/img/_20180505143109_160.png"),
              title: "华为 Mate10 保时捷设计",
              money: "¥5073"
            },
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "华为 P20 Pro",
              money: "¥4840"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "华为 P20",
              money: "¥3407"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "华为 Mate10 Pro",
              money: "¥3303"
            },
            {
              src: require("../../assets/img/41221.png"),
              title: "华为 Mate9 保时捷设计",
              money: "¥2859"
            },
            {
              src: require("../../assets/img/31227_20180411153912_960.png"),
              title: "华为 Mate10",
              money: "¥2626"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "华为 P10 Plus",
              money: "¥2180"
            }
          ]
        },
        {
          index: 2,
          detail: [
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 10",
              money: "¥2318"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "荣耀 V10",
              money: "¥2035"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 V9",
              money: "¥1350"
            },
            {
              src: require("../../assets/img/30845.png"),
              title: "荣耀 9",
              money: "¥1344"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "荣耀 畅玩7X",
              money: "¥1073"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "荣耀 Note8",
              money: "¥1071"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "荣耀 畅玩7C",
              money: "¥1012"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 9 青春版",
              money: "¥919"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "iPhone X",
              money: "¥7012"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "iPhone 8 Plus",
              money: "¥5296"
            },
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 8",
              money: "¥4771"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "iPhone 7 Plus",
              money: "¥4188"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "iPhone 7",
              money: "¥3106"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "iPhone 6s Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "iPhone 6s",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6 Plus",
              money: "¥1778"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "小米 MIX2S",
              money: "¥3195"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "小米 MIX2",
              money: "¥2279"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "小米 Note3",
              money: "¥1911"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "小米 MIX",
              money: "¥1679"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "小米 6X",
              money: "¥1633"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "小米 Max 2",
              money: "¥1194"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "小米 Note2",
              money: "¥1095"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/41198.png"),
              title: "OPPO R15",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/10386.jpg"),
              title: "OPPO R11s",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "OPPO R11s Plus    ",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/42461_20180523204705_248.png"),
              title: "OPPO R11s Plus",
              money: "¥824"
            },
            {
              src: require("../../assets/img/7039.jpg"),
              title: "OPPO R9s Plus",
              money: "¥854"
            },
            {
              src: require("../../assets/img/2070_20180523204424_539.png"),
              title: "OPPO R11s ",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "OPPO a3",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/_20180505143258_366.png"),
              title: "OPPO R11s Plus",
              money: "¥586"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/_20180505143258_366.png"),
              title: "三星 Galaxy S9+",
              money: "¥4293"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "三星 领世旗舰8（G9298）",
              money: "¥4171"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "三星 Galaxy S9",
              money: "¥4065"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "三星 Galaxy Note 8",
              money: "¥3824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "三星 W2017",
              money: "¥3553"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "三星 Galaxy S8+",
              money: "¥3352"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "三星 Galaxy S8",
              money: "¥2602"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "三星 W2016",
              money: "¥1960"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "vivo X21",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "vivo X20",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "vivo X21i",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo Xplay6",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "vivo X20Plus",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "vivo X9 Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "vivo X9s Plus",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo X9",
              money: "¥586"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "魅族 15 Plus",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "魅族 15 ",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "魅族 Pro 7 Plus",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "魅族 E3",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "魅族 Pro 6 Plus",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "魅蓝 Note6",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "魅族 Pro 7",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "魅族 M15",
              money: "¥586"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "¥586"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "¥586"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "¥1434"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "¥1750"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "¥¥2017"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "¥824"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "¥854"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "¥2402"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "¥2102"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "¥586"
            }
          ]
        }
      ],
      imgsss: [
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "120"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "158"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "180"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "90"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "98"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "160"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "201"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "60"
            }
          ]
        },
        {
          index: 1,
          detail: [
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 Mate RS 保时捷设计",
              money: "800"
            },
            {
              src: require("../../assets/img/_20180505143109_160.png"),
              title: "华为 Mate10 保时捷设计",
              money: "520"
            },
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "华为 P20 Pro",
              money: "430"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "华为 P20",
              money: "309"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "华为 Mate10 Pro",
              money: "320"
            },
            {
              src: require("../../assets/img/41221.png"),
              title: "华为 Mate9 保时捷设计",
              money: "302"
            },
            {
              src: require("../../assets/img/31227_20180411153912_960.png"),
              title: "华为 Mate10",
              money: "259"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "华为 P10 Plus",
              money: "210"
            }
          ]
        },
        {
          index: 2,
          detail: [
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 10",
              money: "209"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "荣耀 V10",
              money: "243"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 V9",
              money: "121"
            },
            {
              src: require("../../assets/img/30845.png"),
              title: "荣耀 9",
              money: "111"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "荣耀 畅玩7X",
              money: "123"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "荣耀 Note8",
              money: "90"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "荣耀 畅玩7C",
              money: "90"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "荣耀 9 青春版",
              money: "80"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "iPhone X",
              money: "670"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "iPhone 8 Plus",
              money: "540"
            },
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 8",
              money: "420"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "iPhone 7 Plus",
              money: "380"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "iPhone 7",
              money: "260"
            },
            {
              src: require("../../assets/img/41223_20180523204155_364.png"),
              title: "iPhone 6s Plus",
              money: "230"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "iPhone 6s",
              money: "222"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6 Plus",
              money: "170"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "小米 MIX2S",
              money: "310"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "小米 MIX2",
              money: "200"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "190"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "小米 Note3",
              money: "180"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "小米 MIX",
              money: "164"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "小米 6X",
              money: "156"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "小米 Max 2",
              money: "125"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "小米 Note2",
              money: "109"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/41198.png"),
              title: "OPPO R15",
              money: "123"
            },
            {
              src: require("../../assets/img/10386.jpg"),
              title: "OPPO R11s",
              money: "145"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "OPPO R11s Plus    ",
              money: "211"
            },
            {
              src: require("../../assets/img/42461_20180523204705_248.png"),
              title: "OPPO R11s Plus",
              money: "89"
            },
            {
              src: require("../../assets/img/7039.jpg"),
              title: "OPPO R9s Plus",
              money: "87"
            },
            {
              src: require("../../assets/img/2070_20180523204424_539.png"),
              title: "OPPO R11s ",
              money: "244"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "OPPO a3",
              money: "210"
            },
            {
              src: require("../../assets/img/_20180505143258_366.png"),
              title: "OPPO R11s Plus",
              money: "60"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/_20180505143258_366.png"),
              title: "三星 Galaxy S9+",
              money: "479"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "三星 领世旗舰8（G9298）",
              money: "478"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "三星 Galaxy S9",
              money: "400"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "三星 Galaxy Note 8",
              money: "390"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "三星 W2017",
              money: "359"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "三星 Galaxy S8+",
              money: "345"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "三星 Galaxy S8",
              money: "254"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "三星 W2016",
              money: "188"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "vivo X21",
              money: "145"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "vivo X20",
              money: "176"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "vivo X21i",
              money: "237"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo Xplay6",
              money: "78"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "vivo X20Plus",
              money: "78"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "vivo X9 Plus",
              money: "222"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "vivo X9s Plus",
              money: "200"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo X9",
              money: "67"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "魅族 15 Plus",
              money: "145"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "魅族 15 ",
              money: "176"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "魅族 Pro 7 Plus",
              money: "266"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "魅族 E3",
              money: "87"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "魅族 Pro 6 Plus",
              money: "76"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "魅蓝 Note6",
              money: "233"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "魅族 Pro 7",
              money: "213"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "魅族 M15",
              money: "60"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "145"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "166"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "200"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "87"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "87"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "222"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "200"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "67"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "145"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "177"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "234"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "65"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "87"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "245"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "208"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "68"
            }
          ]
        },
        {
          index: 0,
          detail: [
            {
              src: require("../../assets/img/30748 (2).png"),
              title: "iPhone 6",
              money: "156"
            },
            {
              src: require("../../assets/img/_20180426173246_397.png"),
              title: "华为 P10",
              money: "211"
            },
            {
              src: require("../../assets/img/2068_20180523204401_761.png"),
              title: "小米 6",
              money: "231"
            },
            {
              src: require("../../assets/img/41825_20180523204633_334.png"),
              title: "vivo X7",
              money: "234"
            },
            {
              src: require("../../assets/img/41200.png"),
              title: "OPPO R9",
              money: "89"
            },
            {
              src: require("../../assets/img/47022_20180523204742_858.png"),
              title: "iPhone 6s Plus",
              money: "234"
            },
            {
              src: require("../../assets/img/oppo_R9_Plus.jpg"),
              title: "iPhone 6s",
              money: "231"
            },
            {
              src: require("../../assets/img/38033_20180523204523_264.png"),
              title: "vivo Y67",
              money: "67"
            }
          ]
        }
      ],      
      currentIndex: 0,
      currentInde: 0
    };
  },
  methods: {
    change(index) {
      this.currentIndex = index;
      console.log(this.currentIndex);
    },
        chang(index) {
      this.currentInde = index;
      console.log(this.currentInde);
    },
    go(){
      this.$router.push('/phone')
    },
    g(){
    this.$router.push('/je')
    }
  }
};
</script>

<style scoped>
.hotsale {
  width: 1200px;
  margin: 0 auto;
  color: #666;
  margin-top: 41px;
  position: relative;
  margin-bottom: 70px;
  height: 700px;
}
.hotsale .category-list {
  float: left;
}
.hotsale .category-item {
  float: left;
  padding: 4px 2px 3px 2px;
  margin-left: 23px;
  font-size: 14px;
  cursor: pointer;
}
.hotsale .category-item.current {
  color: #ff5f43;
  border-bottom: 1px solid #ff5f43;
}
.hotsale .tab {
  display: none;
}
.hotsale .tab.current {
  display: block;
}
.hotsale-header h3 {
  float: left;
  color: #333;
  font-size: 24px;
  margin-right: 10px;
  margin-bottom: 10px;
}
.hotsale-header:after {
  content: " ";
  display: block;
  height: 0;
  clear: both;
}
.hotsales-body .brand-list-wrap {
  overflow: hidden;
  float: left;
  width: 232px;
  height: 610px;
  margin-top: 10px;
  background: #ffffff;
}
.hotsales-body .brand-list {
  width: 194px;
  height: 587px;
  overflow: hidden;
  margin: 10px auto 0;
  padding: 0;
}
.hotsales-body .brand-item {
  position: relative;
  float: left;
  width: 97px;
  height: 97px;
  text-align: center;
  border-bottom: 1px solid #eeeeee;
}
.hotsales-body .brand-logo {
  display: none;
  width: 95px;
  height: 95px;
}
.hotsales-body .brand-logo.current {
  display: block;
}
.hotsales-body .line {
  position: absolute;
  z-index: 2;
  width: 1px;
  height: 83px;
  background: #eeeeee;
  right: -1px;
  bottom: 6px;
}
.hotsales-body .product-list-wrap {
  position: relative;
  overflow: hidden;
  float: right;
  width: 968px;
  height: 610px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.hotsales-body .product-item {
  width: 231px;
  height: 300px;
  font-size: 14px;
  background: #fff;
  text-align: center;
  float: left;
  line-height: 22px;
  margin-left: 10px;
  margin-bottom: 10px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.hotsales-body .product-logo {
  height: 126px;
}

.hotsales-body .product-item a {
  display: block;
  margin-top: 40px;
  font-size: 16px;
}

.hotsales-body .product-name {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #333333;
  font-size: 14px;
  margin-top: 26px;
}

.hotsales-body .product-desc {
  color: #999;
  font-size: 12px;
}
.hotsales-body .product-price {
  clear: both;
  margin-top: 10px;
  font-size: 14px;
  color: #ff5f43;
}
.product-item {
  position: relative;
}
.hotsales-body .active-price {
  position: absolute;
  width: 60px;
  height: 60px;
  font-size: 12px;
  line-height: 1.3;
  vertical-align: middle;
  padding-top: 18px;
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  background: url(/static/m/2017/img/add.png) no-repeat;
  background-size: 60px;
  top: 22px;
  right: 22px;
}
.hotsales-body .product-item:hover {
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.hotsales-body .brand-item {
  cursor: pointer;
}
.product-list {
  overflow: hidden;
  padding: 0;

  margin-top: 0px;
}
.hotsales-body .brand-item.current .color {
  display: block;
}
.hotsales-body .brand-item.current .gray {
  display: none;
}

.hotsales-body .show-more-product {
  position: absolute;
  width: 0;
  height: 0;
  border: 31px solid #ff5f43;
  border-top-color: transparent;
  border-left-color: transparent;
  bottom: 10px;
  right: 4px;
  color: #fff;
  font-size: 14px;
}

.hotsales-body .show-more-product .text {
  position: absolute;
  width: 60px;
}

.active-icon {
  position: absolute;
  top: 25px;
  right: 25px;
  width: 50px;
  height: 50px;
  z-index: 99;
}
.flex {
  display: flex;
  justify-content: space-around;
}
.s {
  width: 100%;
  background: #fff;
  padding: 30px 0;
}
.common-appraise {
  /*background: rgb(248,249,251);*/
}
.common-appraise .appraise {
  width: 1300px;
  margin: 0 auto;
  padding-bottom: 25px;
  position: relative;
}
.common-appraise .appraise_box {
  width: 1200px;
  padding: 0;
  position: relative;
}
.appraise div {
  width: 100%;
  /*height: 420px;*/
}
.hsb-section-title {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
}
.hsb-section-title .h1 {
  font-size: 36px;
  font-weight: normal;
  margin: 0;
  padding-top: 75px;
  color: #3b3d40;
  line-height: 36px;
}
.appraise .swiper-container-2 {
  width: 1212px;
  height: 465px;
  position: relative;
  margin: 0 auto;
  overflow: hidden;
  padding-top: 2px;
  margin-left: -12px;
}
.appraise .swiper-pagination {
  height: 50px;
}
.appraise .swiper-container-2 .apprise-1 {
  width: 1200px;
}
.appraise .swiper-container-2 .apprise-1 .icon {
  position: relative;
  top: 40px;
  left: 130px;
  z-index: 10;
}
.appraise .swiper-container-2 .apprise-2 > div {
  width: 291px;
  height: 420px;
  background: #fff;
  text-align: center;
  float: right;
  cursor: pointer;
  border-radius: 3px;
  transition: all 0.3s linear;
  -webkit-transition: all 0.3s linear;
}
.appraise .swiper-container-2 .apprise-2 > div:hover {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.09);
  transform: translate3d(0, -2px, 0);
  -webkit-transform: translate3d(0, -2px, 0);
}

.apprise-2 div .comment {
  width: 85%;
  margin: 0 auto;
  font-size: 14px;
  color: #656b6f;
}
.apprise-2 div p > b {
  font-weight: normal;
}
.apprise-2 .comment {
  width: 232px;
  padding-top: 50px;
  height: 141px;
  color: #656b6e;
  overflow: hidden;
}
.apprise-2 .comment-1 {
  font-size: 12px;
  color: #656b6f;
}
.apprise-2 .head-img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: 0 auto;
  margin-top: 16px;
  /*background: url("/static/pc/1001/img/head/14.jpg") no-repeat;*/
}
.apprise-2 .head-img > img {
  display: block;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.apprise-2 h3 {
  margin-top: 10px;
  margin-bottom: 1px;
  font-weight: bold;
  color: #3b3d40;
  letter-spacing: 1px;
  font-size: 12px;
}
/*.appraise  .swiper-container-2  .apprise-2 img{
    margin-left: 20px;
    cursor: pointer;
    width: 280px;
}*/

.appraise .swiper-button {
  background-color: #f3f4f7;
  display: block;
}

.appraise .hsb-icon-right:after {
  border-color: #9a9b9b;
  left: 13px;
  right: 13px;
}
.appraise .swiper-button-prev {
  left: 10px;
}
.appraise .swiper-button-next {
  right: 10px;
}
.appraise .swiper-button-prev:hover::after,
.appraise .swiper-button-next:hover::after {
  border-color: #ff5f43;
}
.common-appraise .hsb-section-title .h1 {
  padding-top: 30px;
}
.common-appraise .hsb-section-title p {
  margin-bottom: 23px;
}

.common-appraise .swiper-button-prev::after {
  left: 8px !important;
}
.common-appraise .swiper-button-next::after {
  left: 4px !important;
}

.common-appraise .swiper-button {
  position: absolute;
  top: 50%;
  width: 20px;
  height: 48px;
  cursor: pointer;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  background-color: #f3f4f7;
}

.common-appraise .swiper-button-prev {
  left: 10px;
  transform: rotate(-180deg);
}

.common-appraise .swiper-button-next {
  right: 10px;
}
#section-partners .ahs-partners {
  width: 1190px;
  margin: 0 auto;
  padding-bottom: 50px;
}
#section-partners .ahs-partners table {
  width: 1190px;
  height: 365px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
}
#section-partners .ahs-partners table td i.coop-worldbank {
  content: "";
  width: 155px;
  height: 60px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -220px -288px;
  display: inline-block;
}

#section-partners {
  background: #fff;
}
#section-partners .ahs-partners {
  width: 1190px;
  margin: 0 auto;
  padding-bottom: 50px;
}
#section-partners .ahs-partners table {
  width: 1190px;
  height: 365px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.12);
}
#section-partners .ahs-partners table tr:first-child td {
  border-bottom: solid 1px #f2f2f2;
}
#section-partners .ahs-partners table tr:first-child td:first-child,
#section-partners .ahs-partners table tr:first-child td:nth-child(2) {
  border-bottom: none;
}
#section-partners .ahs-partners table tr:first-child td:last-child {
  border-right: none;
}
#section-partners .ahs-partners table tr.bottom-border td {
  border-bottom: solid 1px #f2f2f2;
}
#section-partners .ahs-partners table td {
  text-align: center;
  vertical-align: middle;
  border-right: solid 1px #f2f2f2;
  height: 120px;
  width: 236px;
}
#section-partners .ahs-partners table td a {
  display: block;
}
#section-partners .ahs-partners table td a.jd {
  position: relative;
  top: -14px;
}
#section-partners .ahs-partners table td span {
  display: block;
  font-size: 18px;
  color: #666;
}
#section-partners .ahs-partners table td i {
  margin-left: 0;
}
#section-partners .ahs-partners table td i.coop-jd {
  content: "";
  width: 155px;
  height: 90px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -6px -320px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-worldbank {
  content: "";
  width: 155px;
  height: 60px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -220px -288px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-mi {
  content: "";
  width: 131px;
  height: 51px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -248px -464px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-tencent {
  content: "";
  width: 160px;
  height: 55px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -22px -465px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-yixun {
  content: "";
  width: 134px;
  height: 39px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -246px -376px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-yhd {
  content: "";
  width: 87px;
  height: 82px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -429px -364px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-samsung {
  content: "";
  width: 136px;
  height: 48px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -410px -293px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-dji {
  content: "";
  width: 106px;
  height: 65px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -426px -458px;
  display: inline-block;
}
#section-partners .ahs-partners table td i.coop-58-1 {
  content: "";
  width: 47px;
  height: 51px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -30px -535px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
#section-partners .ahs-partners table td i.coop-58-2 {
  content: "";
  width: 102px;
  height: 30px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -75px -550px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
#section-partners .ahs-partners table td i.coop-fiil {
  content: "";
  width: 132px;
  height: 40px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -261px -385px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
#section-partners .ahs-partners table td i.coop-gionee {
  content: "";
  width: 142px;
  height: 37px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -406px -527px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
#section-partners .ahs-partners table td i.coop-guomei {
  content: "";
  width: 91px;
  height: 33px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -465px -809px;
  display: inline-block;
  display: block;
  margin: 0 auto;
}
#section-partners .ahs-partners table td:last-child {
  border-right: none;
}
#section-strengths {
  width: 100%;
  height: 135px;
  background: #444;
}
#section-strengths ul li:nth-child(1) i {
  content: "";
  width: 45px;
  height: 42px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -252px -175px;
  display: inline-block;
}
#section-strengths ul li span.strengths {
  font-size: 20px;
  line-height: 20px;
  margin-bottom: 2px;
  color: #e2e2e2;
}
#section-strengths ul li span {
  display: block;
  font-size: 14px;
  color: #aaa;
}
#section-strengths ul li:nth-child(2) i {
  content: "";
  width: 45px;
  height: 42px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -309px -175px;
  display: inline-block;
}
#section-strengths ul li:nth-child(3) i {
  content: "";
  width: 45px;
  height: 42px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -363px -172px;
  display: inline-block;
}
#section-strengths ul li:nth-child(4) i {
  content: "";
  width: 45px;
  height: 42px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -410px -172px;
  display: inline-block;
}
#section-strengths ul li {
  width: 25%;
  display: table-cell;
  vertical-align: middle;
  position: relative;
  top: 50px;
}
#section-strengths ul li i {
  display: block;
  margin-right: 15px;
  float: left;
}
#foot {
  width: 100%;
  color: #999;
  border-top: solid 1px #dcdcdc;
  background-color: #fafafa;
  padding: 0 0 50px 0;
}
#foot .copyright {
  width: 1190px;
  text-align: center;
  padding: 20px 0 0 0;
  margin: 0 auto;
  color: #999;
  border-top: solid 1px #dfdfdf;
}

#foot .footer_info {
  width: 1190px;
  text-align: center;
  padding: 30px 0 0 0;
  margin: 0 auto;
  color: #999;
  height: 185px;
}

#foot .footer_info .copyright_tb td {
  text-align: left;
  vertical-align: top;
  line-height: 25px;
  color: #999;
}

#foot .footer_info .copyright_tb td b {
  color: #999;
  font-size: 14px;
}
#foot .footer_info {
  width: 1190px;
  text-align: center;
  padding: 30px 0 0 0;
  margin: 0 auto;
  color: #999;
}

#foot .footer_info .copyright_tb td {
  text-align: left;
  vertical-align: top;
  line-height: 25px;
  color: #999;
}

#foot .footer_info .copyright_tb td b {
  color: #999;
  font-size: 14px;
}

#foot .footer_info .kefu_400 {
  width: 210px;
  height: 36px;
  background: url("../../assets/img/dex.png") no-repeat -170px -500px;
}

#foot .footer_info .icon_kefu_footer {
  position: relative;
  width: 130px;
  height: 45px;
  background: url("../../assets/img/index_icon.min.png") no-repeat -320px -137px;
  cursor: pointer;
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
}

#foot .footer_info .icon_kefu_text {
  position: absolute;
  right: 10px;
  top: 11px;
  font-size: 16px;
  color: #fff;
}

#foot .footer_info .zixun_kefu {
  width: 210px;
  height: 58px;
  background: url("../../assets/img/dex.png") no-repeat -170px -375px;
  cursor: pointer;
}

#foot .footer_info .zixun_kefu:hover {
  background-position: -170px -436px;
}
#footerinfo_left {
  font-size: 0;
  width: 885px;
  border-right: 1px solid #dfdfdf;
  text-align: left;
  padding: 5px 0;
  vertical-align: top;
  display: inline-block;
  float: left;
}
#foot #footerinfo_left dl {
    width: 144px;
}
#footerinfo_left dl {
    width: 146px;
    text-align: left;
    vertical-align: top;
    display: inline-block;
}
#footerinfo_left dl > dt {
    display: block;
    color: rgb(51, 51, 51);
    font-size: 18px;
    font-family: 微软雅黑;
    line-height: 32px;
    height: 32px;
}
#footerinfo_left dl > dd, #footerinfo_left dl > dd > a {
    display: block;
    color: rgb(153, 153, 153);
    font-size: 12px;
    font-family: 微软雅黑;
    line-height: 30px;
    height: 30px;
    text-decoration: none;
}
dd, dl, dt {
    margin: 0;
    padding: 0;
}
#foot #footerinfo_left .follow-qr {
    width: 180px;
    margin-left: -30px;
    font-size: 0;
}
#footerinfo_left dl {
    width: 146px;
    text-align: left;
    vertical-align: top;
    display: inline-block;
}
#foot #footerinfo_left .follow-qr .qr-wrap {
    display: inline-block;
    text-align: center;
}
#footerinfo_left dl > dd, #footerinfo_left dl > dd > a {
    display: block;
    color: rgb(153, 153, 153);
    font-size: 12px;
    font-family: 微软雅黑;
    line-height: 30px;
    height: 30px;
}
#foot #footerinfo_left .follow-qr .qr-wrap+.qr-wrap {
    margin-left: 30px;
}
#footerinfo_right {
    width: 300px;
    text-align: left;
    padding-left: 8px;
    box-sizing: border-box;
    float: right;
}
#foot .footer_info .icon_kefu_footer {
    position: relative;
    width: 130px;
    height: 45px;
    background: url("../../assets/img/index_icon.min.png") no-repeat -320px -137px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
}
#footerinfo_right .footerinfo_time {
    margin-left: 10px;
    display: inline-block;
    font-size: 16px;
    line-height: 23px;
    color: #333;
    vertical-align: bottom;
}
#footerinfo_right .footerinfo_addr {
    margin-top: 20px;
    position: relative;
    z-index: 10;
}
#foot .backlinks {
    margin-bottom: 20px;
    text-align: left;
}
#foot .backlinks dl dt {
    margin-right: 10px;
}
#foot .backlinks dl dt {
    display: inline-block;
    color: #999;
    font-size: 12px;
}
#foot .backlinks dl a {
    color: #999;
    font-size: 12px;
}
#footerinfo_right .footerinfo_addr {
    margin-top: 20px;
    position: relative;
    z-index: 10;
}
#footerinfo_right .footerinfo_addr p {
    color: #999;
    height: 20px;
    line-height: 20px;
    text-align: left;
    
     font-size: 12px;
}
#footerinfo_right .footerinfo_addr a {
    color: #50adee;
    position: absolute;
    right: 7px;
    bottom: 4px;
    font-size: 12px;
    text-decoration: none;
    color:#666;
}
.copyright {
    width: 1190px;
    text-align: center;
    padding: 20px 0 0 0;
    margin: 0 auto;
    color: #999;
    border-top: solid 1px #dfdfdf;
}

.backlinks dl dd {
    margin-right: 5px;
}
.backlinks dl dd, #foot .backlinks dl dt {
    display: inline-block;
    color: #999;
    font-size: 12px;
}
.backlinks dl dd {
    margin-right: 5px;
}
.backlinks dl dd  a{
    text-decoration: none;
}
.company-addr {
    margin-bottom: 5px;
    color: #999;
    font-size:12px;
}
.backlinks{
    color: #999;
    font-size:12px;
}
#section-flow {
    height: 167px;
    width: 100%;
    background: #fff;
}
#section-flow ul {
    width: 1200px;
    margin: 0 auto;
    display: block;
}
#section-flow ul li {
    margin-top: 30px;
    width: 285px;
    display: inline-block;
    box-sizing: border-box;
    padding-left: 20px;
    position: relative;
}
#section-flow ul li:nth-child(1) i {
    content: '';
    width: 60px;
    height: 60px;
    margin-left: 4px;
    background: url("../../assets/img/dex.png");
    background-size: 565px 1053px;
    background-position: -210px -5px;
    display: inline-block;
    margin-left: 30px;
}
#section-flow ul li span {
    display: block;
    width: 120px;
    text-align: center;
    font-size: 20px;
    margin-top: 15px;
    color: #333;
}
#section-flow ul li:nth-child(2) i {
    content: '';
    width: 60px;
    height: 60px;
    margin-left: 4px;
    background: url("../../assets/img/dex.png");
    background-size: 565px 1053px;
    background-position: -280px -5px;
    display: inline-block;
    margin-left: 25px;
}
#section-flow ul li:nth-child(3) i {
    content: '';
    width: 80px;
    height: 60px;
    margin-left: 4px;
    background: url("../../assets/img/dex.png");
    background-size: 565px 1053px;
    background-position: -380px -10px;
    display: inline-block;
    margin-left: 25px;
}
#section-flow ul li:nth-child(4) i {
    content: '';
    width: 60px;
    height: 60px;
    margin-left: 4px;
    background: url("../../assets/img/dex.png");
    background-size: 565px 1053px;
    background-position: -480px -5px;
    display: inline-block;
    margin-left: 30px;
}
</style>
