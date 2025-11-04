import React, { useState } from "react";
import axios from "axios";

export default function RequestSection({ setResponse, setStatusCode }) {
  const [method, setMethod] = useState("GET");
  const [showDropdown, setShowDropdown] = useState(false);
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");

  const methods = ["GET", "POST", "PUT", "PATCH", "DELETE"];

  const sendRequest = async () => {
    try {
      const parsedBody = body ? JSON.parse(body) : {};
      const res = await axios({
        method,
        url,
        data: method !== "GET" ? parsedBody : undefined,
      });
      setResponse(res.data);
      setStatusCode(res.status);
    } catch (error) {
      setResponse(error.response?.data || error.message);
      setStatusCode(error.response?.status || "Error");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 space-y-4 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative">
          <button
            onClick={() => setShowDropdown(!showDropdown)}
            className="border px-4 py-2 rounded-lg bg-gray-100 font-semibold"
          >
            {method} ▼
          </button>
          {showDropdown && (
            <div className="absolute top-full mt-2 bg-white shadow-lg rounded-lg border z-10 w-full">
              {methods.map((m) => (
                <div
                  key={m}
                  onClick={() => {
                    setMethod(m);
                    setShowDropdown(false);
                  }}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter request URL"
          className="flex-1 border px-3 py-2 rounded-lg"
        />

        <button
          onClick={sendRequest}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>

      <div>
        <label className="block font-semibold mb-2">Request</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder='{"key": "value"}'
          rows={6}
          className="w-full border rounded-lg p-2 font-mono text-sm resize-y bg-gray-50"
        />
      </div>
    </div>
  );
}
