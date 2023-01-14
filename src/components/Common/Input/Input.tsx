import { useState } from 'react';

const Input = (props: any) => {
  const [value, setValue] = useState(() => props.value || '');

  return (
    <div>
      <label
        className="mb-2 block cursor-pointer text-sm text-gray-700"
        htmlFor={props.htmlFor}
      >
        Password
      </label>
      <input
        className="block w-full border py-2 px-3 text-gray-700"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        name="password"
        id="password"
        required
      />
    </div>
  );
};

export default Input;
