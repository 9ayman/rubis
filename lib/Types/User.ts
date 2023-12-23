export interface UserOptions {
    id: string;
    username: string;
    discriminator: string;
    global_name?: string | null;
    avatar?: string | null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string | null;
    accent_color?: number | null;
    locale?: string;
    verified?: boolean;
    email?: string | null;
    flags?: number;
    premium_type?: number;
    public_flags?: UserFlags;
    avatar_decoration?: string | null;
}

export enum UserFlags {
    STAFF = 1 << 0,
    PARTNER = 1 << 1,
    HYPESQUAD = 1 << 2,
    BUG_HUNTER_LEVEL_1 = 1 << 3,
    HYPESQUAD_ONLINE_HOUSE_1 = 1 << 6,
    HYPESQUAD_ONLINE_HOUSE_2 = 1 << 7,
    HYPESQUAD_ONLINE_HOUSE_3 = 1 << 8,
    PREMIUM_EARLY_SUPPORTER = 1 << 9,
    TEAM_PSEUDO_USER = 1 << 10,
    BUG_HUNTER_LEVEL_2 = 1 << 14,
    VERIFIED_BOT = 1 << 16,
    VERIFIED_DEVELOPER = 1 << 17,
    CERTIFIED_MODERATOR = 1 << 18,
    BOT_HTTP_INTERACTIONS = 1 << 19,
    ACTIVE_DEVELOPER = 1 << 22,
}

export default class User {
    id: string;
    username: string;
    discriminator: string;
    global_name?: string | null;
    avatar?: string | null;
    bot?: boolean;
    system?: boolean;
    mfa_enabled?: boolean;
    banner?: string | null;
    accent_color?: number | null;
    locale?: string;
    verified?: boolean;
    email?: string | null;
    flags?: number;
    premium_type?: number;
    public_flags?: UserFlags;
    avatar_decoration?: string | null;

    constructor(options: UserOptions) {
        this.id = options.id;
        this.username = options.username;
        this.discriminator = options.discriminator;
        this.global_name = options.global_name;
        this.avatar = options.avatar;
        this.bot = options.bot;
        this.system = options.system;
        this.mfa_enabled = options.mfa_enabled;
        this.banner = options.banner;
        this.accent_color = options.accent_color;
        this.locale = options.locale;
        this.verified = options.verified;
        this.email = options.email;
        this.flags = options.flags;
        this.premium_type = options.premium_type;
        this.public_flags = options.public_flags;
        this.avatar_decoration = options.avatar_decoration;
    }
}
