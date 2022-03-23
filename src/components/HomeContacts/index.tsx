import { Container, Header, Content } from "./styles";
import chris from '../../assets/contacts/chris.jpeg'
import bruna from '../../assets/contacts/bruna.jpg'
import fabio from '../../assets/contacts/fabio.jpg'
import igor from '../../assets/contacts/igor.jpg'
import joao from '../../assets/contacts/joao.jpg'
import ContactCard from "../ContactCard";

const HomeContacts = () => {

    const contacts = [
        {
            name: 'Christian Rezende', responsability: 'Scrum Master', github: 'https://github.com/cbcr93', linkedin: 'https://www.linkedin.com/in/christian-resende-06ba021a8/', img: `${chris}`
        },
        {
            name: 'João Neto', responsability: 'PO', github: 'https://github.com/assemble05', linkedin: 'https://www.linkedin.com/in/joão-henrique-pereira-neto-6776251ba/', img: `${joao}`
        },
        {
            name: 'Fábio Almeida', responsability: 'Tech Lead', github: 'https://github.com/fabioalmeida08', linkedin: 'https://www.linkedin.com/in/f%C3%A1bio-almeida08/', img: `${fabio}`
        },
        {
            name: 'Igor Cenzi', responsability: 'QA', github: 'https://github.com/igorcenzi', linkedin: 'https://www.linkedin.com/in/igorcenzi/', img: `${igor}`
        },
        {
            name: 'Bruna Marchezini', responsability: 'QA', github: 'https://github.com/brunamarchezini', linkedin: 'https://www.linkedin.com/in/brunamarchezinireis/', img: `${bruna}`
        }
    ]

  return (
    <Container>
      <Header>
        <h2>Contatos</h2>
        <div></div>
      </Header>
      <Content>
        {
            contacts.map((contact, index) => {
                return (
                    <ContactCard contact={contact} key={index}/>
                )
            })
        }
      </Content>
    </Container>
  );
};

export default HomeContacts;
