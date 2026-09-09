export type NavLinksType = {
    id: number;
    name: string;
    type: string;
}

export type NavIconsType = {
    id: number;
    img: string;
}

export type DocAppsType = {
    id: string;
    name: string;
    icon: string;
    canOpen: boolean;
}

export type BlogPostsType = {
    id: number;
    date: string;
    title: string;
    image: string;
    link: string;
}

export type TechStackType = {
    category: string;
    items: string[]
}

export type SocialsType = {
    id: number;
    text: string;
    icon: string;
    bg: string;
    link: string;
}

export type PhotosLinksType = {
    id: number;
    icon: string;
    title: string;
}

export type GalleryType = {
    id: number;
    img: string;
}

export type WorkLocation1ChildrenType = {
    id: number;
    name: string;
    icon: string;
    kind: string;
    position: string;
    windowPosition: string;
    children: WorkLocation2ChildrenType[];
}

export type WorkLocation2ChildrenType = {
    id: number;
    name: string;
    icon: string;
    kind: string;
    fileType: string;
    position?: string;
    description?: string[];
    imageUrl?: string;
    href?: string;
}

export type WorkLocationType = {
    id: number;
    type: string;
    name: string;
    icon: string;
    kind: string;
    children: WorkLocation1ChildrenType[];
}

export type AboutLocationChildrenType = WorkLocation2ChildrenType & {
    subtitle?: string
};

export type AboutLocationType = Omit<WorkLocationType, 'children'> & {
    children?: AboutLocationChildrenType[];
};
