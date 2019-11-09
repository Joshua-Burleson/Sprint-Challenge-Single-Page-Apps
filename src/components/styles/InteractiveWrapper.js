import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    form {
        margin: 10px 0;
        display: flex;
        flex-direction: column;

        input {
            height: 3rem;
            width: 28rem;
            font-size: 2rem;
            text-align: center;
        }

        button {
            height: 2.5rem;
        }
    }
`;