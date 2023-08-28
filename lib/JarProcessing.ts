import unzipper from 'unzipper';

async function unzipJar(jarPath: string, destination: string) {
    const jar = await unzipper.Open.file(jarPath);
    await jar.extract({path: destination});
}

export { unzipJar };