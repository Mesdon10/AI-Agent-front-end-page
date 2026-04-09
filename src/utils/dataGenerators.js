/**
 * 知识点 1：时间序列与异常检测 (Time-Series & Anomaly Detection)
 * 概念：在深度神经网络高效计算时，大部分图像的推理时间服从正态分布。
 * 如果某个样本的计算时间远超平均值（例如超过均值 + 3倍标准差，即 3σ），
 * 我们就认为系统发生了“显存抖动”或遇到了极端复杂的病理图像。
 */
export const generateTimeSeriesData = () => {
    const data = [];
    let baseLatency = 45; // 基础推理延迟 45ms

    for (let i = 0; i < 100; i++) {
        // 模拟正常的小幅波动 (-5ms 到 +5ms)
        let latency = baseLatency + (Math.random() * 10 - 5);
        let isAnomaly = false;

        // 随机制造约 5% 的异常点（模拟遇到复杂医学切片，计算耗时激增）
        if (Math.random() < 0.05) {
            latency += 50 + Math.random() * 30; // 突然飙升到 100ms 以上
            isAnomaly = true;
        }

        data.push({
            id: i,
            time: `10:${i.toString().padStart(2, '0')}`,
            latency: parseFloat(latency.toFixed(2)),
            isAnomaly: isAnomaly
        });
    }
    return data;
};

/**
 * 知识点 2：降维与聚类分析 (Dimensionality Reduction & Clustering)
 * 概念：AI 在处理生物信息（如基因表达谱）时，特征往往是成百上千维的。
 * 数据分析师使用主成分分析 (PCA) 或 t-SNE 算法，将高维数据降到二维 (X, Y)，
 * 此时不同类型的细胞（如：正常细胞、良性肿瘤、恶性肿瘤）会在图上聚集成不同的“簇”。
 */
export const generateClusterData = () => {
    const generateCluster = (centerX, centerY, count, type) => {
        const cluster = [];
        for (let i = 0; i < count; i++) {
            // 使用极坐标生成围绕中心点的散点，模拟高斯分布
            const radius = Math.random() * 15;
            const angle = Math.random() * 2 * Math.PI;
            cluster.push([
                centerX + radius * Math.cos(angle),
                centerY + radius * Math.sin(angle),
                type
            ]);
        }
        return cluster;
    };

    // 模拟三类医学样本的特征分布
    // 把原来的中文替换成纯正的医学英文术语
    const normalCells = generateCluster(30, 40, 50, 'Normal Tissue');
    const benignTumor = generateCluster(70, 30, 40, 'Benign Features');
    const malignantTumor = generateCluster(60, 80, 45, 'Malignant Features');

    return [...normalCells, ...benignTumor, ...malignantTumor];
};

/**
 * 知识点 3：矩阵与热力图 (Matrix & Heatmap)
 * 概念：展示多智能体在分布式计算时的资源占用。
 * 颜色越深，代表节点之间的通信带宽占用越高，或者该层的计算密集度越大。
 */
export const generateHeatmapData = () => {
    const hours = ['CPU-1', 'CPU-2', 'GPU-1', 'GPU-2', 'NPU-1'];
    const days = ['Task A', 'Task B', 'Task C', 'Task D', 'Task E', 'Task F', 'Task G'];
    const data = [];

    for (let i = 0; i < hours.length; i++) {
        for (let j = 0; j < days.length; j++) {
            // 模拟不同硬件节点在不同任务下的负载百分比 (0-100)
            // GPU 节点（i 对应 2 和 3）的负载通常更高
            let load = Math.random() * 50;
            if (i === 2 || i === 3) load += 40;

            data.push([i, j, parseFloat(load.toFixed(1))]);
        }
    }
    return { hours, days, data };
};