import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RequestSection from "./components/RequestSection";
import ResponseSection from "./components/ResponseSection";

export default function App() {
  const [response, setResponse] = useState(null);
  const [statusCode, setStatusCode] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 transition-all">
      <Navbar />
      <div className="max-w-5xl mx-auto mt-24 p-4 space-y-6">
        <RequestSection setResponse={setResponse} setStatusCode={setStatusCode} />
        <ResponseSection response={response} statusCode={statusCode} />
      </div>
    </div>
  );
}
