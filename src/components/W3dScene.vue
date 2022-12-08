<template>
    <canvas id="renderCanvas" ref="w3dCanvas"/>
</template>

<script setup lang="ts">
import { ref, onMounted } from '@vue/runtime-core';
import { createScene} from '../scenes/MyFirstScene';

const name = 'W3dScene';
const w3dCanvas = ref(null);
onMounted(() => {
    if (w3dCanvas.value) {
        createScene(w3dCanvas.value);
    };
    return {
        w3dCanvas,
    };
});

</script>

<style type="text/css">
    body {
        margin: 0px;
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
      }
  
      #renderCanvas {
        width: 100%;
        height: 100%;
      }
</style>