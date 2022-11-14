import React, { useState } from "react";
import "./InputTag.css";

const InputTag = () => {
  const [tags, setTags] = useState([]);

  const onKeyEventHandler = (event) => {
    if (event.key === "Enter") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };

  const removeTag = (tag) => {
    const newTags = tags.filter((item) => item !== tag);
    setTags(newTags);
  }

  return (
    <div className="input-tag-container">
      <div>
        {tags.map((tag) => {
          return (
            <span className="tag-container">
              <span>{tag}</span>
              <span className="tag-close" onClick={() => removeTag(tag)}>x</span>
            </span>
          );
        })}
      </div>
      <input
        className="input-tag"
        placeholder="Input a tag and press Enter"
        onKeyDown={onKeyEventHandler}
      />
    </div>
  );
};

export default InputTag;
