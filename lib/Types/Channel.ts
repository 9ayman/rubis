import Member from './Member';
import User from './User';

export class Channel {
    /** The id of this channel. */
    id: string;

    /** The type of channel. */
    type: ChannelTypes;

    /** The id of the guild (may be missing for some channel objects received over gateway guild dispatches). */
    guild_id?: string;

    /** Sorting position of the channel. */
    position?: number;

    /** Explicit permission overwrites for members and roles. */
    permission_overwrites?: Overwrite[];

    /** The name of the channel (1-100 characters). */
    name?: string | null;

    /** The channel topic (0-4096 characters for GUILD_FORUM and GUILD_MEDIA channels, 0-1024 characters for all others). */
    topic?: string | null;

    /** Whether the channel is NSFW. */
    nsfw?: boolean;

    /** The id of the last message sent in this channel (or thread for GUILD_FORUM or GUILD_MEDIA channels) (may not point to an existing or valid message or thread). */
    last_message_id?: string | null;

    /** The bitrate (in bits) of the voice channel. */
    bitrate?: number;

    /** The user limit of the voice channel. */
    user_limit?: number;

    /** Amount of seconds a user has to wait before sending another message (0-21600). Bots, as well as users with the permission manage_messages or manage_channel, are unaffected. */
    rate_limit_per_user?: number;

    /** The recipients of the DM. */
    recipients?: User[];

    /** Icon hash of the group DM. */
    icon?: string | null;

    /** Id of the creator of the group DM or thread. */
    owner_id?: string;

    /** Application id of the group DM creator if it is bot-created. */
    application_id?: string;

    /** Whether the channel is managed by an application via the gdm.join OAuth2 scope. */
    managed?: boolean;

    /** Id of the parent category for a channel (each parent category can contain up to 50 channels), for threads: id of the text channel this thread was created. */
    parent_id?: string | null;

    /** When the last pinned message was pinned. This may be null in events such as GUILD_CREATE when a message is not pinned. */
    last_pin_timestamp?: string | null;

    /** Voice region id for the voice channel, automatic when set to null. */
    rtc_region?: string | null;

    /** The camera video quality mode of the voice channel, 1 when not present. */
    video_quality_mode?: number;

    /** Number of messages (not including the initial message or deleted messages) in a thread. */
    message_count?: number;

    /** An approximate count of users in a thread, stops counting at 50. */
    member_count?: number;

    /** Thread-specific fields not needed by other channels. */
    thread_metadata?: ThreadMetadata;

    /** Thread member object for the current user, if they have joined the thread, only included on certain API endpoints. */
    member?: ThreadMember;

    /** Default duration, copied onto newly created threads, in minutes, threads will stop showing in the channel list after the specified period of inactivity, can be set to: 60, 1440, 4320, 10080. */
    default_auto_archive_duration?: number;

    /** Computed permissions for the invoking user in the channel, including overwrites, only included when part of the resolved data received on a slash command interaction. This does not include implicit permissions, which may need to be checked separately. */
    permissions?: string;

    /** Channel flags combined as a bitfield. */
    flags?: number;

    /** Number of messages ever sent in a thread, it's similar to message_count on message creation, but will not decrement the number when a message is deleted. */
    total_message_sent?: number;

    /** The set of tags that can be used in a GUILD_FORUM or a GUILD_MEDIA channel. */
    available_tags?: ForumTag[];

    /** The IDs of the set of tags that have been applied to a thread in a GUILD_FORUM or a GUILD_MEDIA channel. */
    applied_tags?: string[];

    /** The emoji to show in the add reaction button on a thread in a GUILD_FORUM or a GUILD_MEDIA channel. */
    default_reaction_emoji?: DefaultReaction;

    /** The initial rate_limit_per_user to set on newly created threads in a channel. This field is copied to the thread at creation time and does not live update. */
    default_thread_rate_limit_per_user?: number;

    /** The default sort order type used to order posts in GUILD_FORUM and GUILD_MEDIA channels. Defaults to null, which indicates a preferred sort order hasn't been set by a channel admin. */
    default_sort_order?: number | null;

    /** The default forum layout view used to display posts in GUILD_FORUM channels. Defaults to 0, which indicates a layout view has not been set by a channel admin. */
    default_forum_layout?: number;

    constructor(options: ChannelOptions) {
        this.id = options.id;
        this.type = options.type;
        this.guild_id = options.guild_id;
        this.position = options.position;
        this.permission_overwrites = options.permission_overwrites;
        this.name = options.name;
        this.topic = options.topic;
        this.nsfw = options.nsfw;
        this.last_message_id = options.last_message_id;
        this.bitrate = options.bitrate;
        this.user_limit = options.user_limit;
        this.rate_limit_per_user = options.rate_limit_per_user;
        this.recipients = options.recipients;
        this.icon = options.icon;
        this.owner_id = options.owner_id;
        this.application_id = options.application_id;
        this.managed = options.managed;
        this.parent_id = options.parent_id;
        this.last_pin_timestamp = options.last_pin_timestamp;
        this.rtc_region = options.rtc_region;
        this.video_quality_mode = options.video_quality_mode;
        this.message_count = options.message_count;
        this.member_count = options.member_count;
        this.thread_metadata = options.thread_metadata;
        this.member = options.member;
        this.default_auto_archive_duration = options.default_auto_archive_duration;
        this.permissions = options.permissions;
        this.flags = options.flags;
        this.total_message_sent = options.total_message_sent;
        this.available_tags = options.available_tags;
        this.applied_tags = options.applied_tags;
        this.default_reaction_emoji = options.default_reaction_emoji;
        this.default_thread_rate_limit_per_user = options.default_thread_rate_limit_per_user;
        this.default_sort_order = options.default_sort_order;
        this.default_forum_layout = options.default_forum_layout;
    }
}

interface ChannelOptions {
    id: string;
    type: ChannelTypes;
    guild_id?: string;
    position?: number;
    permission_overwrites?: Overwrite[];
    name?: string | null;
    topic?: string | null;
    nsfw?: boolean;
    last_message_id?: string | null;
    bitrate?: number;
    user_limit?: number;
    rate_limit_per_user?: number;
    recipients?: User[];
    icon?: string | null;
    owner_id?: string;
    application_id?: string;
    managed?: boolean;
    parent_id?: string | null;
    last_pin_timestamp?: string | null;
    rtc_region?: string | null;
    video_quality_mode?: number;
    message_count?: number;
    member_count?: number;
    thread_metadata?: ThreadMetadata;
    member?: ThreadMember;
    default_auto_archive_duration?: number;
    permissions?: string;
    flags?: number;
    total_message_sent?: number;
    available_tags?: ForumTag[];
    applied_tags?: string[];
    default_reaction_emoji?: DefaultReaction;
    default_thread_rate_limit_per_user?: number;
    default_sort_order?: number | null;
    default_forum_layout?: number;
}

export interface Overwrite {
    /** Role or user id. */
    id: string;

    /** Either 0 (role) or 1 (member). */
    type: number;

    /** Permission bit set for allowed permissions. */
    allow: string;

    /** Permission bit set for denied permissions. */
    deny: string;
}


export interface ThreadMetadata {
    /** Whether the thread is archived. */
    archived: boolean;

    /** The thread will stop showing in the channel list after auto_archive_duration minutes of inactivity. */
    auto_archive_duration: number;

    /** Timestamp when the thread's archive status was last changed, used for calculating recent activity. */
    archive_timestamp: string; // ISO8601 timestamp

    /** Whether the thread is locked; when a thread is locked, only users with MANAGE_THREADS can unarchive it. */
    locked: boolean;

    /** Whether non-moderators can add other non-moderators to a thread; only available on private threads. */
    invitable?: boolean;

    /** Timestamp when the thread was created; only populated for threads created after 2022-01-09. */
    create_timestamp?: string | null; // ISO8601 timestamp or null
}

export interface ThreadMember {
    /** ID of the thread. */
    id?: string;

    /** ID of the user. */
    user_id?: string;

    /** Time the user last joined the thread (ISO8601 timestamp). */
    join_timestamp: string;

    /** Any user-thread settings, currently only used for notifications. */
    flags: number;

    /** Additional information about the user (guild member object). */
    member?: Member;
}


export interface ForumTag {
    /** The ID of the tag. */
    id: string;

    /** The name of the tag (0-20 characters). */
    name: string;

    /** Whether this tag can only be added to or removed from threads by a member with the MANAGE_THREADS permission. */
    moderated: boolean;

    /** The ID of a guild's custom emoji (optional). */
    emoji_id?: string;

    /** The Unicode character of the emoji (optional). */
    emoji_name?: string;
}

export interface DefaultReaction {
    /** The ID of a guild's custom emoji (optional). */
    emoji_id?: string;

    /** The Unicode character of the emoji (optional). */
    emoji_name?: string;
}



export enum ChannelTypes {
    GUILD_TEXT = 0,
    DM = 1,
    GUILD_VOICE = 2,
    GROUP_DM = 3,
    GUILD_CATEGORY = 4,
    GUILD_ANNOUNCEMENT = 5,
    ANNOUNCEMENT_THREAD = 10,
    PUBLIC_THREAD = 11,
    PRIVATE_THREAD = 12,
    GUILD_STAGE_VOICE = 13,
    GUILD_DIRECTORY = 14,
    GUILD_FORUM = 15,
    GUILD_MEDIA = 16,
}


export interface ChannelMention {
    // Id of the channel
    id: string;

    // Id of the guild containing the channel
    guild_id: string;

    // The type of channel
    type: ChannelTypes;

    // The name of the channel
    name: string;
}

