import React from "react";
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

const SatisfactionSection = styled.section`
  width: 100%;
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
`;

const SatisfactionHeader = styled.div`
  text-align: center;
  margin-bottom: 80px;
  width: 100%;
`;

const SatisfactionTitle = styled.h1`
  font-size: 42px;
  margin-bottom: 30px;
  color: #2c3e50;
  font-weight: 700;
  line-height: 1.2;
  width: 800px;
  max-width: 100%;
  text-align: center;
`;

const SatisfactionDescription = styled.p`
  font-size: 20px;
  color: #666;
  width: 800px;
  max-width: 100%;
  margin: 0 auto 40px;
  line-height: 1.6;
  text-align: center;
`;

const FeaturesList = styled.ul`
  width: 600px;
  max-width: 100%;
  text-align: left;
  margin: 0 auto;
  
  li {
    font-size: 18px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 15px;
    padding-left: 10px;
  }
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
        <SatisfactionHeader>
          <SatisfactionTitle>Customer satisfaction is our first priority</SatisfactionTitle>
          <SatisfactionDescription>
            We serve many customers, ranging from small businesses, medium entrepreneurs, 
            to socio-renowned companies. Their satisfaction is our pleasure. We strive 
            to provide the best service by:
          </SatisfactionDescription>
          <FeaturesList>
            <li>Provide bike support from our creative team</li>
            <li>Provide attractive and professional design services</li>
            <li>Support for service 24 hours a week</li>
            <li>Helping our customers to grow their business</li>
            <li>Provide support to market products through online marketplaces</li>
          </FeaturesList>
        </SatisfactionHeader>
      </SatisfactionSection>
    </div>
  );
};

export default Home;