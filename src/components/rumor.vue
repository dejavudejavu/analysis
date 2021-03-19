<template>
    <div class="c-mains" style='top:112px'>

    <!-- 左侧 -->
    <div class="left">
        <div class="d-i left-items" v-if="leftState == 1">
            <c-box class="c-l-item bottom" v-for="item in leftData" :key="item.name" style=" height: 589px;width: 972px;">
                <template v-slot:main>
                    <div class="c-l-title" style='background-size: cover;width: 100%;height: 5.8%;'>
                        <span>
                            {{item.name}}
                        </span>
                    </div>
                    <div style='width:400px;height:400px' id='chart0'>

                    </div>
                </template>
            </c-box>
        </div>
    </div>

    <!-- 右侧 -->
    <div class="right" style='width: 501px;'>
        <!-- 业务系统安全事件 -->
        <c-box class="c-r-box c-r-box1 rightpart"  >
            <template v-slot:main>
                <img src="../../public/images/chartbg_head.png" style='float: left;margin-top: 2px;'/>
                <div class="c-r-title">
                    谣言高频词
                </div>
                <div style='width:200px;height:200px' id='chart1'>

                </div>
            </template>
        </c-box>
        <c-box class="c-r-box c-r-box1  rightpart" >
            <template v-slot:main>
                <img src="../../public/images/chartbg_head.png"  style='float: left;margin-top: 2px;'/>
                <div class="c-r-title">
                    提及主体
                </div>
                <div style='width:200px;height:200px' id='chart2'>

                </div>
            </template>
        </c-box>
        <!-- 零部件安全事件 -->
    </div>
    <!-- 下侧 -->
    <!-- 中间 -->
    </div>
</template>

<script scoped>
export default {
    data(){
        return {
            texts:{
                title:'新冠'
            },
            attackType:1,
            eventTotals:[],
            deviceTotals:[],
            leftState:1,
            leftData :[
                {
                    name: "谣言量变化趋势",
                    value: 0,
                    unit:'次'
                }
            ]
        }
    },
    mounted(){
        this.yaoyan()
        this.mentioned()
        this.gaopin()
    },
    methods:{
        yaoyan(){
            var chartDom = document.getElementById('chart0');
            var myChart = this.$echarts.init(chartDom);
            var option;

            var base = +new Date(1988, 9, 3);
            var oneDay = 24 * 3600 * 1000;

            var data = [[base, Math.random() * 300]];

            for (var i = 1; i < 20000; i++) {
                var now = new Date(base += oneDay);
                data.push([
                    [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
                    Math.round((Math.random() - 0.5) * 20 + data[i - 1][1])
                ]);
            }

            option = {
                tooltip: {
                    trigger: 'axis',
                    position: function (pt) {
                        return [pt[0], '10%'];
                    }
                },
                title: {
                    left: 'center',
                    text: '大数据量面积图',
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
                    type: 'time',
                    boundaryGap: false
                },
                yAxis: {
                    type: 'value',
                    boundaryGap: [0, '100%']
                },
                dataZoom: [{
                    type: 'inside',
                    start: 0,
                    end: 20
                }, {
                    start: 0,
                    end: 20
                }],
                series: [
                    {
                        name: '模拟数据',
                        type: 'line',
                        smooth: true,
                        symbol: 'none',
                        areaStyle: {},
                        data: data
                    }
                ]
            };

            option && myChart.setOption(option);

        },
        mentioned(){
            var chartDom = document.getElementById('chart1');
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
        },
        gaopin(){
            var chartDom = document.getElementById('chart2');
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
        },
    }

}
</script>

<style scoped>
.bottom {
    margin-bottom: 36.1px !important;
    height: 117px;
}
.rightpart{
    margin-top: 0px;
    height: 288.6px;
}
</style>