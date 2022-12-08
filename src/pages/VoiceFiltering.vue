<template>
    <body>
        <NavBar/>
        <TimerModule/>
        <Hints/>

    </body>
</template>

<script>
import NavBar from  '../components/NavBar.vue'
import TimerModule from '../components/TimerModule.vue'
import Hints from '../components/Hints.vue'

export default{
    name: "VoiceFiltering",
    components: {
        NavBar,
        TimerModule,
        Hints
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