import esbuild from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";
import * as fs from "node:fs";

// Set a boolean value of watch to true if the flag --watch is provided when the file is run from the command line.
// E.g. node js/scripts/build.ts --watch
const watch: boolean = process.argv.includes("--watch");
const minify: boolean = process.argv.includes("--minify");
const metafile: boolean = process.argv.includes("--metafile");

const rebuildLoggerPlugin = {
  name: "rebuild-logger",
  setup(build: esbuild.PluginBuild) {
    build.onStart(() => {
      console.log(`[${new Date().toISOString()}] Rebuilding JS files...`);
    });
  },
};

const metafilePlugin = {
  name: "metafile",
  setup(build: esbuild.PluginBuild) {
    build.onEnd((result) => {
      if (metafile) {
        console.log("metafile");
        fs.writeFileSync(
          "esbuild-metadata.json",
          JSON.stringify(result.metafile)
        );
      }
    });
  },
};

esbuild
  .context({
    entryPoints: {
      components: "src/components.ts",
      datagrid: "src/datagrid/index.tsx",
      m3: "src/m3/index.ts",
      forge: "src/forge/index.ts",
    },
    bundle: true,
    outdir: "out/",
    minify: minify,
    sourcemap: true,
    plugins: [
      rebuildLoggerPlugin,
      metafilePlugin,
      sassPlugin({ filter: /src\/datagrid\/.*scss$/, type: "css-text" }),
    ],
    metafile: metafile,
  })
  .then((context) => {
    if (watch) {
      context.watch();
    } else {
      context.rebuild();
      context.dispose();
    }
  })
  .catch(() => process.exit(1));
