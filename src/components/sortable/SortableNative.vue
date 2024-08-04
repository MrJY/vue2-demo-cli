<template>
    <div class="app">
        <List :border="true" ref="list1" v-model="list1" style="width: 400px; height: 100%">
            <ListItem v-for="element in list1" :key="element.id">
                <Checkbox v-model="element.checked">
                    {{ element.name }}
                </Checkbox>
            </ListItem>
        </List>
        <List :border="true" ref="list2" v-model="list2" style="width: 400px; height: 100%">
            <ListItem v-for="element in list2" :key="element.id">
                <Checkbox v-model="element.checked">
                    {{ element.name }}
                </Checkbox>
            </ListItem>
        </List>
    </div>
</template>
<script>
// Complete SortableJS (with all plugins)
import Sortable from 'sortablejs/modular/sortable.complete.esm.js';

export default {
    components: {},
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
                    checked: false,
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
                    checked: false,
                },
                {
                    name: '2-element4',
                    id: 41,
                    checked: false,
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            //console.log(this.$refs.list);

            new Sortable(this.$refs.list1.$el.querySelector('.ivu-list-items'), {
                group: {
                    name: 'shared',
                },
                multiDrag: true, //支持多条拖动
                selectedClass: 'selected', //选中项class名
                onEnd: function (evt) {
                    console.log('结束拖动');
                    console.log(evt);
                    console.log(evt.oldIndex, '-------', evt.newIndex);
                    console.log(evt.items[0]);
                },
            });
            new Sortable(this.$refs.list2.$el.querySelector('.ivu-list-items'), {
                group: {
                    name: 'shared',
                },
                multiDrag: true, //支持多条拖动
                selectedClass: 'selected', //选中项class名
            });
        });
    },
};
</script>

<style scoped>
.selected {
    color: red !important;
    background-color: rgba(255, 0, 0, 0.2) !important;
}

.app {
    display: flex;
    gap: 10px;
}
</style>
