export default {
    template:`
    <header class="main_header position-relative">
    <!-- LOGO底圖 -->
    <div class="main_contain_top d-grid position-relative">
        <img src="./img/01_Lobby/img_logo.png" alt="Logo圖">
    </div>
    <!-- 紫色外框 -->
    <img class="frame_container_top" src="./img/01_Lobby/img_slotmachine_top.png" alt="完整機台外框圖">
    <!-- 光暈動畫 -->
    <div class="frame_top_light position-absolute">
        <span class="light_ani frame_top_light_top"></span>
        <span class="light_ani frame_top_light_right"></span>
        <span class="light_ani frame_top_light_bottom"></span>
        <span class="light_ani frame_top_light_left"></span>
    </div>
    <!-- 按鈕 -->
    <div class="top_banner_ham_container">
        <div class="top_banner_btn_ham btn_ham "></div>
        <div class="top_banner_btn_logout btn_logout "></div>
    </div>
</header>`
}