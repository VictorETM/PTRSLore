import React from 'react'
import { HeroContainer,HeroIcon,HeroTittle,Divider,Slider,SliderCard,SliTittle,SliSubtxt,SliImage,SubMenu } from './HeroSStyle'
import {Data as MainStory} from '../../Data/Menu json/MainStory'
import Slick from 'react-slick'
import 'slick-carousel'

const index = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0}

  return (
    <>
    <HeroContainer>
        <HeroIcon><img src='https://static.wikia.nocookie.net/mrfz/images/7/73/Main_Theme.png'/></HeroIcon>
        <HeroTittle>Main Story</HeroTittle>
        <Divider/>
          <SubMenu>
              <h2>
                Act Innitium: Hour of an awakening
                </h2>
                </SubMenu>
                <Slider>
        {
          MainStory.map(index=>{
            if (index.Act===0){
            return(<>
            <SliderCard key={index.id}>
            <SliImage src={index.src} alt={index.Tittle} />
            <SliTittle>{index.Tittle}</SliTittle>
            <SliSubtxt>{index.Episode}</SliSubtxt>
        </SliderCard>
            </>)}

          })
          
        }
        </Slider>
        <Divider/>
          <SubMenu>
              <h2>
                Act 1:Shatter of a vision
                </h2>
                </SubMenu>
                <Slider>
        {
          MainStory.map(index=>{
            if (index.Act===1){
            return(<>
            <SliderCard key={index.id}>
            <SliImage src={index.src} alt={index.Tittle} />
            <SliTittle>{index.Tittle}</SliTittle>
            <SliSubtxt>{index.Episode}</SliSubtxt>
        </SliderCard>
            </>)}

          })
          
        }
        

        
        </Slider>
        <Divider/>
          <SubMenu>
              <h2>
                Act 2: Shadow of a dying sun
                </h2>
                </SubMenu>
                <Slider>
        {
          MainStory.map(index=>{
            if (index.Act===2){
            return(<>
            <SliderCard key={index.id}>
            <SliImage src={index.src} alt={index.Tittle} />
            <SliTittle>{index.Tittle}</SliTittle>
            <SliSubtxt>{index.Episode}</SliSubtxt>
        </SliderCard>
            </>)}

          })
          
        }
        

        
        </Slider>

    </HeroContainer>
    
    
    
    
    </>
  )
}

export default index