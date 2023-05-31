import { build, context } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import * as fs from "node:fs";

// Set a boolean value of watch to true if the flag --watch is provided when the file is run from the command line.
// E.g. node js/scripts/build.ts --watch
const watch: boolean = process.argv.includes("--watch");

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
      plugins: [
        sassPlugin({ filter: /src\/datagrid\/.*scss$/, type: "css-text" }),
      ],
      metafile: true,
    };

    if (watch) {
      console.log("Watching files for changes...");
      const ctx = await context(options);
      ctx.watch();
      return;
    }

    const result = await build(options);
    console.log("Build completed successfully!");
    // console.log("Output:", result);
    fs.writeFileSync("esbuild-metadata.json", JSON.stringify(result.metafile));
  } catch (error) {
    console.error("Build failed:", error);
  }
}

bundle();
