<template>
    <div class="brain">
        <img src="../../static/背景222.png" width="100%" height="100%" >
        <div id="brainContain"></div>
<!--        <canvas id="brainContain"></canvas>-->
<!--        <img src="../../static/brain.gif" width="100%" height="100%">-->
    </div>
</template>

<script>
    import * as Three from 'three'

    export default {
        name: 'ThreeTest',
        data() {
            return {
                camera: null,
                scene: null,
                renderer: null,
                mesh: null
            }
        },
        methods: {
            init: function() {
                let container = document.getElementById('brainContain');

                this.camera = new Three.PerspectiveCamera(70, container.clientWidth/container.clientHeight, 0.01, 10);
                this.camera.position.z = 1;

                this.scene = new Three.Scene();

                let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
                let material = new Three.MeshNormalMaterial();

                this.mesh = new Three.Mesh(geometry, material);
                this.scene.add(this.mesh);

                this.renderer = new Three.WebGLRenderer({antialias: true});
                this.renderer.setSize(container.clientWidth, container.clientHeight);
                container.appendChild(this.renderer.domElement);

            },
            animate: function() {
                requestAnimationFrame(this.animate);
                this.mesh.rotation.x += 0.01;
                this.mesh.rotation.y += 0.02;
                this.renderer.render(this.scene, this.camera);
            }
        },
        mounted() {
            this.init();
            this.animate()
        }
    }


</script>

<style scoped>
    .brain{
        background: none;
    }
    img:nth-child(1){
        z-index: 1;

    }
    /*img:nth-child(2){*/
    /*    position: relative;*/
    /*    top: -100%;*/
    /*    opacity: 0.6;*/
    /*    z-index: 999;*/
    /*}*/
    #brainContain{
        width: 33.3%;
        height: 33.3%;
        position: relative;
        top: -76.3%;
        left: 30.3%;
        background-color: green;
        /*float: top;*/
    }
</style>
