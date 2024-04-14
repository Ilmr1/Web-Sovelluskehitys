import sharp from 'sharp';

const createThumbnail = async (req, res, next) => {
    if (!req.file) {
        next();
        return;
    }

    const filePath = req.file.path;
    const thumbnailPath = filePath.replace(/(\.[\w\d_-]+)$/i, '_thumb$1');

    try {
        await sharp(filePath)
            .resize(160, 160)
            .toFile(thumbnailPath);

        console.log(`Thumbnail created at ${thumbnailPath}`);
    } catch (error) {
        console.error(`Failed to create thumbnail: ${error}`);
    }

    next();
};

export { createThumbnail };