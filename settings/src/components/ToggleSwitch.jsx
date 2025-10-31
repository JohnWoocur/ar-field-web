import React from 'react';

const ToggleSwitch = ({ enabled, onChange, label }) => {
  return (
    <button
      type="button"
      onClick={() => onChange(!enabled)}
      className={
        `relative inline-flex h-6 w-11 items-center rounded-full transition-colors ` +
        (enabled ? 'bg-green-600' : 'bg-gray-300')
      }
      aria-pressed={enabled}
    >
      <span
        className={
          `inline-block h-5 w-5 transform rounded-full bg-white transition-transform ` +
          (enabled ? 'translate-x-5' : 'translate-x-1')
        }
      />
    </button>
  );
};

export default ToggleSwitch;


