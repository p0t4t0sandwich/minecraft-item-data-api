/**
 * MinecraftVersion.ts
 * @author p0t4t0sandwich
 */

import { downloadFile } from "../utils.js";
import { MinecraftAssets } from "./MinecraftAssets.js";

/**
 * @property {any} game - The game arguments
 * @property {any} jvm - The JVM arguments
 * @description The different arguments for the Minecraft version
 */
interface Arguments {
    game: any;
    jvm: any;
}

/**
 * @property {string} id - The ID of the asset index
 * @property {string} sha1 - The SHA-1 of the asset index
 * @property {number} size - The size of the asset index
 * @property {number} totalSize - The total size of the asset index
 * @property {string} url - The URL of the asset index
 * @description The asset index of the Minecraft version
 */
interface AssetIndex {
    id: string;
    sha1: string;
    size: number;
    totalSize: number;
    url: string;
}

/**
 * @property {string} sha1 - The SHA-1 of the download
 * @property {number} size - The size of the download
 * @property {string} url - The URL of the download
 * @description The downloads of the Minecraft version
 */
interface DownloadData {
    sha1: string;
    size: number;
    url: string;
}

/**
 * @property {DownloadData} client - The client download
 * @property {DownloadData} client_mappings - The client mappings download
 * @property {DownloadData} server - The server download
 * @property {DownloadData} server_mappings - The server mappings download
 * @description The downloads of the Minecraft version
 */
interface Downloads {
    client: DownloadData;
    client_mappings: DownloadData;
    server: DownloadData;
    server_mappings: DownloadData;
}

/**
 * @property {string} component - The component of the Java version
 * @property {number} majorVersion - The major version of the Java version
 * @description The Java version of the Minecraft version
 */
interface JavaVersion {
    component: string;
    majorVersion: number;
}

/**
 * @property {any} downloads - The downloads of the library
 * @property {any[]} rules - The rules of the library
 * @description The library of the Minecraft version
 */
interface Library {
    downloads: {
        artifact: {
            path: string;
            sha1: string;
            size: number;
            url: string;
        };
        name: string;
    }
    rules?: any[];
}

/**
 * @property {any} client - The client logging
 * @description The logging info of the Minecraft version
 */
interface Logging {
    client: {
        argument: string;
        file: {
            id: string;
            sha1: string;
            size: number;
            url: string;
        };
        type: string;
    };
}

/**
 * @property {Arguments} arguments - The arguments of the Minecraft version
 * @property {AssetIndex} assetIndex - The asset index of the Minecraft version
 * @property {string} assets - The assets of the Minecraft version
 * @property {number} complianceLevel - The compliance level of the Minecraft version
 * @property {Downloads} downloads - The downloads of the Minecraft version
 * @property {string} id - The ID of the Minecraft version
 * @property {JavaVersion} javaVersion - The Java version of the Minecraft version
 * @property {Library[]} libraries - The libraries of the Minecraft version
 * @property {Logging} logging - The logging info of the Minecraft version
 * @property {string} mainClass - The main class of the Minecraft version
 * @property {number} minimumLauncherVersion - The minimum launcher version of the Minecraft version
 * @property {string} releaseTime - The release time of the Minecraft version
 * @property {string} time - The time of the Minecraft version
 * @property {string} type - The type of the Minecraft version
 * @description The Minecraft version JSON
 */
interface MinecraftVersionJson {
    arguments: Arguments;
    assetIndex: AssetIndex;
    assets: string;
    complianceLevel: number;
    downloads: Downloads;
    id: string;
    javaVersion: JavaVersion;
    libraries: Library[];
    logging: Logging;
    mainClass: string;
    minimumLauncherVersion: number;
    releaseTime: string;
    time: string;
    type: string;
}

/**
 * Class representing the Minecraft version
 * @class MinecraftVersion
 * @description The Minecraft version
 */
class MinecraftVersion implements MinecraftVersionJson {
    /**
     * @property {Arguments} arguments - The arguments of the Minecraft version
     * @property {AssetIndex} assetIndex - The asset index of the Minecraft version
     * @property {string} assets - The assets of the Minecraft version
     * @property {number} complianceLevel - The compliance level of the Minecraft version
     * @property {Downloads} downloads - The downloads of the Minecraft version
     * @property {string} id - The ID of the Minecraft version
     * @property {JavaVersion} javaVersion - The Java version of the Minecraft version
     * @property {Library[]} libraries - The libraries of the Minecraft version
     * @property {Logging} logging - The logging info of the Minecraft version
     * @property {string} mainClass - The main class of the Minecraft version
     * @property {number} minimumLauncherVersion - The minimum launcher version of the Minecraft version
     * @property {string} releaseTime - The release time of the Minecraft version
     * @property {string} time - The time of the Minecraft version
     * @property {string} type - The type of the Minecraft version
     */
    arguments: Arguments;
    assetIndex: AssetIndex;
    assets: string;
    complianceLevel: number;
    downloads: Downloads;
    id: string;
    javaVersion: JavaVersion;
    libraries: Library[];
    logging: Logging;
    mainClass: string;
    minimumLauncherVersion: number;
    releaseTime: string;
    time: string;
    type: string;

    /**
     * Constructor for the MinecraftVersion class
     * @constructor for MinecraftVersion
     * @param json The JSON data of the Minecraft version
     */
    constructor(json: any) {
        this.arguments = json.arguments;
        this.assetIndex = json.assetIndex;
        this.assets = json.assets;
        this.complianceLevel = json.complianceLevel;
        this.downloads = json.downloads;
        this.id = json.id;
        this.javaVersion = json.javaVersion;
        this.libraries = json.libraries;
        this.logging = json.logging;
        this.mainClass = json.mainClass;
        this.minimumLauncherVersion = json.minimumLauncherVersion;
        this.releaseTime = json.releaseTime;
        this.time = json.time;
        this.type = json.type;
    }

    /**
     * Creates a MinecraftVersion from JSON data
     * @method fromJSON
     * @param json The JSON data of the Minecraft version
     * @returns {MinecraftVersion} The Minecraft version
     */
    static fromJSON(json: any): MinecraftVersion {
        return new MinecraftVersion(json);
    }

    /**
     * Converts the MinecraftVersion to JSON data
     * @method toJson
     * @returns {any} The JSON data of the Minecraft version
     */
    toJson(): any {
        return {
            arguments: this.arguments,
            assetIndex: this.assetIndex,
            assets: this.assets,
            complianceLevel: this.complianceLevel,
            downloads: this.downloads,
            id: this.id,
            javaVersion: this.javaVersion,
            libraries: this.libraries,
            logging: this.logging,
            mainClass: this.mainClass,
            minimumLauncherVersion: this.minimumLauncherVersion,
            releaseTime: this.releaseTime,
            time: this.time,
            type: this.type
        };
    }

    /**
     * Converts the MinecraftVersion to a string
     * @method toString
     * @returns {string} The stringified JSON data of the Minecraft version
     */
    toString(): string {
        return JSON.stringify(this.toJson());
    }

    /**
     * Creates a MinecraftVersion from a URL
     * @method fromUrl
     * @param url The URL of the Minecraft version
     * @returns {Promise<MinecraftVersion>} The Minecraft version
     */
    static async fromUrl(url: string): Promise<MinecraftVersion> {
        const response = await fetch(url);
        const data = await response.json();
        return MinecraftVersion.fromJSON(data);
    }

    /**
     * Get the Minecraft Assets
     * @method getAssets
     * @returns {Promise<MinecraftAssets>} The Minecraft Assets
     */
    async getAssets(): Promise<MinecraftAssets> {
        return MinecraftAssets.fromUrl(this.assetIndex.url);
    }

    /**
     * Download the Minecraft client jar
     * @method downloadClient
     * @param {string} directory The directory to download the client jar to
     * @description Downloads the client jar
     */
    async downloadClient(directory: string): Promise<void> {
        return await downloadFile(this.downloads.client.url, directory);
    }

    /**
     * Download the Minecraft client mappings
     * @method downloadClientMappings
     * @param {string} directory The directory to download the client mappings to
     * @returns {Promise<void>} The promise
     * @description Downloads the client mappings
     */
    async downloadClientMappings(directory: string): Promise<void> {
        return await downloadFile(this.downloads.client_mappings.url, directory);
    }

    /**
     * Download the Minecraft server jar
     * @method downloadServer
     * @param {string} directory The directory to download the server jar to
     * @returns {Promise<void>} The promise
     * @description Downloads the server jar
     */
    async downloadServer(directory: string): Promise<void> {
        return await downloadFile(this.downloads.server.url, directory);
    }

    /**
     * Download the Minecraft server mappings
     * @method downloadServerMappings
     * @param {string} directory The directory to download the server mappings to
     * @returns {Promise<void>} The promise
     * @description Downloads the server mappings
     */
    async downloadServerMappings(directory: string): Promise<void> {
        return await downloadFile(this.downloads.server_mappings.url, directory);
    }
}

export { MinecraftVersion };
