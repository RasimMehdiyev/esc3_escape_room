<script></script>
<template>

    <div class="navbar">
        <ul>
            <li class="navbar_title"> 
                <span @click="toExplanation" class="nav-title">Crazy Rick</span> 
                <span @click="toLeaderBoard"><img class="leaderboard-icon" src="../assets/img/3149864 1.png" alt=""></span>
                <br style="margin-bottom: 10px!important;"> 
                <span class="navbar_clickable" @click="toggleNavBar()" v-if="(this.navBarFlag == false)" style="color:aqua; font-size: 10px;">Show more</span> 
                <span class="navbar_clickable" @click="toggleNavBar()" v-if="(this.navBarFlag == true)" style="color:aqua; font-size: 10px;">Show less</span>
            </li>
            <div v-if="(this.navBarFlag == true)">            
                <li><span @click="toClues(this.items[0])" class="span_li">Voice Filtering</span></li>
                <li><span @click="toClues(this.items[2])" class="span_li">Draw Box</span> </li>
                <li><span @click="toClues(this.items[3])" class="span_li">Block box</span></li>
                <li><span @click="toClues(this.items[4])" class="span_li"> Portal Gun</span></li>
                <li><span @click="toClues(this.items[5])" class="span_li">Bomb module</span></li>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
    name: "NavBar",
    data() {
        return {
            title: "Crazy Rick",
            items: [
                "/voice-filtering",
                "/clue",
                "/draw-box",
                "/block-box",
                "/portal-gun",
                "/bomb-module",
            ],
            navBarFlag: false,
        };
    },
    methods: {
        toggleNavBar() {
            this.navBarFlag = !this.navBarFlag;
        },
        toClues(path) {
            this.$router.push(path);
        },
        toLeaderBoard(){
            this.$router.push('/leaderboard');
        },
        toExplanation(){
            this.$router.push('/explanation');
        }
    },
};
</script>
