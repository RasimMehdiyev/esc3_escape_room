<template>

    <body>
        <NavBar/>
        <TimerModule/>
    </body>

</template>
<script>
import NavBar from '../components/NavBar.vue'
import Hints from '../components/Hints.vue'
import TimerModule from '../components/TimerModule.vue'

export default{
    name: "LeaderBoard",
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