import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      name: 'Pai 1',
      photo: 'url-da-foto-1',
      text: 'Depoimento 1'
    },
    {
      name: 'Pai 2',
      photo: 'url-da-foto-2',
      text: 'Depoimento 2'
    }
    // Adicione mais depoimentos conforme necessário
  ];

  return (
    <section>
      <h2>Depoimentos de Pais de Alunos</h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div className="card" key={index}>
            <img src={testimonial.photo} alt={`Foto de ${testimonial.name}`} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;