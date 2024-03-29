import React, { useEffect, useState } from 'react';
import { Modal, Table } from 'react-bootstrap';
import AsteroidCollectorModal from '../asteroidCollectorModal/AsteroidCollectorModal';
import BenjiWorldModal from '../benjiWorldModal/BenjiWorldModal';
import DynamicWeatherModal from '../dynamicWeatherModal/DynamicWeatherModal';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import RecipeLewisModal from '../recipeLewisModal/RecipeLewisModal';
import SurfNEatModal from '../surfNEatModal/SurfNEatModal';
import axios from 'axios';
import WordleHinterModal from '../wordleHinterModal/WordleHinterModal';
import EmailSubManagerModal from '../emailSubManagerModal/EmailSubManagerModal';
import JavaWordSearchModal from '../javaWordSearchModal/JavaWordSearchModal';
import OpswatAcademyModal from '../opswatAcademyModal/OpswatAcademyModal';
import FileIndexerServiceModal from '../fileIndexerServiceModal/FileIndexerServiceModal';
import FileSearcherModal from '../fileSearcherModal/FileSearcherModal';
import SecureLewisModal from '../secureLewisModal/SecureLewisModal';
import TpLinkModal from '../tpLinkModal/TPLinkModal';
import PlateManiaModal from '../plateManiaModal/PlateManiaModal';
import SharkToothTrackerModal from '../sharkToothTrackerModal/SharkToothTrackerModal';
import CapacitorPluginModal from '../capacitorPluginModal/CapacitorPluginModal';

function Portfolio() {

    function experienceFormatter(cell: any) {
        let cellNum = Number(cell);
        if (!isNaN(cellNum)) {
            if (cell == 0) {
                return (
                    <span>None</span>
                );
            } else if (cell < 1) {
                return (
                    <span>{cell * 12} months</span>
                );
            } else if (cell == 1) {
                return (
                    <span>{cell} year</span>
                );
            }
        }
        return (
            <span>{cell} years</span>
        );
    }


    const columns = [{
        dataField: 'skill',
        text: 'Skill',
        sort: true,
        headerClasses: "skillColumnHeader",
    }, {
        dataField: 'lastUsed',
        text: 'Last Used',
        sort: true,
        headerClasses: "lastUsedColumnHeader",
    }, {
        dataField: 'professionalExperience',
        text: 'Professional Experience',
        sort: true,
        headerClasses: "professionalExperienceColumnHeader",
        formatter: experienceFormatter
    }, {
        dataField: 'hobbyExperience',
        text: 'Hobby Experience',
        sort: true,
        headerClasses: "hobbyExperienceColumnHeader",
        formatter: experienceFormatter
    }];

    const [surfNEatShow, setSurfNEatShow] = useState(false);
    const [dynamicWeatherShow, setDynamicWeatherShow] = useState(false);
    const [portfolioShow, setPortfolioShow] = useState(false);
    const [benjiWorldShow, setBenjiWorldShow] = useState(false);
    const [recipeLewisShow, setRecipeLewisShow] = useState(false);
    const [plateManiaShow, setPlateManiaShow] = useState(false);
    const [sharkToothTrackerShow, setSharkToothTrackerShow] = useState(false);
    const [capacitorPluginShow, setCapacitorPluginShow] = useState(false);
    const [asteroidCollectorShow, setAsteroidCollectorShow] = useState(false);
    const [wordleHinterShow, setWordleHinterShow] = useState(false);
    const [emailSubManagerShow, setEmailSubManagerShow] = useState(false);
    const [javaWordSearchShow, setJavaWordSearchShow] = useState(false);
    const [opswatAcademyShow, setOpswatAcademyShow] = useState(false);
    const [fileIndexerServiceShow, setFileIndexerServiceShow] = useState(false);
    const [fileSearcherShow, setFileSearcherShow] = useState(false);
    const [secureLewisShow, setSecureLewisShow] = useState(false);
    const [tpLinkControlShow, setTpLinkControlShow] = useState(false);
    const [skillList, setSkillsList] = useState([]);
    const [originalSkillList, setOriginalSkillsList] = useState([]);

    const surfNEatClose = () => setSurfNEatShow(false);
    const surfNEatDoShow = () => setSurfNEatShow(true);

    const dynamicWeatherClose = () => setDynamicWeatherShow(false);
    const dynamicWeatherDoShow = () => setDynamicWeatherShow(true);

    const portfolioClose = () => setPortfolioShow(false);
    const portfolioDoShow = () => setPortfolioShow(true);

    const benjiWorldClose = () => setBenjiWorldShow(false);
    const benjiWorldDoShow = () => setBenjiWorldShow(true);

    const recipeLewisClose = () => setRecipeLewisShow(false);
    const recipeLewisDoShow = () => setRecipeLewisShow(true);

    const plateManiaClose = () => setPlateManiaShow(false);
    const plateManiaDoShow = () => setPlateManiaShow(true);

    const sharkToothTrackerClose = () => setSharkToothTrackerShow(false);
    const sharkToothTrackerDoShow = () => setSharkToothTrackerShow(true);

    const capacitorPluginClose = () => setCapacitorPluginShow(false);
    const capacitorPluginDoShow = () => setCapacitorPluginShow(true);

    const asteroidCollectorClose = () => setAsteroidCollectorShow(false);
    const asteroidCollectorDoShow = () => setAsteroidCollectorShow(true);

    const wordleHinterClose = () => setWordleHinterShow(false);
    const wordleHinterDoShow = () => setWordleHinterShow(true);

    const emailSubManagerClose = () => setEmailSubManagerShow(false);
    const emailSubManagerDoShow = () => setEmailSubManagerShow(true);

    const javaWordSearchClose = () => setJavaWordSearchShow(false);
    const javaWordSearchDoShow = () => setJavaWordSearchShow(true);

    const opswatAcademyClose = () => setOpswatAcademyShow(false);
    const opswatAcademyDoShow = () => setOpswatAcademyShow(true);

    const fileIndexerServiceClose = () => setFileIndexerServiceShow(false);
    const fileIndexerServiceDoShow = () => setFileIndexerServiceShow(true);

    const fileSearcherClose = () => setFileSearcherShow(false);
    const fileSearcherDoShow = () => setFileSearcherShow(true);

    const secureLewisClose = () => setSecureLewisShow(false);
    const secureLewisDoShow = () => setSecureLewisShow(true);

    const tpLinkControlClose = () => setTpLinkControlShow(false);
    const tpLinkControlDoShow = () => setTpLinkControlShow(true);

    const getSkills = () => {
        (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute("6Lc6buAdAAAAAPHBGxLQUegsMf_ACveCrUaHqC5O", { action: 'submit' }).then((token: any) => {
                axios.get("https://foodlewisapi.azurewebsites.net/api/Document/GetSkills", { headers: { RecaptchaToken: token } }).then((res) => {
                    console.log("Retrieved skills: ", res);
                    setSkillsList(res.data);
                    setOriginalSkillsList(res.data);
                }).catch((err: any) => {
                    console.error("Failed to get skills", err);
                });
            });
        });
    }
    const search = (ev: any) => {
        let searchStr = ev?.target?.value?.toLowerCase();
        if (searchStr) {
            let newList: any[] = originalSkillList.filter((val) => {
                let foundSkill = (val as any).skill?.toLowerCase().indexOf(searchStr) >= 0;
                let foundLastUsed = (val as any).lastUsed?.toLowerCase().indexOf(searchStr) >= 0;

                let hobbyExp = (val as any).hobbyExperience;
                let foundHobbyExperience = false;
                if (hobbyExp >= 1) {
                    hobbyExp += " years";
                } else if (hobbyExp > 0) {
                    hobbyExp *= 12;
                    hobbyExp += " months";
                } else if (hobbyExp <= 0) {
                    hobbyExp = "None";
                }
                foundHobbyExperience = hobbyExp?.toLowerCase().indexOf(searchStr) >= 0;

                let professionalExp = (val as any).professionalExperience;
                let foundProfessionalExperience = false;
                if (professionalExp >= 1) {
                    professionalExp += " years";
                } else if (professionalExp > 0) {
                    professionalExp *= 12;
                    professionalExp += " months";
                } else if (professionalExp <= 0) {
                    professionalExp = "None";
                }
                foundProfessionalExperience = professionalExp?.toLowerCase().indexOf(searchStr) >= 0;

                return foundSkill || foundLastUsed || foundProfessionalExperience || foundHobbyExperience;
            }
            );
            setSkillsList(newList as any);
        } else {
            setSkillsList(originalSkillList);
        }
    }
    const clickAzureDeveloperAssociate = () => {
        window.open("https://learn.microsoft.com/api/credentials/share/en-us/ScottLewis-7553/247849C431B9FFF8?sharingId=C35526628A17196", "_blank");
    };
    const clickAzureFundamentals = () => {
        window.open("https://learn.microsoft.com/api/credentials/share/en-us/ScottLewis-7553/F460AE7F7DEEE3E?sharingId=C35526628A17196", "_blank");
    };
    const clickScrumMaster = () => {
        window.open("https://www.credly.com/badges/8b74256a-8be0-4940-bd79-9b61c2ad1671/public_url", "_blank");
    };
    const clickScrumMaster2 = () => {
        window.open("https://www.credly.com/badges/f50b875f-d1b4-45c9-b1e2-d831e26cf6a8/public_url", "_blank");
    };
    const clickPSD1 = () => {
        window.open("https://www.credly.com/badges/cce45617-0798-45e0-b36c-0bf97ad29a7f/public_url", "_blank");
    };
    const clickPSK1 = () => {
        window.open("https://www.credly.com/badges/a1b1259f-3b66-4fe4-baba-02090924c482/public_url", "_blank");
    };
    const clickTeamLeadership = () => {
        window.open("https://www.goskills.com/Verify?verificationNumber=53958428&fullName=Scott%20Lewis", "_blank");
    };
    const clickCorporateStrategy = () => {
        window.open("https://www.coursera.org/account/accomplishments/certificate/X8VFNFEB7W67", "_blank");
    };
    const clickGoogleStoreCertificate = () => {
        window.open("https://www.credential.net/2c4d0ab3-7243-4ba6-9a52-23ef0df12ce3", "_blank");
    };
    const clickGoogleProjectManagementCertificate = () => {
        window.open("https://www.credly.com/badges/178cfced-8e09-4f47-8a75-2b0f35bc5bff/public_url", "_blank");
    };
    const clickStrategicManagementCertificate = () => {
        window.open("https://coursera.org/verify/specialization/EM3ETRZCCXYM", "_blank");
    };
    const clickSoftwareDevelopmentLifecycle = () => {
        window.open("https://www.coursera.org/account/accomplishments/specialization/JXJBFXDFKVWM", "_blank");
    };
    const clickCybersecurityForEveryone = () => {
        window.open("https://www.coursera.org/account/accomplishments/verify/6Q4JMSH3B5TR", "_blank");
    };
    const clickCybersecurityITFundamentalsSpecialization = () => {
        window.open("https://www.credly.com/badges/a355d374-aa24-4ee8-8313-8f9805520381/public_url", "_blank");
    };
    useEffect(() => {
        console.log("useEffect called");
        getSkills();
    }, []);

    return (
        <div className="portfolio">
            <section className="page-section portfolio" id="portfolio">
                <div className="container">
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Portfolio</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1" onClick={surfNEatDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "20%" }} src={require("../../assets/img/portfolio/surf_n_eat.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Surf-N-Eat</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2" onClick={dynamicWeatherDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={require("../../assets/img/portfolio/magicMirrorLogo.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">MMM-DynamicWeather</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3" onClick={portfolioDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ height: "100px", marginLeft: "28%" }} src={require("../../assets/img/portfolio/logo.svg").default} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Portfolio</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={recipeLewisDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "34%", height: "100px" }} src={require("../../assets/img/portfolio/blazor_wasm.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Recipe Lewis</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={plateManiaDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "34%", height: "100px" }} src={require("../../assets/img/portfolio/LicensePlateMania_180px.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">License Plate Mania</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={sharkToothTrackerDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "34%", height: "100px" }} src={require("../../assets/img/portfolio/sharkToothTracker.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Shark Tooth Tracker</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={capacitorPluginDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "40%", height: "100px" }} src={require("../../assets/img/portfolio/java-logo3.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Capacitor Plugin</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4" onClick={benjiWorldDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "34%", height: "100px" }} src={require("../../assets/img/portfolio/blazor_wasm.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Benji World</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={fileIndexerServiceDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "30%", height: "100px" }} src={require("../../assets/img/portfolio/net_6.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">File Indexer Service</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={fileSearcherDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "27%", height: "100px" }} src={require("../../assets/img/portfolio/asp_net_mvc.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">File Searcher</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={secureLewisDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "32%", height: "100px" }} src={require("../../assets/img/portfolio/vue.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Secure Lewis</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={tpLinkControlDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "26%", height: "100px" }} src={require("../../assets/img/portfolio/nodejs.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">TP Link Control</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal7" onClick={emailSubManagerDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "23%", height: "100px" }} src={require("../../assets/img/portfolio/PHP-logo.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Email Sub Manager</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal8" onClick={wordleHinterDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "33%", height: "100px" }} src={require("../../assets/img/portfolio/python_icon.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Wordle Hinter</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal9" onClick={javaWordSearchDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "40%", height: "100px" }} src={require("../../assets/img/portfolio/java-logo3.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Word Search</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6" onClick={asteroidCollectorDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "40%", height: "100px" }} src={require("../../assets/img/portfolio/java-logo3.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">2D Game</h5>
                        </div>
                    </div>
                    <div className="divider-custom" id="certifications">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Certifications</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="mt-2 mb-1">
                        <div className="row">
                            <div className="col-6">
                                <div onClick={clickAzureDeveloperAssociate} className="pointer text-center hover-context">
                                    <h3>Microsoft Azure Developer Associate</h3>
                                    <img src={require("../../assets/img/microsoft-certified-associate-badge.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickAzureFundamentals} className="pointer text-center hover-context">
                                    <h3>Microsoft Azure Fundamentals</h3>
                                    <img src={require("../../assets/img/microsoft-certified-fundamentals-badge.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickScrumMaster} className="pointer text-center hover-context">
                                    <h3>Professional Scrum Master I</h3>
                                    <img src={require("../../assets/img/BADGES_FINAL_PSM-I_600.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickScrumMaster2} className="pointer text-center hover-context">
                                    <h3>Professional Scrum Master II</h3>
                                    <img src={require("../../assets/img/professional-scrum-master-ii-psm-ii.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickPSD1} className="pointer text-center hover-context">
                                    <h3>Professional Scrum Developer I</h3>
                                    <img src={require("../../assets/img/professional-scrum-developer-i-psd-i.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickPSK1} className="pointer text-center hover-context">
                                    <h3>Professional Scrum with Kanban I</h3>
                                    <img src={require("../../assets/img/professional-scrum-kanban-i-psk-i.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickGoogleProjectManagementCertificate} className="pointer text-center hover-context">
                                    <h3>Google Project Management</h3>
                                    <img src={require("../../assets/img/google-project-management-certificate.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickStrategicManagementCertificate} className="pointer text-center hover-context">
                                    <h4>Strategic Leadership and Management</h4>
                                    <img src={require("../../assets/img/Illinois_blue-background2.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickCorporateStrategy} className="pointer text-center hover-context">
                                    <h3>Corporate Strategy</h3>
                                    <img src={require("../../assets/img/Illinois_blue-background2.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickTeamLeadership} className="pointer text-center hover-context">
                                    <h3>Team Leadership</h3>
                                    <img src={require("../../assets/img/GoSkillsBadge.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={opswatAcademyDoShow} data-toggle="modal" data-target="#portfolioModal7" className="pointer text-center hover-context">
                                    <h3>OPSWAT Academy (8)</h3>
                                    <img src={require("../../assets/img/owpa.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickSoftwareDevelopmentLifecycle} className="pointer text-center hover-context">
                                    <h3>Software Development Lifecycle</h3>
                                    <img src={require("../../assets/img/FB-GoldM-maroon.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickCybersecurityForEveryone} className="pointer text-center hover-context">
                                    <h3>Cybersecurity for Everyone</h3>
                                    <img src={require("../../assets/img/umd_square_transparent.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickCybersecurityITFundamentalsSpecialization} className="pointer text-center hover-context">
                                    <h3>IT Fundamentals for Cybersecurity</h3>
                                    <img src={require("../../assets/img/IT_Fund_for_Cyber_Specialist.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6 mt-4">
                                <div onClick={clickGoogleStoreCertificate} className="pointer text-center hover-context">
                                    <h3>Google Play Store Listing</h3>
                                    <img src={require("../../assets/img/Google_Play_Store_Listing_Certificate.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Skills</h2>
                    <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                    </div>
                    <div className="mt-2 mb-1">
                        <label htmlFor="search" className="sr-only">Search</label><i className="fas fa-search" style={{ color: "#9b9b9b", margin: "12px", position: "absolute" }}></i>
                        <input type="text" name="search" id="search" className="form-control" placeholder="Search" required style={{ paddingLeft: "30px" }} onChange={search} />
                    </div>
                    <Table responsive striped>
                        <thead>
                            <tr>
                                {Array.from(columns).map((_, index) => (
                                    <th key={index}>{_.text}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {Array.from(skillList).map((_, index) => (
                                <tr key={index}>
                                    <td>{_["skill"]}</td>
                                    <td>{_["lastUsed"]}</td>
                                    <td>{experienceFormatter(_["professionalExperience"])}</td>
                                    <td>{experienceFormatter(_["hobbyExperience"])}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* <BootstrapTable keyField='skill' data={skillList} columns={columns} id="skillTable" defaultSorted={[{ dataField: "skill", order: "asc" }]} /> */}
                </div>
            </section>
            <Modal show={surfNEatShow} onHide={surfNEatClose} size="lg">
                <SurfNEatModal></SurfNEatModal>
            </Modal>
            <Modal show={dynamicWeatherShow} onHide={dynamicWeatherClose} size="lg">
                <DynamicWeatherModal></DynamicWeatherModal>
            </Modal>
            <Modal show={portfolioShow} onHide={portfolioClose} size="lg">
                <PortfolioModal></PortfolioModal>
            </Modal>
            <Modal show={benjiWorldShow} onHide={benjiWorldClose} size="lg">
                <BenjiWorldModal></BenjiWorldModal>
            </Modal>
            <Modal show={recipeLewisShow} onHide={recipeLewisClose} size="lg">
                <RecipeLewisModal></RecipeLewisModal>
            </Modal>
            <Modal show={asteroidCollectorShow} onHide={asteroidCollectorClose} size="lg">
                <AsteroidCollectorModal></AsteroidCollectorModal>
            </Modal>
            <Modal show={wordleHinterShow} onHide={wordleHinterClose} size="lg">
                <WordleHinterModal></WordleHinterModal>
            </Modal>
            <Modal show={emailSubManagerShow} onHide={emailSubManagerClose} size="lg">
                <EmailSubManagerModal></EmailSubManagerModal>
            </Modal>
            <Modal show={javaWordSearchShow} onHide={javaWordSearchClose} size="lg">
                <JavaWordSearchModal></JavaWordSearchModal>
            </Modal>
            <Modal show={opswatAcademyShow} onHide={opswatAcademyClose} size="lg">
                <OpswatAcademyModal></OpswatAcademyModal>
            </Modal>
            <Modal show={fileIndexerServiceShow} onHide={fileIndexerServiceClose} size="lg">
                <FileIndexerServiceModal></FileIndexerServiceModal>
            </Modal>
            <Modal show={fileSearcherShow} onHide={fileSearcherClose} size="lg">
                <FileSearcherModal></FileSearcherModal>
            </Modal>
            <Modal show={secureLewisShow} onHide={secureLewisClose} size="lg">
                <SecureLewisModal></SecureLewisModal>
            </Modal>
            <Modal show={tpLinkControlShow} onHide={tpLinkControlClose} size="lg">
                <TpLinkModal></TpLinkModal>
            </Modal>
            <Modal show={plateManiaShow} onHide={plateManiaClose} size="lg">
                <PlateManiaModal></PlateManiaModal>
            </Modal>
            <Modal show={sharkToothTrackerShow} onHide={sharkToothTrackerClose} size="lg">
                <SharkToothTrackerModal></SharkToothTrackerModal>
            </Modal>
            <Modal show={capacitorPluginShow} onHide={capacitorPluginClose} size="lg">
                <CapacitorPluginModal></CapacitorPluginModal>
            </Modal>
        </div>
    );
}

export default Portfolio;