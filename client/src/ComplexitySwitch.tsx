import React from 'react';
import './Complexity.css';

export type Complexity = 'n' | 'n^2';

interface Props {
  complexity: Complexity;
  setComplexity: (c: Complexity) => void;
}

function ComplexitySwitch({ complexity, setComplexity }: Props) {
  return (
    <div className="complexity-switch">
      <span className="complexity-label">Row builder complexity:</span>
      <select
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
