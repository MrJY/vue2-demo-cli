<template>
    <div class="app">
        <div id="export-content">
            <List :border="true" v-model="list1" style="width: 400px; height: 100%">
                <draggable
                    v-model="list1"
                    animation="150"
                    ghostClass="ghost"
                    class="container"
                    group="person"
                    :multi-drag="true"
                    selected-class="selected"
                    @select="log"
                >
                    <ListItem v-for="element in list1" :key="element.id">
                        {{ element.name }}
                    </ListItem>
                </draggable>
            </List>
            <List :border="true" v-model="list2" style="width: 400px; height: 100%">
                <draggable v-model="list2" animation="150" ghostClass="ghost" class="container" group="person" :multi-drag="true" selected-class="selected">
                    <ListItem v-for="element in list2" :key="element.id">
                        <Checkbox v-model="element.checked">
                            {{ element.name }}
                        </Checkbox>
                    </ListItem>
                </draggable>
            </List>
        </div>
        <Button @click="exportPdf">导出PDF</Button>
    </div>
</template>
<script>
import draggable from '@/components/vue-draggable/vuedraggable';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export default {
    components: {
        draggable,
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
    methods: {
        log() {
            console.log('----------');
        },
        exportPdf() {
            console.log('exportPdf');
            let exportElement = document.getElementById('export-content');
            html2canvas(exportElement).then(function (canvas) {
                const pdf = new jsPDF();
                const imgData = canvas.toDataURL('image/png');
                // 添加图像到PDF文档
                pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
                // 保存PDF文件
                pdf.save('output.pdf');
            });
        },
    },
};
</script>

<style scoped>
.app {
    display: flex;
    gap: 10px;

    #export-content {
        display: flex;
        gap: 10px;
    }
}
</style>
