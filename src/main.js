import React, { useState } from 'react';
import { Upload, message, Row, Col, Layout, Menu, Typography, Card } from 'antd';
import {
  UploadOutlined,
  PieChartOutlined,
  LineChartOutlined,
  BarChartOutlined,
  AreaChartOutlined,
  DotChartOutlined,
} from '@ant-design/icons';
import { Bar, Pie, Line, Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  LineElement,
  ArcElement,
  Filler
);

const { Dragger } = Upload;
const { Header, Content, Sider } = Layout;
const { Title: AntTitle } = Typography;

const chartTypes = {
  BAR: 'Bar',
  PIE: 'Pie',
  LINE: 'Line',
  SCATTER: 'Scatter',
  AREA: 'Area',
};

const FileUploadAndVisualize = () => {
  const [jsonData, setJsonData] = useState(null);
  const [selectedChartType, setSelectedChartType] = useState(chartTypes.BAR);

  const handleUpload = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
          message.success(`${info.file.name} file uploaded successfully.`);
        } catch (error) {
          message.error('Invalid JSON file');
        }
      };
      fileReader.readAsText(info.file.originFileObj);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const getChartData = (valueKey) => {
    if (!jsonData) return null;
    return {
      labels: jsonData.map((item) => item.label),
      datasets: [
        {
          label: valueKey,
          data: jsonData.map((item) => item[valueKey]),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: selectedChartType === chartTypes.AREA,
        },
      ],
    };
  };

  const renderChart = (valueKey) => {
    const data = getChartData(valueKey);
    if (!data) return null;

    switch (selectedChartType) {
      case chartTypes.BAR:
        return <Bar data={data} />;
      case chartTypes.PIE:
        return <Pie data={data} />;
      case chartTypes.LINE:
        return <Line data={data} />;
      case chartTypes.SCATTER:
        return <Scatter data={data} />;
      case chartTypes.AREA:
        return <Line data={data} />;
      default:
        return null;
    }
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <Menu.Item
            key="1"
            icon={<BarChartOutlined />}
            onClick={() => setSelectedChartType(chartTypes.BAR)}
          >
            Bar Chart
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<PieChartOutlined />}
            onClick={() => setSelectedChartType(chartTypes.PIE)}
          >
            Pie Chart
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<LineChartOutlined />}
            onClick={() => setSelectedChartType(chartTypes.LINE)}
          >
            Line Chart
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<AreaChartOutlined />}
            onClick={() => setSelectedChartType(chartTypes.AREA)}
          >
            Area Chart
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<DotChartOutlined />}
            onClick={() => setSelectedChartType(chartTypes.SCATTER)}
          >
            Scatter Plot
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Header style={{ backgroundColor: '#fff', padding: 0, marginBottom: '16px' }}>
          <AntTitle level={2} style={{ margin: '16px' }}>
            Upload JSON File and Visualize Data
          </AntTitle>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content">
            <Dragger
              name="file"
              accept=".json"
              customRequest={({ file, onSuccess }) => {
                setTimeout(() => {
                  onSuccess('ok');
                }, 0);
              }}
              onChange={handleUpload}
              showUploadList={false}
              style={{ marginBottom: '20px' }}
            >
              <p className="ant-upload-drag-icon">
                <UploadOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
              <p className="ant-upload-hint">Support for a single JSON file upload.</p>
            </Dragger>

            {jsonData && (
              <Row gutter={[16, 16]}>
                {Object.keys(jsonData[0]).filter(key => key !== 'label').map((valueKey, index) => (
                  <Col span={12} key={valueKey}>
                    <Card title={`Chart for ${valueKey}`} bordered={false}>
                      {renderChart(valueKey)}
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default FileUploadAndVisualize;
