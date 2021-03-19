<template>
    <div class="c-mains" style='top:112px'>

    <!-- 左侧 -->
    <div class="left">

        <c-box class="c-r-box c-r-box1" style='margin-top: 0px;height: 582px;'>
            <template v-slot:main>
                <img src="../../public/images/chartbg_head.png" style='float: left;margin-top: 2px;'/>
                <div class="c-r-title">
                   情感值
                </div>
                <div id='emoPie' style='height:400px;width:400px'>

                </div>
            </template>
        </c-box>
    </div>

    <!-- 右侧 -->
    <div class="right" style='width:1065px'>
        <!-- 业务系统安全事件 -->
        <div class="d-i left-items" v-if="leftState == 1" style="width:100%">
            <c-box class="c-l-item bottom" v-for="item in leftData" :key="item.name" >
                <template v-slot:main>
                    <div class="c-l-title" style='background-size: cover;width: 100%;'>
                        <span>
                            {{item.name}}
                        </span>
                    </div>
                    <!-- <div class="num-font c-l-num">
                        {{item.value}}
                    </div>
                    <div></div> -->
                    <img :src="word" class="imgStyle"/>
                </template>
            </c-box>
        </div>
        <div class="d-i left-pie" v-else>
            <c-box class="c-r-box c-r-box1">
                <template v-slot:main>
                    <div class="c-r-title">
                        车辆分布
                    </div>
                    <div class="c-r-main" id="cars">
                    </div>
                </template>
            </c-box>
            <c-box class="c-r-box c-r-box1">
                <template v-slot:main>
                    <div class="c-r-title">
                        事件统计
                    </div>
                    <div class="c-r-main" id="eventTotal">
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
            word:word,
            attackType:1,
            eventTotals:[],
            deviceTotals:[],
            leftState:1,
            leftData :[
                {
                    name: "正向高频词",
                    value: 0,
                    unit:'次'
                },
                {
                    name: "中性高频词",
                    value: 0, 
                    unit:'百分比'
                },    
                {
                    name: "负向高频词",
                    value: 0, 
                    unit:'百分比'
                }
            ]
        }
    },
    mounted() {
        this.emoPie()
    },
    methods: {
        emoPie(){
            var chartDom = document.getElementById('emoPie');
            var myChart = this.$echarts.init(chartDom);
            var option;

            option = {
                legend: {
                    top: 'bottom'
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: {show: true},
                        dataView: {show: true, readOnly: false},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [50, 250],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 8
                        },
                        data: [
                            {value: 40, name: 'rose 1'},
                            {value: 38, name: 'rose 2'},
                            {value: 32, name: 'rose 3'},
                            {value: 30, name: 'rose 4'},
                            {value: 28, name: 'rose 5'},
                            {value: 26, name: 'rose 6'},
                            {value: 22, name: 'rose 7'},
                            {value: 18, name: 'rose 8'}
                        ]
                    }
                ]
            };

            option && myChart.setOption(option);

        }
    }
}
</script>

<style scoped>
.bottom {
    margin-bottom: 11.1px !important;
    height: 185.6px;
    width: 100%
}
.imgStyle{
    height:80%
}
</style>