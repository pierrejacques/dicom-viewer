<template>
  <div class="view-page light-bg">
    <nav-panel />
    <viewer />
  </div>
</template>

<script>
//
//
//
//
//
//
//

import { Component, Vue } from 'vue-property-decorator';
import NavPanel from '@/components/NavPanel';
import Viewer from '@/components/Viewer';

@Component({
  components: {
    'nav-panel': NavPanel,
    'viewer': Viewer,
  },
})
export default class Home extends Vue {

}
</script>

<style lang="less">
.view-page {
  display: grid;
  height: 100vh;
  min-height: 800px;
  grid-template-columns: 300px auto;
  grid-gap: 1px;
  background: silver;
}
</style>
