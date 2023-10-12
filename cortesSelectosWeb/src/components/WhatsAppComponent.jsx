import whatsappImage from '../assets/img/whatsapp.png';

const WhatsAppComponent = () => {
    const phoneNumber = '+50660113194'; 
    const message = '¡Bienvenido a Cortes Selectos! Estamos encantados de que estés aquí. Si tienes alguna pregunta, necesitas asistencia o estás interesado en nuestros productos, nuestro equipo está listo para ayudarte. ¡No dudes en escribirnos y te responderemos lo más pronto posible!';
  
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