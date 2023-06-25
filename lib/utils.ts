/**
 * utils.ts
 * @author p0t4t0sandwich
 */

import fs from "fs";

/**
 * Downloads a file from a URL to a path
 * @param url The URL of the file
 * @param path The path to download the file to
 */
async function downloadFile(url: string, path: string) {
    const res = await fetch(url);
    const blob = await res.blob();
    const buffer = await blob.arrayBuffer();
    await fs.promises.writeFile(path, Buffer.from(buffer));
}

export { downloadFile };
