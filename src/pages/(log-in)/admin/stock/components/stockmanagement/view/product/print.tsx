/* eslint-disable @typescript-eslint/no-explicit-any */
import { Print } from "@mui/icons-material"
import pdfMake from "pdfmake/build/pdfmake";
import htmlToPdfmake from "html-to-pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
import { ProductServices } from "../../../../../../../../services/productServices";
pdfMake.vfs = pdfFonts.vfs;

export const PrintProductList = () => {
    const generatePdf = () => {
        new ProductServices()
            .getAllProducts()
            .then((res) => {
                const htmlContent = `
                <div>
                  <h1>Gold mining Ltd</h1>
                  <table style="width: 100%; border-collapse: collapse;" border="1">
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Product Category</th>
                        <th>Product Location</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${res.data
                        .map(
                            (item: any) => `
                            <tr>
                              <td>${item.name}</td>
                              <td>${item.category}</td>
                              <td>${item.address}</td>
                            </tr>
                          `
                        )
                        .join("")}
                    </tbody>
                  </table>
                </div>
              `;
                const pdfContent = htmlToPdfmake(htmlContent);
                pdfMake
                    .createPdf({
                        content: pdfContent,
                        pageSize: "A4",
                        pageMargins: [40, 60, 40, 60],
                    })
                    .download("generated-document.pdf");
            })
            .catch((err) => console.log(err));
};
    return <>
        <button
            onClick={() => generatePdf()} className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <Print />
        </button>
    </>
}