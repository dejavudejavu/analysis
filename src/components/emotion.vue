<template>
    <div class="c-mains c-m-box" style="top: 112px">
        <div class="c-m-flex-2 c-m-flex;" style="margin-right: 30px">
            <c-box style="width: 100%; height: 100%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center" class="color-title">传播途径</div>
                    </div>
                    <div id="emoPie" class="full-box"></div>
                </template>
            </c-box>
        </div>
        <div class="c-m-flex-1 c-m-flex">
            <c-box
              
                style="width: 100%; height: 33.33%"
                v-for="item in leftData"
                :key="item.name"
            >
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center"   class="color-title">{{ item.name }}</div>
                    </div>
                    <img :src="word" class="imgStyle" />
                </template>
            </c-box>
            <c-box style="width: 100%; height: 35.66%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center">转发热度</div>
                    </div>
                </template>
            </c-box>
            <c-box style="width: 100%; height: 30%; margin-top: 3.33%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center">层级分析-1</div>
                    </div>
                </template>
            </c-box>
            <c-box style="width: 100%; height: 30%; margin-top: 3.33%">
                <template v-slot:main>
                    <div class="c-list-head headtext" style="padding-left: 0">
                        <div style="text-align: center">层级分析-2</div>
                    </div>
                </template>
            </c-box>
        </div>

        <!-- 左侧 -->
        <div class="left" style="width: 836px; left: 220px" v-if="false">
            <c-box
                class="c-r-box c-r-box1"
                style="margin-top: 0px; height: 938px"
            >
                <template v-slot:main>
                    <img
                        src="../../public/images/chartbg_head.png"
                        style="float: left; margin-top: 2px"
                    />
                    <div class="c-r-title">情感值</div>
                    <!-- <div id="emoPie" style="height: 400px; width: 400px"></div> -->
                </template>
            </c-box>
        </div>

        <!-- 右侧 -->
        <div v-if="false" class="right" style="width: 627px; right: 220px">
            <!-- 业务系统安全事件 -->
            <div
                class="d-i left-items"
                v-if="leftState == 1"
                style="width: 100%"
            >
                <c-box
                    class="c-l-item bottom"
                    v-for="item in leftData"
                    :key="item.name"
                >
                    <template v-slot:main>
                        <div
                            class="c-l-title"
                            style="background-size: cover; width: 100%"
                        >
                            <span>
                                {{ item.name }}
                            </span>
                        </div>
                        <!-- <div class="num-font c-l-num">
                        {{item.value}}
                    </div>
                    <div></div> -->
                        <img :src="word" class="imgStyle" />
                    </template>
                </c-box>
            </div>
        </div>
        <!-- 下侧 -->
        <div class="c-main-bottom"></div>
        <!-- 中间 -->
    </div>
</template>

<script scoped>
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
                legend: {
                    top: "bottom",
                },
                toolbox: {
                    show: true,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        restore: { show: true },
                        saveAsImage: { show: true },
                    },
                },
                series: [
                    {
                        name: "面积模式",
                        type: "pie",
                        radius: [50, 250],
                        center: ["50%", "50%"],
                        roseType: "area",
                        itemStyle: {
                            borderRadius: 8,
                        },
                        data: [
                            { value: 40, name: "rose 1" },
                            { value: 38, name: "rose 2" },
                            { value: 32, name: "rose 3" },
                            { value: 30, name: "rose 4" },
                            { value: 28, name: "rose 5" },
                            { value: 26, name: "rose 6" },
                            { value: 22, name: "rose 7" },
                            { value: 18, name: "rose 8" },
                        ],
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
    margin-bottom: 11.1px !important;
    height: 305.6px;
    width: 100%;
}
.imgStyle {
    height: 80%;
}
</style>