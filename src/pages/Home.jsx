import { useRef, useEffect, useState } from 'react'
//react-router
import { Link, useNavigate } from 'react-router-dom'
import { Navigate } from 'react-router-dom'

//css
import '../assets/css/Home.css'



function Home() {
    const [inputCep, setInputCep] = useState([])
    const btn_search = useRef()
    const navigate = useNavigate()


    function clickSearchCep(e){
        e.preventDefault()
        navigate('/search?q='+inputCep)
           
      }
    

    useEffect(() => {

        if (inputCep.length === 8) {
            btn_search.current.disabled = false
        }else{
            btn_search.current.disabled = true
        }
    }, [inputCep])


    return (
        <section className="section_home">
            <h1 className='h1_home'>Qual é o seu CEP?</h1>
            <div className="container_form">
                <form className='form_cep' onSubmit={clickSearchCep}>
                    <label htmlFor="cep">
                        <input onChange={(e) => (setInputCep(e.target.value))} type="text" name="cep" id="" placeholder='00000000' minLength={8} maxLength={8} required/>
                    </label>
                    <button ref={btn_search}  type="submit" className='btn_search'>Buscar</button> 
                </form>
            </div>

        </section>
    )
} export default Home