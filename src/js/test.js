import * as echarts from "echarts";
import china from '../assets/map/json/china.json';
import $ from "jquery";
import 'echarts-gl'
// 柱状图2
(function () {
    var myChart = echarts.init(document.querySelector('.middle .chart'));
    echarts.registerMap('china', china);
    var mapdata = [
        { name: '台湾', value: [121.5135, 25.0308] },
        { name: '黑龙江', value: [127.9688, 45.368] },
        { name: '内蒙古', value: [110.3467, 41.4899] },
        { name: "吉林", value: [125.8154, 44.2584] },
        { name: '北京市', value: [116.4551, 40.2539] },
        { name: "辽宁", value: [123.1238, 42.1216] },
        { name: "河北", value: [114.4995, 38.1006] },
        { name: "天津", value: [117.4219, 39.4189] },
        { name: "山西", value: [112.3352, 37.9413] },
        { name: "陕西", value: [109.1162, 34.2004] },
        { name: "甘肃", value: [103.5901, 36.3043] },
        { name: "宁夏", value: [106.3586, 38.1775] },
        { name: "青海", value: [101.4038, 36.8207] },
        { name: "新疆", value: [87.9236, 43.5883] },
        { name: "西藏", value: [91.11, 29.97] },
        { name: "四川", value: [103.9526, 30.7617] },
        { name: "重庆", value: [108.384366, 30.439702] },
        { name: "山东", value: [117.1582, 36.8701] },
        { name: "河南", value: [113.4668, 34.6234] },
        { name: "江苏", value: [118.8062, 31.9208] },
        { name: "安徽", value: [117.29, 32.0581] },
        { name: "湖北", value: [114.3896, 30.6628] },
        { name: "浙江", value: [119.5313, 29.8773] },
        { name: "福建", value: [119.4543, 25.9222] },
        { name: "江西", value: [116.0046, 28.6633] },
        { name: "湖南", value: [113.0823, 28.2568] },
        { name: "贵州", value: [106.6992, 26.7682] },
        { name: "云南", value: [102.9199, 25.4663] },
        { name: "广东", value: [113.12244, 23.009505] },
        { name: "广西", value: [108.479, 23.1152] },
        { name: "海南", value: [110.3893, 19.8516] },
        { name: '上海', value: [121.4648, 31.2891] },
    ]
    var geo3ditem = [
        {
            name: "西藏", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "青海", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "四川", itemStyle: {
                color: "rgba(11,19,28,255)"
            }
        }, {
            name: "云南", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        }, {
            name: "贵州", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        }, {
            name: "甘肃", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "宁夏", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        }, {
            name: "陕西", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "河南", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "山东", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "湖北", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "重庆", itemStyle: {
                color: "rgba(11,19,28,255)"//
            }
        }, {
            name: "山西", itemStyle: {
                color: "rgba(8,18,29,255)"
            }
        }, {
            name: "广西", itemStyle: {
                color: "rgba(40,66,92,255)"
            }
        }, {
            name: "广东", itemStyle: {
                color: "rgba(71,116,144,255)"
            }
        }, {
            name: "海南", itemStyle: {
                color: "rgba(98,172,203,255)"
            }
        }, {
            name: "福建", itemStyle: {
                color: "rgba(71,116,144,255)"
            }
        }, {
            name: "江苏", itemStyle: {
                color: "rgba(74,130,166,255)"
            }
        }, {
            name: "浙江", itemStyle: {
                color: "rgba(71,116,144,255)"
            }
        }, {
            name: "北京", itemStyle: {
                color: "rgba(8,18,29,255)"
            }
        }, {
            name: "上海", itemStyle: {
                color: "rgba(71,116,144,255)"
            }
        }, {
            name: "台湾", itemStyle: {
                color: "rgba(98,172,203,255)"
            }
        }, {
            name: "新疆", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        },
        {
            name: "天津", itemStyle: {
                color: "rgba(8,18,29,255)"
            }
        },
        {
            name: "河北", itemStyle: {
                color: "rgba(8,18,29,255)"
            }
        },
        {
            name: "辽宁", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },
        {
            name: "内蒙古", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        },
        {
            name: "黑龙江", itemStyle: {
                color: "rgba(25,37,47,255)"
            }
        },
        {
            name: "吉林", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },
    ]
    var yAxisData = []
    for (const value of mapdata) {
        yAxisData.push(value.name)
    }
    var linesdata2 = [119.007558, 25.431011,]
    var year = ['2019', '2020', '2021', '2022', '2023', '2024']
    var colors = [
        ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],

        ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C", "#F49F42"],
    ];
    var colorindex = 0
    var lines = []
    for (let i = 0; i < mapdata.length; i++) {
        lines[i] = [mapdata[i].value]
    }
    var maplabel = mapdata.map((v) => {
        return { name: v.name }
    })


    var option = {
        baseOption: {
            animation: true,
            animationDuration: 1000,
            animationEasing: 'cubicInOut',
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'cubicInOut',
            geo3D: {
                map: "china",
                regions: geo3ditem,
                // boxWidth: 50,
                // boxHeight: 20,
                left: "0%",
                roam: true,
                boxDepth: 'auto',
                regionHeight: 5,
                // label: {
                //     show: true,
                //     // color: '#fff',
                //     // distance: 50,
                //     // fontSize: 15
                // },
                itemStyle: {
                    color: 'rgba(24,45,64,255)',
                    borderColor: 'rgba(127,204,230,255)',
                    borderWidth: 1,
                },
                emphasis: {
                    label: {
                        show: true,
                        color: "rgba(57,85,109,255)",
                    },
                },
                light: {
                    //光照阴影
                    main: {
                        color: '#fff', //光照颜色
                        intensity: 1.2, //光照强度
                        shadowQuality: 'high', //阴影亮度
                        shadow: true, //是否显示阴影
                        alpha: 55,
                        beta: 55,
                    },
                    ambient: {
                        intensity: 0.5,
                    },
                },
            },

            tooltip: {
                trigger: 'axis',
                backgroundColor: 'rgba(50,50,50,0.7)',
                borderColor: '#333',
                textStyle: { color: '#fff' },
                axisPointer: {
                    type: 'shadow',
                    animation: true,
                },
            },


            grid: {
                // show: true,
                right: '1%',
                top: '15%',
                bottom: '10%',
                width: '25%',

            },
            backgroundColor: "rgba(0, 0, 0, 0)",
            title: {
                subtext: '数据来自国家统计局'
            }
        },
        options: [],
        //配置属性
    }
    for (let i = 0; i < year.length; i++) {
        let linesdata = lines.map((v) =>
            v = [...v, mapdata[i].value]
        )
        option.options.push({
            title: [{
            },
            {
                id: 'statistic',
                text: year[i] + "年数据统计情况",
                // left: '50%',
                // top: '8%',
                textStyle: {
                    color: '#fff',
                    fontSize: 30
                }
            }
            ],
            series: [

                //地图线的动画效果
                {
                    type: 'lines3D',
                    coordinateSystem: 'geo3D',
                    // zlevel: 9,
                    blendMode: 'lighter',
                    effect: {
                        show: true,
                        trailWidth: 2,
                        trailLength: 0.15,
                        trailOpacity: 1,
                        trailColor: 'rgb(30, 30, 60)'
                    },
                    lineStyle: {
                        width: 1,
                        color: 'rgb(50, 50, 150)',
                        // color: 'rgb(118, 233, 241)',
                        opacity: 0.1
                    },
                    data: linesdata
                },
            ],

        })
    }
    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    function randomNum(minNum, maxNum) {
        switch (arguments.length) {
            case 1:
                return parseInt(Math.random() * minNum + 1, 10);
                break;
            case 2:
                return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
                break;
            default:
                return 0;
                break;
        }
    }
})()
