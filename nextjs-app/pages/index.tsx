import { NextPage } from "next";
import * as React from "react";
import { foo, multiplyByTwo } from "demo-package/slim";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { initWasm } from "../utils/init-wasm";

const DynamicPage = dynamic(
  async () => {
    await initWasm();
    return { default: PageInner };
  },
  {
    suspense: true,
  }
);
const PageInner: NextPage = () => {
  const [value, setValue] = React.useState(4);

  const handleChange = (event: { target: { value: string; }; }) => {
    const result = event.target.value.replace(/\D/g, '');
    const asNum = Number(result)
    setValue(isNaN(asNum) ? 0 : asNum);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Your fav number"
        value={value}
        onChange={handleChange}
      />
      <div>
        <p>
          Calling foo(): {foo()}
        </p>
        <p>
          Multiplying {value} by 2: {multiplyByTwo(value)}
        </p>
        <p>
          <a href="/api/foo">
            <code>/api/foo</code>
          </a>
        </p>
        <p>
          <a href="/api/multiply-by-two">
            <code>/api/multiply-by-two</code>
          </a>
        </p>
      </div>
    </>

  );
};

const Page: NextPage = () => {
  return (
    <Suspense fallback={`Loading...`}>
      <DynamicPage />
    </Suspense>
  );
};

export default Page;
