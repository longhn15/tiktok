import classNames from 'classnames/bind';
import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

function wrapper({ children, className }) {
    return <div className={cx('Wrapper', className)}>{children}</div>;
}

export default wrapper;
