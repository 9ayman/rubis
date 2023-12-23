export interface Reaction {
    /** Total number of times this emoji has been used to react (including super reacts). */
    count: number;

    /** Object containing details of reaction counts for each emoji. */
    count_details: ReactionCountDetails;

    /** Indicates whether the current user reacted using this emoji. */
    me: boolean;

    /** Indicates whether the current user super-reacted using this emoji. */
    me_burst: boolean;

    /** Information about the emoji used for the reaction. */
    emoji: PartialEmoji;

    /** HEX colors used for super reactions. */
    burst_colors: string[];
}

export interface ReactionCountDetails {
    [key: string]: number; // Dynamically typed property for different count details
}

export interface PartialEmoji {
    /** Unique ID of the emoji, if available. */
    id?: string | null;

    /** Name of the emoji. */
    name: string;

    /** Indicates whether the emoji is animated. */
    animated?: boolean;
}