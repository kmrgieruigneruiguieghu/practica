import React from "react";
import styled from "styled-components";
import icon from '../pictures/cicon.svg';

const Container = styled.div`
  margin: 0 auto;
  padding: 0px 200px;
`;

const Header = styled.header`
  display: flex;
  gap: 100px;
  text-align: center;
  margin-bottom: 50px;
`;

const Logo = styled.p`
`;

const TextLinkHeader = styled.a`
  text-decoration: none;
  color: black;
  transition: color 0.3s;
  &:hover {
    color: #0b00a380;
  }
`;

const P1 = styled.p`
`;
const P2 = styled.p`
`;
const P3 = styled.p`
`;

const MainHeader = styled.header`
  text-align: center;
  margin-bottom: 50px;
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #2c3e50;
  font-weight: 700;
`;

const MainDescription = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
`;

const Divider = styled.hr`
  border: none;
  border-top: 2px solid #e0e0e0;
  margin: 50px 0;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 15px;
  color: #2c3e50;
  text-align: center;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 40px;
  font-weight: normal;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  background: #ffffff;
  padding: 30px;
  border-radius: 12px;
  border-left: 4px solid #3498db;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-left-color: #2980b9;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #2c3e50;
  font-weight: 600;
`;

const ServiceDescription = styled.p`
  color: #666;
  line-height: 1.7;
  margin: 0;
`;

const DocumentationSection = styled.section`
  text-align: center;
  padding: 50px 0;
`;

const TextLink = styled.a`
  text-decoration: none;
  color: #3498db;
  font-weight: 600;
  transition: color 0.3s ease;

  &:hover {
    color: #2980b9;
  }
`;

const Button1 = styled.button`
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
  border: none;
  padding: 14px 35px;
  font-size: 1.1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 15px rgba(52, 152, 219, 0.3);
  margin: 10px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(52, 152, 219, 0.4);
    background: linear-gradient(135deg, #2980b9, #3498db);
  }
`;

const TextLink1 = styled.a`
  text-decoration: none;
  color: white;

  &:hover {
    background-color: #f75b00;
  }
`;

const Home = () => {
  const services = [
    {
      title: "Metric",
      description: "We help you develop creative ideas so that your business can grow more rapidly"
    },
    {
      title: "Design",
      description: "We provide services with the best designs than our designer team for your business"
    },
    {
      title: "Web Development",
      description: "We help develop company websites to be more professional and attractive"
    },
    {
      title: "App Development",
      description: "We help develop company mobile apps to be more professional and attractive"
    },
    {
      title: "Business Growth",
      description: "We also provide services by providing input for your business growth"
    },
    {
      title: "Digital marketing",
      description: "We also help you market your products through an online marketplace"
    }
  ];

  return (
    <Container>
      <Header>
        <Logo><img src={icon} /></Logo>
        <TextLinkHeader><P1>Home</P1></TextLinkHeader>
        <TextLinkHeader><P2>Works</P2></TextLinkHeader>
        <TextLinkHeader><P3>About</P3></TextLinkHeader>
      </Header>
      <MainHeader>
        <H1>Make your business <br/> more powerful <br/> with us</H1>
        <MainDescription>
          We provide various services to make <br/> your business grow and get bigger. 
          Your <br/> satisfaction is our first priority.
        </MainDescription>
      </MainHeader>

      <Divider />

      <section>
        <SectionTitle>Our Services</SectionTitle>
        <SectionSubtitle>
          <strong>The various services we provide to make your business more powerful</strong>
        </SectionSubtitle>

        <ServicesGrid>
          {services.map((service, index) => (
            <ServiceItem key={index}>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceItem>
          ))}
        </ServicesGrid>
      </section>

      <Divider />

      <DocumentationSection>
        <SectionTitle>Our Documentation</SectionTitle>
        <SectionSubtitle>
          <strong>See what our profile is like and how we work for your business</strong>
        </SectionSubtitle>
        <TextLink1 href="/documentation">
          <Button1>View Documentation</Button1>
        </TextLink1>
      </DocumentationSection>
    </Container>
  );
};

export default Home;