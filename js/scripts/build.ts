import { build } from "esbuild";
import { sassPlugin } from "esbuild-sass-plugin";

async function bundle() {
  try {
    const options = {
      entryPoints: ["src/components.ts"],
      bundle: true,
      outdir: "out/",
      // minify: true, // Minify the output
      sourcemap: true, // Generate sourcemap for debugging
      plugins: [sassPlugin()],
    };

    const result = await build(options);
    console.log("Build completed successfully!");
    // console.log("Output:", result);
  } catch (error) {
    console.error("Build failed:", error);
  }
}

bundle();
