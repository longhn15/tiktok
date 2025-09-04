import PropTypes from 'prop-types';
import Header from '~/layouts/Components/Header';
import Sidebar from '~/layouts/Components/Sidebar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}
DefaulLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaulLayout;
