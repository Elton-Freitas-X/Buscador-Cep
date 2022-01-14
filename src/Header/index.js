/* eslint-disable jsx-a11y/alt-text */
import {Headerr} from './header'
import monophy from '../gifsANDimage/monophy.gif'

export default function Header() {
    return(
        <div>
            <Headerr>
                <img src={monophy}/>
               <h3>Aréa de teste</h3>
            </Headerr>
        </div>
    )
}