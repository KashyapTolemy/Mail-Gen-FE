import React from 'react';
import { Button, Typography, Card } from 'antd';
import styles from './style.module.scss';

const { Title, Paragraph } = Typography;

interface Props {
  subject: string;
  content: string;
  onRestart: () => void;
}

const GeneratedEmail: React.FC<Props> = ({ subject, content, onRestart }) => {
  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Title level={3} className={styles.heading}>Generated Email</Title>

        <div className={styles.section}>
          <Title level={5}>Subject</Title>
          <Paragraph className={styles.subject}>{subject}</Paragraph>
        </div>

        <div className={styles.section}>
          <Title level={5} className={styles.content}>Content</Title>
          <Paragraph className={styles.contentBox}>
            {content.split('\n').map((line, idx) => (
                <span key={idx}>
                {line}
                <br />
                </span>
            ))}
            </Paragraph>
        </div>

        <Button type="primary" onClick={onRestart} className={styles.backButton}>
          Start Over
        </Button>

        <div className={styles.note}>
            <Paragraph>
                Tired of uploading your resume every time? 
                <strong> Try our full web app</strong> where you can store your details once and generate tailored emails instantly.
            </Paragraph>
            <Paragraph>
                We’ve also got other tools to support your job hunt — explore them and make your next application faster and smarter.
            </Paragraph>
            <Button type="link" href="https://your-website.com" target="_blank">
                Visit our website →
            </Button>
        </div>

      </Card>
    </div>
  );
};

export default GeneratedEmail;
