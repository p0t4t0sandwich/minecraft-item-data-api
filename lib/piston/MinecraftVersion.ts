interface Arguments {
    game: any;
    jvm: any;
}

interface AssetIndex {
    id: string;
    sha1: string;
    size: number;
    totalSize: number;
    url: string;
}

// assets
// complianceLevel

interface DownloadData {
    sha1: string;
    size: number;
    url: string;
}

interface Downloads {
    client: DownloadData;
    client_mappings: DownloadData;
    server: DownloadData;
    server_mappings: DownloadData;
}

// id

interface JavaVersion {
    component: string;
    majorVersion: number;
}

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

// mainClass
// minimumLauncherVersion
// releaseTime
// time
// type

class MinecraftVersion {
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

    static fromJSON(json: any): MinecraftVersion {
        return new MinecraftVersion(json);
    }

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

    toString(): string {
        return JSON.stringify(this.toJson());
    }

    static async fromUrl(url: string): Promise<MinecraftVersion> {
        const response = await fetch(url);
        const data = await response.json();
        return MinecraftVersion.fromJSON(data);
    }
}



export { MinecraftVersion };