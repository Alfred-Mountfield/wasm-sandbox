import { DemoPackageInitializer } from "demo-package/slim";
import wasm from "demo-package/demo-package.wasm";

export const initWasm = async () => {
  let wasmModule;
  if (typeof window === "undefined") {
    const { default: fs } = await import("fs/promises");

    //@ts-expect-error -- We need Node's native require here, and it's safe as this is a server-only block
    const wasmPath = __non_webpack_require__.resolve("demo-package/demo-package.wasm");
    console.log(`Reading wasm from ${wasmPath}`);
    const contents = await fs.readFile(wasmPath);

    console.log(`Compiling wasm`);
    wasmModule = await WebAssembly.compile(contents);
  } else {
    wasmModule = wasm;
  }
  console.log("Initializing wasm");
  await DemoPackageInitializer.initialize(wasmModule);
};
