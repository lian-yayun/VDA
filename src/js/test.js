let ws = null;
let timer = null;

function connect() {
    ws = new WebSocket('ws://localhost:8080');
    // 监听 WebSocket 连接的状态变化
    ws.onopen = () => {
        console.log('WebSocket 连接已建立');
        clearTimeout(timer);
    };
    ws.onclose = (event) => {
        console.log('WebSocket 连接已断开，状态码：', event.code);
        // 连接断开后 5 秒自动尝试重新连接
        timer = setTimeout(() => {
            connect();
        }, 5000);
    };
    ws.onerror = (event) => {
        console.log('WebSocket 出错了：', event);
        ws.close();
    };
}

connect();

let webSocket = null; // WebSocket 对象
let reconnectTimer = null; // 重连定时器
let isClosed = false; // 是否手动关闭

// 初始化 WebSocket 对象
function initWebSocket() {
    webSocket = new WebSocket('ws://localhost:8080');

    // 监听 WebSocket 连接建立事件
    webSocket.onopen = () => {
        console.log('WebSocket 连接已建立');
        clearInterval(reconnectTimer);
    };

    // 监听 WebSocket 连接关闭事件
    webSocket.onclose = () => {
        console.log('WebSocket 连接已关闭');
        if (!isClosed) {
            // 只有未手动关闭才尝试重连
            reconnectTimer = setInterval(() => {
                console.log('尝试重新连接 WebSocket');
                initWebSocket();
            }, 3000);
        }
    };

    // 监听 WebSocket 出错事件
    webSocket.onerror = () => {
        console.log('WebSocket 出错');
        // 连接出错时主动关闭
        webSocket.close();
        isClosed = true;
    };
}

initWebSocket();

