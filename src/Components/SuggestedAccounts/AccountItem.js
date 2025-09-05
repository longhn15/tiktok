import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Components/Popper';

import styles from './SuggestedAccounts.module.scss';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <Tippy interactive offset={[-20, 0]} delay={[800, 0]} placement="bottom" render={renderPreview}>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-common-sign-useastred.tiktokcdn-eu.com/tos-useast2a-avt-0068-euttp/7314678730554048545~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=dce23257&x-expires=1757170800&x-signature=zqs3UV8fdyNwORFqX0zbiVNOxEQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=a1d2006b&idc=sg1"
                    alt=""
                />

                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>hoangngoclong</strong>
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    </p>
                    <p className={cx('name')}>Hoang Ngoc Long</p>
                </div>
            </div>
        </Tippy>
    );
}

// AccountItem.proptypes = {};

export default AccountItem;
