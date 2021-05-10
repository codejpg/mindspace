import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export const TextField = ({
  onSave,
  icon,
  value,
  loading,
  error,
  ...props
}) => {
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const [saveError, setSaveError] = useState();
  const [lastValue, setLastValue] = useState(value || "");
  return (
    <React.Fragment>
      <Form.Input
        icon={{
          name: saveError ? "warning circle" : saved ? "check circle" : icon,
          color: saveError ? "red" : saved ? "green" : "grey"
        }}
        value={value}
        loading={loading || saving}
        disabled={loading || saving}
        error={error || saveError}
        onChange={() => {
          setSaved(false);
        }}
        onBlur={async e => {
          console.log(e.target.value);
          console.log(lastValue);
          const val = e.target.value;
          if (val !== lastValue) {
            setSaving(true);
            try {
              onSave && (await onSave(val));
              setSaved(true);
              setSaving(false);
              setLastValue(val);
            } catch (err) {
              setSaveError("Error Message");
            }
          }
        }}
        {...props}
      />
    </React.Fragment>
  );
};
