import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`;

export const Loading = styled.div`
    width: 100px;
    height: 100px;
    border: 6px solid #d3d3d3;
    border-top-color: #6CCDF3;
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
    to {
        transform: rotate(360deg);
    }
  }
`;