import React, { useMemo } from 'react';
import ReactECharts from 'echarts-for-react';
import { useTranslation } from 'react-i18next'; // 引入双语翻译钩子
import { generateTimeSeriesData, generateClusterData, generateHeatmapData } from '../utils/dataGenerators';
import '../styles/Page.css';

function Analytics() {
    const { t } = useTranslation(); // 启用双语翻译

    const timeSeriesData = useMemo(() => generateTimeSeriesData(), []);
    const clusterData = useMemo(() => generateClusterData(), []);
    const heatmapData = useMemo(() => generateHeatmapData(), []);

    // 图表 1：纯英文配置
    const getLineOption = () => {
        const xData = timeSeriesData.map(d => d.time);
        const yData = timeSeriesData.map(d => d.latency);
        const anomalies = timeSeriesData.filter(d => d.isAnomaly).map(d => ({
            coord: [d.time, d.latency],
            value: d.latency + 'ms',
            name: 'Anomaly' // 异常点标签改为英文
        }));

        return {
            title: { text: 'Real-time Inference Latency', left: 'center' },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: xData, name: 'Timeline' },
            yAxis: { type: 'value', name: 'Latency (ms)' },
            series: [{
                data: yData,
                type: 'line',
                smooth: true,
                lineStyle: { width: 3, color: '#4facfe' },
                markPoint: {
                    data: anomalies,
                    itemStyle: { color: '#ff4d4f' }
                }
            }]
        };
    };

    // 图表 2：纯英文配置
    const getScatterOption = () => {
        return {
            title: { text: 'High-Dimensional PCA Clustering', left: 'center' },
            tooltip: { trigger: 'item' },
            legend: { top: 'bottom' },
            xAxis: { type: 'value', name: 'Dimension 1', scale: true },
            yAxis: { type: 'value', name: 'Dimension 2', scale: true },
            series: [
                { name: 'Normal Tissue', type: 'scatter', symbolSize: 8, itemStyle: { color: '#52c41a' }, data: clusterData.filter(d => d[2] === 'Normal Tissue') },
                { name: 'Benign Features', type: 'scatter', symbolSize: 8, itemStyle: { color: '#faad14' }, data: clusterData.filter(d => d[2] === 'Benign Features') },
                { name: 'Malignant Features', type: 'scatter', symbolSize: 8, itemStyle: { color: '#f5222d' }, data: clusterData.filter(d => d[2] === 'Malignant Features') }
            ]
        };
    };

    // 图表 3：纯英文配置
    const getHeatmapOption = () => {
        return {
            title: { text: 'Distributed Computing Resource Heatmap', left: 'center' },
            tooltip: { position: 'top' },
            grid: { height: '50%', top: '15%' },
            xAxis: { type: 'category', data: heatmapData.hours, splitArea: { show: true }, name: 'Compute Nodes' },
            yAxis: { type: 'category', data: heatmapData.days, splitArea: { show: true }, name: 'Analysis Tasks' },
            visualMap: { min: 0, max: 100, calculable: true, orient: 'horizontal', left: 'center', bottom: '5%', inRange: { color: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'] } },
            series: [{
                type: 'heatmap',
                data: heatmapData.data,
                label: { show: true, color: '#333' },
                emphasis: { itemStyle: { shadowBlur: 10, shadowColor: 'rgba(0, 0, 0, 0.5)' } }
            }]
        };
    };

    const chartCardStyle = {
        background: '#ffffff',
        padding: '25px',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
        marginBottom: '30px'
    };

    return (
        <div className="page-container" style={{ padding: '40px 5%' }}>
            {/* 这里的文字接入了 i18n 翻译系统 */}
            <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>{t('analytics.title')}</h1>
                <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>
                    {t('analytics.description')}
                </p>
            </div>

            <div style={chartCardStyle}>
                <ReactECharts option={getLineOption()} style={{ height: '400px', width: '100%' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
                <div style={chartCardStyle}>
                    <ReactECharts option={getScatterOption()} style={{ height: '450px', width: '100%' }} />
                </div>
                <div style={chartCardStyle}>
                    <ReactECharts option={getHeatmapOption()} style={{ height: '450px', width: '100%' }} />
                </div>
            </div>
        </div>
    );
}

export default Analytics;