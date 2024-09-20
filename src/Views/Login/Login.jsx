import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Layout, Row, Col, Card } from 'antd';
import { LockOutlined, UserOutlined, GoogleOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import { useNavigate } from 'react-router-dom';
import themeColors from '../../config/ColorsApp'; // Importa el archivo de colores
import './LoginScreen.css';

const { Title, Text } = Typography;
const { Content } = Layout;

const LoginScreen = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isDesktopOrLaptop = useMediaQuery({ minWidth: 769 });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const handleRegister = () => {
    console.log('Crear una cuenta');
    navigate('/Register');
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const handleGoogleLogin = () => {
    console.log('Iniciar sesión con Google');
    // Aquí puedes agregar la lógica para manejar la autenticación con Google.
  };

  return (
    <Layout style={{ minHeight: '100vh', background: `linear-gradient(to right, ${themeColors.primary}, ${themeColors.secondary})` }}>
      <Content className="login-content">
        <Row justify="center" align="middle" style={{ height: '100%', marginTop: isMobile ? '50px' : '100px' }}>
          <Col xs={24} md={18} lg={12}>
            <Card
              bordered={false}
              className="login-card"
              style={{
                padding: isMobile ? '20px' : '40px',
                maxWidth: isMobile ? '100%' : 'auto',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                margin: '0 auto',
                backgroundColor: '#fff',
              }}
            >
              <Row
                gutter={[16, 16]}
                align="middle"
                style={{ flexDirection: isDesktopOrLaptop ? 'row' : 'column' }}
              >
                {isDesktopOrLaptop && (
                  <Col span={12}>
                    <img
                      src="https://via.placeholder.com/300x300" // Imagen de ejemplo
                      alt="Login"
                      style={{ width: '100%', borderRadius: '12px' }}
                    />
                  </Col>
                )}

                <Col span={isDesktopOrLaptop ? 12 : 24}>
                  <div style={{ textAlign: isMobile ? 'center' : 'left', marginBottom: '20px' }}>
                    <Title level={isMobile ? 3 : 2} style={{ color: themeColors.textTitle }}>
                      Bienvenido a Evaluatec
                    </Title>
                    <Text type="secondary" style={{ color: themeColors.textParagraph, fontSize: '16px' }}>
                      Inicia sesión para continuar, recuerda que toda la información es anónima.
                    </Text>
                  </div>

                  <Form
                    name="login_form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    layout="vertical"
                    size={isMobile ? 'large' : 'middle'}
                  >
                    <Form.Item
                      name="username"
                      rules={[{ required: true, message: 'Por favor ingresa tu usuario' }]}
                    >
                      <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        placeholder="Usuario"
                        className="custom-input"
                        style={{
                          borderRadius: '6px',
                          borderColor: themeColors.borderPrimary,
                        }}
                      />
                    </Form.Item>

                    <Form.Item
                      name="password"
                      rules={[{ required: true, message: 'Por favor ingresa tu contraseña' }]}
                    >
                      <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        placeholder="Contraseña"
                        className="custom-input"
                        style={{
                          borderRadius: '6px',
                          borderColor: themeColors.borderPrimary,
                        }}
                      />
                    </Form.Item>

                    <Form.Item>
                      <Form.Item name="remember" valuePropName="checked" noStyle>
                        <Checkbox style={{ color: themeColors.textParagraph }}>Recuérdame</Checkbox>
                      </Form.Item>
                      <a href="/" style={{ float: 'right', color: themeColors.primary }}>
                        ¿Olvidaste tu contraseña?
                      </a>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        type="primary"
                        htmlType="submit"
                        block
                        className="login-btn"
                        style={{
                          borderRadius: '6px',
                          backgroundColor: themeColors.buttonPrimary,
                          borderColor: themeColors.buttonPrimary,
                          fontWeight: 'bold',
                        }}
                      >
                        Iniciar sesión
                      </Button>

                      <Button type="link" block style={{ color: themeColors.textParagraph }} onClick={handleRegister}>
                        Crear una cuenta
                      </Button>
                    </Form.Item>

                    <Form.Item>
                      <Button
                        block
                        icon={<GoogleOutlined />}
                        onClick={handleGoogleLogin}
                        className="google-btn"
                        style={{
                          borderRadius: '6px',
                          backgroundColor: '#4285F4',
                          color: '#fff',
                          fontWeight: 'bold',
                        }}
                      >
                        Continuar con Google
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default LoginScreen;
