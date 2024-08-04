<template>
    <div class="app">
        <List :border="true" v-model="list1" style="width: 400px; height: 100%" class="source-list">
            <ListItem v-for="element in list1" :key="element.id">
                <Checkbox v-model="element.checked" @on-change="list1Change">
                    {{ element.name }}
                </Checkbox>
            </ListItem>
        </List>
        <List :border="true" v-model="list1" style="width: 400px; height: 100%" class="target-list">
            <ListItem v-for="element in list1" :key="element.id" v-show="element.checked" style="width: 100%">
                {{ element.name }}
                <template slot="action">
                    <li>
                        <a href="">删除</a>
                    </li>
                </template>
            </ListItem>
        </List>
    </div>
</template>
<script>
export default {
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
        };
    },
    methods: {
        list1Change(result) {
            console.log(result);
        },
    },
};
</script>

<style scoped lang="scss">
.app {
    display: flex;
    border: none;
}
</style>
