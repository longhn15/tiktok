import Button from '~/Components/Button';
import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-common-sign-useastred.tiktokcdn-eu.com/tos-useast2a-avt-0068-euttp/7314678730554048545~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=dce23257&x-expires=1757170800&x-signature=zqs3UV8fdyNwORFqX0zbiVNOxEQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=a1d2006b&idc=sg1"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>
                    Follow
                </Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>hoangngoclong</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Hoang Ngoc Long</p>

                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>100M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
