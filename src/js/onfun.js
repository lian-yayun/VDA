import * as echarts from 'echarts';
import 'echarts-gl';
import data from "../json/flights2.json";
import china from "../json/china";
var linesname = [];
(function () {

    var chartDom = document.getElementById('world');
    var myChart = echarts.init(chartDom);
    var option;
    var airports = data.airports.map(function (item) {
        return {
            coord: [item[3], item[4]]
        };
    });
    function getAirportCoord(idx) {
        return [data.airports[idx][3], data.airports[idx][4]];
    }
    // Route: [airlineIndex, sourceAirportIndex, destinationAirportIndex]
    var routesGroupByAirline = {};
    data.routes.forEach(function (route) {
        var airline = data.airlines[route[0]];
        var airlineName = airline[0];
        if (!routesGroupByAirline[airlineName]) {
            routesGroupByAirline[airlineName] = [];
        }
        routesGroupByAirline[airlineName].push(route);
    });
    linesname = Object.keys(routesGroupByAirline)
    var pointsData = [];
    data.routes.forEach(function (airline) {
        pointsData.push(getAirportCoord(airline[1]));
        pointsData.push(getAirportCoord(airline[2]));
    });
    var series = data.airlines.map(function (airline) {
        var airlineName = airline[0];
        var routes = routesGroupByAirline[airlineName];
        if (!routes) {
            return null;
        }
        return {
            type: 'lines3D',
            name: airlineName,//对应legend
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
            blendMode: 'lighter',
            data: routes.map(function (item) {
                // console.log([airports[item[1]].coord, airports[item[2]].coord],33)
                return [airports[item[1]].coord, airports[item[2]].coord];
            })
        };
    })
        .filter(function (series) {
            return !!series;
        });
    series.push({
        type: 'scatter3D',
        coordinateSystem: 'globe',
        blendMode: 'lighter',
        symbolSize: 2,
        itemStyle: {
            color: 'rgb(50, 50, 150)',
            opacity: 0.2
        },
        data: pointsData
    });
    option = {
        legend: {
            selectedMode: 'single',
            left: 'left',
            data: linesname,
            orient: 'vertical',
            textStyle: {
                color: '#fff'
            }
        },
        globe: {
            // environment: require('../assets/starfield.jpg') ,
            baseTexture: require('../assets/worldbth.jpg'),
            heightTexture: require('../assets/4k.jpg'),
            displacementScale: 0.25,
            displacementQuality: 'medium',
            shading: 'lambert',
            globeRadius: 90,
            globeOuterRadius: 150,
            light: {
                ambient: {
                    intensity: 0.7
                },
                main: {
                    intensity: 0.6
                }
            },
            viewControl: {
                autoRotate: false
            }
        },
        series: series
    };
    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
    window.addEventListener('keydown', function () {
        series.forEach(function (series, idx) {
            myChart.dispatchAction({
                type: 'lines3DToggleEffect',
                seriesIndex: idx
            });
        });
    });
})();
(function () {
    var chartDom = document.getElementById('item2-body');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        grid: {
            left: '10%',
            top: '12%',
            bottom: 10,
            containLabel: true
        },
        xAxis: {
            type: 'value',
            position: 'top',
            splitLine: {
                show: false
            },
            axisLabel: {
                show: false,
            },
        },
        yAxis: {
            type: 'category',
            axisTick: {
                show: false
            },
            axisLabel: {
                color: '#E6F7FF',
                fontSize: 16,
            },
            data: [...linesname],
            // offset: 30,
            boundaryGap: true,
            inverse: true
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130, 124, 90, 140],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(230,247,255,0.65)',
                },
                barWidth: 4,
                markPoint: {
                    symbol: 'rect',
                },
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(
                        1, 0, 0, 0,   // 表示从上到下
                        [
                            { offset: 1, color: 'rgba(211,213,213,0)' },
                            { offset: 0, color: '#1BF8C3' }
                        ]),
                },
                realtimeSort: true
            }
        ]
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var chartDom = document.getElementById('item3-body');
    var myChart = echarts.init(chartDom);
    var option;
    option = {
        title: {
            text: '世界航班排行',
            left: '10%',
            textStyle: {
                color: '#fff',
                textShadowBlur: 1,
                textShadowColor: '#0075ff',
                textShadowOffsetX: 1,
                textShadowOffsetY: 1,
            },
        },

        radar: {
            center: ['50%', '50%'],
            nameGap: 5,
            // shape: 'circle',
            indicator: [
                { name: '日本', max: 6500 },
                { name: '中国', max: 16000 },
                { name: '美国', max: 30000 },
                { name: '巴西', max: 38000 },
                { name: '加拿大', max: 25000 }
            ],
            splitLine: {
                show: false
            },
            splitArea: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        series: [
            {
                name: 'Budget vs spending',
                type: 'radar',
                data: [
                    {
                        value: [5000, 14000, 28000, 26000, 21000],
                        name: 'Actual Spending',
                        areaStyle: {
                            color: 'rgba(249, 220, 89, 0.2)'
                        },
                        itemStyle: {
                            color: 'rgba(249, 220, 89, 20)'
                        }
                    }
                ]
            }
        ]
    };
    option && myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();
(function () {
    var myChart = echarts.init(document.getElementById('china'));
    echarts.registerMap('china', china);
    var option;
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
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "广东", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "海南", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "福建", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "江苏", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "浙江", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "北京", itemStyle: {
                color: "rgba(8,18,29,255)"
            }
        }, {
            name: "上海", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "台湾", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        }, {
            name: "新疆", itemStyle: {
                color: "rgba(11,19,28,255)"
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
                color: "rgba(11,19,28,255)"
            }
        },
        {
            name: "黑龙江", itemStyle: {
                color: "rgba(11,19,28,255)"
            }
        },
        {
            name: "吉林", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },
        {
            name: "江西", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },
        {
            name: "湖南", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },
        {
            name: "安徽", itemStyle: {
                color: "rgba(12,22,35,255)"
            }
        },

    ]
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
    mapdata.map(v => {
        return v.value[2] = (100 * Math.random()).toFixed()
    })
    option = {
        geo3D: {
            map: "china",
            regions: [{
                name: '西藏',
                itemStyle: {
                    color: '#BA99C0',
                    opacity: 1,
                    // borderWidth: 3,
                    // borderColor: '#1BF8C3'
                },
                label: {
                    show: true,
                    color: "#FFFFFF",
                },
                emphasis: {
                    itemStyle: {
                        color: '#BA99C0'
                    },
                    label: {
                        show: true,
                        textStyle: {
                            color: '#db656b',
                        }
                    },
                },

            }],
            roam: true,
            boxDepth: 'auto',
            itemStyle: {
                // color: "rgba(25,37,47,255)",
                // borderColor: 'rgb(105,135,160)',
                color: "#9871A0",
                borderColor: '#595383',
                borderWidth: 0.5,
                opacity: 0.8
            },
            // label: {
            //     show: true,
            //     fontSize: 16,
            //     color: '#fff',
            //     // formatter: function (params) {
            //     //   // console.log(params)
            //     //   return params.name
            //     // }
            // },
            emphasis: {
                label: {
                    show: true,
                    color: "#FFFFFF",
                },
                itemStyle: {
                    color: '#BA99C0'
                },
            },
            shading: 'realistic',
            light: {
                //光照阴影
                main: {
                    color: '#fff', //光照颜色
                    intensity: 0.5, //光照强度
                    shadowQuality: 'high', //阴影亮度
                    shadow: true, //是否显示阴影
                    alpha: 30,
                    beta: 0,
                },
                ambient: {
                    color: '#fff', //光照颜色
                    intensity: 0.7,
                },
            },
            // regionHeight: 5,
            // groundPlane: {
            //     show: true,
            //     color: 'rgb(42,52,52)'
            // },

            // postEffect: {
            //     enable: true,
            //     bloom: {
            //         enable: true,
            //         bloomIntensity: 0.1,
            //     }
            // },
        },
        series: [
            // bar
            {
                type: 'bar3D',
                coordinateSystem: 'geo3D',
                zlevel: 3,
                barSize: 1, // 柱子粗细
                shading: 'lambert',
                itemStyle: {
                    color: '#FD8A99'
                },
                // label: {
                //     show: true,
                //     position: 'top',
                //     textStyle: {
                //         color: '#fff',
                //         backgroundColor: 'transparent'
                //     },
                //     formatter(params) {
                //         return params.value[2]
                //     }
                // },
                data: mapdata,
            }

        ]
    }
    option && myChart.setOption(option);
    var count = 0;
    let regions = setInterval(function () {
        option.geo3D.regions[0].name = geo3ditem[count].name;
        myChart.setOption(option);
        count++;
        if (count == geo3ditem.length) {
            count = 0;
        }
    }, 2000);
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})()
