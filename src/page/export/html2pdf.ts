import html2Canvas from 'html2canvas';
import JsPDF, { jsPDFOptions } from 'jspdf';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

// 定义一个对象
const pdfOperation: jsPDFOptions = {
    // 纵向布局
    orientation: 'p',
    // 默认单位为mm
    unit: 'mm',
    // 默认A4纸，210mm*297mm
    format: 'a4',
    // 是否压缩
    compress: true,
};

const margins = 10;
const a4w = 210 - margins * 2;
const a4h = 297 - margins * 2;

function htmlPdf(dom: HTMLElement, title: string) {
    debugger;
    const position = a4w / dom.scrollWidth;
    const positionHeight = a4h / position;
    const element = getElement(dom, positionHeight);
    html2Canvas(dom).then((canvas) => {
        // 设置pdf格式：纵向，210mm*297mm
        const pdf = new JsPDF(pdfOperation);
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            console.error('Failed to get 2D context from canvas');
            return;
        }
        // 按A4显示比例换算一页图像的像素高度
        const imgHeight = Math.floor((a4h * canvas.width) / a4w);
        let renderedHeight = 0;
        while (renderedHeight < canvas.height) {
            const page = document.createElement('canvas');
            page.width = canvas.width;
            // 可能内容不足一页
            page.height = Math.min(imgHeight, canvas.height - renderedHeight);
            // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
            const pageCtx = page.getContext('2d');
            if (!pageCtx) {
                console.error('Failed to get 2D context from page canvas');
                break;
            }
            // 用getImageData剪裁指定区域，并画到前面创建的canvas对象中
            pageCtx.putImageData(ctx.getImageData(0, renderedHeight, canvas.width, Math.min(imgHeight, canvas.height - renderedHeight)), 0, 0);
            // 添加图像到页面，保留10mm边距
            pdf.addImage(page.toDataURL('image/jpeg', 1.0), 'JPEG', 10, 10, a4w, Math.min(a4h, (a4w * page.height) / page.width));
            renderedHeight += imgHeight;
            if (renderedHeight < canvas.height) {
                pdf.addPage(); // 如果后面还有内容，添加一个空页
            }
        }
        // 保存文件
        pdf.save(title + '.pdf');
    });
}

function getElement(dom: HTMLElement, height: number) {
    // 获取指定高度位置处的dom元素
    function findElement(element: HTMLElement, targetHeight: number): HTMLElement | null {
        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = rect.bottom + window.scrollY;

        if (top <= targetHeight && targetHeight <= bottom) {
            for (const child of element.children) {
                const result = findElement(child as HTMLElement, targetHeight);
                if (result) {
                    return result;
                }
            }
            return element;
        }
        return null;
    }

    return findElement(dom, height);
}

export default htmlPdf;
