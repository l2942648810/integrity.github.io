const seasons = ['spring', 'summer', 'autumn', 'winter'];
        let currentSeason = 0;

        function changeSeason() {
            document.getElementById(seasons[currentSeason]).classList.remove('active');
            currentSeason = (currentSeason + 1) % seasons.length;
            document.getElementById(seasons[currentSeason]).classList.add('active');
        }

        // 确保页面加载完毕后春季图片首先显示
        window.addEventListener('load', () => {
            document.getElementById('spring').classList.add('active');
            // 设置定时器，每5秒切换一次季节
            setInterval(changeSeason, 3500);
        });