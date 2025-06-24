import React from 'react';
import { Upload, Button, Card, Typography } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { toast } from 'react-toastify';
import styles from './style.module.scss';

const { Dragger } = Upload;
const { Title } = Typography;

interface UploadPageProps {
  setResumeFile: (file: File) => void;
  fileList: any[];
  setFileList: (list: any[]) => void;
  onNext: () => void;
}

const UploadPage: React.FC<UploadPageProps> = ({ setResumeFile, fileList, setFileList, onNext }) => {
  const props = {
    multiple: false,
    showUploadList: true,
    fileList,
    accept: '.pdf,.doc,.docx',

    beforeUpload: (file: File) => {
      setResumeFile(file);
      toast.success(`${file.name} uploaded successfully`);
      setFileList([file]);
      return false; // prevent automatic upload
    },

    onChange: (info: any) => {
      const latestFile = info.fileList[info.fileList.length - 1];
      setFileList(latestFile ? [latestFile] : []);
    },

    customRequest: () => {}, // disable default upload behavior
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card} >
        <Title level={3} className={styles.heading}>Upload Your Resume</Title>

        <Dragger {...props} className={styles.dragger} style={{ marginBottom: '20px', marginTop: '75px' }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p>Click or drag your resume file here</p>
          <p style={{ fontSize: '12px', color: '#888' }}>Only .pdf, .doc, or .docx formats allowed</p>
        </Dragger>

        <div className={styles.actions}>
          <Button
            type="primary"
            onClick={onNext}
            disabled={fileList.length === 0}
          >
            Next
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default UploadPage;
