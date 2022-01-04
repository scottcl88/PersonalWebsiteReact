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
                <div className="WordSection1">
                    <p className="MsoNormal"><b><span style={{ fontSize: '16.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Scott Lewis</span></b></p>
                    <p className="MsoNormal"><b><span style={{ fontSize: '11.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </span></b><b><span style={{ fontSize: '11.0pt', fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span></b><span style={{ fontSize: '10.0pt', fontFamily: '"Calibri",sans-serif', color: '#1A1A1B', background: 'white' }}>GitHub:
                    </span><a href="https://github.com/scottcl88"><span style={{ fontSize: '10.0pt', fontFamily: '"Calibri",sans-serif', color: '#1155CC', background: 'white' }}>https://github.com/scottcl88</span></a><span style={{ fontSize: '10.0pt', fontFamily: '"Calibri",sans-serif', color: '#1A1A1B', background: 'white' }}> </span><span style={{ fontSize: '10.0pt', fontFamily: '"Calibri",sans-serif' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LinkedIn:
                        </span><a href="https://www.linkedin.com/in/sclewis1/"><span style={{ fontSize: '10.0pt', fontFamily: '"Calibri",sans-serif', color: '#1155CC' }}>https://www.linkedin.com/in/sclewis1/</span></a></p>
                    <div style={{ border: 'none', borderBottom: 'solid black 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
                        <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Summary:</span></b></p>
                    </div>
                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '0in' }}><a /><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Experienced full stack
                        developer and team lead with a history of working </span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>in bankruptcy and
                            higher education industries<span style={{ color: 'black' }}>. </span></span></p>
                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '0in' }}><a /><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Seeking to
                        extend my current expertise in .Net framework, web development and team lead
                        skills. </span></p>
                    <table cellSpacing={0} cellPadding={0} width={624} style={{ borderCollapse: 'collapse' }}>
                        <tbody><tr>
                            <td width={624} colSpan={2} style={{ width: '468.35pt', border: 'none', borderBottom: 'solid black 1.0pt', padding: '0in 0in 0in 0in' }}>
                                <p className="MsoNormal" style={{ marginBottom: '3.75pt' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Education:</span></b></p>
                            </td>
                        </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Columbus State Community College</span></b></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Columbus,
                                        Ohio</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><i><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Computer Science Software Development</span></i></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>August
                                        2016</span></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>&nbsp;</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', border: 'none', borderBottom: 'solid black 1.0pt', padding: '0in 0in 0in 0in' }}>
                                    <div style={{ border: 'none', borderBottom: 'solid black 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
                                        <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Skills:</span></b></p>
                                    </div>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Proficient in C#, .Net, Nhibernate, SQL, Azure Devops, S</span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>PA, <span style={{ color: 'black' }}>MVC, JavaScript, HTML, CSS, Visual Studio, Git,
                                        PostgreSQL</span></span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Additional experience with programming Blazor, Entity Framework,
                                        Java, </span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Angular<span style={{ color: 'black' }}>, </span>Node JS<span style={{ color: 'black' }}>, ASP, PHP, Web
                                            Design, Jenkins, </span>XML<span style={{ color: 'black' }}>, </span>Mongoose<span style={{ color: 'black' }}>, Microsoft GP</span></span></p>
                                    <p className="MsoNormal" style={{ marginBottom: '3.75pt' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Experience:</span></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span></b></p>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Stretto</span></b></p>
                                    <p className="MsoNormal"><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Development
                                        Team Lead</span></p>
                                    <p className="MsoNormal"><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Software
                                        Developer</span></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span></p>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Dayton, Ohio</span></p>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>May 2019 - Present</span></b></p>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>May 2017 - May 2019</span></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Promoted
                                        within a two-year timeframe for exceeding goals, showing leadership and
                                        delivering long term solutions to improve company products</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Developed
                                        web applications using SPA framework in C# ASP.NET MVC and connected to a
                                        Nhibernate SQL backend via WCF REST Services API</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Designed
                                        UI pages using latest technologies in TypeScript, Bootstrap, CSS, SASS,
                                        JavaScript and JQuery as well as building custom widgets with LitElement</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Performed
                                        scrum master responsibilities with daily standups, planned team activities,
                                        tracked progress and reported sprint productivity</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Lead,
                                        interviewed and mentored new team members in an agile environment</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Maintained
                                        high quality code by conducting daily code review through DevOps pull
                                        requests</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Scoped
                                        new features and managed communication across multiple teams to deliver an
                                        accurate and quality product on time</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>Triaged
                                        and solved critical production support issues to meet client demands within
                                        specific business timeframe</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>&nbsp;</span></b></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>&nbsp;</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Ohio State University</span></b></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Columbus,
                                        Ohio</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><i><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>.Net Developer</span></i></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>December
                                        2016 - </span></b><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>May
                                            2017</span></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Built and maintained efficient, reusable, and reliable
                                        JavaScript code</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Adapted to new technologies for the best possible performance,
                                        quality, and responsiveness of applications</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Identified bottlenecks and bugs, and devised solutions to
                                        problems</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Translate application requirements into functional SQL,
                                        PostgreSQL or Mongoose procedures and queries</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Help maintain code quality, organization, and automation using
                                        Node JS</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif' }}>&nbsp;</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>nChannel Incorporated</span></b></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Columbus,
                                        Ohio</span></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={372} style={{ width: '278.85pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal"><i><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Associate Consultant</span></i></p>
                                </td>
                                <td width={253} style={{ width: '189.5pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ textAlign: 'right' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>May 2016
                                        - December 2016</span></b></p>
                                </td>
                            </tr>
                            <tr>
                                <td width={624} colSpan={2} style={{ width: '468.35pt', padding: '0in 0in 0in 0in' }}>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Implemented customers by creating customized XML/C# to meet
                                        requirements for eCommerce and ERP endpoints</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Examine and resolve technical support cases using Microsoft
                                        Dynamics CRM</span></p>
                                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Execute SQL queries and analyze results to identify problems in
                                        customer order database</span></p>
                                </td>
                            </tr>
                        </tbody></table>
                    <div style={{ border: 'none', borderBottom: 'solid black 1.0pt', padding: '0in 0in 1.0pt 0in' }}>
                        <p className="MsoNormal" style={{ border: 'none', padding: '0in' }}><b><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Accomplishments:</span></b></p>
                    </div>
                    <p className="MsoNormal" style={{ marginTop: '3.75pt', marginRight: '0in', marginBottom: '3.75pt', marginLeft: '.5in', textIndent: '-.25in' }}><span style={{ fontSize: '10.0pt', fontFamily: '"Noto Sans Symbols"', color: 'black' }}>●<span style={{ font: '7.0pt "Times New Roman"' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span></span><span style={{ fontSize: '9.0pt', fontFamily: '"Calibri",sans-serif', color: 'black' }}>Dean list</span></p>
                    <Toast onClose={() => this.setState({ showErrorToast: false })} bg="danger" show={this.state.showErrorToast} delay={3000} autohide>
                        <Toast.Body>An error occurred sending your message</Toast.Body>
                    </Toast>
                </div>
            </div>

        );
    }

}

export default Resume;