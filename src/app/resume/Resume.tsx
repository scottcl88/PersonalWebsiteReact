import React from 'react';
import { Dropdown, Toast } from 'react-bootstrap';

class Resume extends React.Component {

    state: any = { showErrorToast: false };
    constructor(props: any) {
        super(props);
    }
    downloadDoc = async (e: any, type: number) => {
        e.preventDefault();
        console.log("downloadDoc called: ", e);
        let fileName = "Public_SCLewis_Resume.docx";
        if (type === 2) {
            fileName = "Public_SCLewis_Resume.pdf";
        }
        if (type === 3) {
            fileName = "Public_SCLewis_Resume.txt";
        }
        const fileUrl = 'https://scottclpersonalwebsite.blob.core.windows.net/publicfiles/' + fileName;

        try {
            // Fetch the file
            const response = await fetch(fileUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const blob = await response.blob();

            // Create a Blob URL
            const url = window.URL.createObjectURL(blob);

            // Create a link element and trigger download
            const a = document.createElement('a');
            a.href = url;
            a.download = fileName;

            // Add the Content-Disposition header
            a.setAttribute('download', fileName);
            a.setAttribute('target', '_blank');
            document.body.appendChild(a);
            a.click();

            // Clean up
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error('There was an error downloading the file:', error);
        }
    }
    render() {
        return (
            <div className="resume">
                <Dropdown className="text-center mt-4">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="fas fa-download mr-2"></i>Download
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => this.downloadDoc(e, 2)}><i className="fas fa-file-pdf mr-2"></i>PDF</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadDoc(e, 1)}><i className="fas fa-file-word mr-2"></i>DOCX</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadDoc(e, 3)}><i className="fas fa-file-alt mr-2"></i>TXT</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{ marginLeft: "46%", width: "100%" }}>
                    <Toast onClose={() => this.setState({ showErrorToast: false })} bg="danger" show={this.state.showErrorToast} delay={3000} autohide>
                        <Toast.Body>An error occurred</Toast.Body>
                    </Toast>
                </div>
                <div className="container">
                    <object className="pdf-viewer" data="https://scottclpersonalwebsite.blob.core.windows.net/publicfiles/Public_SCLewis_Resume.pdf" type="application/pdf" aria-label="PDF Resume"></object>
                </div>
            </div>

        );
    }

}

export default Resume;