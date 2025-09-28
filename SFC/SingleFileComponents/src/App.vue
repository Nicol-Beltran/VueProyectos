
<template>
    <div >
      <H1>SINGLE FILE COMPONENTS</H1>
      <a href="https://vuejs.org/guide/scaling-up/sfc.html#single-file-components" target="_blank">Más información sobre SFC</a>
      <MyCounterScript2  :valor="5"/>
    
    </div>
</template>

<script lang="ts" setup>
import MyCounterScript2 from './components/mi-contador-script/MyCounterScript2.vue';
</script>
