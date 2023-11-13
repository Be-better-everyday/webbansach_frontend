class ImageModel {
    imageId: number;
    imageName?: string;
    isIcon?: boolean;
    link?: LinkStyle;
    imageData?: string;

    constructor(
        imageId: number,
        imageName?: string,
        isIcon?: boolean,
        link?: LinkStyle,
        imageData?: string,
    ){
        this.imageId = imageId;
        this.imageName = imageName;
        this.isIcon = isIcon;
        this.link = link;
        this.imageData = imageData;
    }
}

export default ImageModel;