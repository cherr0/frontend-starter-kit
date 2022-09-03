import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
    display: flex;
    height: 60px;
    padding: 0 30px;
    color: white;
    background: hotPink;
    align-items: center;
    justify-content: space-between;
`;

const HeaderItem = styled.div`
    display: flex;
    min-width: 500px;
    justify-content: space-between;
`;

function HeaderLayout() {
    return (
        <HeaderWrapper>
            <div>Logo</div>
            <HeaderItem>
                <Link to="/">Home</Link>
                <Link to="/detail">Detail</Link>
                <Link to="/history">History</Link>
                <Link to="/purchase">Purchase</Link>
            </HeaderItem>
            <div>장바구니</div>
        </HeaderWrapper>
    );
}

export default HeaderLayout;
