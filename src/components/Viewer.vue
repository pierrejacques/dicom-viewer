<template>
    <div class="viewer-grid light-bg">
        <dicom-view class="dark-bg" />
        <dicom-view class="dark-bg" />
        <dimension-overview class="dark-bg" />
        <dicom-view class="dark-bg" />
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
//
//

import { Component, Vue } from 'vue-property-decorator';
import DicomView from '@/components/DicomView';
import DimensionOverview from '@/components/DimensionOverview';

@Component({
    components: {
        'dicom-view': DicomView,
        'dimension-overview': DimensionOverview,
    },
})
export default class Viewer extends Vue {

}
</script>

<style lang="less">
.viewer-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 1px;
}
</style>
