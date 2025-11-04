export default function ResponseSection({ response, statusCode }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <label className="block font-semibold mb-2">Response</label>

      {statusCode && (
        <p className="text-sm mb-2">
          <span className="font-bold">Status:</span>{" "}
          <span
            className={`${
              statusCode >= 200 && statusCode < 300
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {statusCode}
          </span>
        </p>
      )}

      <pre className="bg-gray-100 rounded-lg p-3 text-sm overflow-auto max-h-96 font-mono">
        {response ? JSON.stringify(response, null, 2) : "No response yet"}
      </pre>
    </div>
  );
}
