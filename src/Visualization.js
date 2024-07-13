import React, { useState } from 'react';
import { Layout, Menu, Row, Col, Card, Typography } from 'antd';
import {
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
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const { Sider, Content } = Layout;
const { Title: AntTitle } = Typography;

const chartTypes = {
  BAR: 'Bar',
  PIE: 'Pie',
  LINE: 'Line',
  SCATTER: 'Scatter',
  AREA: 'Area',
};

const chartComponents = {
  Bar,
  Pie,
  Line,
  Scatter,
  Area: Line,
};

const Visualization = ({ jsonData }) => {
  const [selectedChartType, setSelectedChartType] = useState(chartTypes.BAR);

  const colors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)',
  ];

  const borderColors = [
    'rgba(255, 99, 132, 1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)',
  ];

  const getChartData = (valueKey) => {
    if (!jsonData) return null;

    const labels = jsonData.map((item) => item.label);
    const data = jsonData.map((item) => item[valueKey]);

    if (selectedChartType === chartTypes.PIE) {
      return {
        labels,
        datasets: [
          {
            label: 'Data',
            data,
            backgroundColor: colors.slice(0, data.length),
            borderColor: borderColors.slice(0, data.length),
            borderWidth: 1,
          },
        ],
      };
    }

    return {
      labels,
      datasets: [
        {
          label: valueKey,
          data: data.map((d, i) => ({ x: labels[i], y: d })),
          backgroundColor: colors,
          borderColor: borderColors,
          borderWidth: 1,
          fill: selectedChartType === chartTypes.AREA,
        },
      ],
    };
  };

  const renderChart = (valueKey) => {
    const data = getChartData(valueKey);
    if (!data) return null;

    const ChartComponent = chartComponents[selectedChartType];
    return (
      <ChartComponent
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#333',
                font: {
                  size: 14,
                },
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => `${context.dataset.label}: ${context.raw}`,
              },
            },
          },
        }}
      />
    );
  };

  const handleChartTypeChange = (type) => {
    setSelectedChartType(type);
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
            onClick={() => handleChartTypeChange(chartTypes.BAR)}
          >
            Bar Chart
          </Menu.Item>
          <Menu.Item
            key="2"
            icon={<PieChartOutlined />}
            onClick={() => handleChartTypeChange(chartTypes.PIE)}
          >
            Pie Chart
          </Menu.Item>
          <Menu.Item
            key="3"
            icon={<LineChartOutlined />}
            onClick={() => handleChartTypeChange(chartTypes.LINE)}
          >
            Line Chart
          </Menu.Item>
          <Menu.Item
            key="4"
            icon={<AreaChartOutlined />}
            onClick={() => handleChartTypeChange(chartTypes.AREA)}
          >
            Area Chart
          </Menu.Item>
          <Menu.Item
            key="5"
            icon={<DotChartOutlined />}
            onClick={() => handleChartTypeChange(chartTypes.SCATTER)}
          >
            Scatter Plot
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content style={{ padding: '24px', margin: '0', minHeight: 280 }}>
          {jsonData && (
            <Row gutter={[16, 16]}>
              {Object.keys(jsonData[0]).filter((key) => key !== 'label').map((valueKey) => (
                <Col span={12} key={valueKey}>
                  <Card title={`Chart for ${valueKey}`} bordered={false} style={{ background: '#f0f2f5', borderRadius: 10, padding: 16 }}>
                    {renderChart(valueKey)}
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Visualization;
