import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import AsteroidCollectorModal from '../asteroidCollectorModal/AsteroidCollectorModal';
import BenjiWorldModal from '../benjiWorldModal/BenjiWorldModal';
import DynamicWeatherModal from '../dynamicWeatherModal/DynamicWeatherModal';
import PortfolioModal from '../portfolioModal/PortfolioModal';
import RecipeLewisModal from '../recipeLewisModal/RecipeLewisModal';
import SurfNEatModal from '../surfNEatModal/SurfNEatModal';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import axios from 'axios';

function Portfolio() {

    function experienceFormatter(cell: any, row: any) {
        var cellNum = Number(cell);
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
        text: 'LastUsed',
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
    const [asteroidCollectorShow, setAsteroidCollectorShow] = useState(false);
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

    const asteroidCollectorClose = () => setAsteroidCollectorShow(false);
    const asteroidCollectorDoShow = () => setAsteroidCollectorShow(true);

    const getSkills = () => {
        (window as any).grecaptcha.ready(() => {
            (window as any).grecaptcha.execute("6Lc6buAdAAAAAPHBGxLQUegsMf_ACveCrUaHqC5O", { action: 'submit' }).then((token: any) => {
                axios.get("https://foodapi20210616194736.azurewebsites.net/api/Document/GetSkills", { headers: { RecaptchaToken: token } }).then((res) => {
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
        var searchStr = ev?.target?.value?.toLowerCase();
        if (searchStr) {
            var newList: any[] = originalSkillList.filter((val) => {
                var foundSkill = (val as any).skill?.toLowerCase().indexOf(searchStr) >= 0;
                var foundLastUsed = (val as any).lastUsed?.toLowerCase().indexOf(searchStr) >= 0;

                var hobbyExp = (val as any).hobbyExperience;
                var foundHobbyExperience = false;
                if (hobbyExp >= 1) {
                    hobbyExp += " years";
                } else if (hobbyExp > 0) {
                    hobbyExp *= 12;
                    hobbyExp += " months";
                } else if (hobbyExp <= 0) {
                    hobbyExp = "None";
                }
                foundHobbyExperience = hobbyExp?.toLowerCase().indexOf(searchStr) >= 0;

                var professionalExp = (val as any).professionalExperience;
                var foundProfessionalExperience = false;
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
    const clickScrumMaster = (e: any) => {
        window.open("https://www.credly.com/users/scott-lewis.346d5c5f", "_blank");
    };
    const clickTeamLeadership = (e: any) => {
        window.open("https://www.goskills.com/Verify?verificationNumber=53958428&fullName=Scott%20Lewis", "_blank");
    };
    const clickGoogleStoreCertificate = (e: any) => {
        window.open("https://www.credential.net/2c4d0ab3-7243-4ba6-9a52-23ef0df12ce3", "_blank");
    };
    const clickGoogleProjectManagementCertificate = (e: any) => {
        window.open("https://www.credly.com/badges/178cfced-8e09-4f47-8a75-2b0f35bc5bff/public_url", "_blank");
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
                        <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4" onClick={benjiWorldDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-paw" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Benji World</h5>
                        </div>
                        <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5" onClick={recipeLewisDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <i className="fas fa-book" style={{ fontSize: "100px", marginLeft: "35%" }}></i>
                            </div>
                            <h5 className="text-center mb-0">Recipe Lewis</h5>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6" onClick={asteroidCollectorDoShow}>
                                <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                                    <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-search fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" style={{ marginLeft: "33%" }} src={require("../../assets/img/portfolio/asteroid.png")} alt="" />
                            </div>
                            <h5 className="text-center mb-0">Asteroid Collector</h5>
                        </div>
                    </div>
                    <div className="divider-custom"  id="certifications">
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
                                <div onClick={clickScrumMaster} className="pointer text-center">
                                    <h2>Professional Scrum Master I</h2>
                                    <img src={require("../../assets/img/BADGES_FINAL_PSM-I_600.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickGoogleProjectManagementCertificate} className="pointer text-center">
                                    <h2>Google Project Management</h2>
                                    <img src={require("../../assets/img/google-project-management-certificate.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickTeamLeadership} className="pointer text-center">
                                    <h2>Team Leadership</h2>
                                    <img src={require("../../assets/img/GoSkillsBadge.png")} style={{ height: "150px" }} />
                                </div>
                            </div>
                            <div className="col-6">
                                <div onClick={clickGoogleStoreCertificate} className="pointer text-center">
                                    <h2>Google Play Store Listing</h2>
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
                    <BootstrapTable keyField='skill' data={skillList} columns={columns} id="skillTable" defaultSorted={[{ dataField: "skill", order: "asc" }]} />
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
        </div>
    );
}

export default Portfolio;