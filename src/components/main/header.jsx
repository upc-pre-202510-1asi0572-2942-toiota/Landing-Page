import { useTranslation } from 'react-i18next';
import ParticlesBg from "particles-bg";

export const Header = () => {
  const { t } = useTranslation();

  return (
    <header id='header'>
      <div className='intro'>
        <div className="particles-container">
          <ParticlesBg type="circle" bg={{zIndex: 1, position:"absolute", top:0, left:0, width:"100%", height:"100%"}} num={8} />
        </div>
        <div className='overlay'>
          <div className='container'>
            <div className='mastermind-header header-flex'>
              <div className='mastermind-content'>
                <h1>
                  {t('Header.title')}
                  <span></span>
                </h1>
                <p>{t('Header.paragraph')}</p>
                <div className='mastermind-buttons'>
                  <a
                    href='https://hormonalcare-frontend.onrender.com/selectRole'
                    className='btn btn-custom btn-lg page-scroll'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {t('Header.buttonText')}
                  </a>
                </div>
              </div>
              <div className='header-image'>
                <img src='https://github.com/upc-pre-202510-1asi0572-2942-toiota/Landing-Page/blob/main/public/img/phono_hormonalcare.jpg?raw=true' alt='Phone preview' style={{width: '100%', maxWidth: '260px', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0,0,0,0.15)'}} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
