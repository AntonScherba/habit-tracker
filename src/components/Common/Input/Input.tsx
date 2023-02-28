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
        id="password"
        name="password"
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default Input;
