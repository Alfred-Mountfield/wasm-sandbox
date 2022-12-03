#!/bin/bash

package_dir_path="../demo-package";

# We do an rm -r so this acts as a small sanity check that we're running from the right directory
if [[ -e "${package_dir_path}" ]];
then
  package_wasm_path="${package_dir_path}/wasm"
  if [[ -e "${package_wasm_path}" ]];
  then
    rm -r "${package_wasm_path}";
  fi;

  wasm-pack build \
      --target "web" \
      --scope local \
      --out-name demo-package \
      --out-dir "${package_wasm_path}" \
      --release;

  # Remove wasm-pack generated files
  cd ${package_wasm_path} || exit 1;
  rm -r package.json .gitignore;

else
  echo "Path didn't exist: ${package_dir_path}";
  echo "If you're running this from the right directory, make the path and try again";

fi;
