import * as React from 'react';
import Title from '../../components/Title/Title';
import icon from '../../img/icons.svg';
import s from './MainPage.module.scss';
const {main,wrapper,title} = s;
interface IMainPageProps {
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props) => {
  return(
      <div className={main}>
          <div className={title}><Title/></div>
          <svg width='55px' height="55px"  viewBox="0 0 24 24">
    <use href={`${icon}#icon`}/>
    </svg>
          <div className={wrapper}>
              <svg width='35px' height="28px" viewBox="0 0 15.699 9.2">
                  <use href={`${icon}#arrow`}/>
              </svg>
              <p>Войдите или зарегестрируйтесь</p>
          </div>
      </div>
  ) ;
};

export default MainPage;
