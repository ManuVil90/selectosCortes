import whatsappImage from '../assets/img/whatsapp.png';

const WhatsAppComponent = () => {
    const phoneNumber = '+50660113194'; 
    const message = 'Hola, somos xxxxx, indicanos tu nombre y con gusto uno de nuestros gentes te ayudara.';
  
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    return (
      <div className="buttomWhatsApp">
        <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
            <img src={whatsappImage} alt="iwhatsappimage-img" className="buttomstyle"/>
        </a>
      </div>
    );
  }

    export default WhatsAppComponent;