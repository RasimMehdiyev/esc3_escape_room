<script>
import NavBar from  '../components/NavBar.vue'


export default{
    name: "ExplanationPage",
    components: {
        NavBar,
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

<template>
<body>
    <NavBar/>

    <div class="explanation">

        <div class="explanation-video">
            <iframe style="border-style:none" width="420" height="315" frameborder="0" allowfullscreen
            src="https://www.youtube.com/embed/watch?v=1iUcPCywGn0&ab_channel=AdultSwim">
            </iframe>
        </div>

        <div class="explanation-transcript">
            <ul class="explanations-text">
                <li>
                    <span class="span_li">1. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                </li>
                <li>
                    <span class="span_li">2. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                </li>
                <li>
                    <span class="span_li">3. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                </li>
                <li>
                    <span class="span_li">4. Lorem ipsum dolor sit, amet consectetur adipisicing elit. </span>
                </li>
            </ul>
        </div>

    </div>
    
</body>
</template>