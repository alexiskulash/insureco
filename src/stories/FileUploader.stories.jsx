import React from 'react';
import { FileUploader, FileUploaderButton, FileUploaderDropContainer } from '@carbon/react';

export default {
  title: 'Components/FileUploader',
  component: FileUploader,
};

export const Default = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>File Uploader</h3>
    <FileUploader
      labelTitle="Upload files"
      labelDescription="Max file size is 500mb. Only .jpg files are supported."
      buttonLabel="Add file"
      buttonKind="primary"
      filenameStatus="edit"
      accept={['.jpg', '.png']}
    />
  </div>
);

export const Button = () => (
  <div style={{ padding: '2rem' }}>
    <h3>File Uploader Button</h3>
    <FileUploaderButton
      labelText="Add files"
      accept={['.jpg', '.png', '.pdf']}
    />
  </div>
);

export const DropContainer = () => (
  <div style={{ padding: '2rem', maxWidth: '600px' }}>
    <h3>File Uploader Drop Container</h3>
    <FileUploaderDropContainer
      labelText="Drag and drop files here or click to upload"
      accept={['.jpg', '.png']}
    />
  </div>
);
