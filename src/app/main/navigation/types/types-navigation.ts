export interface NavItem {
    id: string;
    title: string;
    type: 'item' | 'group' | 'collapsable';
    translate?: string;
    icon?: string;
    hidden?: boolean;
    url?: string;
    classes?: string;
    exactMatch?: boolean;
    externalUrl?: boolean;
    openInNewTab?: boolean;
    privilege?: any;
    feature?: any;
    function?: any;
    active?: boolean;
    badge?: {
        title?: string;
        translate?: string;
        bg?: string;
        fg?: string;
    };
    children?: NavItem[];
}

export interface FuseNavigation extends NavItem {
    children?: NavItem[];
}
