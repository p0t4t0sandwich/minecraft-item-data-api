/**
 * @author p0t4t0sandwich
 */

/**
 * @property {string} release - The latest release version of Minecraft
 * @property {string} snapshot - The latest snapshot version of Minecraft
 * @description The latest version of Minecraft
 */
interface Latest {
    release: string;
    snapshot: string;
}

/**
 * @property {string} id - The ID of the version
 * @property {string} type - The type of the version
 * @property {string} url - The URL of the version
 * @property {string} time - The time of the version
 * @property {string} releaseTime - The release time of the version
 * @description A version of Minecraft
 */
interface Version {
    id: string;
    type: "release" | "snapshot" | "old_beta" | "old_alpha";
    url: string;
    time: string;
    releaseTime: string;
}

/**
 * @property {Latest} latest - The latest version of Minecraft
 * @property {Version[]} versions - The list of all versions of Minecraft
 * @description The version manifest of Minecraft
 */
interface VersionManifestJson {
    latest: Latest;
    versions: Version[];
}

/**
 * Class representing the version manifest of Minecraft
 * @class VersionManifest
 * @description A class that represents the version manifest of Minecraft
 * @see https://minecraft.gamepedia.com/Version_manifest.json
 */
class VersionManifest implements VersionManifestJson {
    /**
     * @property {Latest} latest - The latest version of Minecraft
     * @property {Version[]} versions - The list of all versions of Minecraft
     */
    latest: Latest;
    versions: Version[];

    /**
     * Constructor for VersionManifest
     * @constructor for VersionManifest
     * @param latest The latest version of Minecraft
     * @param versions The list of all versions of Minecraft
     */
    constructor(latest: Latest, versions: Version[]) {
        this.latest = latest;
        this.versions = versions;
    }

    /**
     * Function to create a VersionManifest from a JSON object
     * @param json The JSON object to create a VersionManifest from
     * @returns {VersionManifest} The VersionManifest created from the JSON object
     */
    static fromJson(json: { latest: Latest, versions: Version[] }): VersionManifest {
        return new VersionManifest(json.latest, json.versions);
    }

    /**
     * Function to create a JSON object from a VersionManifest
     * @returns { latest: Latest, versions: Version[] } The JSON object of the VersionManifest
     */
    toJson(): { latest: Latest, versions: Version[] } {
        return {
            latest: this.latest,
            versions: this.versions
        };
    }

    /**
     * Function to create a stringified JSON object from a VersionManifest
     * @returns {string} The stringified JSON object of the VersionManifest
     */
    toString(): string {
        return JSON.stringify(this.toJson());
    }

    /**
     * Function to create a VersionManifest from a URL
     * @param url The URL to create a VersionManifest from, defaults to https://launchermeta.mojang.com/mc/game/version_manifest.json
     * @returns {Promise<VersionManifest>} The VersionManifest created from the URL
     */
    static async fromUrl(url: string = "https://launchermeta.mojang.com/mc/game/version_manifest.json"): Promise<VersionManifest> {
        const response = await fetch(url);
        const data = await response.json();
        return VersionManifest.fromJson(data);
    }

    /**
     * Function to get a version of Minecraft
     * @param version The version of Minecraft to get
     * @returns {Promise<Version>} The version of Minecraft
     */
    async getVersion(version: string): Promise<Version> {
        return this.versions.find((v) => v.id === version);
    }

    /**
     * Function to get the latest version of Minecraft
     * @returns {Promise<Version>} The latest version of Minecraft
     */
    async getLatestVersion(): Promise<Version> {
        return this.getVersion(this.latest.release);
    }

    /**
     * Function to get the latest snapshot version of Minecraft
     * @returns {Promise<Version>} The latest snapshot version of Minecraft
     */
    async getLatestSnapshot(): Promise<Version> {
        return this.getVersion(this.latest.snapshot);
    }

    /**
     * Function to get the URL of a version of Minecraft
     * @param version The version of Minecraft to get the URL of
     * @returns {Promise<string>} The URL of the version of Minecraft
     */
    async getVersionUrl(version: string): Promise<string> {
        return (await this.getVersion(version)).url;
    }

    /**
     * Function to get the URL of the latest version of Minecraft
     * @returns {Promise<string>} The URL of the latest version of Minecraft
     */
    async getLatestVersionUrl(): Promise<string> {
        return this.getVersionUrl(this.latest.release);
    }

    /**
     * Function to get the URL of the latest snapshot version of Minecraft
     * @returns {Promise<string>} The URL of the latest snapshot version of Minecraft
     */
    async getLatestSnapshotUrl(): Promise<string> {
        return this.getVersionUrl(this.latest.snapshot);
    }
}

export { VersionManifest, Latest, Version}
