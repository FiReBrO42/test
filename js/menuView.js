export default {
    template: `
    <ul class="menu_bottom_list_container" >
        <li v-for="(item, index) in menuBtnList" :key="index">
            <div class="menu_game_btn_container position-relative"
            @click="menuBtnOn( index )">
                <img :src="item.imgUrl" :alt="item.altText">
                <div class="menu_game_btn_icon"
                :class="{ active: item.active }" >
                    <img src="./img/img_switch_open.png" alt="切換開啟按鈕">
                </div>
            </div>
            <div class="menu_game_list_container"
            :class="{ active: item.active }">
                <ul class="menu_game_list">
                    <template v-for="(gameItem, gameIndex) in menuList" :key="gameIndex">
                        <li v-if="gameItem.state === item.name ">
                            <a :href="gameItem.linkUrl">
                                <img :src="gameItem.imgUrl" alt="遊戲icon">
                            </a>
                        </li>    
                    </template>
                </ul>
            </div>
        </li>
    </ul>
    `,
    data() {
        return {
            menuBtnList:[
                {
                    name:'gaming',
                    active:false,
                    imgUrl:'./img/02_Menu/btn/btn_ingame.png',
                    altText:`遊戲中機台按鈕`
                },
                {
                    name:'reserve',
                    active:false,
                    imgUrl:'./img/02_Menu/btn/btn_keepgame.png',
                    altText:`保留機台按鈕`
                },
                {
                    name:'collect',
                    active:false,
                    imgUrl:'./img/02_Menu/btn/btn_favoritegame.png',
                    altText:`收藏機台按鈕`
                },
            ],
            /* 活動內容資訊 */
            menuList: [
                {
                    gameName:`img_sloticon_01` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_01.png`,
                    state:`gaming`,
                },
                {
                    gameName:`img_sloticon_02` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_02.png`,
                    state:`reserve`,
                },
                {
                    gameName:`img_sloticon_03` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_03.png`,
                    state:`collect`,
                },
                {
                    gameName:`img_sloticon_04` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_04.png`,
                    state:`gaming`,
                },
                {
                    gameName:`img_sloticon_05` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_05.png`,
                    state:`reserve`,
                },
                {
                    gameName:`img_sloticon_06` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_06.png`,
                    state:`gaming`,
                },
                {
                    gameName:`img_sloticon_07` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_07.png`,
                    state:`reserve`,
                },
                {
                    gameName:`img_sloticon_08` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_08.png`,
                    state:`collect`,
                },
                {
                    gameName:`img_sloticon_09` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_09.png`,
                    state:`gaming`,
                },
                {
                    gameName:`img_sloticon_10` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_10.png`,
                    state:`collect`,
                },
                {
                    gameName:`img_sloticon_11` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_11.png`,
                    state:`gaming`,
                },
                {
                    gameName:`img_sloticon_12` ,
                    linkUrl:`../selectMachine.html`,
                    imgUrl: `../img/01_Lobby/game_icon/img_sloticon_12.png`,
                    state:`collect`,
                }
            ]
        }
    },
    methods: {
        menuBtnOn(index) {
            // 把當前點擊的 item 的 active 設為 true
            if (this.menuBtnList[index].active === false) {
                this.menuBtnList[index].active = true
                console.log('2', this.menuBtnList[index].active);
            }
            else {
                //判斷如果當前是 true ，則改成false 來關閉
                this.menuBtnList[index].active = false
                console.log('3',this.menuBtnList[index].active);
            }

            // 如果其他 newList 的 active 有 true的 都設為 false，並保留當前這個選項的true
/*             for (let i = 0; i < this.menuBtnList.length; i++) {
                if (this.menuBtnList[i].active === true) {
                    this.menuBtnList[i].active = false;
                    this.menuBtnList[index].active = true
                    console.log('4',this.menuBtnList[index].active);
                
                }
            } */
        }
    }
}