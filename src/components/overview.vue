<template>
    <div class="c-mains" style='top:112px'>

    <!-- 左侧 -->
    <div class="left">
        <div class="d-i left-items" >
            <c-box class="c-l-item bottom" v-for="item in leftData" :key="item.name" style='width:141% '>
                <template v-slot:main>
                    <div class="c-l-title">
                        <span style='float:left;margin-left:4px'>
                            {{item.name}}
                        </span>
                        <span style='float: right;font-size: 16px;font-weight: 500;color: rgb(9, 195, 212); margin-top: 2px;'>
                            {{item.unit}}
                        </span>
                    </div>

                    <div class="num-font c-l-num" style="line-height: 90px;font-size: 50px;">
                        {{item.value}}
                    </div>
                </template>
            </c-box>
        </div>
    </div>

    <!-- 右侧 -->
    <div class="right" style='width:1255px'>
        <!-- 业务系统安全事件 -->
        <c-box class="c-r-box c-r-box1" style='margin-top: 0px;height: 175px;'>
            <template v-slot:main>
                <img src="../../public/images/chartbg_head.png" style='float: left;margin-top: 2px;'/>
                <div class="c-r-title">
                    疫情概述
                </div>
                <div style="color:white;margin:19px; "> 
                 {{content}}
                  <a href='http://www.nhc.gov.cn/xcs/yqfkdt/gzbd_index.shtml' style="color: aquamarine;">最新情况>></a>
                </div> 
                <div style="color: white; margin: 0 119px;margin-top: 16px;font-family: fangsong;font-size: 17px;"> 
                    {{saying}}
                    <br/>
                    <span style='float: right;'>————习近平</span>
                </div>                 
            </template>

        </c-box>
        <div class="c-r-main" id="windowAttack" style=' position: relative;top: 23px;;'>
            <div class="tab-head">
                <div :class="`${attackType==1 ? 'tab-btn1-active' : 'tab-btn1'}`" class="cur"
                    @click="attackType = 1">舆情情感</div>
                <div :class="`${attackType==2 ? 'tab-btn2-active' : 'tab-btn2'}`" class="cur"
                    @click="attackType = 2">谣言分析</div>
            </div>
            <c-box class="tab-main" style=' height: 338.8px;'>
                <template v-slot:main>
                    <!--舆情情感 -->
                    <div class="" v-show="attackType==1">
                        <div id="pies" class="pie-items">
                            <!-- <div class="pie-item" v-for="(item,index) in eventTotals" :keys="index" :key='index'>
                                <div class="pie-texts">
                                    <div class="pie-title">{{item.name}}</div>
                                    <div class="pie-text">{{item._show ?'攻击类型分布TOP10':'无安全事件'}}</div>
                                </div>
                                <div class="charts"></div>
                            </div> -->
                        </div>
                    </div>
                    <!-- 谣言分析 -->
                    <div class="" v-show="attackType==2">
                        <div id="pies1" class="pie-items">
                            <!-- <div class="pie-item" v-for="(item,index) in deviceTotals" :keys="index" :key='index'>
                                <div class="pie-texts">
                                    <div class="pie-title">{{item.name}}</div>
                                    <div class="pie-text">高中低等级 事件统计</div>
                                </div>
                                <div class="charts"></div>                               
                            </div> -->
                             <img :src="word"/>
                        </div>
                    </div>
                </template>
            </c-box>            
        </div>
        <!-- 零部件安全事件 -->
    </div>
    <!-- 下侧 -->
    <div class="c-main-bottom">

    </div>
    <!-- 中间 -->
    </div>
</template>

<script scoped>
import word from "../../public/images/word.png"
export default {
    data(){
        return {
            texts:{
                title:'新冠'
            },
            word,
            attackType:1,
            eventTotals:[],
            deviceTotals:[],
            leftState:1,
            leftData :[
                {
                    name: "曝光量",
                    value: 11180,
                    unit:'次'
                },
                {
                    name: "真实性",
                    value: "99%", 
                    unit:'百分比'
                },    
                {
                    name: "积极情感值",
                    value: "60%", 
                    unit:'百分比'
                },
                {
                    name: "参与用户人数",
                    value: 30004,
                    unit:'人'
                }
            ],
            content:'常态化疫情防控，意味着我们进入“后疫情时期”。这一时期的特点是，疫情本土传播途径已经基本阻断，疫情得到有效控制，但疫情反弹风险依然存在。因此，疫情防控具有长期性、复杂性、艰巨性特点。社会重心将由集中打疫情防控阻击战转到一手抓疫情防控、一手抓经济社会发展。在今后较长一段时间，疫情防控将像影子一样跟随我们，融入到我们的工作生活学习中。”',
            saying:"“沉舟侧畔千帆过，病树前头万木春。”后疫情时代 的世界，必将如凤凰涅粲、焕发新生。让我们携手努力，共同创造更加美好幸福的生活，共同推动构建人类命运共同体!"
        }
    },
    mounted(){
        console.log(this.$echarts)
        this.heat()
    },
    methods: {
        heat(){
            var chart0=this.$echarts.init(document.getElementById('pies'));
            var option = {
                title: {
                    text: '堆叠区域图'
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: '#6a7985'
                        }
                    }
                },
                legend: {
                    data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '邮件营销',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '直接访问',
                        type: 'line',
                        stack: '总量',
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '搜索引擎',
                        type: 'line',
                        stack: '总量',
                        label: {
                            show: true,
                            position: 'top'
                        },
                        areaStyle: {},
                        emphasis: {
                            focus: 'series'
                        },
                        data: [820, 932, 901, 934, 1290, 1330, 1320]
                    }
                ]
            };             
            chart0.setOption(option);           
        }, 
    }
}

</script>

<style scoped>
.bottom {
    margin-bottom: 36.1px !important;
    height: 117px;

}
</style>