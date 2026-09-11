import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, Annotation, TextSearch, FormFields, FormDesigner,
         PageOrganizer, Inject } from '@syncfusion/ej2-react-pdfviewer';

export default function App() {
    return (
      <PdfViewerComponent id="container"  enableNavigation={true} enableBookmark={true} enableHyperlink={true}   hyperlinkOpenState='NewTab'
       enableThumbnail={true}
        // Specifies the URL (for example, a file from the public folder) or a Base64-encoded PDF.
        documentPath="https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
        // Specifies the path to the PDFium resource files required for the PDF Viewer to function.
        resourceUrl="https://cdn.syncfusion.com/ej2/34.1.29/dist/ej2-pdfviewer-lib"  style={{ height: '850px' }}>

         <Inject services={[ Toolbar, Magnification, Navigation, Annotation, LinkAnnotation,
                             BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
                             FormFields, FormDesigner, PageOrganizer ]}/>
      </PdfViewerComponent>
    );
}