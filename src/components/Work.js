import React from 'react';
import { ReactComponent as Seed } from '../assets/icons/seed.svg';
import AQL from '../assets/images/AQL.png';


export const Work = () => {
    return (
        <div className="content-container">
            <div className="work content-section" data-section-name="work">
                <h2 className='content__title'>My Experience</h2>

                <div className="work__block">
                    <div className="work__flex">
                        <div className="work__block-company-title">
                            <Seed />
                        </div>
                        <div className="work__block-data">
                            <h3 className="work__block-title">Frontend Web Developer</h3>
                            <p className="work__block-subtitle"> Oct 2018-Present</p>

                            <ul className="work__block-info">
                                <li>
                                Create custom web pages and templates using Javascript, Jquery, HTML, CSS, and Liquid. 
                                </li>
                                <li>
                                Update, and maintain the many different websites using Javascript, HTML, CSS, and Shopify. 
                                </li>
                                <li>
                                Completely revamp sites using our new designs.
                                </li>
                                <li>
                                Create multiple functionalities required for each site; including but not limited to sliders, product pages, and modals. 
                                </li>
                                <li>
                                Works in a team to create multiple new websites every month for clients. 
                                </li>
                                <li>
                                Work in every feature of a shopify website from headers to product pages. 
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="work__block">
                    <div className="work__flex">
                        <div className="work__block-company-title">
                            <img className='work__block-image' src={AQL} alt='aqlighting' />
                        </div>
                        <div className="work__block-data">
                            <h3 className="work__block-title">Software Engineer</h3>
                            <p className="work__block-subtitle"> Sept 2017-Oct 2018t</p>

                            <ul className="work__block-info">

                                <li>
                                Created custom web templates using Javascript, HTML, and CSS that are not natively available on BigCommerce.
                                </li>
                                <li>
                                Completely redesigned all the dropdowns in the entire website using Handlebars.js and the Stencil Framework.
                                </li>
                                <li>
                                Created a Javascript function which created fully responsive video modals on our selected products off a JSON document during load. 
                                </li>
                                <li>
                                Designed, applied, updated, and maintained the majority of the website using Javascript, HTML, CSS, and Bigcommerce.
                                </li>
                                <li>
                                Worked with a team to update and create new content for the website in order to improve SEO. 
                                </li>
                                <li>
                                Photoshopped products to accentuate detailed views for web services. This includes but not limited to cropping images, cutting, and editing the products to the requirements needed for the website. 
                                </li>
                                <li>
                                Updated and maintained Amazon using Amazon Seller Central.
                                </li>
                                <li>
                                Started and maintained a Wordpress.org blog.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
