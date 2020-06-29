const {createLogger, format, transports} = require("winston"); //记录日志

// 自定义日志格式，添加时间
const myFormat = format.printf(log => {
    return `${log.timestamp} ${log.level}: ${log.message}`
})
const logger = createLogger({ // 创建日志记录对象
    level: "info", //日志类别，info，warn，error等
    // format: winston.format.simple(), // 指定日志输出的格式，默认json
    format: format.combine(// 使用组合的方式给日志添加时间
        format.timestamp(),
        myFormat
    ),
    transports:[
        new transports.Console(),//把日志输出在控制台
        new transports.File({ // 指定输出日志文件
            filename: "./logs/log.log"
        })
    ]
});

export default logger