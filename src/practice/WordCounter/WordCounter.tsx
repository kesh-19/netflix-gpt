import { useState } from "react";

const WordCounter = () => {
  // Edit this component
  const [content, setContent] = useState("");
  performance.now();
  return (
    <>
      <textarea
        data-testid="textarea-id"
        onChange={(e) => setContent(e.target.value)}
        // pattern=''
      />
      <h1 data-testid="output-id">
        {content.trim() !== "" ? content.trim().split(" ").length : 0}
      </h1>
    </>
  );
};

export default WordCounter;
