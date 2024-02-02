import pdfjs from 'pdfjs-dist/build/pdf';

export const readPdf = async (file: File) => {
    return new Promise<string[]>(async (resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.onload = async () => {
        try {
            const arrayBuffer = fileReader.result as ArrayBuffer;
            const pdf = await pdfjs.getDocument({ data: arrayBuffer }).promise;

            const pagesText: string[] = [];

            for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
            const page = await pdf.getPage(pageNumber);
            const textContent = await page.getTextContent();
            const pageText = textContent.items.map((item) => item.str).join(' ');
            pagesText.push(pageText);
            }

            resolve(pagesText);
        } catch (error) {
            reject(error);
        }
        };

        fileReader.readAsArrayBuffer(file);
    });
};