export interface RoleOptions {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    flags: number;
    icon?: string | null;
    unicode_emoji?: string | null;
    tags?: RoleTags;
}

export interface RoleTags {
    bot_id?: string;
    integration_id?: string;
    premium_subscriber?: null;
}

export default class Role {
    id: string;
    name: string;
    color: number;
    hoist: boolean;
    icon?: string | null;
    unicode_emoji?: string | null;
    position: number;
    permissions: string;
    managed: boolean;
    mentionable: boolean;
    flags: number;
    tags?: RoleTags;

    constructor(options: RoleOptions) {
        this.id = options.id;
        this.name = options.name;
        this.color = options.color;
        this.hoist = options.hoist;
        this.icon = options.icon;
        this.unicode_emoji = options.unicode_emoji;
        this.position = options.position;
        this.permissions = options.permissions;
        this.managed = options.managed;
        this.mentionable = options.mentionable;
        this.flags = options.flags;
        this.tags = options.tags;
    }
}
