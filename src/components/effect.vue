<template>
    <div>
        <div class="c-mains" style='top:112px'>


        </div>
        <!-- bottom list -->
        <div class="c-bottom" style='top: 156px;width: 98%;position: absolute;left: 1%;'>
            <div class="list-title" style='top:-57px'>热帖排行榜</div>
            <div class="c-list"  style='top:-51px'>
                <!-- head -->
                <c-box style="width: 100%;">
                    <template v-slot:main>
                        <div class="c-list-head">
                            <div v-for="(item,index) in listHead" ::key="item.name" :style="item.style" :key='index' style="color:white">
                                {{item.name}}
                            </div>
                        </div>
                    </template>
                </c-box>
                <c-scroll class="c-list-main" style="height:1130px" ref="list" @add="scrollYEvent"
                    :state="isUpdateList">
                    <template v-slot:main>
                        <div>
                            <div v-for="item in itemsData" :key="item.id" class="c-list-item"
                                >
                                <div class="c-list-text t-over" :style="listHead[0].style">
                                    {{item.comment}}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[1].style">
                                    {{item.date}}
                                    <div class="c-list-st">{{item.vin}}</div>
                                </div>
                                <div class="c-list-text t-over" :style="listHead[2].style">
                                    {{item.reliability}}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[3].style">
                                    {{item.result}}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[4].style">
                                    <a href="https://weibo.com/" class="link"> {{item.resource}}</a>
                                </div>
                            </div>
                        </div>
                    </template>
                </c-scroll>
            </div>
        </div>
    </div>
</template>

<script>
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
            itemsData: [
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },
                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },                {
                    comment:"WIFI致癌",
                    date: "2020年1月1日",
                    reliability: "1%",
                    result: "假",
                    resource:"新浪微博"
                },
            ],
            listHead :[
                    {
                        name: "言论",
                        style: {
                            flex: 1,
                        }
                    },
                    {
                        name: "发布时间",
                        style: {
                            flex: 1
                        }
                    },
                    {
                        name: "置信度",
                        style: {
                            flex: 1
                        }
                    },
                    {
                        name: "系统判定",
                        style: {
                            flex: 1
                        }
                    },
                    {
                        name: "来源",
                        style: {
                            flex: 1
                        }
                    },
                    // {
                    //     name: "攻击类型",
                    //     style: {
                    //         flex: 1
                    //     }
                    // },
                    // {
                    //     name: "攻击位置",
                    //     style: {
                    //         flex: 1
                    //     }
                    // },
                    // {
                    //     name: "攻击IP",
                    //     style: {
                    //         flex: 1
                    //     }
                    // },
                    // {
                    //     name: "时间",
                    //     style: {
                    //         flex: 1
                    //     }
                    // },
                ],    
            leftData :[
                {
                    name: "曝光量",
                    value: 0,
                    unit:'次'
                },
                {
                    name: "真实性",
                    value: 0, 
                    unit:'百分比'
                },    
                {
                    name: "积极情感值",
                    value: 0, 
                    unit:'百分比'
                },
                {
                    name: "参与用户人数",
                    value: 0,
                    unit:'人'
                }
            ]
        }
    },
    mounted() {
        this.amount();
    },
    methods: {
        amount() {var chartDom = document.getElementById('main');
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
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'line',
                    smooth: true
                }]
            };

            option && myChart.setOption(option);            
        }
    }
}
</script>

<style scoped>
.bottom {
    margin-bottom: 36.1px !important;
    height: 117px;
}
</style>