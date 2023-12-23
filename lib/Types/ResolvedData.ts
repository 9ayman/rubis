import User from './User';  
import { Attachment } from './Attachment';
import { Message } from './Message';
import { Channel } from './Channel';
import Role from './Role';
import Member from './Member';

export interface ResolvedData {
    /** The ids and User objects. */
    users?: Map<string, User>;

    /** The ids and partial Member objects. */
    members?: Map<string, Partial<Member>>;

    /** The ids and Role objects. */
    roles?: Map<string, Role>;

    /** The ids and partial Channel objects. */
    channels?: Map<string, Partial<Channel>>;

    /** The ids and partial Message objects. */
    messages?: Map<string, Partial<Message>>;

    /** The ids and Attachment objects. */
    attachments?: Map<string, Attachment>;
}
