import styled from 'styled-components';
import oc from 'open-color';

const Positioner = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const LogoWrapper = styled.div`
    background: ${oc.teal[7]};
    height: 5rem;
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Text = styled.div`
    color: white;
    font-size: 2.4rem;
    font-weight: 500;
    letter-spacing: 5px;
`;

const Contents = styled.div`
    background: ${oc.gray[2]};
    padding: 2rem;
    height: auto;
`;

const AuthWrapper = ({children}) => (
    <Positioner>
        <LogoWrapper>
            <Text>
                Babpull
            </Text>
        </LogoWrapper>
        <Contents>
            {children}
        </Contents>
    </Positioner>
);

export default AuthWrapper;