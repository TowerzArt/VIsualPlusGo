import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import whatsappLogo from "../../assets/logos/whatsapp.webp";
import "./Contact.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [canSend, setCanSend] = useState(true);
  const recaptchaRef = useRef(null);

  const MAX_WORDS = 300;

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast({ show: false, message: "", type: "" }), 3000);
  };

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);

    if (words.length <= MAX_WORDS) {
      setMessage(text);
    } else {
      showToast(`Máximo ${MAX_WORDS} palabras permitidas.`, "error");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!canSend) {
      showToast("Espera unos segundos antes de enviar otro correo.", "error");
      return;
    }

    if (!email || !message) {
      showToast("Por favor completa todos los campos.", "error");
      return;
    }

    const recaptchaValue = recaptchaRef.current.getValue();
    if (!recaptchaValue) {
      showToast("Por favor verifica que no eres un robot.", "error");
      return;
    }

    setCanSend(false);
    setTimeout(() => setCanSend(true), 30000); // 30s cooldown

    const fullMessage = `${message}\n\nCorreo del remitente: ${email}`;

    const templateParams = {
      from_email: email,
      message: fullMessage,
      subject: "INFO VisualPlus",
    };

    emailjs
      .send(
        "tecsicom-towerzart",
        "template_vkxt7zp",
        templateParams,
        "pBnJ9WR0vNs22Snk2"
      )
      .then(() => {
        showToast("Correo enviado con éxito!", "success");
        setEmail("");
        setMessage("");
        recaptchaRef.current.reset();
      })
      .catch(() => {
        showToast("Error al enviar el correo.", "error");
        recaptchaRef.current.reset();
      });
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contáctanos</h2>

        {/* WhatsApp */}
        <a
          href="https://wa.me/593980557586"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-contact"
        >
          <img src={whatsappLogo} alt="WhatsApp" className="whatsapp-logo" />
          <span>
            <strong>Contactar por WhatsApp</strong>
          </span>
        </a>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="email"
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Tu mensaje (máx. 300 palabras)"
            value={message}
            onChange={handleMessageChange}
            required
          />
          <small>{message.trim().split(/\s+/).filter(Boolean).length}/{MAX_WORDS} palabras</small>
          
          {/* reCAPTCHA */}
          <ReCAPTCHA
            sitekey="6LcjprorAAAAAN7IcST0EQSaL-Nfmf1nRnCxeUrK"
            ref={recaptchaRef}
          />

          <button type="submit">Enviar</button>
        </form>
      </div>

      {/* Toast flotante */}
      {toast.show && <div className={`toast ${toast.type}`}>{toast.message}</div>}
    </section>
  );
};

export default Contact;
