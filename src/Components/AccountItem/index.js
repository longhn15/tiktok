import classNames from "classnames/bind";
import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('Wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/e68ed94c47a6deec843feeb4dc726338~tplv-tiktokx-cropcenter:300:300.webp?dr=14577&refresh_token=e56febc0&x-expires=1755097200&x-signature=3sW%2F3asdZOxsAPVx%2BSw9UTbHDYY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=c1333099&idc=sg1" alt="Hoa" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Duong Duc</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>duongduc</span>
            </div>
        </div>
    );
}

export default AccountItem;