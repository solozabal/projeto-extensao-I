import React from 'react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer>
      <p>Endereço da Escola</p>
      <p>Telefone: (XX) XXXX-XXXX</p>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram /> Instagram
      </a>
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook /> Facebook
      </a>
    </footer>
  );
}

export default Footer;