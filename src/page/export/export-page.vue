<template>
    <div style="width: 1000px; height: 100%; overflow-y: auto">
        <Button @click="exportPdf" style="position: sticky; top: 0; z-index: 999">exportPdf</Button>
        <div id="export-content">
            <div class="module column" style="display: flex; flex-direction: column; align-items: center">
                <p>《通信原理》</p>
                <p>课程目标达成评价与分析报告</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
                <p>课程信息1</p>
            </div>
            <div class="module column">
                <div style="line-height: 32px; background: aliceblue">一、课程目标与考核细则</div>
                <div class="table">
                    <p>1.课程目标</p>
                    <Table border :columns="columns1" :data="data1"></Table>
                </div>
                <div class="table">
                    <p>1.课程目标</p>
                    <Table border :columns="columns1" :data="data1"></Table>
                </div>
                <div class="table">
                    <p>1.课程目标</p>
                    <Table border :columns="columns1" :data="data1"></Table>
                </div>
                <div class="table">
                    <p>1.课程目标</p>
                    <Table border :columns="columns1" :data="data1"></Table>
                </div>
            </div>
            <div class="module column">
                <div style="line-height: 32px; background: aliceblue">一、课程目标与考核细则</div>
                <div class="table">
                    <p>1.课程目标</p>
                    <p>
                        说明：这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告
                    </p>
                    <Table border :columns="columns1" :data="data1"></Table>
                </div>
                <div class="svg">
                    <p>1.课程目标</p>
                    <p>
                        说明：这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告这是一份简单的报告
                    </p>
                    <div ref="chart"></div>
                </div>
            </div>
            <div class="module column">
                <div style="line-height: 32px; background: aliceblue">一、课程目标与考核细则</div>
                <div>
                    <p>1.课程目标</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <p>课程达成度计算公式：55+66+77+88</p>
                    <Table :columns="columns14" :data="data5" border :span-method="handleSpan"></Table>
                </div>
                <div class="input">
                    <p>1.课程达成度</p>
                    <Input maxlength="100" show-word-limit type="textarea" :rows="6" placeholder="Enter something..." style="width: 100%" />
                </div>
                <div class="input">
                    <p>1.课程达成度</p>
                    <Input maxlength="100" show-word-limit type="textarea" :rows="6" placeholder="Enter something..." style="width: 100%" />
                </div>
                <div class="input">
                    <p>1.课程达成度</p>
                    <Input maxlength="100" show-word-limit type="textarea" :rows="6" placeholder="Enter something..." style="width: 100%" />
                </div>
                <div class="input">
                    <p>1.课程达成度</p>
                    <Input maxlength="100" show-word-limit type="textarea" :rows="6" placeholder="Enter something..." style="width: 100%" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import * as d3 from 'd3';
import html2pdf from '@/page/export/html2pdf';

export default {
    data() {
        return {
            columns1: [
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
            ],
            data1: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                },
            ],
            chartData: [
                { target: '课程目标 1', year: '2020', score: 7 },
                { target: '课程目标 1', year: '2021', score: 8 },
                { target: '课程目标 1', year: '2022', score: 9 },
                { target: '课程目标 2', year: '2020', score: 6 },
                { target: '课程目标 2', year: '2021', score: 7 },
                { target: '课程目标 2', year: '2022', score: 8 },
                { target: '课程目标 3', year: '2020', score: 5 },
                { target: '课程目标 3', year: '2021', score: 6 },
                { target: '课程目标 3', year: '2022', score: 7 },
                { target: '课程目标 4', year: '2020', score: 4 },
                { target: '课程目标 4', year: '2021', score: 5 },
                { target: '课程目标 4', year: '2022', score: 6 },
            ],
            columns14: [
                {
                    title: 'Date',
                    key: 'date',
                },
                {
                    title: 'Name',
                    key: 'name',
                },
                {
                    title: 'Age',
                    key: 'age',
                },
                {
                    title: 'Address',
                    key: 'address',
                },
            ],
            data5: [
                {
                    name: 'John Brown',
                    age: 18,
                    address: 'New York No. 1 Lake Park',
                    date: '2016-10-03',
                },
                {
                    name: 'Jim Green',
                    age: 24,
                    address: 'London No. 1 Lake Park',
                    date: '2016-10-01',
                },
                {
                    name: 'Joe Black',
                    age: 30,
                    address: 'Sydney No. 1 Lake Park',
                    date: '2016-10-02',
                },
                {
                    name: 'Jon Snow',
                    age: 26,
                    address: 'Ottawa No. 2 Lake Park',
                    date: '2016-10-04',
                },
            ],
        };
    },
    mounted() {
        this.renderChart();
    },
    methods: {
        renderChart() {
            const data = this.chartData;
            const margin = { top: 20, right: 30, bottom: 40, left: 40 };
            const width = 800 - margin.left - margin.right;
            const height = 400 - margin.top - margin.bottom;

            const svg = d3
                .select(this.$refs.chart)
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', `translate(${margin.left},${margin.top})`);

            const x = d3
                .scaleBand()
                .domain(data.map((d) => d.target))
                .range([0, width])
                .padding(0.2);

            svg.append('g').attr('transform', `translate(0,${height})`).call(d3.axisBottom(x));

            const y = d3.scaleLinear().domain([0, 10]).range([height, 0]);

            // 创建 Y 轴并设置刻度线长度
            const yAxis = d3.axisLeft(y).tickSizeInner(-width);

            svg.append('g').call(yAxis);

            // 自定义刻度线样式
            svg.selectAll('.tick line').attr('stroke', 'gray').attr('stroke-width', 0.5);

            const color = d3
                .scaleOrdinal()
                .domain(data.map((d) => d.year))
                .range(d3.schemeCategory10);

            svg.selectAll('myrect')
                .data(data)
                .join('rect')
                .attr('x', (d) => x(d.target) + (x.bandwidth() / 3) * data.map((d) => d.year).indexOf(d.year))
                .attr('y', (d) => y(d.score))
                .attr('width', x.bandwidth() / 3)
                .attr('height', (d) => height - y(d.score))
                .attr('fill', (d) => color(d.year));
        },
        handleSpan({ rowIndex, columnIndex }) {
            if (rowIndex === 0 && columnIndex === 0) {
                return [1, 2];
            } else if (rowIndex === 0 && columnIndex === 1) {
                return [0, 0];
            }
            if (rowIndex === 2 && columnIndex === 0) {
                return {
                    rowspan: 2,
                    colspan: 1,
                };
            } else if (rowIndex === 3 && columnIndex === 0) {
                return {
                    rowspan: 0,
                    colspan: 0,
                };
            }
        },
        exportPdf() {
            const exportElement = document.getElementById('export-content');
            html2pdf(exportElement, 'test.pdf');
        },
    },
};
</script>

<style scoped>
.module {
    padding-top: 20px;
    display: flex;
    gap: 10px;
}

.column {
    display: flex;
    flex-direction: column;
}

:deep(.ivu-table:before) {
    height: 0;
}
</style>
