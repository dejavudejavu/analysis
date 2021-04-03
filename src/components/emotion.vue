<template>
    <div class="c-mains c-m-box" style="top: 112px">
        <div class="c-m-flex-2 c-m-flex;" style="margin-right: 30px">
            <c-box style="width: 100%; height: 100%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center"  class="c-l-title"><span>词汇情感</span></div>
                    </div>
                    <div id="emoPie" class="full-box"></div>
                </template>
            </c-box>
        </div>
        <div class="c-m-flex-1 c-m-flex" style='display:flex;flex-direction:column'>
            <c-box
                v-for="(item,index) in leftData"
                :key="item.name"
                class='lbx'
                :class="{'no-margin':index===2}"
            >
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <img
                            src="../../public/images/chartbg_head.png"
                            style="float: left; margin-top: 2px"
                        />                        
                        <div style="text-align: center"   class="color-title">{{ item.name }}</div>
                    </div>
                    <div style='position: absolute;left: 0; right: 0; top:34px; bottom: 0; display: flex;padding: 5px;'>
                        <!-- <img :src="word" style='width:412px;position: relative;left: 50%;transform: translate(-50%, 0px);'/>      -->
                        <img :src="word" style='width:100%'/>                             
                    </div>
                </template>
            </c-box>
        </div>

    </div>
</template>

<script>
import word from "../../public/images/word.png";
export default {
    data() {
        return {
            texts: {
                title: "新冠",
            },
            word: word,
            attackType: 1,
            eventTotals: [],
            deviceTotals: [],
            leftState: 1,
            leftData: [
                {
                    name: "正向高频词",
                    value: 0,
                    unit: "次",
                },
                {
                    name: "中性高频词",
                    value: 0,
                    unit: "百分比",
                },
                {
                    name: "负向高频词",
                    value: 0,
                    unit: "百分比",
                },
            ],
        };
    },
    mounted() {
        this.emoPie();
    },
    methods: {
        emoPie() {
            var chartDom = document.getElementById("emoPie");
            var myChart = this.$echarts.init(chartDom);
            var option;

            option = {
                // backgroundColor: '#2c343c',

                // title: {
                //     text: 'Customized Pie',
                //     left: 'center',
                //     top: 20,
                //     textStyle: {
                //         color: '#ccc'
                //     }
                // },

                tooltip: {
                    trigger: 'item'
                },

                visualMap: {
                    show: false,
                    min: 80,
                    max: 600,
                    inRange: {
                        colorLightness: [0, 1]
                    }
                },
                series: [
                    {
                        name: '词汇情感统计',
                        type: 'pie',
                        radius: '90%',
                        center: ['50%', '50%'],
                        data: [
                            {value: 335, name: '正向词汇',itemStyle:{color:'#E63946'}},
                            {value: 310, name: '负向词汇',itemStyle:{color:'#457B9D'}},
                            {value: 274, name: '中性词汇',itemStyle:{color:'#F1FAEE'}},
                        ].sort(function (a, b) { return a.value - b.value; }),
                        roseType: 'radius',
                        label: {
                            color: 'white',
                            fontSize :20,
                        },
                        labelLine: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)',
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        },
                        itemStyle: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        animationType: 'scale',
                        animationEasing: 'elasticOut',
                        // animationDelay: function (idx) {
                        //     return Math.random() * 200;
                        // }
                    }
                ]
            };
            option && myChart.setOption(option);
        },
    },
};
</script>

<style scoped>
.bottom {
    margin-bottom: 11.1px !important;
    height: 305.6px;
    width: 100%;
}
.lbx{
    flex:1;
    margin-bottom:10px;
}
.no-margin{
    margin:0
}
</style>