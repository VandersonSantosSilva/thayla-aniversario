import Styles from "../Components CSS/Dados.module.css"
import Thayla from "../Assets/Thayla.png"
import audio from "../Assets/audios/mar.mp3"
import {useRef} from "react"
import Swal from 'sweetalert2'
import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { db } from "./Firebase"
import { doc, updateDoc } from "firebase/firestore"



function Dados(){

    const audio1 = useRef(null)
    const autoPlay = useSelector(state => state.confirm)
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const nameList = useSelector(state => state.nameList)
    const lowerCaseNameList = nameList.map(name => name.toLowerCase())


    const play = () =>{
        if(audio1.current){
            audio1.current.play()
        }

    }

    const getName = (event) =>{
        setName(event.target.value)
    }

    function confirmed(){
        if (lowerCaseNameList.includes(name.toLowerCase())){

            const position = lowerCaseNameList.indexOf(name.toLowerCase())

            Swal.fire({
                title: 'Confirmado!',
                text: `Sua incrição foi concluída com Exito! 🤗 GUARDE A SUA SENHA: ${position}`,
                icon: 'success',
                confirmButtonText: 'Voltar'
            })

            const up = {
                Nome: name.toLowerCase(),
                Senha: position
            }
        
            const fetchData = async () => {
                try {
                    const docRef = doc(db, "Lista", "Thayla");
                    await updateDoc(docRef, {
                        [name.toLowerCase()]: up
                    });
                    
                    
                } catch (error) {
                    console.error("Erro ao obter dados:", error);
                }
            };
        
            fetchData();

            document.querySelector(`#nameID`).value = "";

        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Seu nome não está na lista, por gentileza, verifique seu nome! 😔',
                icon: 'error',
                confirmButtonText: 'Voltar'
            })

            document.querySelector(`#nameID`).value = "";
        }

    }

    function playAudio(){
        dispatch({
            type: "CONFIRM",
            payload: false
        })

        play()

    }


    return(
        <div>

            <div className={autoPlay ? Styles.ContainerModal : Styles.ContainerModalDesible}>
                <div className={autoPlay ? Styles.Modal : `${Styles.ContainerModalDesible}`}>
                    {autoPlay && (
                        <>
                            <h3>Confirme a sua prensença</h3>
                            <span>Bem-vindo!</span>
                            <button className={Styles.btnContinuar} onClick={playAudio}>Continuar</button>
                        </>
                    )}
                </div>
            </div>


            <div className={Styles.Container}>
                
                <audio ref={audio1} className={Styles.audio} controls loop>
                        <source  src={audio} type="audio/mp3" />
                </audio>

                <img className={Styles.Imagem} src={Thayla} alt="Thayla"/>
                <input  onChange={getName} className={Styles.InputNames} type="text" name="name" id="nameID" placeholder="Digite seu nome"/>
                <button onClick={confirmed} className={Styles.ButtonConfirmed}>Confirmar</button>
            </div>
    
        </div>
    )

}

export default Dados