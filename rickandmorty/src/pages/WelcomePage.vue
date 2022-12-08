<script>
import NavBar from  '../components/NavBar.vue'


export default{
    name: "WelcomePage",
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
    methods:{
        toParticipants(id){
            this.$router.push("/participants", id);
        }
    }
}
</script>

<template >
    <body class="template_class">

    <NavBar/>

        <div class="qr-code-box">
            <span>SCAN QR CODE</span>
            <div>
            </div>
            <button @click="toParticipants(id)" style="font-size: 17px; border-radius: 6px ;border-style: none; background-color: #EDD33A; margin-left: 84px;height:40px; width: 140px; margin-top:340px;">SUBMIT</button>
        </div>

    </body>
</template>