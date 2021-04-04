<template>
    <div class="c-mains">
        <!-- 第一层 -->
        <div class="c-m-box" style="height: 300px;">
            <div class="c-m-flex-2 c-m-flex">
                <c-box
                    class="c-l-item"
                    style="width: 48%; height: 43.8%"
                    :style="{ 'margin-left': i % 2 === 1 ? '4%' : '0' }"
                    v-for="(item, i) in leftData"
                    :key="item.name"
                >
                    <template v-slot:main>
                        <div class="c-l-title">
                            <span>
                                {{ item.name }}
                            </span>
                            <span
                                style="
                                    float: right;
                                    font-size: 16px;
                                    font-weight: 500;
                                    color: rgb(9, 195, 212);
                                    margin-top: 2px;
                                "
                            >
                                {{ item.unit }}
                            </span>
                        </div>

                        <div
                            class="num-font c-l-num"
                            style="line-height: 90px; font-size: 50px"
                        >
                            {{ item.value }}
                        </div>
                    </template>
                </c-box>
            </div>
            <div class="c-m-flex-3 c-m-flex" style="padding-left: 30px">
                <c-box class="c-r-box c-r-box1">
                    <template v-slot:main>
                        <img
                            src="../../public/images/chartbg_head.png"
                            style="float: left; margin-top: 2px"
                        />
                        <div class="c-r-title">疫情概述</div>
                        <div style="color: white; margin: 30px; letter-spacing: 1px;line-height: 1.5;">
                            {{ content }}
                            <a
                                href="http://www.nhc.gov.cn/xcs/yqfkdt/gzbd_index.shtml"
                                style="color: aquamarine"
                                >最新情况>></a
                            >
                        </div>
                        <div
                            style="
                                color: white;
                                margin: 25px 119px;
                                font-family: fangsong;
                                font-size: 21px;
                                line-height: 2;
                                position: relative;
                            "
                        >
                            {{ saying }}
                            <br />
                            <span style="float: right">————习近平</span>
                        </div>
                    </template>
                </c-box>
            </div>
        </div>

        <div class="c-m-box c-m-box-item" style="top: 320px; bottom: 0">
            <div class="c-m-flex-2 c-m-flex">
                <div class="c-r-main" id="windowAttack">
                    <div class="tab-head">
                        <div class="tab-btn1-active cur">热度趋势</div>
                    </div>
                    <c-box class="tab-main">
                        <template v-slot:main>
                            <!--舆情情感 -->
                            <div class="">
                                <div id="pies" class="pie-items" ></div>
                            </div>
                        </template>
                    </c-box>
                </div>
            </div>
            <div class="c-m-flex-3 c-m-flex" style="margin-left: 30px">
                <div
                    class="c-r-main" 
                    
                >
                    <div class="tab-head">
                        <div class="cur tab-btn2-active">热门话题</div>
                    </div>
                    <c-box class="tab-main">
                        <template v-slot:main>
                            <!-- 谣言分析 -->
                            <div class="">
                                <div id="pies1" class="pie-items" style='padding:5px'>
                                    <img src="http://159.75.23.139:3000/totalword.png"  style='width:100%'/>
                                </div>
                            </div>
                        </template>
                    </c-box>
                </div>
            </div>
        </div>
        <!-- 下侧 -->
        <!-- 中间 -->
    </div>
</template>

<script scoped>
// import word from "../../public/images/word.png"
export default {
    data() {
        return {
            texts: {
                title: "新冠",
            },
            // word,
            attackType: 1,
            eventTotals: [],
            deviceTotals: [],
            leftState: 1,
            leftData: [
                {
                    name: "曝光量",
                    value: 11180,
                    unit: "亿次",
                },
                {
                    name: "真实性",
                    value: "63.67%",
                    unit: "百分比",
                },
                {
                    name: "积极情感值",
                    value: "12.89%",
                    unit: "百分比",
                },
                {
                    name: "参与用户人数",
                    value: 22338,
                    unit: "人",
                },
            ],
            content:
                "常态化疫情防控，意味着我们进入“后疫情时期”。这一时期的特点是，疫情本土传播途径已经基本阻断，疫情得到有效控制，但疫情反弹风险依然存在。因此，疫情防控具有长期性、复杂性、艰巨性特点。社会重心将由集中打疫情防控阻击战转到一手抓疫情防控、一手抓经济社会发展。在今后较长一段时间，疫情防控将像影子一样跟随我们，融入到我们的工作生活学习中。”",
            saying:
                "“沉舟侧畔千帆过，病树前头万木春。”后疫情时代 的世界，必将如凤凰涅粲、焕发新生。让我们携手努力，共同创造更加美好幸福的生活，共同推动构建人类命运共同体!",
        };
    },
    mounted() {
        console.log(this.$echarts);
        this.heat();   
    },
    methods: {
        heat() {
            var chart0 = this.$echarts.init(document.getElementById("pies"));
            this.axios.get('http://159.75.23.139:3000/heat.json').then((res)=>{ 
                var data = res.data
                var option = {
                    textStyle:{
                        fontSize:16,
                        color:'white'
                    },                   
                    title: {
                        // text: '堆叠区域图'
                    },
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            type: "cross",
                            label: {
                                backgroundColor: "#6a7985",
                            },
                        },
                    },
                    legend: {
                        data: data.title,
                        textStyle: {
                            color: 'white'
                        }                           
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {},
                        },
                    },
                    grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "3%",
                        containLabel: true,
                    },
                    xAxis: [
                        {
                            type: "category",
                            boundaryGap: false,
                            data: data.date,
                            axisLabel: {
                                textStyle: {
                                    fontSize:20
                                },
                            }                          
                        },
                    ],
                    yAxis: [
                        {
                            type: "value",
                            axisLabel: {
                                textStyle: {
                                    fontSize:20
                                },
                                formatter: '{value} 条'
                            }                          
                        },
                    ],
                    series: data.item,
                };
                chart0.setOption(option);                
             }).catch((error) => {
                 console.log(error)
             })
        },
    },
};
</script>

<style scoped>
.bottom {
    margin-bottom: 22.1px !important;
    height: 214px;
}
</style>