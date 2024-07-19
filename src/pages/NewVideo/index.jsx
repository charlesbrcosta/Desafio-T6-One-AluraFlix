/* import { Form } from "../../components/Form";
import styles from './NewVideo.module.css';

export const NewVideo = () => {
    return(
        <div className={styles.newVideo}>
            <h2>NOVO VÍDEO</h2>
            <p>COMPLETO O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            <h3>Criar Card</h3>
            <Form isNewVideo={true}/>
        </div>
    );
} */

import { Form } from "../../components/Form";
import styles from './NewVideo.module.css';
import { Footer } from "../../components/Footer";

export const NewVideo = () => {
    return (
        <div className={styles.newVideo}>
            <h2>NOVO VÍDEO</h2>
            <p>COMPLETO O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
            <h3>Criar Card</h3>
            <Form />
        </div>
    );
};
