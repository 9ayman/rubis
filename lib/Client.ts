import EventEmitter from "events";
import WebSocketManager from "./ws/WebSocketManager";
import ClientUser from "./Types/ClientUser";

export default class Client extends EventEmitter {
    private ws: WebSocketManager = new WebSocketManager(this)
    private _user!: ClientUser;

    login = (token: string) => {
        this.ws.connect(token);
    }

    on(eventName: ClientEvents, listener: (...args: any[]) => void): this {
        super.on(eventName, listener);
        return this;
    }    

    set user(user: ClientUser) {
        this._user = user;
    }

    get user() {
        return this._user;
    }
}

export enum ClientEvents {
    ApplicationCommandPermissionsUpdate = "applicationCommandPermissionsUpdate",
    AutoModerationActionExecution = "autoModerationActionExecution",
    AutoModerationRuleCreate = "autoModerationRuleCreate",
    AutoModerationRuleDelete = "autoModerationRuleDelete",
    AutoModerationRuleUpdate = "autoModerationRuleUpdate",
    CacheSweep = "cacheSweep",
    ChannelCreate = "channelCreate",
    ChannelDelete = "channelDelete",
    ChannelPinsUpdate = "channelPinsUpdate",
    ChannelUpdate = "channelUpdate",
    ClientReady = "ready",
    Debug = "debug",
    Error = "error",
    GuildAuditLogEntryCreate = "guildAuditLogEntryCreate",
    GuildAvailable = "guildAvailable",
    GuildBanAdd = "guildBanAdd",
    GuildBanRemove = "guildBanRemove",
    GuildCreate = "guildCreate",
    GuildDelete = "guildDelete",
    GuildEmojiCreate = "emojiCreate",
    GuildEmojiDelete = "emojiDelete",
    GuildEmojiUpdate = "emojiUpdate",
    GuildIntegrationsUpdate = "guildIntegrationsUpdate",
    GuildMemberAdd = "guildMemberAdd",
    GuildMemberAvailable = "guildMemberAvailable",
    GuildMemberRemove = "guildMemberRemove",
    GuildMembersChunk = "guildMembersChunk",
    GuildMemberUpdate = "guildMemberUpdate",
    GuildRoleCreate = "roleCreate",
    GuildRoleDelete = "roleDelete",
    GuildRoleUpdate = "roleUpdate",
    GuildScheduledEventCreate = "guildScheduledEventCreate",
    GuildScheduledEventDelete = "guildScheduledEventDelete",
    GuildScheduledEventUpdate = "guildScheduledEventUpdate",
    GuildScheduledEventUserAdd = "guildScheduledEventUserAdd",
    GuildScheduledEventUserRemove = "guildScheduledEventUserRemove",
    GuildStickerCreate = "stickerCreate",
    GuildStickerDelete = "stickerDelete",
    GuildStickerUpdate = "stickerUpdate",
    GuildUnavailable = "guildUnavailable",
    GuildUpdate = "guildUpdate",
    InteractionCreate = "interactionCreate",
    Invalidated = "invalidated",
    InviteCreate = "inviteCreate",
    InviteDelete = "inviteDelete",
    MessageBulkDelete = "messageDeleteBulk",
    MessageCreate = "messageCreate",
    MessageDelete = "messageDelete",
    MessageReactionAdd = "messageReactionAdd",
    MessageReactionRemove = "messageReactionRemove",
    MessageReactionRemoveAll = "messageReactionRemoveAll",
    MessageReactionRemoveEmoji = "messageReactionRemoveEmoji",
    MessageUpdate = "messageUpdate",
    PresenceUpdate = "presenceUpdate",
    ShardDisconnect = "shardDisconnect",
    ShardError = "shardError",
    ShardReady = "shardReady",
    ShardReconnecting = "shardReconnecting",
    ShardResume = "shardResume",
    StageInstanceCreate = "stageInstanceCreate",
    StageInstanceDelete = "stageInstanceDelete",
    StageInstanceUpdate = "stageInstanceUpdate",
    ThreadCreate = "threadCreate",
    ThreadDelete = "threadDelete",
    ThreadListSync = "threadListSync",
    ThreadMembersUpdate = "threadMembersUpdate",
    ThreadMemberUpdate = "threadMemberUpdate",
    ThreadUpdate = "threadUpdate",
    TypingStart = "typingStart",
    UserUpdate = "userUpdate",
    VoiceServerUpdate = "voiceServerUpdate",
    VoiceStateUpdate = "voiceStateUpdate",
    Warn = "warn",
    WebhooksUpdate = "webhookUpdate",
}
