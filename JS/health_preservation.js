document.addEventListener('DOMContentLoaded', function() {
    // 获取所有需要的元素
    const pages = document.querySelectorAll('.recipe-page');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentPage = 0;
    const totalPages = pages.length;

    // 更新按钮状态
    function updateButtons() {
        // 第一页时禁用上一页按钮
        if (currentPage === 0) {
            prevBtn.classList.add('disabled');
        } else {
            prevBtn.classList.remove('disabled');
        }
        
        // 最后一页时禁用下一页按钮
        if (currentPage === totalPages - 1) {
            nextBtn.classList.add('disabled');
        } else {
            nextBtn.classList.remove('disabled');
        }
    }

    // 切换页面
    function changePage(newPage) {
        // 移除当前页面的active类
        pages[currentPage].classList.remove('active');
        // 添加新页面的active类
        pages[newPage].classList.add('active');
        // 更新当前页面索引
        currentPage = newPage;
        // 更新按钮状态
        updateButtons();
    }

    // 添加按钮点击事件
    prevBtn.addEventListener('click', () => {
        if (currentPage > 0) {
            changePage(currentPage - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages - 1) {
            changePage(currentPage + 1);
        }
    });

    // 初始化按钮状态
    updateButtons();
});