import User from "../types/User";
import Member from "../types/Member";

export interface MessageInteraction {
    /** ID of the interaction. */
    id: string;

    /** Type of interaction. */
    type: number; // Use enum or literal types for interaction types

    /** Name of the application command, including subcommands and subcommand groups. */
    name: string;

    /** User who invoked the interaction. */
    user: User;

    /** Member who invoked the interaction in the guild. */
    member?: Partial<Member>;
}
