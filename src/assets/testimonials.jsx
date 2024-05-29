
import React from 'react';
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-3.jpg';
import ava02 from '../../assets/images/ava-3.jpg';
import ava03 from '../../assets/images/ava-3.jpg';

const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        speed : 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow : 3,

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },

        ]
    }


    return (
        <>
       

        <Slider {...settings}>
            <div className="testimonial py-4 py-3">
                <p>"Amazing experience with the travel booking system! It made planning my trip a joy. 
                    The variety of options and hassle-free booking process exceeded my expectations. Kudos!"</p>

                <div className=' d-flex align-items-center gap-4 mt-3'>
                    <img src={ava01} className=" w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>
                        Neha R
                        </h6>
                        <p> Customer </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 py-3">
                <p>"Absolutely fantastic! Your travel booking system is a game-changer. From easy navigation to a plethora of choices, 
                    it's a traveler's paradise. Thanks for making my vacations stress-free!"</p>

                <div className=' d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className=" w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Arjun S
                        </h6>
                        <p> Customer </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 py-3">
                <p>"Brilliant travel companion! Your system has made exploring new destinations a pleasure. The intuitive design, coupled with a vast array of options,
                     ensures a delightful booking experience. Well done!" </p>

                <div className=' d-flex align-items-center gap-4 mt-3'>
                    <img src={ava03} className=" w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Preeti K
                        </h6>
                        <p> Customer </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 py-3">
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore blanditiis qui delectus,
                incidunt nisi eveniet nihil tenetur, cupiditate voluptas deleniti voluptatibus atque, 
                fuga labore eaque corporis obcaecati fugit error totam.</p>

                <div className=' d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className=" w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Dhruv Prajapati
                        </h6>
                        <p> Customer </p>
                    </div>
                </div>
            </div>

            <div className="testimonial py-4 py-3">
                <p>Absolutely fantastic! Your travel booking system is a game-changer. From easy navigation to a plethora of choices,
                    it's a traveler's paradise. Thanks for making my vacations stress-free!</p>

                <div className=' d-flex align-items-center gap-4 mt-3'>
                    <img src={ava02} className=" w-25 h-25 rounded-2" alt="" />
                    <div>
                        <h6 className='mb-0 mt-3'>
                            Nijal D
                        </h6>
                        <p> Customer </p>
                    </div>
                </div>
            </div>

            
        </Slider>
        </>
    )
}

export default Testimonial;