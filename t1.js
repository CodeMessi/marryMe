// 定义一个简单的 JavaScript 函数
function sayHello() {
    console.log("你好,世界!");
}

// 声明变量的几种方式
let name = "张三";
const age = 25;
var city = "北京";

// 数组操作
let fruits = ["苹果", "香蕉", "橙子"];
fruits.push("梨");

// 对象示例
let person = {
    name: "李四",
    age: 30,
    city: "上海",
    sayHi: function() {
        console.log("大家好!");
    }
};

// 条件语句
if (age > 18) {
    console.log("成年人");
} else {
    console.log("未成年");
}

// 循环示例
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '你好！这是一条来自 JavaScript 的消息！';
}

function moveButton(button) {
    // 随机移动"不愿意"按钮的位置
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = window.innerHeight + 'px';
    heart.innerHTML = '❤️';
    heart.style.fontSize = (20 + Math.random() * 30) + 'px';
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 4000);
}

function createFirework() {
    const firework = document.createElement('div');
    firework.className = 'firework';
    firework.style.left = Math.random() * window.innerWidth + 'px';
    firework.style.top = Math.random() * window.innerHeight + 'px';
    firework.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    
    const animation = firework.animate([
        { transform: 'scale(1)', opacity: 1 },
        { transform: `scale(${20 + Math.random() * 30}) rotate(${Math.random() * 360}deg)`, opacity: 0 }
    ], {
        duration: 1000,
        easing: 'ease-out'
    });
    
    document.body.appendChild(firework);
    animation.onfinish = () => firework.remove();
}

function accepted() {
    document.getElementById('noBtn').style.display = 'none';
    document.getElementById('message').innerHTML = '我爱你！❤️';
    
    // 创建心形和烟花效果
    setInterval(createHeart, 300);
    setInterval(createFirework, 500);
    
    // 添加背景音乐
    const audio = new Audio('https://music.163.com/song/media/outer/url?id=1824045033.mp3');  // 可以替换成其他音乐链接
    audio.play();
    
    // 添加点击特效
    document.addEventListener('click', function(e) {
        createFirework();
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.innerHTML = '❤️';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    });
}

// 在页面加载时添加密码验证
window.onload = function() {
    // 这里设置你的密码，建议用你们恋爱纪念日之类有意义的数字
    const correctPassword = '20240315';  // 比如 2024年3月15日
    
    const password = prompt('亲爱的，请输入我们的纪念日（格式：YYYYMMDD）：');
    if (password !== correctPassword) {
        document.body.innerHTML = '<h1 style="text-align: center; margin-top: 40vh; color: #ff4081;">密码错误，这个惊喜不是给你的哦 ❤️</h1>';
        return;
    }
}
