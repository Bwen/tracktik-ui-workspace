
import type { Link } from '@type/Link.type';

export type SubItem = Link & {
    acl?: string;
    module?: string;
};

export type MenuItem = Link & {
    acl?: string;
    module?: string;
    subItems: SubItem[];
}
