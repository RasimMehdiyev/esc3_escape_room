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
        //  method: "POST",

    },
    methods:{
        toParticipants(id){
            this.$router.push("/participants", id);
        },
        testFoo(){
            fetch("https://2d13ac092947-hirelamp-bbcf628a86ebae0f2646300d98508d5.co/contactForm/",{
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    "fullName": "Rasim Mehdiyev",
                    "email": "rasim@hirelamp.co",
                    "talksAbout":"something",
                    "phoneNumber":994504410451,
                    "mentorFullName":"Orkhan Abbasov",
                    "bookingDate":"20210517T12:00:00",
                    })
            })
        }
    }
}
</script>

<template >
    <body class="template_class">

    <NavBar/>

        <div class="qr-code-box">
            <span @click="testFoo()">SCAN QR CODE</span>
            <div>
            </div>
            <button @click="toParticipants(id)" style="font-size: 17px; border-radius: 6px ;border-style: none; background-color: #EDD33A; margin-left: 84px;height:40px; width: 140px; margin-top:340px;">SUBMIT</button>
        </div>

    </body>
</template>