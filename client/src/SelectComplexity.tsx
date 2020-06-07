import React from 'react';
import './SelectComplexity.css';

export type Complexity = 'n' | 'n^2';

interface Props {
  complexity: Complexity;
  setComplexity: (c: Complexity) => void;
}

function ComplexitySwitch({ complexity, setComplexity }: Props) {
  return (
    <div className="complexity-switch">
      <label htmlFor="complexity-switch" className="complexity-label">
        Row builder complexity:
      </label>
      <select
        id="complexity-switch"
        value={complexity}
        onChange={(e) => setComplexity(e.target.value as Complexity)}
      >
        <option value="n">O(n)</option>
        <option value="n^2">O(n^2)</option>
      </select>
    </div>
  );
}

export default ComplexitySwitch;
