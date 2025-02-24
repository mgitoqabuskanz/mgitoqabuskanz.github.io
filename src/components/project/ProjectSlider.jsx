import React, { Fragment } from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { assets, mywork_data } from '../../assets/assets'

const ProjectSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <Slider {...settings}>
      {mywork_data.slice(0,6).map((work, index) => (

      <div key={index} class="flex items-center justify-center px-4">
        <a
        class="relative block bg-neutral/50 group rounded-lg"
        href="##"
        >
          <img
          class="absolute inset-0 object-cover w-full h-full group-hover:opacity-30 transition-all duration-500 rounded-lg"
          src={work.w_img} alt={work.w_name}
          />
          <div class="relative p-6">
            <div class="">
              <div
              class="transition-all duration-500 transform opacity-0 group-hover:opacity-100 rounded-lg"
              >
                <div class="space-y-6 p-2">
                  <h2 className="text-2xl text-accent">{work.w_name}</h2>
                  <p className="text-sm">
                    {work.w_desc.length > 100 ?
                      `${work.w_desc.substring(0, 100)} (...)` : work.w_desc
                    }
                  </p>
                  <a
                  href={work.w_link} class="px-4 py-2 text-sm btn btn-soft btn-accent border-accent"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      ))}
    </Slider>
  )
}

export default ProjectSlider