import styled from 'styled-components'
import stars from './../gifsANDimage/stars.gif'

 export const Headerr = styled.header`

    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    height: 5.5rem;

    background-image: url(${stars});

    img {
        width: 5rem;
        border-radius: 5rem;
    }
`




