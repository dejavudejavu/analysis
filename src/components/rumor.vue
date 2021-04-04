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
                            谣言词云图
                        </div>
                    </div>
                    <div class="full-box">
                        <div id="pies1" class="pie-items" style='padding:5px'>
                            <img src="http://159.75.23.139:3000/rumor.png"  style='width:100%'/>
                        </div>                         
                    </div>                                       
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
        //谣言量变化趋势
        yaoyan() {
            var chartDom = document.getElementById("chart0");
            var myChart = this.$echarts.init(chartDom);
            var option;
            this.axios.get('http://159.75.23.139:3000/rumorNum.json').then((res)=>{  
                var data=res.data
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
                    // legend: {
                    //     data: ['最高气温', '最低气温'],
                    //     left:'left',
                    //     textStyle: {
                    //         color: 'white'
                    //     }                        
                    // },
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
                        data: data.date,
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
                            // formatter: '{value} 个',
                            fontSize:20
                        },                    
                    },
                    series: [
                        {
                            name: '最高气温',
                            type: 'line',
                            data: data.times,
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
                        }
                    ]
                };
                option && myChart.setOption(option);                
            })        
        },
        mentioned() {
            var chartDom = document.getElementById("chart1");
            var myChart = this.$echarts.init(chartDom);
            var option;
            this.axios.get('http://159.75.23.139:3000/rumorSubject.json').then((res)=>{
                var data = res.data
                option = {   
                    tooltip: {
                        trigger: "axis",
                        axisPointer: {
                            // type: "cross",
                            label: {
                                backgroundColor: "#6a7985",
                            },
                        },
                    },                               
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
                        data: data.subject,
                    },
                    yAxis: {
                        type: "value",
                    },
                    series: [
                        {
                            itemStyle: {
                                color:'#70DFDF'
                            },                          
                            data: data.times,
                            type: "bar",
                            showBackground: true,
                            backgroundStyle: {
                                color: "rgba(180, 180, 180, 0.2)",
                            },
                        },
                    ],
                };
                option && myChart.setOption(option);
            }).catch((err) => {
                console.error(err)
            })

        },
        //谣言高频词
        // gaopin() {
        //     var chartDom = document.getElementById("chart1");
        //     var myChart = this.$echarts.init(chartDom);
        //     var option;
        //     option = {             
        //         textStyle:{
        //             fontSize:16,
        //             color:'white'
        //         },                
        //         grid: {
        //             left: "3%",
        //             right: "4%",
        //             bottom: "3%",
        //             containLabel: true,
        //         },                
        //         xAxis: {
        //             type: "category",
        //             data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        //         },
        //         yAxis: {
        //             type: "value",
        //         },
        //         series: [                    
        //             {
        //                 itemStyle: {
        //                     color:'#FFC66E'
        //                 },                           
        //                 data: [120, 200, 150, 80, 70, 110, 130],
        //                 type: "bar",
        //                 showBackground: true,
        //                 backgroundStyle: {
        //                     color: "rgba(180, 180, 180, 0.2)",
        //                 },
        //             },
        //         ],
        //     };

        //     option && myChart.setOption(option);
        // },
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