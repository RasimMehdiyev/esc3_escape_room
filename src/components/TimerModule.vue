<template>
    <body>
        <div class="timer-module">
            <p class="timer" style="font-size: 65px">{{this.timeRemaining}}</p>
        </div>
    </body>
</template> 

<script>
export default{
    name: "TimerModule",
    
    data() {
        return {
            timeRemaining: "",
        };
    },
    beforeMount() {
        setInterval(this.getRemainingTime, 1000);
    },
    methods: {
        getRemainingTime(){
            let curTime = new Date();
            let endTime = new Date(2022, 11, 8, 15, 23, 0);
            let difference = endTime - curTime
            var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((difference % (1000 * 60)) / 1000);
            console.log(minutes + ":" + seconds)
            if (minutes < 10){
                minutes = "0"+minutes
            }
            if (seconds < 10){
                seconds = "0"+seconds
            }
            this.timeRemaining = minutes + ":" + seconds
        }
    },
}
</script>