import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const clients = [
  {
    name: 'TUBER',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxva1QZE8B7-z7l9ABLLTq8zMqaI0FL2PtpA&s',
  },
  {
    name: 'Sinha crushers',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAF4e2x3dHFJ3rVLxKsysOLS6dmWXQ8Xhzxw&s',
  },
  {
    name: 'palm garden village hotelazon',
    logo: 'https://findit-resources.s3.us-east-2.amazonaws.com/profilePictures/palm-garden-village-hotel.jpg',
  },
  {
    name: 'sampath it solutions',
    logo: 'https://sits.lk/wp-content/uploads/2022/12/WhatsApp_Image_2022-12-06_at_12.55.18-removebg-preview.png',
  },
  {
    name: 'calix uk',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQBHhpAVztwn2klTdD6rgodVJpTQK9BxmSHA&s',
  },
  {
    name: 'ihp',
    logo: 'https://island.lk/wp-content/uploads/2024/10/IHP.png',
  },
  {
    name: 'gpss engineering',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UNbAC5uY4PjmFE4SoJhbPGV3yHPRKlMZLQ&s',
  },
  {
    name: 'rsw sea food',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2z5xzI4QKX2fW116OaCiCs9ZBncbY_Fif8A&s',
  },
  // Add more client logos
];

const Clients = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-primary dark:text-white mb-12">
          Trusted by Industry Leaders
        </h2>

        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index} className="px-4">
              <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-20 w-auto mx-auto object-contain filter dark:invert"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Clients;
