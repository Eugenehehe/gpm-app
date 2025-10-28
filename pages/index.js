import { useState } from 'react';

export default function Home() {
  const [sgsFile, setSgsFile] = useState(null);
  const [mcdFile, setMcdFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [validation, setValidation] = useState(null);
  const [report, setReport] = useState(null);

  const handleUpload = async () => {
    await fetch('/api/upload.json'); // Simulate upload
    const analyzeRes = await fetch('/api/analyze.json');
    const analyzeData = await analyzeRes.json();
    setAnalysis(analyzeData);
    const validateRes = await fetch('/api/validate.json');
    const validateData = await validateRes.json();
    setValidation(validateData);
    const reportRes = await fetch('/api/report.json');
    const reportData = await reportRes.json();
    setReport(reportData);
  };

  const mockData = [
    { field: 'CAS', value: analysis?.CAS || '' },
    { field: 'Result', value: analysis?.Result || '' },
    { field: 'RoHS', value: validation?.RoHS || '' },
    { field: 'REACH', value: validation?.REACH || '' },
    { field: 'SKU', value: report?.SKU || '' },
    { field: 'Compliant', value: report?.Compliant !== undefined ? report?.Compliant.toString() : '' },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>AI-GPM Simulation Dashboard</h1>
      <div>
        <label>
          SGS File:
          <input type="file" onChange={(e) => setSgsFile(e.target.files[0])} />
        </label>
        <label>
          MCD File:
          <input type="file" onChange={(e) => setMcdFile(e.target.files[0])} />
        </label>
        <button onClick={handleUpload}>Upload & Analyze</button>
      </div>
      <h2>Results</h2>
      <table>
        <thead>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {mockData.map(({ field, value }) => (
            <tr key={field}>
              <td>{field}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
