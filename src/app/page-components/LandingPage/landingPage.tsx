"use client";
import React, { useState } from 'react';
import UploadPage from '@/app/components/UploadPage/uploadPage';
import JDForm from '@/app/components/JDForm/jdForm';
import GeneratedEmail from '@/app/components/GeneratedEmail/generatedEmail';
import { ConfigProvider } from 'antd';
import { ToastContainer } from 'react-toastify';

const LandingPage = () => {
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeFileList, setResumeFileList] = useState<any[]>([]);
  const [step, setStep] = useState(1);
  const [generatedResult, setGeneratedResult] = useState<{ subject: string; content: string } | null>(null);

  const goToGeneratedStep = (result: { subject: string; content: string }) => {
    setGeneratedResult(result);
    setStep(3);
  };

  return (
    <ConfigProvider>
      {step === 1 && (
        <UploadPage
          setResumeFile={setResumeFile}
          fileList={resumeFileList}
          setFileList={setResumeFileList}
          onNext={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <JDForm
          resumeFile={resumeFile}
          onBack={() => setStep(1)}
          onSuccess={goToGeneratedStep}
        />
      )}
      {step === 3 && generatedResult && (
        <GeneratedEmail
          subject={generatedResult.subject}
          content={generatedResult.content}
          onRestart={() =>{ 
            setGeneratedResult(null);
            setResumeFile(null);
            setResumeFileList([]);
            setStep(1);
          }}
        />
      )}
      <ToastContainer />
    </ConfigProvider>
  );
};

export default LandingPage;
