import React from 'react';
import { Form, Input, Button, Checkbox, Typography, Layout, Row, Col, Card } from 'antd';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { useMediaQuery } from 'react-responsive';
import themeColors from '../../config/ColorsApp'; // Importa el archivo de colores

const { Title, Text } = Typography;
const { Content } = Layout;

const Register = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout style={{ minHeight: '100vh', background: `linear-gradient(to right, ${themeColors.primary}, ${themeColors.secondary})` }}>
      <Content className="register-content">
        <Row justify="center" align="middle" style={{ height: '100%', marginTop: isMobile ? '50px' : '100px' }}>
          <Col xs={24} md={18} lg={12}>
            <Card
              bordered={false}
              className="register-card"
              style={{
                padding: isMobile ? '20px' : '40px',
                maxWidth: isMobile ? '100%' : '500px', // Max width para escritorio
                maxHeight: '800px', // Max height
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                borderRadius: '12px',
                margin: '0 auto',
                backgroundColor: '#fff',
                overflow: 'auto', // Permitir scroll si el contenido excede la altura
              }}
            >
              <div style={{ textAlign: isMobile ? 'center' : 'left', marginBottom: '20px' }}>
                <Title level={isMobile ? 3 : 2} style={{ color: themeColors.textTitle }}>
                  Regístrate en Evaluatec
                </Title>
                <Text type="secondary" style={{ color: themeColors.textParagraph, fontSize: '16px' }}>
                  Crea tu cuenta para comenzar a utilizar la plataforma.
                </Text>
              </div>

              <Form
                name="register_form"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                layout="vertical"
                size={isMobile ? 'large' : 'middle'}
                style={{ maxWidth: '100%', margin: '0 auto' }} // Asegurar que ocupe todo el ancho permitido
              >
                <Form.Item
                  name="email"
                  rules={[{ required: true, message: 'Por favor ingresa tu correo electrónico', type: 'email' }]}
                >
                  <Input
                    prefix={<MailOutlined className="site-form-item-icon" />}
                    placeholder="Correo electrónico"
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

                <Form.Item
                  name="confirm"
                  rules={[
                    { required: true, message: 'Por favor confirma tu contraseña' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('Las contraseñas no coinciden'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    placeholder="Confirmar contraseña"
                    className="custom-input"
                    style={{
                      borderRadius: '6px',
                      borderColor: themeColors.borderPrimary,
                    }}
                  />
                </Form.Item>

                <Form.Item>
                  <Form.Item name="terms" valuePropName="checked" noStyle>
                    <Checkbox style={{ color: themeColors.textParagraph }}>Acepto los términos y condiciones</Checkbox>
                  </Form.Item>
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    className="register-btn"
                    style={{
                      borderRadius: '6px',
                      backgroundColor: themeColors.buttonPrimary,
                      borderColor: themeColors.buttonPrimary,
                      fontWeight: 'bold',
                    }}
                  >
                    Crear cuenta
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default Register;
