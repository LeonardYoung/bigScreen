<template>
    <div class="container">
        <Header/>
        <div class="panel">
            <Left class="bLeft"/>
            <Mid class="bMid"/>
            <Right class="bRight"/>
        </div>
    </div>
</template>

<script>
    import Header from "./Header";
    import Left from "./left/Left";
    import Mid from "./center/Center";
    import Right from "./right/Right";
    export default {
        name: "BigScreen",
        components:{
            Header,
            Left,
            Mid,
            Right
        }
    }
</script>

<style scoped>
    .container {
        height: 100%;
        flex-flow: column;
        display:flex;
        background-color: #000204;
    }
    .bLeft{
        flex-grow: 5;
        width: 0;
    }
    .bMid{
        flex-grow: 8;
        /*width: 0;*/
    }
    .bRight{
        flex-grow: 8;
        /*width: 0;*/
    }

    .panel {
        flex: 1;
        display:flex;
        /*border: 1px solid blue;*/
    }

</style>
