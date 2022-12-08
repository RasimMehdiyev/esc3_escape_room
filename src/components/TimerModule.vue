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
            endHour: 15
        };
    },
    beforeMount() {
        setInterval(this.getRemainingTime, 1000);
    },
    methods: {
        getRemainingTime(){
            let curTime = new Date();
            // let endHour = 15; 
            // console.log(this.endHour)
            let endTime = new Date(2022, 11, 8, this.endHour, 23, 0);
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

            if (difference < 0){
                minutes = "00"
                seconds = "00"
                this.endHour++;
                endTime = new Date(2022, 11, 8, this.endHour, 23, 0);
            }

            this.timeRemaining = minutes + ":" + seconds
        }
    },
}
</script>