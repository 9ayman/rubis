import User from "../types/User";
import Guild from "../types/Guild";

export interface Application {
    /** ID of the app. */
    id: string;

    /** Name of the app. */
    name: string;

    /** Icon hash of the app. */
    icon?: string | null;

    /** Description of the app. */
    description: string;

    /** List of RPC origin URLs, if RPC is enabled. */
    rpc_origins?: string[];

    /** When false, only the app owner can add the app to guilds. */
    bot_public: boolean;

    /** When true, the app's bot will only join upon completion of the full OAuth2 code grant flow. */
    bot_require_code_grant: boolean;

    /** Partial user object for the bot user associated with the app. */
    bot?: Partial<User>;

    /** URL of the app's Terms of Service. */
    terms_of_service_url?: string;

    /** URL of the app's Privacy Policy. */
    privacy_policy_url?: string;

    /** Partial user object for the owner of the app. */
    owner?: Partial<User>;

    /** Deprecated and will be removed in v11. An empty string. */
    summary: string; // Deprecated

    /** Hex encoded key for verification in interactions and the GameSDK's GetTicket. */
    verify_key: string;

    /** If the app belongs to a team, this will be a list of the members of that team. */
    team?: Team | null;

    /** Guild associated with the app. For example, a developer support server. */
    guild_id?: string | null;

    /** Partial object of the associated guild. */
    guild?: Partial<Guild>;

    /** If this app is a game sold on Discord, this field will be the id of the "Game SKU" that is created, if exists. */
    primary_sku_id?: string | null;

    /** If this app is a game sold on Discord, this field will be the URL slug that links to the store page. */
    slug?: string | null;

    /** App's default rich presence invite cover image hash. */
    cover_image?: string | null;

    /** App's public flags. */
    flags?: number;

    /** Approximate count of guilds the app has been added to. */
    approximate_guild_count?: number;

    /** Array of redirect URIs for the app. */
    redirect_uris?: string[];

    /** Interactions endpoint URL for the app. */
    interactions_endpoint_url?: string;

    /** Role connection verification URL for the app. */
    role_connections_verification_url?: string;

    /** List of tags describing the content and functionality of the app. Max of 5 tags. */
    tags?: string[];

    /** Settings for the app's default in-app authorization link, if enabled. */
    install_params?: InstallParams;

    /** Default custom authorization URL for the app, if enabled. */
    custom_install_url?: string | null;
}

/**
 * Interface representing the Team object.
 */
export interface Team {
    /** ID of the team. */
    id: string;

    /** Membership state of the team members. */
    membership_state: number;

    /** Number of users on the team. */
    member_count: number;

    /** Array of partial user objects. */
    members: Partial<User>[];

    /** User object of the team owner. */
    owner_user: Partial<User>;
}

interface InstallParams {
    prompt?: string;
}
