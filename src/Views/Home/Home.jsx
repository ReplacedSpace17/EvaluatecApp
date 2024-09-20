import React, { useState, useEffect } from 'react';
import { Layout, Menu, Card, List, Avatar, Button, Input, Tooltip } from 'antd';
import { HomeOutlined, UserOutlined, PlusOutlined, SearchOutlined, LogoutOutlined, PlusCircleOutlined, AlertOutlined, StockOutlined } from '@ant-design/icons';
import { Puff } from 'react-loader-spinner';
import backendUrl from '../../config/BackendServer';
import axios from 'axios';


const { Header, Content, Sider } = Layout;

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [last_professors, setLast_professors] = useState([]);
  
  
  const handleMenuClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000); // Mostrar el loader por 4 segundos
  };

  const feedData = [
    {
      title: 'John Doe',
      content: 'This is a post from John Doe.',
    },
    {
      title: 'Jane Doe',
      content: 'Jane Doe shared a photo!',
    },
  ];

  const friendsData = [
    {
      name: 'Alice',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Bob',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Charlie',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];


  //obtener datos de la API
  const get_professor_evaluated = async () => {
    try {
      const response = await axios.get(`${backendUrl}/home/get_Last_Professors_Evaluated`);
      console.log(response.data);
      if (response.status === 200) {
        setLast_professors(response.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

 // Llamar a get_professor_evaluated en useEffect
 useEffect(() => {
  get_professor_evaluated();
}, []); // El segundo argumento vacío asegura que se ejecute solo una vez al montar el componente


  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Header style={{ background: '#001529', color: '#fff', padding: '0 20px', display: 'flex', alignItems: 'center' }}>
        {/* Logo */}
        <div style={{ color: '#fff', fontWeight: 'bold', fontSize: '24px' }}>
          LOGO
        </div>

        {/* Container to center the input */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <Input
            placeholder="Buscar docente"
            prefix={<SearchOutlined />}
            style={{
              width: '800px', // Ancho fijo
              height: '40px',
              borderRadius: '8px',
              backgroundColor: '#fff',
              padding: '5px 10px',
            }}
          />
        </div>

        {/* New button at the right */}
        <Button
          type="primary"
          icon={<PlusOutlined />}
          style={{ marginLeft: 'auto' }}
          onClick={handleMenuClick}
        >
          New
        </Button>
      </Header>

      <Layout
      style={{backgroundColor: '#f0f2f5'}}
      >
        {/* Sidebar */}

        <Sider
  width={80}
  style={{
    background: '#fff',
    borderRight: '1px solid #ddd',
    marginLeft: '10px',
    marginTop: '10px',
    marginBottom: '10px',
    position: 'fixed',
    height: '430px', // Altura ajustada con margen de seguridad
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '10px',
    border: '1px solid #C6C6C6',
    padding: '10px',
  }}
>
  <Menu
    mode="vertical"
    defaultSelectedKeys={['1']}
    style={{ 
      height: '100%', 
      borderRight: 0, 
      paddingTop: '0px', 
      borderRadius: '10px',
    }}
  >
    <Menu.Item
      key="1"
      icon={<HomeOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        marginBottom: '10px', // Espacio entre botones
      }}
    />
    <Menu.Item
      key="2"
      icon={<UserOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        marginBottom: '10px', // Espacio entre botones
      }}
    />
    <Menu.Item
      key="3"
      icon={<PlusCircleOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        marginBottom: '10px', // Espacio entre botones
      }}
    />
    <Menu.Item
      key="4"
      icon={<AlertOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        marginBottom: '10px', // Espacio entre botones
      }}
    />
    <Menu.Item
      key="5"
      icon={<StockOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
        marginBottom: '10px', // Espacio entre botones
      }}
    />
    <Menu.Item
      key="6"
      icon={<LogoutOutlined style={{ fontSize: '20px', marginLeft: '6px' }} />}
      style={{
        borderRadius: '8px',
        margin: '0px',
        height: '60px',
        width: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0px',
      }}
    />
    
  </Menu>
  
  
</Sider>





        {/* Main content */}
        <Content style={{ padding: '20px 24px', marginLeft: '120px', minHeight: 280, backgroundColor: '#f0f2f5', display: 'flex', justifyContent: 'center' }}>
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
              <Puff
                visible={loading}
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="puff-loading"
              />
            </div>
          ) : (
            <Card title="News Feed" bordered={false} style={{ width: '60%', minHeight: '200px' }}>
              {feedData.map((post, index) => (
                <Card key={index} style={{ marginBottom: 20 }}>
                  <Card.Meta title={post.title} description={post.content} />
                  <Button type="link" style={{ marginTop: 10 }}>
                    Like
                  </Button>
                  <Button type="link">Comment</Button>
                </Card>
              ))}
            </Card>
          )}
        </Content>

        {/* Friends List */}
        <Sider width={350} style={{ background: 'none', padding: '20px', borderLeft: '1px solid #ddd', minHeight: '300px' }}>
          <Card title="Últimos Docentes Evaluados" bordered={false} style={{ height: '100%' }}>
            <List
              itemLayout="horizontal"
              dataSource={last_professors}
              renderItem={(professor) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Avatar icon={<UserOutlined />} />} 
                    style={{ width: '100%', backgroundColor: '#f4f4f4', padding: '15px', borderRadius: '10px' }}
                    title={`${professor.Nombre} ${professor.ApPaterno} ${professor.ApMaterno}`}
                    description={professor.Departamento}
                  />
                </List.Item>
              )}
            />
          </Card>
        </Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
