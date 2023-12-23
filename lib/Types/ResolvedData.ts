import User from '../types/User';  
import { Attachment } from '../types/Attachment';
import { Message } from '../types/Message';
import { Channel } from '../types/Channel';
import Role from '../types/Role';
import Member from '../types/Member';

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
