<template>
<div class="ss">
    <div>

        <div class="w margin dw">
            <ul class="header-top-service clear font-color" style="margin:0">
                <li class="site-map">
                    <a target="_blank" href="javascript:void(0)" class="ca wwww" >网站导航</a>
                    <span></span>
                    <div class="site-map-wrap clearfix">
                        <div class="site-links">
                            <h2>主要业务</h2>
                            <a href="javascript:void(0)" target="_blank">手机回收</a><br>
                            <a href="javascript:void(0)" target="_blank">平板回收</a><br>
                            <a href="javascript:void(0)" target="_blank">电脑回收</a><br>
                            <a href="javascript:void(0)" target="_blank" rel="nofollow">手机维修</a><br>
                            <a href="javascript:void(0)" target="_blank" rel="nofollow">二手优品</a><br>
                        </div>
                        <div class="site-links">
                            <h2>企业服务</h2>
                            <a href="javascript:void(0)" target="_blank">质检名词解释</a><br>
                            <a href="javascript:void(0)" target="_blank">质检流程说明</a><br>
                            <a href="javascript:void(0)" target="_blank">数据备份</a> <br>
                            <a class="head-customer-service" href="javascript:void(0)" target="_blank" rel="nofollow">客服咨询</a><br>
                        </div>
                        <div class="site-links">
                            <h2>用户导航</h2>
                            <a href="javascript:void(0)" target="_blank">用户导航</a> <br>
                            <a href="javascript:void(0)" target="_blank">网站地图</a><br>
                            <a href="javascript:void(0)" target="_blank">帮助中心</a><br>
                            <a href="javascript:void(0)" target="_blank">新闻中心</a><br>
                        </div>
                    </div>
                </li>
                <li>
                    <a target="_blank" class="ca"  rel="external nofollow" href="/">交易流程</a>
                    <span></span>
                </li>
                <li class="contact">
                    <a target="_blank" class="ca" rel="external nofollow" href="/">服务条款</a>
                    <span></span>
                </li>
                <li class="about">
                    <a target="_blank" class="ca" rel="external nofollow" href="/">关于我们</a>
                    <span></span>
                </li>
                <li class="server">
                    <a target="_blank" class="ca" rel="external nofollow" href="/">帮助中心</a>
                    <span></span>
                </li>
                <li class="server">
                    <a target="_blank" class="ca" rel="external nofollow" style="color:#e7b000" href="javascript:void(0)"  @click="go()">登录</a>
                    <span></span>
                </li>
                <!-- <li class="login">
                    <span class="login-span"></span>
                    <b class="tel">登录</b>
                    <div class="loginOut">
                        <a target="_blank" rel="external nofollow" href="/personal-order?pagesize=8&amp;pid=1367">个人中心</a>
                        <p>退出登录</p>
                    </div>
                </li> -->
            </ul>
        </div>
    </div>
    <div class="logo">
        <div class="w margin">
            <div data-name="evaluate" class="logo-img left" >
                <img src="../../assets/img/zdx1.png" style="height:77px"></div>
            <div class="header-right right">
                <div class="recycle-pro">
                    <span class="tep-1">1</span>
                    <i>机况评估</i>
                    <b></b>
                    <b></b>
                    <b></b>
                    <span>2</span>
                    <i>获得报价</i>
                    <b></b>
                    <b></b>
                    <b></b>
                    <span>3</span>
                    <i>提交订单</i>
                </div>

            </div>
        </div>
    </div>
    <div class="w margin" style="font-size: 14px;padding: 15px 0 ;color: rgb( 153, 153, 153 );">
        <a href="#" class="a1" style="text-decoration:none"><span>首页</span></a>&gt;<span>机况评估</span>
    </div>
    <div class="w margin clear">
        <div class="left">
            <div class="evaluate-item-wrap">
                <!-- 遍历排好序的数组 -->
                <div class="evaluate-category">
                    <!-- 最外层分类名称 -->
                    <div class="evaluate-categoty-wrapper">
                        <h2 class="evaluate-categoty-name">
                            基本信息 </h2>
                    </div>

                    <!-- 特定分类下的项目 -->
                    <ul class="evaluate-items clearfix">
                        <!-- 非功能项时 -->


                        <li class="evaluate-item needValide is-opening">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    制式
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="display: block;">
                                <div class="evaluate-select" data-value="全网通" data-des="" data-imgs="">
                                    全网通 <input type="radio" class="evaluate-select-value" name="qst_122" value="130_全网通">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="移动版" data-des="" data-imgs="">
                                    移动版 <input type="radio" class="evaluate-select-value" name="qst_122" value="124_移动版">

                                    <div class="loading"></div>

                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    存储容量
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="128GB" data-des="" data-imgs="">
                                    128GB <input type="radio" class="evaluate-select-value" name="qst_32" value="37_128GB">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="64GB" data-des="" data-imgs="">
                                    64GB <input type="radio" class="evaluate-select-value" name="qst_32" value="36_64GB">

                                    <div class="loading"></div>

                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    购买渠道
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="大陆国行" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u56fd\u884c.JPG&quot;]">
                                    大陆国行 <input type="radio" class="evaluate-select-value" name="qst_11" value="12_大陆国行">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                                <div class="evaluate-select" data-value="非国行" data-des="" data-imgs="">
                                    非国行 <input type="radio" class="evaluate-select-value" name="qst_11" value="131_非国行">

                                    <div class="loading"></div>

                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                    </ul>
                </div>

                <div class="evaluate-category">
                    <!-- 最外层分类名称 -->
                    <div class="evaluate-categoty-wrapper">
                        <h2 class="evaluate-categoty-name">
                            使用情况 </h2>
                    </div>

                    <!-- 特定分类下的项目 -->
                    <ul class="evaluate-items clearfix basic-property">
                        <!-- 非功能项时 -->


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    屏幕外观
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="屏幕完好，无任何划痕" data-des="" data-imgs="">
                                    屏幕完好，无任何划痕 <input type="radio" class="evaluate-select-value" name="qst_72"
                                                      value="73_屏幕完好，无任何划痕">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="屏幕有划痕" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u5c4f\u5e55\u6709\u5212\u75d5.JPG&quot;]">
                                    屏幕有划痕 <input type="radio" class="evaluate-select-value" name="qst_72" value="74_屏幕有划痕">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                                <div class="evaluate-select" data-value="屏幕有缺角/碎裂/脱胶/失灵" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u5c4f\u5e55\u7834\u635f1.JPG&quot;,&quot;\/\/s1.huishoubao.com\/img\/phone\/\u5c4f\u5e55\u7834\u635f2.JPG&quot;]">
                                    屏幕有缺角/碎裂/脱胶/失灵 <input type="radio" class="evaluate-select-value" name="qst_72"
                                                          value="75_屏幕有缺角/碎裂/脱胶/失灵">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    屏幕显示
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="亮点/色差/轻微发黄" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u8f7b\u5fae\u80cc\u5149\u5f02\u5e38.png&quot;]">
                                    亮点/色差/轻微发黄 <input type="radio" class="evaluate-select-value" name="qst_67"
                                                      value="68_亮点/色差/轻微发黄">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                                <div class="evaluate-select" data-value="严重老化/色斑" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u4e25\u91cd\u80cc\u5173\u6216\u4e25\u91cd\u8272\u5dee.png&quot;]">
                                    严重老化/色斑 <input type="radio" class="evaluate-select-value" name="qst_67"
                                                   value="69_严重老化/色斑">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                                <div class="evaluate-select" data-value="显示正常" data-des="" data-imgs="">
                                    显示正常 <input type="radio" class="evaluate-select-value" name="qst_67" value="71_显示正常">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="换过屏幕/漏液/断线/显示不正常" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u6f0f\u6db2\u7ad6\u7ebf.png&quot;]">
                                    换过屏幕/漏液/断线/显示不正常 <input type="radio" class="evaluate-select-value" name="qst_67"
                                                            value="70_换过屏幕/漏液/断线/显示不正常">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    机身外观
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="外观完好，无任何使用痕迹" data-des="" data-imgs="">
                                    外观完好，无任何使用痕迹 <input type="radio" class="evaluate-select-value" name="qst_76"
                                                        value="77_外观完好，无任何使用痕迹">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="外观有磕碰或掉漆" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u5916\u89c2\u6709\u78d5\u78b0\u6216\u6389\u6f06.JPG&quot;]">
                                    外观有磕碰或掉漆 <input type="radio" class="evaluate-select-value" name="qst_76"
                                                    value="79_外观有磕碰或掉漆">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                                <div class="evaluate-select" data-value="外观轻微划痕" data-des=""
                                     data-imgs="[&quot;\/\/s1.huishoubao.com\/img\/phone\/\u5916\u89c2\u6709\u5212\u75d5.JPG&quot;]">
                                    外观轻微划痕 <input type="radio" class="evaluate-select-value" name="qst_76"
                                                  value="78_外观轻微划痕">

                                    <div class="loading"></div>

                                    <i class="hsb-icon-right"></i>
                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                        <li class="evaluate-item needValide">

                            <!-- 展示项 -->
                            <div class="evaluate-head clearfix">
                                <div class="evaluate-head-item evaluate-head-title">
                                    维修
                                </div>
                                <div class="evaluate-head-item evaluate-head-des"></div>
                                <i class="hsb-icon-right"></i>
                            </div>

                            <!-- 隐藏项 -->
                            <div class="evaluate-selects-wrap clearfix" style="">
                                <div class="evaluate-select" data-value="修主板/换外壳/严重拆修" data-des="" data-imgs="">
                                    修主板/换外壳/严重拆修 <input type="radio" class="evaluate-select-value" name="qst_60"
                                                        value="61_修主板/换外壳/严重拆修">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="小维修" data-des="" data-imgs="">
                                    小维修 <input type="radio" class="evaluate-select-value" name="qst_60" value="62_小维修">

                                    <div class="loading"></div>

                                </div>
                                <div class="evaluate-select" data-value="无拆机无维修" data-des="" data-imgs="">
                                    无拆机无维修 <input type="radio" class="evaluate-select-value" name="qst_60"
                                                  value="63_无拆机无维修">

                                    <div class="loading"></div>

                                </div>
                            </div>

                            <div class="hsb-hr"></div>

                        </li>


                    </ul>
                </div>

                <div class="evaluate-category">
                    <!-- 最外层分类名称 -->
                    <div class="evaluate-categoty-wrapper">
                        <h2 class="evaluate-categoty-name">
                            功能性问题（可多选） </h2>
                    </div>

                    <!-- 特定分类下的项目 -->
                    <ul class="evaluate-items clear function-property">
                        <!-- 非功能项时 -->

                        <!-- 功能项时: 有设置默认值[默认为不正常] -->

                        <li class="evaluate-item item64">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_64" value="65_通话正常" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="66_通话不正常">通话不正常</span>
                                    <input type="radio" name="qst_64" value="66_通话不正常" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item57">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_57" value="59_无进水" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="58_机身进水/受潮">机身进水/受潮</span>
                                    <input type="radio" name="qst_57" value="58_机身进水/受潮" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item54">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_54" value="55_WIFI正常" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="56_WIFI不正常">WIFI不正常</span>
                                    <input type="radio" name="qst_54" value="56_WIFI不正常" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item51">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_51" value="53_指纹功能正常" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="52_指纹功能不正常">指纹功能不正常</span>
                                    <input type="radio" name="qst_51" value="52_指纹功能不正常" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item29">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <span data-value="31_液晶不显示">液晶不显示</span>
                                    <input type="radio" name="qst_29" value="31_液晶不显示" autocomplete="off">
                                </p>
                                <p>
                                    <input checked="" type="radio" name="qst_29" value="30_液晶正常" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item22">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <span data-value="24_不能正常开机">不能正常开机</span>
                                    <input type="radio" name="qst_22" value="24_不能正常开机" autocomplete="off">
                                </p>
                                <p>
                                    <input checked="" type="radio" name="qst_22" value="23_正常开机" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item19">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <span data-value="20_全新(整套/未激活/未使用)">全新(整套/未激活/未使用)</span>
                                    <input type="radio" name="qst_19" value="20_全新(整套/未激活/未使用)" autocomplete="off">
                                </p>
                                <p>
                                    <input checked="" type="radio" name="qst_19" value="21_二手" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item7">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_7" value="9_ID/账户锁已解除" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="8_ID/账户锁无法解除">ID/账户锁无法解除</span>
                                    <input type="radio" name="qst_7" value="8_ID/账户锁无法解除" autocomplete="off">
                                </p>

                            </div>
                        </li>


                        <li class="evaluate-item item5">
                            <div class="evaluate-item-wrapper">
                                <div class="img-wrapper"></div>

                                <p>
                                    <input checked="" type="radio" name="qst_5" value="10_机身完好" autocomplete="off">
                                </p>
                                <p>
                                    <span data-value="6_机身变形或断裂">机身变形或断裂</span>
                                    <input type="radio" name="qst_5" value="6_机身变形或断裂" autocomplete="off">
                                </p>

                            </div>
                        </li>


                    </ul>
                </div>


            </div>
            <div class="evaluate-action">
                <button class="hsb-button hsb-button--primary hsb-button-large is-disabled" disabled="" style="    line-height: 30px;
                font-size: 18px;">查看估价</button>
            </div>
        </div>
        <div class="right">
            <div class="mobile-slidebar f-r">
                <div class="mobile-status">
                    <img alt="华为 P10" src="../../assets/img/30776.png" width="55">
                    <h1 class="mobile-info-name">华为 P10</h1>
                    <p class="recovery-record">
                        已有<span>141290</span>人成功收钱
                    </p>
                    <a href="javascript:void(0)" style="text-decoration:none" class="change-mobile-btn">更改机型&gt;</a>
                </div>
                <div class="recycling-instructions">
                    <h3>回收须知</h3>
                    <div class="hsb-hr"></div>
                    <p>1.山寨机，高仿机不回收。</p>
                    <p>2.屏幕锁未解，iCloud账户未注销不回收。<br></p>
                    <p class="notice">拒收并退回以上两种手机，您需承担双向<br>运费。</p>
                    <a target="_blank" href="javascript:void(0)" class="how-to-fix" style="text-decoration:none">
                        <span>如何解锁</span>
                        <img src="//s1.huishoubao.com/static/pc/1001/img/logo-question.png" alt="">
                    </a>
                </div>
            </div>
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
                        <!-- <p>租大侠寄件地址：江苏南京建邺区康源智慧港11楼 唐生收</p> -->
                        <p></p>
                        <br><br>
                        <a href="javascript:void(0)" target="_blank" class="no_hover"
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
  methods: {
    menu() {
      window.scrollTo(0, 0);
    },
        go(){
        this.$router.push('/login')
    }
  },
  created(){
      this.menu();
  }
};
</script>

<style scoped>
.ss {
  margin: 0;
  padding: 0;
  font-family: "Microsoft YaHei";
}

.logo {
  width: 100%;
  background: #fff;
  height: 92px;
}
.recycle-pro .tep-1 {
  border: none;
  color: #fff;
  background: rgb(250, 190, 0);
}
.recycle-pro span {
  display: inline-block;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: 1px solid #ccc;
  text-align: center;
  line-height: 26px;
  color: #b2b6b8;
  margin: 0 8px;
  font-size: 12px;
}
.recycle-pro .tep-1 + i {
  color: rgb(250, 190, 0);
}
.recycle-pro b {
  display: inline-block;
  position: relative;
  top: -4px;
  width: 3px;
  height: 3px;
  border-radius: 3px;
  background: #ccc;
  margin-left: 10px;
}
.recycle-pro i {
  font-size: 14px;
}
.recycle-pro {
  float: left;
  line-height: 92px;
  color: #909090;
}
.a1 {
  color: rgb(153, 153, 153);
}
.evaluate-category {
  padding: 20px 40px;
  margin-bottom: 20px;
  background-color: #fff;
}
.evaluate-categoty-name {
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 10px;
  margin-bottom: 20px;
}
h2 {
  font-size: 18px;
  line-height: 32px;
}
.clearfix {
  clear: both;
}
.evaluate-head {
  position: relative;
  cursor: pointer;
  padding-bottom: 20px;
}
.evaluate-select {
  float: left;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 20px;
  border: 1px #cccccc solid;
  height: 52px;
  box-sizing: border-box;
  color: #666666;
  text-align: center;
  padding: 15px 0;
  position: relative;
  font-size: 14px;
}
.evaluate-select-value {
  opacity: 0;
  filter: alpha(opacity=0);
  width: 100%;
  height: 0.35rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  cursor: pointer;
}
.evaluate-select .loading {
  position: absolute;
  background-color: #ff5f43;
  width: 0;
  left: 0px;
  height: 1px;
  bottom: 0;
}
.evaluate-select {
  float: left;
  width: 48%;
  margin-right: 2%;
  margin-bottom: 20px;
  border: 1px #cccccc solid;
  height: 52px;
  box-sizing: border-box;
  color: #666666;
  text-align: center;
  padding: 15px 0;
  position: relative;
  font-size: 14px;
}
.hsb-hr {
  border-bottom: 1px #f5f5f5 solid;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 10px;
}
.evaluate-head {
  position: relative;
  cursor: pointer;
  padding-bottom: 20px;
}
.evaluate-selects-wrap {
  display: none;
}
.evaluate-item-wrap {
  width: 820px;
}
.function-property {
  padding-bottom: 70px;
}
.function-property .evaluate-item {
  float: left;
  width: 25%;
  padding-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  position: relative;
}
.function-property .evaluate-item .img-wrapper {
  width: 51px;
  height: 41px;
  margin: 0 auto;
  margin-bottom: 10px;
  background: url("../../assets/img/evaluate-icon.png") -168px 0 no-repeat;
}
.function-property .evaluate-item.item64 .img-wrapper,
.function-property .evaluate-item.item688 .img-wrapper {
  background-position: -56px -138px;
}
.function-property .evaluate-item-wrapper input {
  display: none;
}
.function-property .evaluate-item.item54 .img-wrapper,
.function-property .evaluate-item.item686 .img-wrapper {
  background-position: -56px -184px;
}
.function-property .evaluate-item.item51 .img-wrapper {
  background-position: -168px -92px;
}
.function-property .evaluate-item.item29 .img-wrapper,
.function-property .evaluate-item.item678 .img-wrapper {
  background-position: -168px 0px;
}
.function-property .evaluate-item.item22 .img-wrapper,
.function-property .evaluate-item.item676 .img-wrapper,
.function-property .evaluate-item.item886 .img-wrapper {
  background-position: -224px -46px;
}
.function-property .evaluate-item.item19 .img-wrapper,
.function-property .evaluate-item.item675 .img-wrapper {
  background: url("../../assets/img/new.png");
}
.function-property .evaluate-item.item84 .img-wrapper,
.function-property .evaluate-item.item24 .img-wrapper,
.function-property .evaluate-item.item7 .img-wrapper,
.function-property .evaluate-item.item673 .img-wrapper {
  background: url("../../assets/img/flyme.png");
}
.function-property .evaluate-item.item5 .img-wrapper,
.function-property .evaluate-item.item672 .img-wrapper {
  background-position: -112px -46px;
}
.function-property .evaluate-item {
  float: right;

  width: 25%;
  padding-bottom: 20px;
  margin-top: 20px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
}
.evaluate-action {
  width: 820px;
  text-align: right;
  margin-bottom: 25px;
  margin-top: 20px;
}
.hsb-button.is-disabled,
.hsb-button.is-disabled:focus,
.hsb-button.is-disabled:hover,
.hsb-button:disabled {
  color: #ffffff;
  cursor: not-allowed;
  background-image: none;
  background-color: #cccccc;
  border-color: #cccccc;
}
.evaluate-action button {
  border: none;
}

.hsb-button-large {
  padding: 16px 19px;
  font-size: 18px;
  border-radius: 2px;
}
.hsb-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  color: #333;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 11px 19px;
  font-size: 14px;
  /* border-radius: 4px; */
  width: 260px;
  transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
}
.evaluate-wrap {
  font-size: 18px;
  color: #3e3a39;
  width: 820px;
}
.mobile-slidebar {
  width: 360px;
  margin-left: 20px;
}
.f-r {
  float: right;
}
.mobile-slidebar .mobile-status {
  text-align: center;
  padding: 40px 20px 10px;
  font-size: 14px;
  background: #ffffff;
}
.mobile-slidebar .mobile-status .mobile-info-name {
  color: #666666;
  margin-top: 24px;
  font-size: 14px;
}
.mobile-slidebar .mobile-status .recovery-record {
  color: #babcc2;
  margin-top: 10px;
}
.mobile-slidebar .mobile-status .change-mobile-btn {
  font-size: 14px;
  color: #3782ff;
  display: block;
  margin-top: 25px;
  margin-bottom: 20px;
}
.mobile-slidebar .recycling-instructions {
  color: #666666;
  padding: 0 20px 20px;
  font-size: 14px;
  background: #ffffff;
  margin-top: 10px;
}
.recycling-instructions .hsb-hr {
  margin-bottom: 28px;
}
.hsb-hr {
  border-bottom: 1px #f5f5f5 solid;
  width: 100%;
  margin-bottom: 15px;
  margin-top: 10px;
}
.mobile-slidebar .recycling-instructions p,
.mobile-slidebar .recycling-instructions a {
  margin-bottom: 14px;
}
.mobile-slidebar .recycling-instructions p {
  text-align: center;
}
.mobile-slidebar .recycling-instructions .notice {
  color: #babcc2;
  margin-top: 40px;
}
.mobile-slidebar .recycling-instructions a {
  font-size: 14px;
  color: #3782ff;
}
.recycling-instructions .how-to-fix {
  display: block;
  text-align: center;
}
.mobile-slidebar .recycling-instructions h3 {
  text-align: center;
  font-size: 16px;
  color: #999999;
  padding-top: 15px;
}
.mobile-slidebar .recovery-record span {
  color: #ff5f43;
}
/* .header-top-service {
    width: 100%;
}
.back-color .font-color li {
    color: #666;
}

.header-top-service li {
    float: right;
    height: 32px;
    line-height: 32px;
    width: 95px;
    text-align: center;
    color: rgba(255, 255, 255, 0.8);
    font-size: 12px;
}
.site-map {
    position: relative;
}

li {
    list-style: none;
}
.common-header-1 li a {
    color: #999;
}
input, a, img {
    border: 0;
}
a, button {
    cursor: pointer;
    border-style: solid;
}
.back-color .font-color li span {
    border-left: 1px solid #eee;
}

.header-top-service li span {
    display: inline-block;
    height: 12px;
    margin-top: 10px;
    border-left: 1px solid rgba(255, 255, 255, 0.3);
    float: right;
}
.site-map-wrap {
    position: absolute;
    visibility: hidden;
    opacity: 0;
    transition: all .4s;
    -webkit-transition: all .4s;
    z-index: 999;
    background-color: #fff;
    width: 370px;
    top: 100%;
    right: 0;
    box-shadow: 0 1px 20px 2px rgb(200, 200, 200);
    padding: 10px;
    box-sizing: border-box;
}
.site-links {
    float: left;
    margin-left: 40px;
}

element.style {
}
.site-map-wrap h2 {
    font-size: 13px;
    font-weight: bold;
}
h2 {
    font-size: 18px;
    line-height: 32px;
} */
.header-top-service {
  width: 100%;
}
.header-top-service li {
  float: right;
  height: 32px;
  line-height: 32px;
  width: 95px;
  text-align: center;
  color: rgba(255, 255, 255, 0.8);
  font-size: 12px;
}
.back-color .font-color li {
  color: #666;
}
.site-map {
  position: relative;
}
.common-header-1 li a {
  color: #999;
  text-decoration: none;
}
.back-color .font-color li span {
  border-left: 1px solid #eee;
}
.header-top-service li span {
  display: inline-block;
  height: 12px;
  margin-top: 10px;
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  float: right;
}
.site-map-wrap {
  position: absolute;
  display: none;
  opacity: 0;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  z-index: 999;
  background-color: #fff;
  width: 370px;
  top: 100%;
  right: 0;
  box-shadow: 0 1px 20px 2px rgb(200, 200, 200);
  padding: 10px;
  box-sizing: border-box;
}
.site-links {
  float: left;
  margin-left: 40px;
}
.site-map-wrap h2 {
  font-size: 13px;
  font-weight: bold;
  line-height: 32px;
}
.ca {
  color: #999;
  text-decoration: none;
}
.www:hover .site-map-wrap {
  display: block;
}
.ca:hover {
  color: #e7b000;
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
#footerinfo_left dl > dd,
#footerinfo_left dl > dd > a {
  display: block;
  color: rgb(153, 153, 153);
  font-size: 12px;
  font-family: 微软雅黑;
  line-height: 30px;
  height: 30px;
  text-decoration: none;
}
dd,
dl,
dt {
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
#footerinfo_left dl > dd,
#footerinfo_left dl > dd > a {
  display: block;
  color: rgb(153, 153, 153);
  font-size: 12px;
  font-family: 微软雅黑;
  line-height: 30px;
  height: 30px;
}
#foot #footerinfo_left .follow-qr .qr-wrap + .qr-wrap {
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
  color: #666;
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
.backlinks dl dd,
#foot .backlinks dl dt {
  display: inline-block;
  color: #999;
  font-size: 12px;
}
.backlinks dl dd {
  margin-right: 5px;
}
.backlinks dl dd a {
  text-decoration: none;
}
.company-addr {
  margin-bottom: 5px;
  color: #999;
  font-size: 12px;
}
.backlinks {
  color: #999;
  font-size: 12px;
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
  width: 296px;
  display: inline-block;
  box-sizing: border-box;
  padding-left: 20px;
  position: relative;
}
#section-flow ul li:nth-child(1) i {
  content: "";
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
  content: "";
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
  content: "";
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
  content: "";
  width: 60px;
  height: 60px;
  margin-left: 4px;
  background: url("../../assets/img/dex.png");
  background-size: 565px 1053px;
  background-position: -480px -5px;
  display: inline-block;
  margin-left: 30px;
}
.flex {
  display: flex;
  justify-content: space-around;
}
</style>

