import { build } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

async function bundle() {
  try {
    const options = {
      entryPoints: ["src/components.ts", "src/datagrid/index.tsx"],
      bundle: true,
      outdir: "out/",
      // minify: true, // Minify the output
      sourcemap: true,
      plugins: [sassPlugin({ type: "css-text" })],
    };

    const result = await build(options);
    console.log("Build completed successfully!");
    // console.log("Output:", result);
  } catch (error) {
    console.error("Build failed:", error);
  }
}

bundle();
