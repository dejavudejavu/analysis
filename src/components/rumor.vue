<template>
    <div class="c-mains c-m-box" style="top: 112px">
        <div class="c-m-flex-2 c-m-flex;" style="margin-right: 30px">
            <c-box style="width: 100%; height: 100%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center"  class="c-l-title">
                            <span>谣言量变化趋势</span>
                        </div>
                    </div>

                    <div class="full-box" id="chart0"></div>
                </template>
            </c-box>
        </div>
        <div class="c-m-flex-1 c-m-flex">
            <c-box style="width: 100%; height: 49%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <img
                            src="../../public/images/chartbg_head.png"
                            style="float: left; margin-top: 2px"
                        />                             
                        <div style="text-align: center"  class="color-title">
                             谣言高频词                            
                        </div>
                    </div>
                    <div class="full-box" id="chart1"></div>
                </template>
            </c-box>
            <c-box style="width: 100%; height: 49%; margin-top:2%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <img
                            src="../../public/images/chartbg_head.png"
                            style="float: left; margin-top: 2px"
                        />                             
                        <div style="text-align: center" class="color-title">
                            提及主体
                        </div>
                    </div>
                     <div class="full-box" id="chart2"></div>
                </template>
            </c-box> 
        </div>
    </div>
</template>

<script scoped>
export default {
    data() {
        return {
            texts: {
                title: "新冠",
            },
            attackType: 1,
            eventTotals: [],
            deviceTotals: [],
            leftState: 1,
            leftData: [
                {
                    name: "谣言量变化趋势",
                    value: 0,
                    unit: "次",
                },
            ],
        };
    },
    mounted() {
        this.yaoyan();
        this.mentioned();
        this.gaopin();
    },
    methods: {
        yaoyan() {
            var chartDom = document.getElementById("chart0");
            var myChart = this.$echarts.init(chartDom);
            var option;
            option = {
                textStyle:{
                    fontSize:16,
                    color:'white'
                },                
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },                  
                tooltip: {
                    trigger: 'axis'
                },
                legend: {
                    data: ['最高气温', '最低气温'],
                    left:'left',
                    textStyle: {
                        color: 'white'
                    }                        
                },
                toolbox: {
                    show: true,
                    feature: {
                        dataZoom: {
                            yAxisIndex: 'none'
                        },
                        dataView: {readOnly: false},
                        magicType: {type: ['line', 'bar']},
                        restore: {},
                        saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
                    itemStyle: {
                        fontSize:20
                    },
                    axisLabel: {
                        textStyle: {
                            fontSize:20
                        }
                    }                    
                },
                yAxis: {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} °C',
                        fontSize:20
                    },                    
                },
                series: [
                    {
                        name: '最高气温',
                        type: 'line',
                        data: [10, 11, 13, 11, 12, 12, 9],
                        markPoint: {
                            data: [
                                {type: 'max', name: '最大值'},
                                {type: 'min', name: '最小值'}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'}
                            ]
                        }
                    },
                    {
                        name: '最低气温',
                        type: 'line',
                        data: [1, -2, 2, 5, 3, 2, 0],
                        markPoint: {
                            data: [
                                {name: '周最低', value: -2, xAxis: 1, yAxis: -1.5}
                            ]
                        },
                        markLine: {
                            data: [
                                {type: 'average', name: '平均值'},
                                [{
                                    symbol: 'none',
                                    x: '90%',
                                    yAxis: 'max'
                                }, {
                                    symbol: 'circle',
                                    label: {
                                        position: 'start',
                                        formatter: '最大值'
                                    },
                                    type: 'max',
                                    name: '最高点'
                                }]
                            ]
                        }
                    }
                ]
            };

            option && myChart.setOption(option);
        },
        mentioned() {
            var chartDom = document.getElementById("chart1");
            var myChart = this.$echarts.init(chartDom);
            var option;

            option = {              
                textStyle:{
                    fontSize:16,
                    color:'white'
                },                
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },                
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        itemStyle: {
                            color:'#70DFDF'
                        },                          
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(180, 180, 180, 0.2)",
                        },
                    },
                ],
            };

            option && myChart.setOption(option);
        },
        gaopin() {
            var chartDom = document.getElementById("chart2");
            var myChart = this.$echarts.init(chartDom);
            var option;

            option = {             
                textStyle:{
                    fontSize:16,
                    color:'white'
                },                
                grid: {
                    left: "3%",
                    right: "4%",
                    bottom: "3%",
                    containLabel: true,
                },                
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [                    
                    {
                        itemStyle: {
                            color:'#FFC66E'
                        },                           
                        data: [120, 200, 150, 80, 70, 110, 130],
                        type: "bar",
                        showBackground: true,
                        backgroundStyle: {
                            color: "rgba(180, 180, 180, 0.2)",
                        },
                    },
                ],
            };

            option && myChart.setOption(option);
        },
    },
};
</script>

<style scoped>
.bottom {
    margin-bottom: 0 !important;
    height: 117px;
}
.rightpart {
    margin-top: 0px;
    height: 463.6px;
}
</style>