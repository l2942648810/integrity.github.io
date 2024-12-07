const solarTerms = [
    {
        name: "立春",
        date: "2月3-5日",
        description: "立春是二十四节气之首，标志着新的一年开始。此时气温回升，万物开始复苏。",
    },
    {
        name: "雨水",
        date: "2月18-20日",
        description: "雨水节气标志着降水量的增加，气温继续回升，有利于农作物生长。",
    },
    {
        name: "惊蛰",
        date: "3月5-7日",
        description: "惊蛰时节，春雷始鸣，惊醒蛰伏的昆虫和冬眠的动物。",
    },
    {
        name: "春分",
        date: "3月20-22日",
        description: "春分是昼夜平分的日子，也是春季的中点。",
    },
    {
        name: "清明",
        date: "4月4-6日",
        description: "清明时节雨纷纷，是传统的扫墓节日，也是春耕的重要时节。",
    },
    {
        name: "谷雨",
        date: "4月19-21日",
        description: "谷雨时节雨水充沛，有利于谷类作物生长。",
    },
    {
        name: "立夏",
        date: "5月5-7日",
        description: "立夏标志着夏天的开始，气温明显升高。",
    },
    {
        name: "小满",
        date: "5月20-22日",
        description: "小满表示夏熟作物的籽粒开始饱满，但还未完全成熟。",
    },
    {
        name: "芒种",
        date: "6月5-7日",
        description: "芒种是麦类等有芒作物成熟的时候，也是南方稻作区的插秧时节。",
    },
    {
        name: "夏至",
        date: "6月21-22日",
        description: "夏至是一年中白昼最长的一天，也是北半球的冬至。",
    },
    {
        name: "小暑",
        date: "7月6-8日",
        description: "小暑标志着炎热天气的到来，气温开始显著升高。",
    },
    {
        name: "大暑",
        date: "7月22-24日",
        description: "大暑是一年中最热的节气，常有酷暑天气。",
    },
    {
        name: "立秋",
        date: "8月7-9日",
        description: "立秋表示秋天的开始，但实际天气还很炎热。",
    },
    {
        name: "处暑",
        date: "8月22-24日",
        description: "处暑意味着暑气渐消，天气开始变得凉爽。",
    },
    {
        name: "白露",
        date: "9月7-9日",
        description: "白露表示气温verder降，开始出现露水。",
    },
    {
        name: "秋分",
        date: "9月22-24日",
        description: "秋分是昼夜再次平分的日子，也是秋季的中点。",
    },
    {
        name: "寒露",
        date: "10月8-9日",
        description: "寒露意味着天气更加寒冷，露水有凝结成霜的趋势。",
    },
    {
        name: "霜降",
        date: "10月23-24日",
        description: "霜降表示天气寒冷，开始出现霜冻。",
    },
    {
        name: "立冬",
        date: "11月7-8日",
        description: "立冬标志着冬季的开始，天气变得寒冷。",
    },
    {
        name: "小雪",
        date: "11月22-23日",
        description: "小雪节气开始出现降雪，天气寒冷。",
    },
    {
        name: "大雪",
        date: "12月6-8日",
        description: "大雪节气降雪量增多，天气更加寒冷。",
    },
    {
        name: "冬至",
        date: "12月21-23日",
        description: "冬至是一年中白昼最短的一天，也是北半球的夏至。",
    },
    {
        name: "小寒",
        date: "1月5-7日",
        description: "小寒标志着寒冷天气的到来，但还不是最冷的时候。",
    },
    {
        name: "大寒",
        date: "1月20-21日",
        description: "大寒是二十四节气中的最后一个，也是一年中最冷的时期。",
    }
];

// 添加节气背景颜色映射
const termColors = {
    "立春": { background: "#fffdca", text: "#YOUR_TEXT_COLOR" },
    "雨水": { background: "#f4d5e4", text: "#YOUR_TEXT_COLOR" },
    "惊蛰": { background: "#ae614f", text: "#YOUR_TEXT_COLOR" },
    "春分": { background: "#eef0ed", text: "#YOUR_TEXT_COLOR" },
    "清明": { background: "#9e599c", text: "#YOUR_TEXT_COLOR" },
    "谷雨": { background: "#d8cbdf", text: "#YOUR_TEXT_COLOR" },
    "立夏": { background: "#c9db65", text: "#YOUR_TEXT_COLOR" },
    "小满": { background: "#d9a6ab", text: "#YOUR_TEXT_COLOR" },
    "芒种": { background: "#d5d1b6", text: "#YOUR_TEXT_COLOR" },
    "夏至": { background: "#bf5c49", text: "#YOUR_TEXT_COLOR" },
    "小暑": { background: "#ebb38e", text: "#YOUR_TEXT_COLOR" },
    "大暑": { background: "#dcb1bb", text: "#YOUR_TEXT_COLOR" },
    "立秋": { background: "#93abd9", text: "#YOUR_TEXT_COLOR" },
    "处暑": { background: "#ead1e6", text: "#YOUR_TEXT_COLOR" },
    "白露": { background: "#fdfaf1", text: "#YOUR_TEXT_COLOR" },
    "秋分": { background: "#dbe3d6", text: "#YOUR_TEXT_COLOR" },
    "寒露": { background: "#acb8b4", text: "#YOUR_TEXT_COLOR" },
    "霜降": { background: "#c43c2e", text: "#YOUR_TEXT_COLOR" },
    "立冬": { background: "#fffdca", text: "#YOUR_TEXT_COLOR" },
    "小雪": { background: "#d388a7", text: "#YOUR_TEXT_COLOR" },
    "大雪": { background: "#e7c8ce", text: "#YOUR_TEXT_COLOR" },
    "冬至": { background: "#e2cdd2", text: "#YOUR_TEXT_COLOR" },
    "小寒": { background: "#f7fae9", text: "#YOUR_TEXT_COLOR" },
    "大寒": { background: "#93627f", text: "#YOUR_TEXT_COLOR" }
};

// 季节颜色配置
const seasonalColors = {
    spring: {
        background: '#b5c069',    // 春季嫩绿色
        hover: '#45A049',
        text: '#000000',          // 文字颜色：白色
        lightBg: '#E8F5E9'        // 信息面板淡绿色背景
    },
    summer: {
        background: '#f29479',    // 夏季红色
        hover: '#E53935',
        text: '#000000',          // 文字颜色：白色
        lightBg: '#FFEBEE'        // 信息面板淡红色背景
    },
    autumn: {
        background: '#f1d886',    // 秋季金黄色
        hover: '#FFA000',
        text: '#000000',          // 文字颜色：黑色
        lightBg: '#FFF8E1'        // 信息面板淡黄色背景
    },
    winter: {
        background: '#a3c8cb',    // 冬季蓝色
        hover: '#1E88E5',
        text: '#000000',          // 文字颜色：白色
        lightBg: '#E3F2FD'        // 信息面板淡蓝色背景
    }
};

// 农事历数据
const agriculturalCalendar = {
    spring: {
        name: '春季',
        icon: '🌱',
        terms: ['立春', '雨水', '惊蛰', '春分', '清明', '谷雨'],
        activities: [
            {
                title: '春耕备耕',
                details: [
                    '立春：春季的开始，气温逐渐回升，土壤开始解冻，是准备春耕的时期。',
                    '雨水：标志着降雨开始增多，土壤湿度增加，适合开始播种早春作物。',
                    '惊蛰：随着气温升高，冬眠的昆虫开始苏醒，要抓紧进行春耕春播。',
                    '春分：昼夜平分，气候温和，是春季播种的关键时期。',
                    '清明：天气晴朗，草木萌发，是春播的重要时期。',
                    '谷雨：降雨量增多，适合谷类作物的播种。'
                ]
            }
        ]
    },
    summer: {
        name: '夏季',
        icon: '☀️',
        terms: ['立夏', '小满', '芒种', '夏至', '小暑', '大暑'],
        activities: [
            {
                title: '夏收夏种',
                details: [
                    '立夏：夏季的开始，气温明显升高，适合种植耐热作物。',
                    '小满：夏熟作物开始饱满，但尚未成熟，需要加强田间管理。',
                    '芒种：夏收夏种的关键时期，收割冬小麦，种植水稻等夏播作物。',
                    '夏至：一年中白昼最长，是夏季田间管理的重要时期。',
                    '小暑：进入盛夏，需要做好田间灌溉和排水工作。',
                    '大暑：一年中最热的时期，要特别注意抗旱和防涝。'
                ]
            }
        ]
    },
    autumn: {
        name: '秋季',
        icon: '🍂',
        terms: ['立秋', '处暑', '白露', '秋分', '寒露', '霜降'],
        activities: [
            {
                title: '秋收秋种',
                details: [
                    '立秋：秋季的开始，是准备秋收和秋播的时期。',
                    '处暑：炎热即将结束，开始收获夏季作物，准备秋播。',
                    '白露：气温继续下降，需要做好田间的保温工作。',
                    '秋分：昼夜再次平分，是秋收和播种冬小麦的好时机。',
                    '寒露：气温进一步下降，要抓紧收获秋季作物。',
                    '霜降：可能出现霜冻，需要采取措施保护作物。'
                ]
            }
        ]
    },
    winter: {
        name: '冬季',
        icon: '❄️',
        terms: ['立冬', '小雪', '大雪', '冬至', '小寒', '大寒'],
        activities: [
            {
                title: '冬藏养护',
                details: [
                    '立冬：冬季的开始，要收获最后一茬作物，做好越冬准备。',
                    '小雪：气温继续下降，要开始准备作物的越冬保护。',
                    '大雪：降雪增多，要做好作物的防寒防冻工作。',
                    '冬至：一年中白昼最短，要继续做好越冬保护。',
                    '小寒：进入最冷时期，要特别注意防寒工作。',
                    '大寒：一年中最冷的时期，同时要为春耕做准备。'
                ]
            }
        ]
    }
};
let currentSeason = null;

// 显示季节农事内容
function showSeasonalContent(season) {
    const seasonData = agriculturalCalendar[season];
    const seasonColor = seasonalColors[season];
    const container = document.getElementById('agricultural-calendar');

    // 如果点击的是当前显示的季节，则隐藏内容
    if (currentSeason === season) {
        container.innerHTML = renderSeasonButtons();
        currentSeason = null;
        return;
    }

    currentSeason = season;

    container.innerHTML = `
        ${renderSeasonButtons()}
        <div class="season-content" style="background-color: ${seasonColor.lightBg}; border: 2px solid ${seasonColor.background};">
            <div class="season-header" style="display: flex; align-items: center; margin-bottom: 20px;">
                <span style="font-size: 2em; margin-right: 10px;">${seasonData.icon}</span>
                <h3 style="color: ${seasonColor.background}; margin: 0;">${seasonData.name}农事活动</h3>
            </div>
            <div class="season-terms" style="margin-bottom: 20px;">
                <strong>本季节气：</strong>${seasonData.terms.join('、')}
            </div>
            ${seasonData.activities.map(activity => `
                <div class="activity-content">
                    <h4 style="color: ${seasonColor.background}; margin-bottom: 15px;">${activity.title}</h4>
                    <ul class="activity-list">
                        ${activity.details.map(detail => `
                            <li class="activity-item">${detail}</li>
                        `).join('')}
                    </ul>
                </div>
            `).join('')}
        </div>
    `;
}

// 渲染季节按钮
function renderSeasonButtons() {
    return `
        <div class="season-buttons">
            ${Object.entries(agriculturalCalendar).map(([season, data]) => `
                <button 
                    class="season-button" 
                    onclick="showSeasonalContent('${season}')"
                    style="
                        background-color: ${seasonalColors[season].background};
                        color: ${seasonalColors[season].text};
                        ${currentSeason === season ? 'transform: scale(1.1);' : ''}
                    "
                >
                    <span>${data.icon}</span>
                    <span>${data.name}</span>
                </button>
            `).join('')}
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    // DOM 元素
    const wheel = document.getElementById('solarTermsWheel');
    const termInfo = document.getElementById('termInfo');

    // 渲染节气轮盘
    function initializeSolarTermsWheel() {
        solarTerms.forEach((term, index) => {
            const angle = (index / 24) * 360;
            const termElement = document.createElement('div');
            termElement.className = 'term';

            // 计算位置 - 调整半径以适应更大的图标
            const radius = 42; // 减小半径以防止图标重叠
            termElement.style.left = `${50 + radius * Math.cos((angle - 90) * Math.PI / 180)}%`;
            termElement.style.top = `${50 + radius * Math.sin((angle - 90) * Math.PI / 180)}%`;

            // 创建图片元素
            const imgElement = document.createElement('img');
            imgElement.src = `./img/${term.name}.jpg`;
            imgElement.alt = term.name;
            imgElement.style.width = '100%';
            imgElement.style.height = '100%';
            imgElement.style.objectFit = 'cover';
            imgElement.style.borderRadius = '50%';

            // 添加悬停事件
            termElement.addEventListener('mouseenter', () => {
                showTermInfo(term);
                // 不需要额外的 transform scale，已在 CSS 中处理
                termElement.style.zIndex = '10';
            });

            termElement.addEventListener('mouseleave', () => {
                hideTermInfo();
                termElement.style.zIndex = '1';
            });

            // 添加加载事件以确保图片正确显示
            imgElement.addEventListener('load', () => {
                imgElement.style.opacity = '1';
            });

            termElement.appendChild(imgElement);
            wheel.appendChild(termElement);
        });
    }

    // 显示节气信息
    function showTermInfo(term) {
        const colors = termColors[term.name] || { background: "#f6f1e9", text: "#333" }; // 默认颜色
        termInfo.style.display = 'block';
        termInfo.style.backgroundColor = colors.background;
        termInfo.style.color = colors.text;
    
        termInfo.innerHTML = `
            <h3 style="color: ${colors.text}; font-family: 'Ma Shan Zheng', cursive; font-size: 24px; margin-bottom: 15px;">${term.name}</h3>
            <p style="font-size: 16px; margin-bottom: 10px; color: ${colors.text};"><strong>日期：</strong>${term.date}</p>
            <p style="font-size: 16px; margin-bottom: 15px; color: ${colors.text};">${term.description}</p>
            <p style="font-size: 16px; margin-bottom: 15px; color: ${colors.text};"><strong>对应颜色：</strong></p>
            <div class="term-image">
                <img src="./img/${term.name}_detail.jpg" alt="${term.name}详情" style="width: 100%; border-radius: 8px; margin-top: 15px;">
            </div>
        `;
    }

    // 隐藏节气信息
    function hideTermInfo() {
        termInfo.style.display = 'none';
    }

    // 初始化轮盘
    initializeSolarTermsWheel();

    // 添加窗口调整大小的响应
    window.addEventListener('resize', () => {
        // 清空现有内容
        wheel.innerHTML = '';
        // 重新初始化轮盘
        initializeSolarTermsWheel();
    });

    // 初始化农事历按钮
    const container = document.getElementById('agricultural-calendar');
    container.innerHTML = renderSeasonButtons();
});
// document.getElementById('currentTerm').textContent = `当前节气：${getCurrentTerm()}`;