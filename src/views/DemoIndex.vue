<template>
    <grid-layout
        :layout.sync="layout"
        :col-num="12"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="true"
        :margin="[10, 10]"
        :use-css-transforms="true"
    >
        <grid-item v-for="item in layout" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" :key="item.i" class="draggable-element">
            <Card style="width: 100%; height: 100%">
                <span>这是第 {{ item.i }} 个组件</span>
            </Card>
        </grid-item>
    </grid-layout>
</template>
<script lang="ts">
import VueGridLayout from 'vue-grid-layout';

export default {
    components: {
        GridLayout: VueGridLayout.GridLayout,
        GridItem: VueGridLayout.GridItem,
    },
    data() {
        return {
            layout: [
                { x: 5, y: 0, w: 2, h: 2, i: '0' },
                { x: 5, y: 0, w: 2, h: 2, i: '1' },
                { x: 5, y: 0, w: 2, h: 2, i: '2' },
                { x: 5, y: 0, w: 2, h: 2, i: '3' },
                { x: 5, y: 0, w: 2, h: 2, i: '4' },
                { x: 5, y: 0, w: 2, h: 2, i: '5' },
            ],
        };
    },
};
</script>

<style scoped lang="scss">
.draggable-element {
    touch-action: none;
}
</style>
