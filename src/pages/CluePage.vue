<script>
import NavBar from  '../components/NavBar.vue'


export default{
    name: "CluePage",
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
    <NavBar/>
    <qrcode-stream @decode="onDecode" @init="onInit" />
    <div>Clue Page</div>
</template>