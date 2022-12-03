# WASM Sandbox

This repo provides a demonstrative setup of a Rust crate compiling to an NPM consumable package.
A variety of environments are provided to test the NPM package within.

## Requirements

- [Yarn](https://yarnpkg.com/getting-started/install)
- [Rust](https://www.rust-lang.org/tools/install)

## Contents

### [`wasm-crate`](./wasm-crate)

The crate responsible for generating the WASM code. 
The API provides two methods
- `foo` which simply outputs the string "foo"
- `multiplyByTwo` which accepts a `number` and returns it multiplied by two

The crate is compiled through [build.sh](./wasm-crate/build.sh) using `wasm-pack`.

### [`demo-package`](./demo-package)

The demonstrative package that consumes the generated WASM and produces a universally consumable distribution. 

Utilises rollup to inline the WASM, and produce various targets of 'fat' and 'slim' flavours (including or not including the WASM).

### [`nextjs-app`](./nextjs-app)

A very simple Next.JS app that consumes the `demo-package` and utilises it in _both server-side and client-side code_. 

Demonstrates that server-side rendering benefits can still be achieved through the use of `next/dynamic` even when needing to await the asynchronous initialization of the WASM package.

## Development / Usage

- Ensure you've installed the [requirements](#requirements)
- Run `yarn` from the repo root
- To build the `demo-package`:
  - Run `yarn workspace demo-package build`
- To build and run the `nextjs-app`:
  - Run `yarn workspace nextjs-app dev`

For other functionality like linting, check the `"scripts"` entry of the respective `package.json`s

## Acknowledgements

Massive thank you to [Nick Babcock](https://github.com/nickbabcock) for his fantastic [blog posts](https://nickb.dev/blog/recommendations-when-publishing-a-wasm-library/#allow-initialization-customization), reference projects ([Jomini](https://github.com/nickbabcock/jomini), [HighwayHasher](https://github.com/nickbabcock/highwayhasher) and, [rl-web](https://github.com/nickbabcock/rl-web)) and responses to my queries.
