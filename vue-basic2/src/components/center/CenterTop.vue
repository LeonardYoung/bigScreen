<template>
    <div class="ct">
        <HosInfo class="hosinfo"/>
        <div  class="underinfo">
            <OutPatientInfo class="outpatient"/>
            <Brain class="brain"/>
        </div>
    </div>
</template>

<script>
    import HosInfo from "./HosInfo";
    import OutPatientInfo from "./OutPatientInfo";
    import Brain from "./Brain";
    export default {
        name: "CenterTop",
        components:{
            HosInfo,
            OutPatientInfo,
            Brain
        }
    }
</script>

<style scoped>
    .hosinfo{
        position: relative;
        height: 10%;
    }
    .underinfo{
        position: relative;
        height: 90%;
        display: flex;
    }
    .outpatient{
        flex: 2;
    }
    .brain{
        flex: 2;
    }
</style>
