<template>
    <List :border="true" v-model="listValue" style="width: 400px">
        <ListItem v-for="element in listValue" :key="element.id">
            <Checkbox>Checkbox</Checkbox>
            {{ element.name }}
        </ListItem>
    </List>
</template>
<script>
export default {
    props: {
        value: {
            type: Array,
            default: () => [],
        },
    },
    data() {
        return {
            listValue: this.value, // 使用 data 属性保存 prop 的值
        };
    },
    watch: {
        inputValue(newVal) {
            this.$emit('update:value', newVal);
            console.log('value值发生了变化');
        },
        value(newVal) {
            this.listValue = newVal;
        },
    },
};
</script>

<style scoped>
.container {
    display: grid;
    gap: 10px;
}

.item {
    width: 200px;
    background-color: red;
    height: 30px;
    line-height: 30px;
    text-align: center;
    cursor: move;
}

.app {
    display: flex;
    gap: 10px;
}
</style>
