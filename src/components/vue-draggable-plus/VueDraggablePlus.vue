<template>
    <div class="app">
        <List :border="true" v-model="list1" style="width: 400px; height: 100%">
            <VueDraggable
                v-model="list1"
                animation="150"
                ghostClass="ghost"
                class="container"
                filter=".Joao"
                group="person"
                aria-multiline="true"
            >
                <ListItem v-for="element in list1" :key="element.id">
                    {{ element.name }}
                </ListItem>
            </VueDraggable>
        </List>

        <List :border="true" v-model="list2" style="width: 400px; height: 100%">
            <VueDraggable
                v-model="list2"
                animation="150"
                ghostClass="ghost"
                class="container"
                filter=".Joao"
                group="person"
            >
                <ListItem v-for="element in list2" :key="element.id">
                    <Checkbox v-model="element.checked">
                        {{ element.name }}
                    </Checkbox>
                </ListItem>
            </VueDraggable>
        </List>
    </div>
</template>
<script lang="ts">
import { VueDraggable } from 'vue-draggable-plus';

export default {
    components: {
        VueDraggable,
    },
    data() {
        return {
            list1: [
                {
                    name: '1-element1',
                    id: 1,
                    checked: false,
                },
                {
                    name: '1-element2',
                    id: 2,
                    checked: true,
                },
                {
                    name: '1-element3',
                    id: 3,
                    checked: false,
                },
                {
                    name: '1-element4',
                    id: 4,
                    checked: false,
                },
            ],
            list2: [
                {
                    name: '2-element1',
                    id: 11,
                    checked: false,
                },
                {
                    name: '2-element2',
                    id: 21,
                    checked: false,
                },
                {
                    name: '2-element3',
                    id: 31,
                    checked: true,
                },
                {
                    name: '2-element4',
                    id: 41,
                    checked: true,
                },
            ],
        };
    },
};
</script>

<style scoped>
.app {
    display: flex;
    gap: 10px;
}
</style>
