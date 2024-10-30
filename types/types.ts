
export type TUser = {
    about?: string | undefined,
    avatar?: string | undefined,
    cohort?: string | undefined,
    name?: string | undefined,
    _id?: string | undefined
}

export type TPost = {
    createdAt?: string | undefined,
    likes?: TUser[],
    link?: string | undefined,
    name?: string | undefined,
    owner?: TUser,
    _id?: string | undefined
}

