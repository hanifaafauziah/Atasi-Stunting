import React, { useState } from 'react';
import { Document, Page,pdfjs } from 'react-pdf';
import {
  Box,
  Button,
  Heading
} from '@chakra-ui/react';


const url = "asset/data.pdf";

export default function StuntingStatistics() {

	
  pdfjs.GlobalWorkerOptions.workerSrc = 
  `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  document.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
	
  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }


  return (
    <Box p={18} ml={10}>
      <Heading> Indonesia&lsquo;s Stunting Data Based on SSGI.</Heading>
      <br/>
      <div className="main">
        <Document
          file={url}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <div>
          <div className="pagec">
            Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
          </div>
          <div className="buttonc">
            <Button
              type="button"
              disabled={pageNumber <= 1}
              onClick={previousPage}
              className="Pre"
            > Previous
            </Button>
            <Button
              type="button"
              disabled={pageNumber >= numPages}
              onClick={nextPage}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </Box>
  );
}
