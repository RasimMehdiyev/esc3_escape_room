<template>
    <body>
        <NavBar/>
        <TimerModule/>

        <!-- Table of participants -->
        <div class="participants">
            <div class="team-name" style="padding-bottom:20px; text-align:center;">
                <h1>Team Name</h1>
            </div>
            <ul class="container">
                <li>Participant 1</li>
                <li>Participant 2</li>
                <li>Participant 3</li>
                <li>Participant 4</li>
            </ul>
        </div>
            
    </body>
</template>

<script>
import NavBar from  '../components/NavBar.vue'
import TimerModule from '../components/TimerModule.vue'


export default{
    name: "Participants",
    components: {
        NavBar,
        TimerModule,
    },
    data() {
        return {
            // 
        };
    },
    mounted() {
        // 
    },
}
</script>
