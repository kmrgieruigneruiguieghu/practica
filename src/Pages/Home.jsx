import React, { useState, useRef, useEffect } from "react";
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
import logo1 from '../pictures/Logo1.png';
import logo2 from '../pictures/Logo2.png';
import kavichki from '../pictures/kavichki.png';
import ronald from '../pictures/ronald.png';
import robert from '../pictures/robert.png';
import henry from '../pictures/lazery_iz_glaz.png';
import kristin from '../pictures/Kristin.png';
import guy from '../pictures/Guy.png';
import savannah from '../pictures/savannah.png';
import map from '../pictures/map.png';

const Div = styled.div`
`;

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
  transition: all 0.3s ease;
  border: 1px solid #f0f0f0;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
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
  font-weight: 600;
`;

const WorkspaceTitle2 = styled.div`
  font-size: 1.4rem;
  color: #ff0022ff;
  text-align: center;
  font-weight: 600;
  padding-top: 200px;
`;

const WorkspaceSubtitle = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
`;

const Background = styled.div`
  background-image: url("src/pictures/VectorGroup.png");
  background-repeat: no-repeat;
  background-size: 2500px;
  background-position: -350px -420px; 
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

const CustomersGroup = styled.div`
  padding: 70px 0px 220px 370px;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const Img = styled.img`
  height: 30px;
  width: 800px;
`;

const CarouselSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px 100px 0px;
  background: orange;
  position: relative;
  text-align: center;
`;

const CarouselContainer = styled.div`
  display: flex;
  overflow: hidden;
  color: white;
  gap: 20px;
  padding: 40px 0px 0px 0px;
`;

const CarouselTrack = styled.div`
  display: flex;
  flex: 1;
  transition: transform 0.5s ease-in-out;
  transform: translateX(${props => props.translateValue}%);
`;

const CarouselItem = styled.div`
  width: 100%;
  min-width: 100%;
  white-space: pre-line;
  flex-shrink: 0;
  border-radius: 18px;
  box-sizing: border-box;
`;

const KavichImg = styled.img`
  height: 100px;
`;

const Text1 = styled.p`
  font-size: 2rem;
  margin-bottom: 50px;
`;

const Author = styled.p`
  font-weight: 600;
`;

const Text2 = styled.p`
  font-weight: 600;
`;

const NavButton = styled.button.attrs({
  type: 'button'
})`
  caret-color: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: white;
  color: #3498db;
  font-size: 1.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &:hover {
    background: #3498db;
    color: white;
    transform: scale(1.2);
  }
`;

const DotsContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
  align-items: center;
`;

const Dot = styled.button`
  caret-color: transparent;
  border-radius: 30%;
  border: none;
  outline: none;
  background: ${props => props.active ? '#ffffffff' : '#FFCC00'};
  transition: all 0.3s ease;
  &:hover {
    background: ${props => props.active ? '#ffffffff' : '#FFCC00'};
  }
`;

const TabSection = styled.div`
  background-image: url("src/pictures/drygie_balls.png");
  background-repeat: no-repeat;
  background-size: 2000px 2000px;
  background-position: -100px -650px; 
  min-height: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
`;

const TabContainer = styled.div`
  padding: 60px 110px; 0px 110px;
`;

const TabItem = styled.div`
  border: 1px solid #afafafff;
  border-radius: 10px;
  margin-bottom: 40px;
  overflow: hidden;
`;

const TabHeader = styled.button`
  width: 100%;
  padding: 25px 20px;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
  outline: none;
  &:hover {
    background-color: #e8e8e8ff;
  }
  &:focus {
    outline: none;
  }
`;

const Question = styled.h3`
  font-size: 18px;
  color: #2c3e50;
  font-weight: 500;
  margin: 0;
  flex: 1;
`;

const Arrow = styled.span`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  &::before {
    content: '▼';
  }
`;

const TabContent = styled.div`
  padding: ${props => props.isOpen ? '20px' : '0 20px'};
  max-height: ${props => props.isOpen ? '500px' : '0'};
  opacity: ${props => props.isOpen ? '1' : '0'};
  background-color: white;
  transition: all 0.3s ease;
  overflow: hidden;
`;

const Answer = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.6;
  margin: 0;
`;

const Testimonials = styled.div`
  background: #f2f2f2ff;
  padding: 100px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TermonialContainer = styled.div`
  max-width: 1200px;
  width: 100%;
`;

const TestimonialsGrid = styled.div`
  margin-top: 120px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 90px 0px;
  justify-items: center;
`;

const TestimonialCard = styled.div`
  position: relative;
  background: white;
  text-align: center;
  border-radius: 20px;
  padding: 40px 50px 50px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  min-height: 280px;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(178, 184, 228, 0.76);
  }
`;

const UserAvatar = styled.img`
  position: absolute;
  top: -50px;
  left: 130px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const TestimonialContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: #666;
  margin-bottom: 20px;
  flex: 1;
  white-space: pre-line;
`;

const UserInfo = styled.div`
  margin-top: auto;
`;

const UserName = styled.h4`
  font-size: 16px;
  color: #2c3e50;
  margin-bottom: 5px;
  font-weight: 600;
`;

const UserCompany = styled.p`
  font-size: 14px;
  color: #7f8c8d;
  margin-bottom: 15px;
`;

const Stars = styled.div`
  color: #4C40F7;
  font-size: 2rem;
`;

const Footer = styled.div`
  margin-top: 100px;
  background-image: url("src/pictures/small_footer.png");
  background-repeat: no-repeat;
  background-size: 2200px 1400px;
  background-position: -200px 0px;
  height: 1400px;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: white;
`;

const YellowCard = styled.div`
  background-image: url("src/pictures/yellow.png");
  background-repeat: no-repeat;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  height: 340px;
  width: 1120px;
`;

const FooterTitle = styled.div`
  font-size: 1.2rem;
  text-align: center;
  padding-top: 60px;
`;

const FooterSubtitle = styled.div`
  text-align: center;
  font-size: 3rem;
  font-weight: bold;
`;

const FooterButton = styled.a`
  text-decoration: none;
  color: white;
  background: #001affff;
  padding: 20px 55px;
  border-radius: 10px;
  transition: all 0.3s ease;
  font-weight: 500;
  font-size: 1.1rem;
  &:hover {
    background: #000d86ff;
    color: white;
    transform: translateY(-2px);
  }
`;

const BlueCard = styled.div`
  margin-top: 150px;
  background-image: url("src/pictures/blue.png");
  background-repeat: no-repeat;
  display: flex;
  gap: 20px;
  align-items: center;
  flex-direction: column;
  height: 340px;
  width: 1120px;
`;

const FooterInput = styled.input`
  width: 500px;
  height: 50px;
  border-radius: 10px;
  border: none;
  outline: none;
  &:focus {
    border: none;
    outline: none;  
  }
`;

const MainFooter = styled.div`
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const UpperSection = styled.div`
  display: flex;
  gap: 80px;
`;

const Logo_text = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoImage2 = styled.img`
  width: 100px;
`;

const FooterDescription = styled.p`
`;

const Map = styled.div`
  display: flex;
  gap: 30px;
  flex-direction: column;
`;

const MainText = styled.p`
  font-weight: bold;
`;

const MapImage = styled.img`
`;

const Contact = styled.div`
  display: flex;
  flex-direction: column;
`;

const Line = styled.div`
  border-bottom: 3px solid white;
`;

const LowerSection = styled.div`
  display: flex;
  gap: 200px;
`;

const Rights = styled.p`
  margin: 0;
`;

const NavLink2 = styled.a`
  text-decoration: none;
  color: white;
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #3498db;
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef(null);

  const carouselItems = [
    {
      id: 1,
      img: kavichki,
      text1: "We are serious about providing our best service to\nall the customers we help. Customers satisfaction is\nour number one priority.",
      author: "Mark Garfield",
      text2: "CEO & Head of Product"
    },
    {
      id: 2,
      img: kavichki,
      text1: "We are serious about providing our best service to\nall the customers we help. Customers satisfaction is\nour number one priority.",
      author: "Mark Garfield",
      text2: "CEO & Head of Product"
    },
    {
      id: 3,
      img: kavichki,
      text1: "We are serious about providing our best service to\nall the customers we help. Customers satisfaction is\nour number one priority.",
      author: "Mark Garfield",
      text2: "CEO & Head of Product"
    },
    {
      id: 4,
      img: kavichki,
      text1: "We are serious about providing our best service to\nall the customers we help. Customers satisfaction is\nour number one priority.",
      author: "Mark Garfield",
      text2: "CEO & Head of Product"
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === faqItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? faqItems.length - 1 : prevIndex - 1
    );
  };

   const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const translateValue = -currentIndex * 100;

  const [openItems, setOpenItems] = useState({});

  const tabItems = [
    {
      id: 1,
      question: "What are the services provided to customers?",
      answer: "Hello, we provide various services to help your business grow and develop. We help provide ideas, create designs, develop websites and mobile applications, provide support for the growth of business ideas, to help customers market their products online through the marketplace.",
    },
    {
      id: 2,
      question: "How can I submit a proposal for cooperation?",
      answer: "text",
    },
    {
      id: 3,
      question: "I come from a faraway place, can collaboration be done full time online through several meeting applications?",
      answer: "text",
    },
    {
      id: 4,
      question: "How do I get the payment complete?",
      answer: "text",
    },
    {
      id: 5,
      question: "How long can the collaboration last?",
      answer: "text",
    }
  ];

  const toggleItem = (id) => {
      setOpenItems(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    };

  const testimonials = [
    {
      id: 1,
      img: ronald,
      name: "Ronald Richards",
      company: "Google Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5
    },
    {
      id: 2,
      img: guy,
      name: "Guy Hawkins",
      company: "Paypal Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5
    },
    {
      id: 3,
      img: kristin,
      name: "Kristin Watson",
      company: "Microsoft Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5
    },
    {
      id: 4,
      img: robert,
      name: "Robert Fox",
      company: "Facebook Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5,
    },
    {
      id: 5,
      img: savannah,
      name: "Savannah Nguyen",
      company: "Twitter Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5
    },
    {
      id: 6,
      img: henry,
      name: "Courtney Henry",
      company: "Apple Inc.",
      text: "Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit, sed\ndo eiusmod tempor incididunt.",
      rating: 5
    }
  ];
  
  return (
    <Div>
      <PageWrapper>
        <Container>
          <Header>
            <Logo>
              <LogoImage src={cicon}/>
            </Logo>
            <Nav>
              <NavLink href="/">Home</NavLink>
              <NavLink href="#works">Works</NavLink>
              <NavLink href="#about">About</NavLink>
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
          <Section id="works">
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
      <DocumentationSection id="about">
        <SectionTitle>Our Documentation</SectionTitle>
        <SectionSubtitle>See what our profile is like and how we work for your <br/> business</SectionSubtitle>
        <PartyImg src={party}/>
      </DocumentationSection>
      <SatisfactionSection id="pricing">
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
      <Background>
        <WorkspaceContent>
          <WorkspaceTitle>Working space</WorkspaceTitle>
          <WorkspaceSubtitle>Let's meet our interior room decoration</WorkspaceSubtitle>
        </WorkspaceContent>
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
      <WorkspaceContent>
          <WorkspaceTitle>Some of Our Great Customers</WorkspaceTitle>
          <WorkspaceSubtitle>Some of the companies we have worked with</WorkspaceSubtitle>
      </WorkspaceContent>
      <CustomersGroup>
        <Img src={logo1}></Img>
        <Img src={logo2}></Img>
      </CustomersGroup>
      <CarouselSection>
        <CarouselContainer>
          <CarouselTrack ref={trackRef} translateValue={translateValue}>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id}>
                <KavichImg src={item.img}/>
                <Text1>{item.text1}</Text1>
                <Author>{item.author}</Author>
                <Text2>{item.text2}</Text2>
              </CarouselItem>
            ))}
          </CarouselTrack>
        </CarouselContainer>
        <DotsContainer>
          <NavButton onClick={prevSlide}>←</NavButton>
          {carouselItems.map((_, index) => (
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => goToSlide(index)}
              aria-label={'Go to question ${index + 1}'}
            />
          ))}
          <NavButton onClick={nextSlide}>→</NavButton>
        </DotsContainer>
      </CarouselSection>
      <TabSection>
        <WorkspaceTitle2>Frequently Ask Question</WorkspaceTitle2>
        <WorkspaceSubtitle>Some of our frequently asked questions</WorkspaceSubtitle>
        <TabContainer>
          {tabItems.map((item) => (
            <TabItem key={item.id}>
              <TabHeader onClick={() => toggleItem(item.id)} aria-expanded={openItems[item.id]}>
                <Question>{item.question}</Question>
                <Arrow isOpen={openItems[item.id]} />
              </TabHeader>
              <TabContent isOpen={openItems[item.id]}>
                <Answer>{item.answer}</Answer>
              </TabContent>
            </TabItem>
          ))}
        </TabContainer>
      </TabSection>
      <Testimonials>
        <WorkspaceTitle2>Testimonials</WorkspaceTitle2>
        <WorkspaceSubtitle>Some testimonials from our customers</WorkspaceSubtitle>
        <TermonialContainer>
          <TestimonialsGrid>
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id}>
                <UserAvatar src={testimonial.img}/>
                <TestimonialContent>
                  <UserName>{testimonial.name}</UserName>
                  <UserCompany>{testimonial.company}</UserCompany>
                  <Text>{testimonial.text}</Text>
                  <UserInfo>
                    <Stars>★★★★★</Stars>
                  </UserInfo>
                </TestimonialContent>
              </TestimonialCard>
            ))}
          </TestimonialsGrid>
        </TermonialContainer>
      </Testimonials>
      <Footer>
        <YellowCard>
          <FooterTitle>Are You Ready For</FooterTitle>
          <FooterSubtitle>Start a New Project</FooterSubtitle>
          <FooterButton href="/">Start Now →</FooterButton>
        </YellowCard>
        <BlueCard>
          <FooterTitle>Get Notified About Project</FooterTitle>
          <FooterSubtitle>Subscribe Now</FooterSubtitle>
          <FooterInput type="email" placeholder="Email"/>
        </BlueCard>
        <MainFooter>
          <UpperSection>
            <Logo_text>
              <LogoImage2 src={cicon}/>
              <FooterDescription>Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit, sed do eiusmod tempor<br/>incididunt ut labore et dolore magna aliqua.<br/>Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex<br/>ea commodo consequat. Duis aute irure<br/>dolor in reprehenderit in voluptate velit esse<br/>cillum dolore eu fugiat nulla pariatur.</FooterDescription>
            </Logo_text>
            <Map>
              <MainText>Our Office</MainText>
              <MapImage src={map}/>
            </Map>
            <Contact>
              <MainText>Contact</MainText>
              <FooterDescription>Jl KH Samanhudi<br/>Metro Atom Plaza Bl<br/>AKS 1/11, Dki Jakarta</FooterDescription>
              <FooterDescription>info@yourdomain.<br/>com</FooterDescription>
              <FooterDescription>+62 (0) 000 0000 00</FooterDescription>
            </Contact>
          </UpperSection>
          <Line/>
          <LowerSection>
            <Rights>© 2021 Creative Agency</Rights>
            <Nav>
              <NavLink2 href="/">Home</NavLink2>
              <NavLink2 href="#works">Works</NavLink2>
              <NavLink2 href="#about">About</NavLink2>
              <NavLink2 href="#pricing">Pricing</NavLink2>
              <NavLink2 href="#about">About</NavLink2>
            </Nav>
          </LowerSection>
        </MainFooter>
      </Footer>
    </Div>
  );
};

export default Home;