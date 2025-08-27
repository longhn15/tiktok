import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {useRef } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignIn,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';

import Button from '~/Components/Button';
import Image from '~/Components/Image';
import images from '~/assets/images';
import styles from './Header.module.scss';
import Menu from '~/Components/Popper/Menu';
import { InboxIcon, MessageIcon, Uploadicon } from '~/Components/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'Tiếng Việt',
        children: {
            title: 'Language',
            data: [
                {
                    code: 'en',
                    title: 'English',
                },
                {
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: './feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View profile',
        to: './@duongduc',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'get coins',
        to: './coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: './settings',
    },

    ...MENU_ITEMS,

    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: './logout',
        separate: true,
    },
];


function Header() {

    const currentUser = true;
    const imgRef = useRef();

    return (
        <header className={cx('wrapper')}>
            <div className={styles.inner}>
                <img src={images.logo} alt="Tiktok" />

                {/* search */}
                <Search />

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 50]} placement="bottom" content="Upload video">
                                <button className={cx('action-btn')}>
                                    <Uploadicon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} placement="bottom" content="Message">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} placement="bottom" content="Inbox">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                </button>
                            </Tippy>
                            
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                                Log in
                            </Button>
                        </>
                    )}

                    <Menu items={currentUser ? userMenu : MENU_ITEMS}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                ref={imgRef}
                                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e68ed94c47a6deec843feeb4dc726338~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=2e415a29&x-expires=1755313200&x-signature=bnYCS%2FSTVMh%2FqTIbA1i3Sn%2B7pmw%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=sg1"
                                alt="nguyenvana"
                                fallback="https://files.fullstack.edu.vn/f8-prod/user_avatars/1/623d4b2d95cec.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
