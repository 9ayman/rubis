import Role from '../types/Role';
import User from '../types/User';

export interface MemberOptions {
    user?: User;
    nick?: string | null;
    avatar?: string | null;
    roles: Role[];
    joined_at: string;
    premium_since?: string | null;
    deaf: boolean;
    mute: boolean;
    flags: GuildMemberFlags;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string | null;
}

export default class Member {
    user?: User;
    nick?: string | null;
    avatar?: string | null;
    roles: Role[];
    joined_at: string;
    premium_since?: string | null;
    deaf: boolean;
    mute: boolean;
    flags: GuildMemberFlags;
    pending?: boolean;
    permissions?: string;
    communication_disabled_until?: string | null;

    constructor(options: MemberOptions) {
        this.user = options.user;
        this.nick = options.nick;
        this.avatar = options.avatar;
        this.roles = options.roles;
        this.joined_at = options.joined_at;
        this.premium_since = options.premium_since;
        this.deaf = options.deaf;
        this.mute = options.mute;
        this.flags = options.flags;
        this.pending = options.pending;
        this.permissions = options.permissions;
        this.communication_disabled_until = options.communication_disabled_until;
    }
}

export enum GuildMemberFlags {
    DID_REJOIN = 1 << 0,
    COMPLETED_ONBOARDING = 1 << 1,
    BYPASSES_VERIFICATION = 1 << 2,
    STARTED_ONBOARDING = 1 << 3,
}
