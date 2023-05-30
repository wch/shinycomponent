import { build } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import * as fs from "node:fs";

async function bundle() {
  try {
    const options = {
      entryPoints: [
        "src/components.ts",
        "src/datagrid/index.tsx",
        "src/m3/index.ts",
      ],
      bundle: true,
      outdir: "out/",
      minify: true,
      sourcemap: true,
      plugins: [sassPlugin({ type: "css-text" })],
      metafile: true,
    };

    const result = await build(options);
    console.log("Build completed successfully!");
    // console.log("Output:", result);
    fs.writeFileSync("esbuild-metadata.json", JSON.stringify(result.metafile));
  } catch (error) {
    console.error("Build failed:", error);
  }
}

bundle();
