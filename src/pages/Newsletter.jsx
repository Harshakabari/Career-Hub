import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/male-tourist.png';

const Newsletter = () => {
    return (
        <section className='newsletter bg-blue-100 pt-6'>
            <Container>
                <Row className='flex gap-7 px-28'>
                    <Col className='text-black'>
                        <div className="newsletter__content py-12">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-4">Subscribe now to get useful job information.</h2>

                            <form className="newsletter__input flex items-center justify-between bg-white p-2 mb-4 rounded-md my-8">
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className="border-none text-base text-gray-800 w-full focus:outline-none"
                                    required
                                />
                                <button className="btn newsletter__btn bg-[#FF6347] text-black py-2 px-6 text-lg">
                                    Subscribe
                                </button>
                            </form>

                            <p className="text-gray-800 text-base md:text-lg">Subscribe now to stay updated with the latest job postings and career advice. Be the first to know about exclusive job opportunities tailored to your skills and interests, helping you to advance your career and seize the best opportunities available.</p>
                        </div>
                    </Col>

                    <Col>
                        <div className="newsletter__img hidden md:block">
                            <img src={maleTourist} alt="" className="w-[75rem] h-[300px]" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Newsletter;
