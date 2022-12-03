import { NextApiHandler } from "next";
import { foo } from "demo-package/slim";
import { initWasm } from "../../utils/init-wasm";

const handler: NextApiHandler = async (request, response) => {
  await initWasm();
  await response.status(200).json({ wasmPackageAnswer: foo() });
};

export default handler;
