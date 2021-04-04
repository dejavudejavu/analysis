<template>
    <div class="c-mains" style="top: 142px;left: 50px; right: 50px;">
        <!-- bottom list -->
        <div class="effect-list">
            <div class="list-title" style="top: -57px">热帖排行榜</div>
            <div class="c-main-top" style="transform: none;left: auto; right: 20px;top: -41px;">
                <div class="" >
                    <div class="c-main-t">选择平台</div>
                    <div class="c-select text-over" @click="listShow = true">{{platform}}</div>
                    <c-scroll class="c-select-items" style="height:71px" v-show="listShow">
                        <template v-slot:main>
                            <div class="c-select-item" v-for="item in platforms" :key="item.name"
                                @click="handleClick(item)">{{item.name}}</div>
                        </template>
                    </c-scroll>
                </div>
            </div>            
            <div class="c-list" style="top: -51px;height:100%" v-loading="loading">
                <!-- head -->
                <c-box style="width: 100%">
                    <template v-slot:main>
                        <div class="c-list-head">
                            <div
                                v-for="(item, index) in listHead"
                                ::key="item.name"
                                :style="item.style"
                                :key="index"
                                style="color: white;text-align: center"
                            >
                            <i :class="item.icon"></i>
                                {{ item.name }}
                            </div>
                        </div>
                    </template>
                </c-box>
                <c-scroll
                    class="c-list-main"
                    style="height: 874px"
                    ref="list" 
                >
                    <template v-slot:main>
                        <div>
                            <div
                                v-for="item in itemsData"
                                :key="item.id"
                                class="c-list-item"
                                style="height: 45px"
                            >
                                <img src="../assets/au.png" v-if='item.rank==1' class='medal'/>
                                <img src="../assets/silver.png" v-else-if='item.rank==2' class='medal'/>
                                <img src="../assets/cu.png" v-else-if='item.rank==3' class='medal'/>                            
                                <div class="c-list-text t-over" :style="listHead[0].style">
                                    <div class="num-font c-l-num">


                                        {{ item.rank }}
                                    </div> 
                                </div>                                                              
                                <div class="c-list-text t-over" :style="listHead[1].style" >   
                                    <div v-if="item.content!=''"  class="c-list-text t-over">
                                        <el-link :href="item.url" target="_blank" class="c-list-text t-over" >{{ item.content }}</el-link>
                                    </div>
                                    <div v-else>
                                        <i class="el-icon-warning"></i>
                                        <el-link :href="item.url" target="_blank">内容为视频</el-link>
                                    </div>
                                </div>
                                <div class="c-list-text t-over" :style="listHead[2].style" >
                                    {{ item.upper }}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[3].style">
                                    {{ item.comment }}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[4].style">
                                    {{ item.thumbUp }}
                                </div>
                                <div class="c-list-text t-over" :style="listHead[5].style">
                                    <div v-if='item.rePost'>
                                        {{ item.rePost}}                                        
                                    </div>
                                    <div v-else>
                                        暂无数据
                                    </div>
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
    data() {
        return {
            loading: false,
            platform:'微博',
            listShow:false,
            platforms:[
                {
                    name:'微博',
                    id:'weibo'
                },
                {
                    name:'知乎',
                    id:'zhihu'
                },
                {
                    name:'今日头条',
                    id:'toutiao'
                }
            ],
            dayVal:10,
            days:[1,2,3,4,5,6,7,8,9],
            texts: {
                title: "今日头条",
            },
            attackType: 1,
            eventTotals: [],
            deviceTotals: [],
            leftState: 1,
            itemsData: [],
            listHead: [
            {
                name: "排名",
                style: {
                    flex: 1,
                    textAlign: 'center'
                },
                icon:'el-icon-medal-1'
            },
            {
                name: "内容",
                style: {
                    flex: 10,
                },
                icon: 'el-icon-document'
            },
            {
                name: "发帖人",
                style: {
                    flex: 1,
                    textAlign: 'center'
                },
                icon:'el-icon-user'
            },            
            {
                name: "评论数",
                style: {
                    flex: 1,
                    textAlign: 'center'
                },
                icon: 'el-icon-chat-dot-round'
            },
            {
                name: "点赞数",
                style: {
                    flex: 1,
                    textAlign: 'center'
                },
                icon:'el-icon-thumb'
            },
            {
                name: "转发数",
                style: {
                    flex: 1,
                    textAlign: 'center'
                },
                icon:'el-icon-share'
            }
            ],
            leftData: [
                {
                    name: "曝光量",
                    value: 0,
                    unit: "次",
                },
                {
                    name: "真实性",
                    value: 0,
                    unit: "百分比",
                },
                {
                    name: "积极情感值",
                    value: 0,
                    unit: "百分比",
                },
                {
                    name: "参与用户人数",
                    value: 0,
                    unit: "人",
                },
            ],
        };
    },
    mounted() {
        this.getData('weibo')
    },
    methods: {
        getData(id){
            this.axios.get('http://159.75.23.139:3000/'+id+'Rank.json').then((res)=>{
                var data = res.data
                this.loading=false
                this.itemsData=data
            }).catch((err)=>{
                console.log(err)
            })
        },
        handleClick(item) {
            this.loading=true
            this.platform=item.name
            this.listShow=false
            this.getData(item.id)
        },     
        amount() {
            var chartDom = document.getElementById("main");
            var myChart = this.$echarts.init(chartDom);
            var option;

            option = {
                xAxis: {
                    type: "category",
                    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
                },
                yAxis: {
                    type: "value",
                },
                series: [
                    {
                        data: [820, 932, 901, 934, 1290, 1330, 1320],
                        type: "line",
                        smooth: true,
                    },
                ],
            };

            option && myChart.setOption(option);
        },
    },
};
</script>

<style lang='scss' scoped>
.medal{
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
}
.bottom {
    margin-bottom: 36.1px !important;
    height: 117px;
}
.effect-list {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
}
.el-link{
    width: 100%;
    color:#afafaf;
    /deep/span{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }     
}
</style>