import React from 'react';
import { Textarea } from "@/components/ui/textarea";

function TextArea({ item, handleInputChange, productInfo }) {
  return (
    <div>
      <Textarea
        name={item.name}
        onChange={(e) => handleInputChange(item.name, e.target.value)}
        required={item.required}
        defaultValue={productInfo?.[item.name]}
        className="w-full border rounded-xl p-2"
      />
    </div>
  );
}

export default TextArea;

