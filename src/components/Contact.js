import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import styled from "styled-components";
import { Section, SectionTitle, theme } from "../styles"; // Założenie o wspólnym pliku stylów
import AnimatedWrapper from "./AnimatedWrapper";

// --- STYLOWANE KOMPONENTY ---

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 600px;
  margin: 40px auto 0;
`;

const FormInput = styled.input`
  padding: 15px;
  font-size: 1rem;
  background-color: ${theme.lightNavy};
  border: 1px solid #233554;
  border-radius: 4px;
  color: ${theme.secondary};
  font-family: "Poppins", sans-serif;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.accent};
  }
`;

const FormTextarea = styled.textarea`
  padding: 15px;
  font-size: 1rem;
  background-color: ${theme.lightNavy};
  border: 1px solid #233554;
  border-radius: 4px;
  color: ${theme.secondary};
  resize: vertical;
  min-height: 150px;
  font-family: "Poppins", sans-serif;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${theme.accent};
  }
`;

const SubmitButton = styled.button`
  color: ${theme.accent};
  background-color: transparent;
  border: 1px solid ${theme.accent};
  padding: 1rem 1.75rem;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;
  margin-top: 10px;

  &:hover {
    background-color: rgba(100, 255, 218, 0.1);
  }
`;

const ContactDescription = styled.p`
  color: ${theme.tertiary};
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
`;

// --- KOMPONENT ---

const Contact = () => {
  // Stan do przechowywania danych z formularza
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  // Funkcja aktualizująca stan przy każdej zmianie w polach formularza
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Funkcja obsługująca wysłanie formularza
  const handleSubmit = async (e) => {
    e.preventDefault();
    // W prawdziwej aplikacji tutaj nastąpiłoby wysłanie danych do API

    await emailjs.sendForm(
      "service_8f6snww",
      "template_av09e5e",
      formRef.current,
      {
        publicKey: "lhctuzVDhM1tn9STI",
      }
    );
    alert(`Dziękujemy za wiadomość, ${formData.name}! Odpowiemy wkrótce.`);

    // Resetowanie pól formularza po wysłaniu
    //  setFormData({ name: "", email: "", message: "" });
  };

  return (
    <Section id="contact">
      <AnimatedWrapper>
        <SectionTitle>Skontaktuj się</SectionTitle>
        <ContactDescription>
          Masz pomysł na innowacyjny projekt lub potrzebujesz konsultacji w
          zakresie AI? Wypełnij formularz poniżej, a my odezwiemy się do Ciebie.
        </ContactDescription>
        <ContactForm onSubmit={handleSubmit} ref={formRef}>
          <FormInput
            type="text"
            name="name"
            placeholder="Twoje imię"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
          <FormInput
            type="email"
            name="email"
            placeholder="Twój adres email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
          <FormTextarea
            name="message"
            placeholder="Twoja wiadomość"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
          <SubmitButton type="submit">Wyślij wiadomość</SubmitButton>
        </ContactForm>
      </AnimatedWrapper>
    </Section>
  );
};

export default Contact;
