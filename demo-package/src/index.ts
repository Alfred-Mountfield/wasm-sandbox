import wasm from "../wasm/demo-package_bg.wasm";
import { setWasmInit } from "./common";

export * from "../wasm/demo-package";
export { DemoPackageInitializer } from "./common";

// @ts-expect-error -- Unsure why this isn't recognised as callable, perhaps can be fixed with custom typing
//  we need to call it here or else roll-up produces a function
setWasmInit(() => wasm());
