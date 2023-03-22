export default {
    template:`                
    <div class="main_contain_mid position-relative">
    <!-- 金色外框 -->
    <div class="main_contain_mid_deco">
        <img src="./img/01_Lobby/img_goldframe.png" alt="中間金框">
    </div>
    <!-- 頂部區 -->
    <div class="mid_publish_container col position-relative ">
        <!-- 公告輪播圖 -->
        <div class="mid_publish d-grid">
            <img class="img-fluid" src="./img/01_Lobby/img_publish.png" alt="公告背景">
            <div class="swiper mid_publish_text_container">
                <div class="swiper-wrapper mid_publish_list">
                    <!-- 由此新增項目 --><!-- 1. -->
                    <div class="swiper-slide">
                        <h2>1.這裡是公告內容區</h2><!-- 內容 -->
                    </div>
                    <!-- 2. -->
                    <div class="swiper-slide">
                        <h2>2.這裡是公告內容區</h2>
                    </div>
                    <!-- 3. -->
                    <div class="swiper-slide">
                        <h2>3.這裡是公告內容區</h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- 背景輪播圖 -->
        <div class="mid_publish_carousel">
            <!-- 底部背景圖，撐高避免破圖-->
            <img class="img-fluid" src="./img/01_Lobby/img_fortuneruler.jpg" alt="輪播圖">
            <div class="swiperCarousel ">
                <div class="swiper-wrapper mid_publish_list">
                    <!-- 有此新增項目 --><!-- 1. -->
                    <div class="swiper-slide">
                        <img class="img-fluid" src="./img/01_Lobby/img_fortuneruler.jpg" alt="輪播圖">
                    </div>
                    <!-- 2. -->
                    <div class="swiper-slide">
                        <img class="img-fluid" src="./img/01_Lobby/img_fortuneruler.jpg" alt="輪播圖">
                    </div>
                    <!-- 3. -->
                    <div class="swiper-slide">
                        <img class="img-fluid" src="./img/01_Lobby/img_fortuneruler.jpg" alt="輪播圖">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- 中間拉霸機 -->
    <div class="mid_slot_container d-grid position-relative">
        <!-- 背景圖 -->
        <img class="img-fluid" src="./img/01_Lobby/img_slotbackground.png" alt="拉霸機背景">
    </div>
    <!-- 底部選單 -->
    <div class=" mid_nav_container position-relative">
        <!-- 背景圖 -->
        <img class="img-fluid" src="./img/01_Lobby/img_menubackground.jpg" alt="選單背景">
        <!-- 背景圖屋簷 -->
        <div class="mid_nav_container_deco">
            <img class="img-fluid" src="./img/01_Lobby/img_partitionframe.png" alt="屋簷">
        </div>
    </div>
    <!-- 中間金屬造型框 -->
    <img class="frame_container_mid" src="./img/01_Lobby/img_slotmachine_mid.png" alt="完整機台外框圖">
    <!-- 光暈動畫 -->
    <div class="frame_mid_light position-absolute">
        <span class="light_ani frame_mid_light_top"></span>
        <span class="light_ani frame_mid_light_right"></span>
        <span class="light_ani frame_mid_light_bottom"></span>
        <span class="light_ani frame_mid_light_left"></span>
    </div>
    <!-- 拉霸機遊戲圖 -->
    <div class=" mid_slot_game_container">
        <!-- 第一列 -->
        <ul class="  mid_slot_game_list">
            <!-- img 換遊戲圖案 由上至下滑動 -->
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_08.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_04.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_06.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_01.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_03.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_09.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_05.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_12.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_02.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_06.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_04.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_08.png" alt="遊戲圖"></li>
        </ul>
        <!-- 第二列 -->
        <ul class="  mid_slot_game_list">
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_02.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_07.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_12.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_09.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_08.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_03.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_01.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_04.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_06.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_02.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_05.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_12.png" alt="遊戲圖"></li>
        </ul>
        <!-- 第三列 -->
        <ul class="  mid_slot_game_list">
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_05.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_09.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_01.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_06.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_04.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_05.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_02.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_12.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_08.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_01.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_09.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_03.png" alt="遊戲圖"></li>
        </ul>
        <!-- 第四列 -->
        <ul class="  mid_slot_game_list">
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_10.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_03.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_11.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_01.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_06.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_05.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_12.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_03.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_02.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_11.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_07.png" alt="遊戲圖"></li>
            <li><img src="./img/01_Lobby/game_icon/img_sloticon_10.png" alt="遊戲圖"></li>
        </ul>
    </div>
    <!-- 底部選單按鈕 -->
    <div class="bottom_nav_container">
        <nav class="bottom_nav_list_container d-grid">
            <ul class="bottom_nav_list">
                <!-- 按鈕 -->
                <li>
                    <a href="#">
                        <img class="img*fluid" src="./img/01_Lobby/btn/btn_games.png" alt="選擇遊戲按鈕">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="img*fluid" src="./img/01_Lobby/btn/btn_member.png" alt="會員中心按鈕">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="img*fluid" src="./img/01_Lobby/btn/btn_events.png" alt="最新活動按鈕">
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img class="img*fluid" src="./img/01_Lobby/btn/btn_service.png" alt="聯絡客服按鈕">
                    </a>
                </li>
            </ul>
        </nav>
    </div>
</div>`
}