export default class ClientUser {
    // The user's id
    id: string;

    // The user's username, not unique across the platform
    username: string;

    // The user's Discord-tag
    discriminator: string;

    // The user's display name, if it is set. For bots, this is the application name
    global_name?: string | null;

    // The user's avatar hash
    avatar?: string | null;

    // Whether the user belongs to an OAuth2 application
    bot?: boolean;

    // Whether the user is an Official Discord System user (part of the urgent message system)
    system?: boolean;

    // Whether the user has two-factor authentication enabled on their account
    mfa_enabled?: boolean;

    // The user's banner hash
    banner?: string | null;

    // The user's banner color encoded as an integer representation of a hexadecimal color code
    accent_color?: number | null;

    // The user's chosen language option
    locale?: string;

    // Whether the email on this account has been verified
    verified?: boolean;

    // The user's email
    email?: string | null;

    // The flags on a user's account
    flags?: number;

    // The type of Nitro subscription on a user's account
    premium_type?: number;

    // The public flags on a user's account
    public_flags?: number;

    // The user's avatar decoration hash
    avatar_decoration?: string | null;

    constructor(user: {
        id: string,
        username: string,
        discriminator: string,
        global_name?: string | null,
        avatar?: string | null,
        bot?: boolean,
        system?: boolean,
        mfa_enabled?: boolean,
        banner?: string | null,
        accent_color?: number | null,
        locale?: string,
        verified?: boolean,
        email?: string | null,
        flags?: number,
        premium_type?: number,
        public_flags?: number,
        avatar_decoration?: string | null
    }) {
        this.id = user.id;
        this.username = user.username;
        this.discriminator = user.discriminator;
        this.global_name = user.global_name;
        this.avatar = user.avatar;
        this.bot = user.bot;
        this.system = user.system;
        this.mfa_enabled =user. mfa_enabled;
        this.banner = user.banner;
        this.accent_color = user.accent_color;
        this.locale = user.locale;
        this.verified = user.verified;
        this.email = user.email;
        this.flags = user.flags;
        this.premium_type = user.premium_type;
        this.public_flags = user.public_flags;
        this.avatar_decoration = user.avatar_decoration;
    }
}