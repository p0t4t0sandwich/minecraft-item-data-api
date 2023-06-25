/**
 * MinecraftAssets.ts
 * @author p0t4t0sandwich
 */

/**
 * @property {string} hash - The hash of the asset
 * @property {number} size - The size of the asset
 * @description An asset of Minecraft
 */
interface Asset {
    hash: string;
    size: number;
}

/**
 * @property {{ [key: string]: Asset }} objects - The list of all assets for the Minecraft version
 */
interface MinecraftAssetsJson {
    objects: { [key: string]: Asset };
}

class MinecraftAssets implements MinecraftAssetsJson {
    /**
     * @property {{ [key: string]: Asset }} objects - The list of all assets for the Minecraft version
     * @description The list of all assets for the Minecraft version
     */
    objects: { [key: string]: Asset };

    /**
     * Constructor for MinecraftAssets
     * @constructor for MinecraftAssets
     * @param {MinecraftAssetsJson} json - The JSON of the Minecraft assets
     * @description Constructor for MinecraftAssets
     */
    constructor(json: MinecraftAssetsJson) {
        this.objects = json.objects;
    }

    /**
     * Get the JSON of the Minecraft assets
     * @method toJson
     * @returns {MinecraftAssetsJson} The JSON of the Minecraft assets
     * @description Get the JSON of the Minecraft assets
     */
    toJson(): MinecraftAssetsJson {
        return {
            objects: this.objects
        };
    }

    /**
     * Get the stringified JSON of the Minecraft assets
     * @method toString
     * @returns {string} The stringified JSON of the Minecraft assets
     * @description Get the stringified JSON of the Minecraft assets
     */
    toString(): string {
        return JSON.stringify(this.toJson());
    }

    /**
     * Get assets from URL
     * @method fromUrl
     * @param {string} url - The URL of the Minecraft assets
     * @returns {Promise<MinecraftAssets>} The Minecraft assets from the URL
     * @description Get assets from URL
     */
    static async fromUrl(url: string): Promise<MinecraftAssets> {
        const response = await fetch(url);
        const data = await response.json();
        return new MinecraftAssets(data);
    }
}

export { MinecraftAssets };
