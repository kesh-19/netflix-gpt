import { useEffect, useState } from "react";
import styled from "styled-components";
import FontSizeHandler from "./FontSizeHandler";

const StyledText = styled.div`
  margin-top: 20px;
`;

const TextFormatter = () => {
  const [inputText, setInputText] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [fontUnderline, setFontUnderline] = useState(false);
  const [fontItalic, setFontItalic] = useState(false);
  const [fontBold, setFontBold] = useState(false);
  const handleInputChange = (val: string) => {
    setInputText(val);
  };
  const handleCaseChange = (val: "upper" | "lower") => {
    console.log(window.getSelection()?.toString());

    switch (val) {
      case "upper":
        setInputText((prev) => prev.toUpperCase());
        break;
      case "lower":
        setInputText((prev) => prev.toLowerCase());
        break;
      default:
        setInputText((prev) => prev.toLowerCase());
        break;
    }
  };

  //   useEffect(() => {
  //     console.log(inputText);
  //   }, [inputText]);

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => handleInputChange(e.target.value)}
      />
      <FontSizeHandler setFontSize={setFontSize} />

      {/* format */}
      <button onClick={() => setFontUnderline((prev) => !prev)}>
        Underline
      </button>
      <button onClick={() => setFontItalic((prev) => !prev)}>Italic</button>
      <button onClick={() => setFontBold((prev) => !prev)}>Bold</button>

      {/* case */}
      <button onClick={() => handleCaseChange("upper")}>Uppercase</button>
      <button onClick={() => handleCaseChange("lower")}>Lowercase</button>

      <StyledText
        style={{
          fontSize: `${fontSize}px`,
          textDecoration: fontUnderline ? "underline" : "none",
          fontStyle: fontItalic ? "italic" : "normal",
          fontWeight: fontBold ? "bold" : "normal",
        }}
      >
        {inputText}
      </StyledText>
    </div>
  );
};

export default TextFormatter;
