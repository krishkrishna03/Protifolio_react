import React from 'react';
import { Upload, message, Typography, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

const { Title } = Typography;
const { Dragger } = Upload;

const Home = ({ setJsonData }) => {
  const navigate = useNavigate();

  const handleUpload = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          setJsonData(data);
          message.success(`${info.file.name} file uploaded successfully.`);
          navigate('/visualization');
        } catch (error) {
          message.error('Invalid JSON file');
        }
      };
      fileReader.readAsText(info.file.originFileObj);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div style={{ padding: '50px' }}>
      <Card bordered={false} style={{ textAlign: 'center' }}>
        <Title level={2}>Upload JSON File</Title>
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
        >
          <p className="ant-upload-drag-icon">
            <UploadOutlined />
          </p>
          <p className="ant-upload-text">Click or drag file to this area to upload</p>
          <p className="ant-upload-hint">Support for a single JSON file upload.</p>
        </Dragger>
      </Card>
    </div>
  );
};

export default Home;
