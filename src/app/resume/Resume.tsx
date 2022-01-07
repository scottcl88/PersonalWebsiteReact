import axios from 'axios';
import React from 'react';
import { Dropdown, Toast } from 'react-bootstrap';

class Resume extends React.Component {

    state: any = { showErrorToast: false };
    constructor(props: any) {
        super(props);
    }
    downloadPdf = (e: any, type: number) => {
        e.preventDefault();
        console.log("downloadPdf called: ", e);
        (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute("6Lc6buAdAAAAAPHBGxLQUegsMf_ACveCrUaHqC5O", { action: 'submit' }).then((token: any) => {
                axios({
                    url: `https://foodapi20210616194736.azurewebsites.net/api/Document/DownloadResume?resumeType=${type}`,
                    method: 'GET',
                    responseType: 'blob',
                    headers: { RecaptchaToken: token }
                }).then((response) => {
                    let filename = "";
                    const contentDisposition = response.headers['content-disposition'];
                    console.log("ContentDisposition", contentDisposition);
                    if (contentDisposition && contentDisposition.indexOf('attachment') !== -1) {
                        var filenameRegex = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
                        var matches = filenameRegex.exec(contentDisposition);
                        if (matches != null && matches[1]) {
                            filename = matches[1].replace(/['"]/g, '');
                        }
                    }
                    console.log("filename", filename);
                    const contentType = response.headers['content-type'];
                    const blob = new Blob([response.data], { type: contentType });
                    const link = document.createElement('a');
                    link.href = window.URL.createObjectURL(blob);
                    link.download = filename;
                    link.click();
                }).catch((err: any) => {
                    console.error("Failed to download: ", err);
                    this.setState({ showErrorToast: true });
                });
            });
        });
    }
    render() {
        return (
            <div className="resume">
                <Dropdown className="text-center mt-4">
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <i className="fas fa-download mr-2"></i>Download
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item onClick={(e) => this.downloadPdf(e, 3)}><i className="fas fa-file-pdf mr-2"></i>PDF</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadPdf(e, 1)}><i className="fas fa-file-word mr-2"></i>DOCX</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadPdf(e, 4)}><i className="fas fa-file-alt mr-2"></i>RTF</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadPdf(e, 5)}><i className="fas fa-file-alt mr-2"></i>TXT</Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.downloadPdf(e, 2)}><i className="fas fa-file-code mr-2"></i>HTML</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <div style={{ marginLeft: "46%", width: "100%" }}>
                    <Toast onClose={() => this.setState({ showErrorToast: false })} bg="danger" show={this.state.showErrorToast} delay={3000} autohide>
                        <Toast.Body>An error occurred</Toast.Body>
                    </Toast>
                </div>
                <div className="container">
                    <object className="pdf-viewer" data="https://foodapi20210616194736.azurewebsites.net/api/Document/SCLewisResume" type="application/pdf"></object>
                </div>
            </div>

        );
    }

}

export default Resume;