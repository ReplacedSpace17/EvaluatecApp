import React from 'react';
import { Layout, Row, Col, Button, Typography, Card } from 'antd';
import { useMediaQuery } from 'react-responsive';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import themeColors from '../../config/ColorsApp';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const InfoApp = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate('/Home');
  };
  const handleLoginClick = () => {
    navigate('/Login');
  }

  return (
    <Layout style={{ minHeight: '100vh', backgroundColor: themeColors.background }}>
      <Content style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Row gutter={[16, 16]} style={{ width: '100%', maxWidth: '1200px' }}>
          
          {!isMobile && (
            <Col
              xs={24}
              md={12}
              style={{ display: 'flex', justifyContent: 'center', marginBottom: isMobile ? '20px' : '0' }}
            >
              <Card
                bordered={false}
                style={{
                  width: '100%',
                  height: isMobile ? '40vh' : '50vh',
                  backgroundColor: '#fff',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                  borderRadius: '8px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src="https://statamic.com/images/storage/products/TPREmXDmozTQJQSA6Xg0f20sy0stXf2ckzVUcvHx.png?fit=max&w=1280"
                  alt="Ejemplo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              </Card>
            </Col>
          )}

          <Col xs={24} md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <Card
              bordered={false}
              style={{
                height: isMobile ? 'auto' : '50vh',
                width: '100%',
                minWidth: '280px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                padding: '20px',
              }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Title level={isMobile ? 4 : 3} style={{ textAlign: isMobile ? 'center' : 'left', color: themeColors.textTitle }}>
                  ¿Qué es Evaluatec?
                </Title>
                <Paragraph style={{ textAlign: 'justify', color: themeColors.textParagraph }}>
                  Evaluatec es una plataforma creada por estudiantes, para estudiantes, con el objetivo de mejorar la
                  experiencia académica a través de la evaluación y recomendación de docentes. En Evaluatec, los
                  estudiantes pueden compartir sus opiniones y calificar a los profesores de forma fácil, rápida y
                  anónima. Esto permite que la comunidad estudiantil tome decisiones más informadas al momento de elegir
                  a sus docentes y planificar su carga académica. 
                  <br />
                  <br />
                  ¡Únete a Evaluatec y contribuye a construir una comunidad académica más informada y preparada!
                </Paragraph>
              </div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: isMobile ? 'center' : 'flex-end',
                  alignItems: 'flex-end',
                  marginTop: '20px',
                  gap: '10px',
                }}
              >
                <Button type="primary" icon={<SearchOutlined />} onClick={handleExploreClick} style={{ backgroundColor: themeColors.buttonPrimary }}>
                  Explorar
                </Button>
                <Button style={{ borderColor: themeColors.buttonSecondary }} onClick={handleLoginClick}>
                  Iniciar sesión
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default InfoApp;
