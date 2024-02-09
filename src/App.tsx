import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, Key } from 'react';
import './App.css';
import image1 from './assets/Group 311.png';
import twitterIcon from './assets/twitter.png';
import linkedinIcon from './assets/linkedIn.png';
import githubIcon from './assets/github.png';
import iconSend from './assets/Basik Icons.png';

const Card = ({ title, content, type, image, style, icons, listItems, titleStyle }: any) => {
  return (
    <div className={`card ${type}`}>
      <div className="card-content">
        <h2 style={titleStyle}>{title}</h2>
        <p>{content}</p>
        {listItems && (
          <ul className="card-list">
            {listItems.map((item: { date: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; activity: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }, index: Key | null | undefined) => (
              <li key={index} className="card-list-item">
                <span className="date">{item.date} - </span>
                <span className="activity">{item.activity}</span>
              </li>
            ))}
          </ul>
        )}
        {icons && (
          <div className="card-icons">
            {icons.map((link: { url: string | undefined; icon: string | undefined; name: string | undefined; }, index: Key | null | undefined) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="card-icon-link">
                <img src={link.icon} alt={link.name} className="card-icon" />
              </a>
            ))}
          </div>
        )}
      </div>
      {image && <img src={image} alt={title} className={style} />}
    </div>
  );
};




const ContactForm = () => {

  return (
    <form  className="contact-form">
    <div className="form-group">
      <input
        type="text"
        name="message"
        placeholder="Your Message"
        className="form-input"
      />
      <button type="submit" className="form-button"><img src={iconSend} alt=""  /></button>
    </div>
  </form>
  );
};




function App() {
  const cards = [
    {
      id: 1, title: 'Illuminaxx', content: 'Web developer frontend', listItems: [
        { date: '2020-2023', activity: 'Atecna - ESN basée sur la métropole Lilloise' },
        { date: '2017-2019', activity: 'Micropole - ESN basée sur la métropole Lilloise' },
        { date: '2015-2017', activity: 'Robotic Technology - Société basée dans le Béthunois' },
      ], type: 'big-card', style: ''
    },
    { id: 2, title: 'Adventure with Atecna', content: '10 missions realised', type: 'medium-card' },
    { id: 3, title: 'BreakUrDate', content: 'An application for Valentine\'s Day', type: 'height-card' },
    {
      id: 4, title: 'Mes réseaux', content: '', type: 'small-card', icons: [
        { name: 'Twitter', url: 'https://twitter.com/AHennuyer', icon: twitterIcon },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aurelienhennuyer/', icon: linkedinIcon },
        { name: 'GitHub', url: 'https://github.com/Illuminaxx', icon: githubIcon },
      ],
      titleStyle: { textAlign: 'center' },
    },
    { id: 5, title: 'Journaling3', content: 'Started a new mobile design project.', type: 'small-card' },
    { id: 6, title: 'Journaling4', content: '', type: 'big-card2', image: image1 },
    { id: 7, title: 'Mon Portfolio', content: 'Started a new mobile design project.', type: 'medium-card' },
    { id: 8, title: 'Assistly', content: 'Started a new mobile design project.', type: 'small-card2' },
    { id: 9, title: 'Echangeons !', content: <ContactForm />, type: 'small-card2' },
  ];

  return (
    <div className="container">
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default App;
