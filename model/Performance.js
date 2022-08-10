
    import { DataTypes } from "sequelize"
    import { sequelize } from '../utils/Conn.js'
    export default sequelize('performance', 
    {
        fetchTime: {
        allowNull: true,
                    comment: "上报时间",
                    type: DataTypes.DATE,
                    unique: false,
                    primaryKey: false
    },
        finalScreenshot: {
        allowNull: true,
                    comment: "页面加载完成后的截屏",
                    type: DataTypes.TEXT,
                    unique: false,
                    primaryKey: false
    },
        firstContentfulPaint: {
        allowNull: true,
                    comment: "首次内容渲染时间标记了渲染出首个文本或首张图片的时间",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        firstMeaningfulPaint: {
        allowNull: true,
                    comment: "首次有效渲染时间测量了网页主要内容开始对用户显示的时间",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        id: {
        allowNull: true,
                    comment: "",
                    type: DataTypes.INTEGER,
                    unique: false,
                    primaryKey: true
    },
        interactive: {
        allowNull: true,
                    comment: "网页需要多长时间才能提供完整交互功能",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        largestContentfulPaint: {
        allowNull: true,
                    comment: "渲染出最大文本或图片的时间",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        maxPotentialFid: {
        allowNull: true,
                    comment: "您的用户可能会遇到的最长首次输入延迟是用时最长的任务的耗时",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        performance: {
        allowNull: true,
                    comment: "性能",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        requestedUrl: {
        allowNull: true,
                    comment: "请求地址",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        scenes: {
        allowNull: true,
                    comment: "场景",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        seo: {
        allowNull: true,
                    comment: "SEO",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        siteId: {
        allowNull: true,
                    comment: "站点",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        speedIndex: {
        allowNull: true,
                    comment: "速度指数表明了网页内容的可见填充速度",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        terminalId: {
        allowNull: true,
                    comment: "终端",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
        totalBlockingTime: {
        allowNull: true,
                    comment: "首次内容渲染 (FCP) 和可交互时间之间的所有时间段的总和",
                    type: DataTypes.STRING,
                    unique: false,
                    primaryKey: false
    },
    })