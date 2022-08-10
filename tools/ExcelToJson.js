import xlsx from 'xlsx';

export default (file = null) =>
new Promise((resolve) => {
    const { name, data } = file
    if (!name.endsWith('xls') && !name.endsWith('xlsx')) {
        return res.json({ text: '请上传xls或xlsx格式的文件' })
    }
    // 解析excel文件
    const workbook = xlsx.read(data, { type: "buffer" })
    const sheet = workbook.Sheets[workbook.SheetNames[0]] // 选择第一个工作簿
    const result = xlsx.utils.sheet_to_json(sheet)
    resolve(result)
})