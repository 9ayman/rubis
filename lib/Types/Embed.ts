export interface Embed {
    /** Title of the embed. */
    title?: string;

    /** Type of the embed (always "rich" for webhook embeds). */
    type?: string;

    /** Description of the embed. */
    description?: string;

    /** URL of the embed. */
    url?: string;

    /** Timestamp of the embed content (ISO8601 format). */
    timestamp?: string;

    /** Color code of the embed. */
    color?: number;

    /** Footer information for the embed. */
    footer?: EmbedFooter;

    /** Image information for the embed. */
    image?: EmbedImage;

    /** Thumbnail information for the embed. */
    thumbnail?: EmbedThumbnail;

    /** Video information for the embed. */
    video?: EmbedVideo;

    /** Provider information for the embed. */
    provider?: EmbedProvider;

    /** Author information for the embed. */
    author?: EmbedAuthor;

    /** Fields information for the embed (max of 25). */
    fields?: EmbedField[];
}

/**
 * Represents the footer of an embed.
 */
export interface EmbedFooter {
    text: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

/**
 * Represents an image in an embed.
 */
export interface EmbedImage {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

/**
 * Represents a thumbnail in an embed.
 */
export interface EmbedThumbnail {
    url: string;
    proxy_url?: string;
    height?: number;
    width?: number;
}

/**
 * Represents a video in an embed.
 */
export interface EmbedVideo {
    url: string;
    height?: number;
    width?: number;
}

/**
 * Represents a provider in an embed.
 */
export interface EmbedProvider {
    name?: string;
    url?: string;
}

/**
 * Represents an author in an embed.
 */
export interface EmbedAuthor {
    name?: string;
    url?: string;
    icon_url?: string;
    proxy_icon_url?: string;
}

export interface EmbedField {
    name: string;
    value: string;
    inline?: boolean;
}

