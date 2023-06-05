module.exports = {
    plugins: {
        autoprefixer: {},
        "postcss-pxtorem": {
            "rootValue": 75,//750宽的画稿
            "propList": ["*"]
        }
    }
}