import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x1ce22b2CbD81CdFD2290fA23c0E3bb5a87c6635f",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "hi, PUUDAO",
        description: "This NFT will give you access to PUUDAO!",
        image: readFileSync("scripts/assets/puu.gif"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()