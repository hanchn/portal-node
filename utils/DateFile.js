import path from 'path'

export default (fileType = 'json') => {
    const now = new Date();
    const Y = now.getFullYear();
    const M = now.getMonth();
    const D = now.getDate();
    const H = now.getHours();
    const m = now.getMinutes();
    const filename = `cupshe_us_performanceReport_${Y}-${M + 1 < 10 ? '0' + (M + 1) : M + 1}-${D}-${H}-${m}.${fileType}`;
    return path.join(process.cwd(), 'public', filename);
}