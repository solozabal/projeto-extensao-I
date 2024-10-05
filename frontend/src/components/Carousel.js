import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section>
      <Slider {...settings}>
        <div>
          <img src="url-da-imagem-1" alt="Imagem 1" />
        </div>
        <div>
          <img src="url-da-imagem-2" alt="Imagem 2" />
        </div>
        <div>
          <video controls>
            <source src="url-do-video-1" type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        </div>
        {/* Adicione mais slides conforme necessário */}
      </Slider>
    </section>
  );
}

export default Carousel;