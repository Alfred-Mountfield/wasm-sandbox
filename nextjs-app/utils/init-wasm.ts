import { DemoPackageInitializer } from "demo-package/slim";
import wasm from "demo-package/demo-package.wasm";

export const initWasm = async () => {
  let wasmModule;
  if (typeof window === "undefined") {
    const { default: fs } = await import("fs/promises");
    const path = await import("path");

    const wasmPath = path.resolve(process.cwd(), ".next", "server", wasm);
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
