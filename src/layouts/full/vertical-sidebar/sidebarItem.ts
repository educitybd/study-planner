import {
    ApertureIcon,
    CopyIcon,
    LayoutDashboardIcon, LoginIcon, MoodHappyIcon, TypographyIcon, UserPlusIcon,
    FileDescriptionIcon,
    CalendarStatsIcon,
    BookIcon,
    UserIcon,
    UsersIcon,
    BuildingBankIcon,
    CalendarIcon,
    ListCheckIcon
} from 'vue-tabler-icons';

export interface menu {
    header?: string;
    title?: string;
    icon?: any;
    to?: string;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
}

const sidebarItem: menu[] = [
    { header: 'Menu' },
    {
        title: 'Dashboard',
        icon: LayoutDashboardIcon,
        to: '/'
    },
    {
        title: 'Tasks',
        icon: ListCheckIcon,
        to: '/ui/tasks'
    },
    {
        title: 'Class Routine',
        icon: FileDescriptionIcon,
        to: '/ui/typography'
    },
    {
        title: 'Study Log',
        icon: CalendarStatsIcon,
        to: '/ui/typography'
    },
    { header: 'Settings' },
    {
        title: 'Subjects',
        icon: BookIcon,
        to: '/ui/typography'
    },
    {
        title: 'Teachers',
        icon: UsersIcon,
        to: '/ui/shadow'
    },
    {
        title: 'Class',
        icon: BuildingBankIcon,
        to: '/ui/shadow'
    },
    {
        title: 'Academic Year',
        icon: CalendarIcon,
        to: '/ui/shadow'
    },
    // { header: 'auth' },
    // {
    //     title: 'Login',
    //     icon: LoginIcon,
    //     to: '/auth/login'
    // },
    // {
    //     title: 'Register',
    //     icon: UserPlusIcon,
    //     to: '/auth/register'
    // },
    // { header: 'Extra' },
    // {
    //     title: 'Icons',
    //     icon: MoodHappyIcon,
    //     to: '/icons'
    // },
    // {
    //     title: 'Sample Page',
    //     icon: ApertureIcon,
    //     to: '/sample-page'
    // },
];

export default sidebarItem;
