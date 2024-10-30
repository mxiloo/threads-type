
export type TUser = {
    about: string,
    avatar: string,
    cohort: string,
    name: string,
    _id: string
}

export type TPost = {
    createdAt: string,
    likes?: TUser[],
    link: string,
    name: string,
    owner?: TUser,
    _id: string
}

