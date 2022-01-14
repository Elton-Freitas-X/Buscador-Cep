import { Section } from "./container"
import { Div } from './container'
import { Main } from "./container"
import { FiSearch } from 'react-icons/fi'
import { useState } from 'react'
import api from './../services/api'

export default function Container(){

    const [input, setInput] = useState('');
    const [cep, setCep] = useState({});

    async function handleSearch(){
        // 01310930/json/

        if(input === '') {
            alert("Preencha algum cep!")
            return;
        }

        try{
            const response = await api.get(`${input}/json`);
            setCep(response.data)
            setInput("")

        }catch{
            alert("Ops!! Erro ao buscar.")
            setInput("")
        }
    }

    return(
        <Section>
            <h1>Buscador CEP</h1>
                <Div>
                    <input type="text" placeholder="Digite seu cep..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    />

                    <button onClick={handleSearch}>
                        <FiSearch size={25} color="#FFF"/>
                    </button>
                </Div>

                {Object.keys(cep).length > 0 && (
                    <Main>
                    <h2>CEP: {cep.cep}</h2>
                    
                    <span>{cep.logradouro}</span>
                    <span>Complemento {cep.complemento}</span>
                    <span>{cep.bairro}</span>
                    <span>{cep.localidade} - {cep.uf}</span>

                </Main>
                )}
              
        </Section>
    )
}