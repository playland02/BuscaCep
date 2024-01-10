import { useSearchParams } from "react-router-dom"
import { useFetch } from "../Hooks/useFetch"


//css
import '../assets/css/Search.css'

function Search() {

    const [searchParams] = useSearchParams()

    const URL = `https://viacep.com.br/ws/${searchParams.get('q')}/json/`
    const { data: items, loading ,error} = useFetch(URL)

    


    return (
        <section className="section_home">
            {loading && <p className="h1_home">Carregando dados aguarde...</p>} 
            <h1 className='h1_home'>Info CEP: <span>{error?(
                "Não encontrado!"
            ):(items && items.cep)}</span></h1>
            <div className="container">
                <p>UF:{items && items.uf}</p>
                <p>Estado:{items && items.localidade}</p>
                <p>Bairro:{items && items.bairro}</p>
                <p>Logradouro:{items && items.logradouro}</p>
                <p>Complemento:{items && items.complemento}</p>                
            </div>

        </section>
    )

} export default Search