import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import styled from "styled-components";
import cicon from '../pictures/cicon.png';
import app_dev from '../pictures/app_development.png';
import business_grow from '../pictures/business_growth.png';
import design from '../pictures/design.png';
import digital_marketing from '../pictures/digital_marketing.png';
import ideate from '../pictures/ideate.png';
import web_dev from '../pictures/web_development.png';
import strelka from '../pictures/strelochko.png';
import party from '../pictures/pati_daynow.png';
import vector from '../pictures/Vector.png';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 0 100px;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 380px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.8rem;
  font-weight: bold;
  color: #2c3e50;
`;

const LogoImage = styled.img`
  height: 100px;
  width: auto;
`;

const Nav = styled.nav`
  display: flex;
  gap: 80px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  cursor: pointer;
  font-size: 0.95rem;
  &:hover {
    color: #3498db;
  }
`;

const PrimaryButton = styled.a`
  text-decoration: none;
  color: white;
  background: #001affff;
  padding: 10px 25px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 0.95rem;
  &:hover {
    background: #000d86ff;
    color: white;
    transform: translateY(-2px);
  }
`;

const HeroSection = styled.div`
  background-image: url("src/pictures/woman_line.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-size: 100%;
  text-align: left;
  width: 1271.21px;
  height: 700px;
`;

const HeroContent = styled.div`
  margin-left: 50px;
`;

const HeroDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 35px;
`;

const Business = styled.p`
  margin-top: 60px;
  font-size: 3.7rem;
  font-weight: 600;
  margin-bottom: 0px;
`;

const Powerful = styled.p`
  margin: 0;
  font-size: 2.8rem;
  color: #e8800aff;
  font-weight: 600;
`;

const Us = styled.p`
  margin-top: 0px;
  font-size: 2.8rem;
  margin-bottom: 24px;
  font-weight: 600;
`;

const Section = styled.div`
  margin-bottom: 200px;
`;

const SectionTitle = styled.h2`
  font-size: 1.4rem;
  color: #ff0022ff;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 3rem;
  margin-bottom: 50px;
  font-weight: 600;
`;

const ServicesGrid = styled.div`
  padding: 0px 50px 0p 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  width: 1100px;
`;

const ServiceCard = styled.div`
  background: #ffffff;
  padding: 40px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
    background: #4C40F7;
    color: white;
  }
`;

const ServiceImg = styled.img`
  width: 170px;
  height: 170px;
`;

const ServiceIcon = styled.img`
  width: 45px;
  height: 45px;
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
  transition: all 0.3s ease;
  &:hover {
    color: white;
  }
`;

const DocumentationSection = styled.div`
  height: 1100px;
  background-image: url("src/pictures/orange_balls.png");
  background-repeat: no-repeat;
  background-position: -500px 210px;  
`;

const PartyImg = styled.img`
  padding: 0px 200px 0 200px;
`;

// const PartyImg = styled.img`
//   z-index: -1;
//   position: absolute;
// `;

const SatisfactionSection = styled.section`
  background-image: url("src/pictures/background.png");
  background-repeat: no-repeat;
  background-size: cover;
  height: 900px;
  margin-bottom: 100px;
`;

const PaddingCon = styled.div`
  padding: 0 0px 0px 220px;
  display: flex;
  align-items: center;
`;

const NameplateMainGroup = styled.div`
  text-align: center;
  display: flex;
  gap: 130px;
`;

const NameplateGroup1 = styled.div`
  margin-top: 190px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const NameplateGroup2 = styled.div`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Nameplate = styled.div`
`;

const NameplateTitle1 = styled.p`
  color: #4C40F7;
  font-size: 3rem;
  font-weight: 600;
`;

const NameplateTitle2 = styled.p`
  color: #FF2D59;
  font-size: 3rem;
  font-weight: 600;
`;

const NameplateTitle3 = styled.p`
  color: #FF6800;
  font-size: 3rem;
  font-weight: 600;
`;

const NameplateTitle4 = styled.p`
  color: #4ADB61;
  font-size: 3rem;
  font-weight: 600;
`;

const NameplateDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const SatisfactionHeader = styled.div`
  text-align: left;
  padding: 70px 0 0 150px;
`;

const SatisfactionTitle = styled.h1`
  margin-bottom: 30px;
  font-size: 3.7rem;
`;

const SatisfactionDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
`;

const FeaturesList = styled.ul`
  li {
    font-size: 1.2rem;
    color: #666;
    line-height: 2;
    margin-bottom: 15px;
    padding-left: 10px;
    list-style-type: none;
    list-style-image: url("src/pictures/galochka.png");
  }
`;

const WorkspaceContent = styled.div`
`;

const WorkspaceTitle = styled.div`
  font-size: 1.4rem;
  color: #ff0022ff;
  text-align: center;
`;

const WorkspaceSubtitle = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`;

const Background = styled.div`
  background-image: url("src/pictures/VectorGroup.png");
  background-repeat: no-repeat;
  background-position: -120px -200px; 
`;

const Rooms_spaces = styled.div`
  padding: 40px 150px 200px 150px;
`;

const ImageCardCon = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  padding: 15px;
  opacity: 1;
`;

const ImageTitle = styled.div`
  font-size: 1.2rem;
`;

const Home = () => {
  const services = [
    {
      title: "Ideate",
      description: "We help you develop creative ideas so that your business can grow more rapidly",
      img: ideate,
      icon: strelka
    },
    {
      title: "Design",
      description: "We provide services with the best designs than our designer team for your business",
      img: design,
      icon: strelka
    },
    {
      title: "Web Development",
      description: "We help develop company websites to be more professional and attractive",
      img: web_dev,
      icon: strelka
    },
    {
      title: "App Development",
      description: "We help develop company mobile apps to be more professional and attractive",
      img: app_dev,
      icon: strelka
    },
    {
      title: "Business Growth",
      description: "We also provide services by providing input for your business growth",
      img: business_grow,
      icon: strelka
    },
    {
      title: "Digital marketing",
      description: "We also help you market your products through an online marketplace",
      img: digital_marketing,
      icon: strelka
    }
  ];

  const images = [
    { id: 1, src: 'src/pictures/front_working_space.png', alt: 'Image 1', title: 'Front working space', height: 300 },
    { id: 2, src: 'src/pictures/meeting_corner.png', alt: 'Image 2', title: 'Meeting corner', height: 450 },
    { id: 3, src: 'src/pictures/guest_meeting_room.png', alt: 'Image 3', title: 'Guest meeting room', height: 250 },
    { id: 4, src: 'src/pictures/guest_rest_room.png', alt: 'Image 4', title: 'Guest rest room', height: 500 },
    { id: 5, src: 'src/pictures/single_working_space.png', alt: 'Image 5', title: 'Single working space', height: 350 },
    { id: 6, src: 'src/pictures/kitchen_room.png', alt: 'Image 6', title: 'Kitchen room', height: 400 },
  ];

  const ImageCard = ({ src, alt, title }) => {
  return (
    <ImageCardCon>
      <img src={src} alt={alt} style={{ width: '100%'}} />
      <ImageOverlay>
        <ImageTitle>{title}</ImageTitle>
      </ImageOverlay>
    </ImageCardCon>
  );
};

  return (
    <div>
      <PageWrapper>
        <Container>
          <Header>
            <Logo>
              <LogoImage src={cicon}/>
            </Logo>
            <Nav>
              <NavLink>Home</NavLink>
              <NavLink>Works</NavLink>
              <NavLink>About</NavLink>
            </Nav>
          <PrimaryButton href="/">Contact us</PrimaryButton>
          </Header>
          <HeroSection>
            <HeroContent>
              <Business>Make your business</Business>
              <Powerful>more powerful</Powerful>
              <Us>with us</Us>
              <HeroDescription>
                We provide various services to make <br/> your business grow and get bigger. 
                Your <br/> satisfaction is our first priority.
              </HeroDescription>
              <PrimaryButton href="/">Get Started →</PrimaryButton>
            </HeroContent>
          </HeroSection>
          <Section>
            <SectionTitle>Our Services</SectionTitle>
            <SectionSubtitle>The various services we provide to make your <br/> business more powerful</SectionSubtitle>
            <ServicesGrid>
              {services.map((service, index) => (
                <ServiceCard key={index}>
                  <ServiceImg src={service.img}/>
                  <ServiceTitle>{service.title}</ServiceTitle>
                  <ServiceDescription>{service.description}</ServiceDescription>
                  <ServiceIcon src={service.icon}/>
                </ServiceCard>
              ))}
            </ServicesGrid>
          </Section>
        </Container>
      </PageWrapper>
      <DocumentationSection>
        <SectionTitle>Our Documentation</SectionTitle>
        <SectionSubtitle>See what our profile is like and how we work for your <br/> business</SectionSubtitle>
        <PartyImg src={party}/>
      </DocumentationSection>
      <SatisfactionSection>
        <PaddingCon>
          <NameplateMainGroup>
            <NameplateGroup1>
              <Nameplate>
                <NameplateTitle1>70K+</NameplateTitle1>
                <NameplateDescription>We have more than <br/> customers</NameplateDescription>
              </Nameplate>
              <Nameplate>
                <NameplateTitle2>10M+</NameplateTitle2>
                <NameplateDescription>People who are helped <br/> because of our hard <br/> work</NameplateDescription>
              </Nameplate>
            </NameplateGroup1>
            <NameplateGroup2>
              <Nameplate>
                <NameplateTitle3>100+</NameplateTitle3>
                <NameplateDescription>Projects we have <br/> completed</NameplateDescription>
              </Nameplate>
              <Nameplate>
                <NameplateTitle4>200+</NameplateTitle4>
                <NameplateDescription>Support from world <br/> -renowned companies</NameplateDescription>
              </Nameplate>
            </NameplateGroup2>
          </NameplateMainGroup>
          <SatisfactionHeader>
            <SatisfactionTitle>Customer <br/> satisfaction is <br/> our first priority</SatisfactionTitle>
            <SatisfactionDescription>
              We serve many customers, ranging from small <br/> businesses, medium entrepreneurs, 
              to world <br/> -renowned companies. Their satisfaction is our <br/> pleasure. We strive 
              to provide the best service by:
            </SatisfactionDescription>
            <FeaturesList>
              <li>Provide bike support from our creative team</li>
              <li>Provide attractive and professional design <br/> services</li>
              <li>Support for service 24 hours a week</li>
              <li>Helping our customers to grow their business</li>
              <li>Provide support to market products through <br/> online marketplaces</li>
            </FeaturesList>
          </SatisfactionHeader>
        </PaddingCon>
      </SatisfactionSection>
      <WorkspaceContent>
        <WorkspaceTitle>Working space</WorkspaceTitle>
        <WorkspaceSubtitle>Let's meet our interior room decoration</WorkspaceSubtitle>
      </WorkspaceContent>
      <Background>
        <Rooms_spaces>
          <ResponsiveMasonry>
            <Masonry>
              {images.map((image) => (
                <ImageCard
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </Rooms_spaces>
      </Background>
    </div>
  );
};

export default Home;