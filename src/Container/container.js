import styled from "styled-components";

export const Section = styled.section`
    width: 100%;
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 42rem;

    h1 {
        font-size: 5.3rem;
        animation: flipTitle 2s;
    }

    @keyframes flipTitle {
        from{
            font-size: 2.5rem;
            transform: rotateX(90deg);
        }
        to{
            transform: rotateX(0deg);
        }
    }

    @media (max-width: 620px){
        h1{
            font-size: 3.75rem;
        }
    }
`

export const Div = styled.div`
    background-color: rgba(255, 255, 255, 0.5);
    padding: 1.14rem;
    margin: 2.22rem 0;
    display: flex;
    border-radius: 0.5rem;
    box-shadow: 1px 3px 8px rgba(0, 0, 0, 1);

    input{
        background-color: transparent;
        border: 0;
        font-size: 1.25rem;
        color:#fff;
        outline: none;
        margin-right: 0.5rem;
    }

    input::placeholder{
        color:#f1f1f1;
    }

    button{
        background-color: transparent;
        border: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: transform 0.9s;
    }

    button:hover{
        transform: scale(1.2);
    }
`

export const Main = styled.main`
    display: flex;
    justify-items: center;
    align-items: center;
    flex-direction: column;

    h2{
        margin: 0.5rem 0;
        font-size: 2.4rem;
    }

    span{
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    @media (max-width: 620px){
        main{
            width: 80%;
            min-height: 250px;
        }

        h2{
            font-size: 1.25rem;
        }
    }
`
