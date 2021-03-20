<template>
    <div class="c-mains" style='top:112px'>


     
    <!-- 左侧 -->
    <div class="left">
        <div class="d-i left-items" v-if="leftState == 1">
            <c-box class="c-l-item bottom" style='width: 500px;height: 937px;'>
                <template v-slot:main>
                    <div class="c-l-title" style='background-size: cover;width: 100%;'>
                        <span>
                            转发热度
                        </span>
                    </div>
                    <div id='zhuanfa' style="position: absolute;top: 35px;left: 14px;right: 14px;bottom: 31px;display: flex;">
                    </div>
                </template>
            </c-box>
        </div>
    </div>
    <div class='right' style='width:1348px'>
        <div class="c-list" style='top:0'>
            <!-- head -->
            <c-box style="width: 100%;">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="flex:3;text-align: center;">
                            传播途径
                        </div>
                        <div style="flex:1;text-align: center;">
                            层级分析
                        </div>                        
                    </div>
                </template>
            </c-box>
        <!-- 右侧 -->
                    <div>
                        <div class="c-list-item" style='height:904px;padding-left:0;'>
                            <div class="c-list-text t-over " style='flex=3;height:100%;width:75%;border-right: 1px solid #427f92;' id='chart1'>
                               
                            </div>
                            <div class="c-list-text t-over " style="flex=1;height:100%;width:25%"  >
                                <div id='chart2' style='height:320px;width:100%;margin-bottom:20px'></div>
                                <div id='chart3'  style='height:320px;width:100%'></div>
                                <!-- <div class="c-list-st"></div> -->
                            </div>
                            <!-- <div class="c-list-text t-over" :style="listHead[2].style">
                                {{item.reliability}}
                            </div>
                            <div class="c-list-text t-over" :style="listHead[3].style">
                                {{item.result}}
                            </div>
                            <div class="c-list-text t-over" :style="listHead[4].style">
                                <a href="https://weibo.com/" class="link"> {{item.resource}}</a>
                            </div> -->
                        </div>
                    </div>
        </div>   
    </div>


    <!-- 中间 -->
    </div>
</template>

<script>
import $ from 'jquery'
export default {
 data(){
     return {
         isUpdateList:true,
         leftState:1,
         listHead:[
        {
            name: "传播途径",
        },
        {
            name: "层级分析",
        }
        ],
        itemsData:[
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                }]

     }
 },
 mounted() {
     this.zhuanfa(), 
     this.guanxi(), 
     this.bili(), 
     this.cishu()
 },
 methods:{
     scrollYEvent(){

     },
     zhuanfa(){
        var chart0=this.$echarts.init(document.getElementById('zhuanfa'));
        var base = +new Date(1968, 9, 3);
        var oneDay = 24 * 3600 * 1000;
        var date = [];
        var data = [Math.random() * 300];

        for (var i = 1; i < 20000; i++) {
            var now = new Date(base += oneDay);
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
        }

        var option = {
            tooltip: {
                // trigger: 'axis',
                // position: function (pt) {
                //     return [pt[0], '10%'];
                // }
            },
            title: {
                // left: 'center',
                // text: '大数据量面积图',
            },
            toolbox: {
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [{
                type: 'inside',
                start: 0,
                end: 10
            }, {
                start: 0,
                end: 10
            }],
            series: [
                {
                    name: '模拟数据',
                    type: 'line',
                    symbol: 'none',
                    sampling: 'lttb',
                    itemStyle: {
                        color: 'rgb(255, 70, 131)'
                    },
                    areaStyle: {
                        color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgb(255, 158, 68)'
                        }, {
                            offset: 1,
                            color: 'rgb(255, 70, 131)'
                        }])
                    },
                    data: data
                }
            ]
        };
        option && chart0.setOption(option);
     },
     guanxi(){
        var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

        var chartDom = document.getElementById('chart1');
        var myChart = this.$echarts.init(chartDom);
        var option;

        myChart.showLoading();
        $.getJSON(ROOT_PATH + '/data/asset/data/les-miserables.json', function (graph) {
            myChart.hideLoading();
            console.log(graph);

            option = {
                tooltip: {},
                legend: [{
                    data: graph.categories.map(function (a) {
                        return a.name;
                    })
                }],
                series: [
                    {
                        name: 'Les Miserables',
                        type: 'graph',
                        layout: 'none',
                        data: graph.nodes,
                        links: graph.links,
                        categories: graph.categories,
                        roam: true,
                        label: {
                            show: true,
                            position: 'right',
                            formatter: '{b}'
                        },
                        labelLayout: {
                            hideOverlap: true
                        },
                        scaleLimit: {
                            min: 0.4,
                            max: 2
                        },
                        lineStyle: {
                            color: 'source',
                            curveness: 0.3
                        }
                    }
                ]
            };

            myChart.setOption(option);
        });

        option && myChart.setOption(option);         
     },
     bili(){
        var chartDom = document.getElementById('chart2');
        var myChart = this.$echarts.init(chartDom);
        var option;

        option = {
            title: {
                // text: '南丁格尔玫瑰图',
                // subtext: '纯属虚构',
                // left: 'center'
            },
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                left: 'center',
                top: 'bottom',
                data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
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
                    name: '半径模式',
                    type: 'pie',
                    radius: [20, 140],
                    center: ['25%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 5
                    },
                    label: {
                        show: false
                    },
                    emphasis: {
                        label: {
                            show: true
                        }
                    },
                    data: [
                        {value: 40, name: 'rose 1'},
                        {value: 33, name: 'rose 2'},
                        {value: 28, name: 'rose 3'},
                        {value: 22, name: 'rose 4'},
                        {value: 20, name: 'rose 5'},
                        {value: 15, name: 'rose 6'},
                        {value: 12, name: 'rose 7'},
                        {value: 10, name: 'rose 8'}
                    ]
                },
                {
                    name: '面积模式',
                    type: 'pie',
                    radius: [20, 140],
                    center: ['75%', '50%'],
                    roseType: 'area',
                    itemStyle: {
                        borderRadius: 5
                    },
                    data: [
                        {value: 30, name: 'rose 1'},
                        {value: 28, name: 'rose 2'},
                        {value: 26, name: 'rose 3'},
                        {value: 24, name: 'rose 4'},
                        {value: 22, name: 'rose 5'},
                        {value: 20, name: 'rose 6'},
                        {value: 18, name: 'rose 7'},
                        {value: 16, name: 'rose 8'}
                    ]
                }
            ]
        };

        option && myChart.setOption(option);

     },
     cishu(){
        var chartDom = document.getElementById('chart3');
        var myChart = this.$echarts.init(chartDom);
        var option;

        option = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)'
                }
            }]
        };

        option && myChart.setOption(option);         
     }
 }
}
</script>

<style scoped>
.headtext{
    color:white
}
.bottom {
    margin-bottom: 0 !important;
    height: 117px;
}
</style>