// src/components/NameInput.tsx
import React from 'react';

interface NameInputProps {
  name: string;
  setName: (name: string) => void;
}

const NameInput: React.FC<NameInputProps> = ({ name, setName }) => {
  return (
    <div className="mb-3">
 <label htmlFor="name" className="form-label fw-bold atma-medium">
  আপনার নাম লিখুন
</label>

      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="এখানে নাম লিখুন..."
        className="form-control"
      />
    </div>
  );
};

export default NameInput;