const culturalData = {
    poetry: [
        { term: "立春", content: "春风如贵客，一到便繁华。", author: "张耒" },
        { term: "雨水", content: "春雨贵如油，新丁网大鱼。", author: "谚语" },
        { term: "惊蛰", content: "乍暖还寒时候，最难将息。", author: "李清照" },
        { term: "春分", content: "春分天气新，又是一年春。", author: "高适" },
        { term: "清明", content: "清明时节雨纷纷，路上行人欲断魂。", author: "杜牧" },
        { term: "谷雨", content: "微雨众卉新，一雷惊蛰始。", author: "赵师秀" },
        { term: "立夏", content: "天地始交，万物并秀。", author: "《月令七十二候集解》" },
        { term: "小满", content: "小满江河漫，稻粱溢东陌。", author: "杜甫" },
        { term: "芒种", content: "梅子黄时日日晴，小溪泛尽却山行。", author: "南宋·杨万里" },
        { term: "夏至", content: "夏至日初长，开轩爽气浮。", author: "王驾" },
        { term: "小暑", content: "小暑生长候，游子忆故乡。", author: "岑参" },
        { term: "大暑", content: "大暑湿蒸热，避之高槐阴。", author: "刘禹锡" }
    ],
    festivals: [
        { name: "春节", relatedTerm: "立春", description: "中国最重要的传统节日，象征着新的一年的开始。" },
        { name: "元宵节", relatedTerm: "雨水", description: "正月十五，吃元宵、赏花灯。" },
        { name: "清明节", relatedTerm: "清明", description: "扫墓祭祖的重要节日，也是踏青赏春的好时节。" },
        { name: "端午节", relatedTerm: "芒种", description: "纪念屈原的节日，有吃粽子、赛龙舟等习俗。" },
        { name: "七夕节", relatedTerm: "立秋", description: "中国情人节，牛郎织女相会的日子。" },
        { name: "中秋节", relatedTerm: "白露", description: "家人团聚赏月、吃月饼的节日。" },
        { name: "重阳节", relatedTerm: "寒露", description: "登高望远、插茱萸、饮菊花酒的节日。" },
        { name: "冬至", relatedTerm: "冬至", description: "北方有吃饺子，南方有吃汤圆的习俗。" }
    ],
};

function displayPoetry() {
    const container = document.getElementById('poetry-showcase');
    culturalData.poetry.forEach(poem => {
        const poemElement = document.createElement('div');
        poemElement.className = 'poetry-card';
        poemElement.innerHTML = `
            <h3>${poem.term}</h3>
            <p class="poetry-content">${poem.content}</p>
            <p class="poetry-author">—— ${poem.author}</p>
        `;
        container.appendChild(poemElement);
    });
}

function displayFestivals() {
    const container = document.getElementById('festival-list');
    culturalData.festivals.forEach(festival => {
        const festivalElement = document.createElement('div');
        festivalElement.className = 'festival-card';
        festivalElement.innerHTML = `
            <h3>${festival.name}</h3>
            <p><strong>相关节气：</strong>${festival.relatedTerm}</p>
            <p>${festival.description}</p>
        `;
        container.appendChild(festivalElement);
    });
}

// function displayFood() {
//     const container = document.getElementById('food-customs');
//     culturalData.food.forEach(food => {
//         const foodElement = document.createElement('div');
//         foodElement.className = 'food-card';
//         foodElement.innerHTML = `
//             <h3>${food.name}</h3>
//             <img src="${food.imageUrl}" alt="${food.name}" class="food-image">
//             <p><strong>相关节气：</strong>${food.term}</p>
//             <p>${food.description}</p>
//         `;
//         container.appendChild(foodElement);
//     });
// }

// 页面加载时执行所有函数
window.addEventListener('load', () => {
    displayPoetry();
    displayFestivals();
    displayArt();
    displayFood();
});
