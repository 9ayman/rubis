export interface Attachment {
    /** Unique ID of the attachment. */
    id: string;

    /** Name of the file attached. */
    filename: string;

    /** Description for the file (max 1024 characters). */
    description?: string;

    /** The attachment's media type. */
    content_type?: string;

    /** Size of the file in bytes. */
    size: number;

    /** Source URL of the file. */
    url: string;

    /** Proxied URL of the file. */
    proxy_url: string;

    /** Height of the file (if an image). */
    height?: number | null;

    /** Width of the file (if an image). */
    width?: number | null;

    /** Whether this attachment is ephemeral. */
    ephemeral?: boolean;

    /** Duration of the audio file (if applicable). */
    duration_secs?: number;

    /** Base64 encoded bytearray representing a sampled waveform (for voice messages). */
    waveform?: string;

    /** Attachment flags combined as a bitfield. */
    flags?: number;
}
