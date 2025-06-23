import React, { useState } from 'react';
import { Input, Button, Radio, Card, Typography } from 'antd';
import { toast } from 'react-toastify';
import { callEmailAPI } from '@/api';
import styles from './style.module.scss';

const { Title } = Typography;

interface JDFormProps {
  resumeFile: File | null;
  onBack: () => void;
  onSuccess: (result: { subject: string; content: string }) => void;
}

const JDForm: React.FC<JDFormProps> = ({ resumeFile, onBack, onSuccess }) => {
  const [jd, setJd] = useState('');
  const [lengthOption, setLengthOption] = useState<'small' | 'large'>('small');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!jd || !resumeFile) {
      return toast.warning('Please upload job description');
    }

    const formData = new FormData();
    formData.append('resume', resumeFile);
    formData.append('jd', jd);
    formData.append('length', lengthOption);

    setLoading(true);
    try {
      // const response = await callEmailAPI(formData);
      const response = {
        subject: 'Sample Subject',
        content: `Dear Hiring Manager,\n\nI am excited to apply for the role...\n\n• 3+ years experience\n• Strong communication\n\nRegards,\nCandidate`
      };
      onSuccess(response);
    } catch {
      toast.error('Failed to generate content');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <Card className={styles.card} bordered={false}>
        <Title level={3} className={styles.heading}>Paste Job Description</Title>

        <Input.TextArea
          rows={6}
          value={jd}
          onChange={e => setJd(e.target.value)}
          className={styles.textarea}
          placeholder="Paste the job description here..."
        />

        <div className={styles.options}>
          <div className={styles.optionLabel}>Choose the length of the email:</div>
          <Radio.Group
            value={lengthOption}
            onChange={e => setLengthOption(e.target.value)}
          >
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </div>

        <div className={styles.actions}>
          <Button onClick={onBack} className={styles.backButton}>
            Back
          </Button>
          <Button type="primary" onClick={handleSubmit} loading={loading}>
            Generate
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default JDForm;
