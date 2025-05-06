import { servicesOneData } from '@/db/servicesOneData'
import React from 'react'
import AboutCounter from '../aboutCounter'
import { Link } from 'react-router-dom'
import SlideDown from '@/utils/animations/slideDown'
import SlideUp from '@/utils/animations/slideUp'

const ServiceOne = () => {
    return (
        <section className="services py__130" id="services">
            <div className="container position-relative">
                {/* Title */}
                <SlideDown className="d-lg-flex justify-content-between align-items-center services__title">
                    <h1 className="title">Our service solve your any business problem</h1>
                    <Link to={"/services"} className="common__btn mt-4 mt-lg-0">
                        <span>View All Services</span>
                        <img src="/icons/arrow-up-rignt-black.svg" alt />
                    </Link>
                </SlideDown>
                {/* Title */}
                {/*  */}
                <div className="services__wapper">
                    <div className="services__wapper_list">
                        {servicesOneData.map((service) => (

                            <SlideUp delay={service.id}>
                                <Link to="/service-details" className="service__name">
                                    <sup>{`0${service.id}`}</sup>
                                    {service.title}
                                </Link>

                                <p className="describe">{service.description}</p>
                                <Link to="/service-details" className="icon">
                                    <img src="/icons/arrow-up-right-yellow.svg" alt="yellow arrow" className="yellow" />
                                    <img src="/icons/arrow-up-rignt-black.svg" alt="black arrow" className="black" />
                                </Link>
                            </SlideUp>

                        ))}
                    </div>
                </div>
                <AboutCounter />
            </div>
        </section>

    )
}

export default ServiceOne