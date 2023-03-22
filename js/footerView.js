export default {
    template:`                
    <footer class="footer_frame">
    <div class="frame_container_bottom_container position-relative">
        <!-- LOGO跑馬燈 無限循環圖-->
        <div class="swiperSlotmachine_container">
            <div class="swiperSlotmachine ">
                <div class="swiper-wrapper mid_publish_list">
                    <!-- 循環圖1 -->
                    <div class="swiper-slide">
                        <img src="./img/01_Lobby/img_slotmachine_bottom_logo.png" alt="機台Logo跑馬燈">
                    </div>
                    <div class="swiper-slide">
                        <img src="./img/01_Lobby/img_slotmachine_bottom_logo.png" alt="機台Logo跑馬燈">
                    </div>
                    <div class="swiper-slide">
                        <img src="./img/01_Lobby/img_slotmachine_bottom_logo.png" alt="機台Logo跑馬燈">
                    </div>
                </div>
            </div>
        </div>
        <!-- 底部遊戲機台圖 -->
        <div class="frame_container_bottom">
            <img src="./img/01_Lobby/img_slotmachine_bottom.png"
                alt="完整機台外框圖">
        </div>
        <!-- 光暈動畫 -->
        <div class="frame_bottom_light position-absolute">
            <span class="light_ani frame_bottom_light_top"></span>
            <span class="light_ani frame_bottom_light_right"></span>
            <span class="light_ani frame_bottom_light_right2"></span>
            <span class="light_ani frame_bottom_light_bottom"></span>
            <span class="light_ani frame_bottom_light_bottom2"></span>
            <span class="light_ani frame_bottom_light_bottom3"></span>
            <span class="light_ani frame_bottom_light_left"></span>
            <span class="light_ani frame_bottom_light_left2"></span>
        </div>
    </div>
</footer>`
}