import React from 'react';

function CTA() {
  return (
    <section>
      <button onClick={() => window.open('https://wa.me/1234567890', '_blank')}>
        Fale com a Secretaria
      </button>
    </section>
  );
}

export default CTA;