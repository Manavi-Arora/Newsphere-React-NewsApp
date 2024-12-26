import React from 'react';
import loading from './loadingSpinner.gif';

export default function Spinner() {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh" }}>
      <img src={loading} height="70" width="70" alt="loading" />
    </div>
  );
}
