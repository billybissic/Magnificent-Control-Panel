export class NewAlbum {
    album: string;
    album_description: string;
    album_caption: string;
    album_type: AlbumType;
    album_order_category: GalleryOrderCategory;
    album_order_direction: GalleryOrderDirection;
    album_owner: UserProfile;
    is_private: boolean;
    is_parent: boolean;
    album_children: AlbumChild[];
    album_cover_photo: Photo;

    constructor() {

    }
}

export class Album {
    _id: string;
    album: string;
    album_description: string;
    album_caption: string;
    album_type: AlbumType;
    album_order_category: GalleryOrderCategory;
    album_order_direction: GalleryOrderDirection;
    album_owner: UserProfile;
    is_private: boolean;
    is_parent: boolean;
    album_children: AlbumChild[];
    album_cover_photo: Photo;

    constructor() {

    }
}

export class AlbumType {
    album_type_id: string;
    album_type_name: string;
    album_type_description: string;

    constructor() {

    }
}

export class UserProfile {
    profile_id: number;
    uuid: number;

    constructor() {

    }
}

export class AlbumChild {
    _id: string;
    album_name: string;
    album_description: string;
    album_caption: string;
    album_cover_photo: Photo;

    constructor() {

    }
}

export class Photo {
    file_name: string
    upload_directory: string;
    photo_storage_name: string;
    photo_storage_type: PhotoStorage;

    constructor() {}
}

export class PhotoStorage {
    photo_storage_id: number;
    photo_storage_type_name: string;
    photo_storage_type_description: string;

    constructor() {}
}

export class GalleryOrderDirection {
    gallery_order_direction_id: number;
    gallery_order_direction_name: string;
    gallery_order_direction_description: string;

    constructor() {}
}

export class GalleryOrderCategory {
    gallery_order_category_id: number;
    gallery_order_category_name: string;
    gallery_order_category_description: string;
}