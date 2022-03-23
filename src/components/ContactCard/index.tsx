import { Container, ContactInfo, Buttons } from "./styles";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
interface typeContact {
  contact: {
    name: string;
    img: string;
    linkedin: string;
    github: string;
    responsability: string;
  };
}

const ContactCard = ({ contact }: typeContact) => {
  return (
    <Container>
      <img src={contact.img} alt="contactImg"></img>
      <ContactInfo>
        <h3>{contact.name}</h3>
        <p>{contact.responsability}</p>
        <Buttons>
          <form action={contact.github}>
            <button type="submit" className="GitHub">
              <FaGithubSquare />
            </button>
          </form>
          <form action={contact.linkedin}>
            <button type="submit" className="Linkedin">
              <BsLinkedin />
            </button>
          </form>
        </Buttons>
      </ContactInfo>
    </Container>
  );
};

export default ContactCard;
