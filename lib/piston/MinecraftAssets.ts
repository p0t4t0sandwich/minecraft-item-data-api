interface Asset {
    hash: string;
    size: number;
}

interface MinecraftAssets {
    objects: { [key: string]: Asset };
}



export { MinecraftAssets };
