import { useState, useRef } from "react";
import "./SearchSection.css";

function SearchSection() {
  const [query, setQuery] = useState("");
  const fileInputRef = useRef(null);

  const handleAskAI = () => {
    if (!query.trim()) return;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleAIMode = () => {
    if (!query.trim()) return;
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(query)}&udm=14`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const startVoiceSearch = () => {
    if (!("webkitSpeechRecognition" in window)) {
      alert("Voice search not supported in this browser");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-IN";
    recognition.onresult = (e) => {
      setQuery(e.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Selected file: ${file.name}`);
    }
  };

  return (
    <main className="search-area">
      <h1 className="brand-logo ">
        <img
        src="/logo.png "
        width="400"
        height="400"
        alt="SankalpAI Logo"
        className="brand-logo-img"
        />
        <span className="ai2">Sankalp</span>
       <span className="ai" style={{color:"#f5820e"}}>AI</span>
        <span className="labs"> Labs</span>
      </h1>

      <div className="search-box">
        {/* Upload */}
        <span className="icon" onClick={handleUploadClick}>➕</span>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        {/* Search input */}
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAskAI()}
        />

        {/* Clear */}
        {query && (
          <span className="icon clear" onClick={() => setQuery("")}>
            ❌
          </span>
        )}

        {/* Mic */}
        <span className="icon mic" onClick={startVoiceSearch}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M395-435q-35-35-35-85v-240q0-50 35-85t85-35q50 0 85 35t35 85v240q0 50-35 85t-85 35q-50 0-85-35Zm85-205Zm-40 520v-123q-104-14-172-93t-68-184h80q0 83 58.5 141.5T480-320q83 0 141.5-58.5T680-520h80q0 105-68 184t-172 93v123h-80Zm68.5-371.5Q520-503 520-520v-240q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v240q0 17 11.5 28.5T480-480q17 0 28.5-11.5Z"/></svg>
        </span>
      </div>

      <div className="buttons">
        <button type="button" onClick={handleAskAI}>
          Ask SankalpAI
        </button>
        <button type="button" onClick={handleAIMode}>
          AI Mode
        </button>
      </div>
    </main>
  );
}

export default SearchSection;
