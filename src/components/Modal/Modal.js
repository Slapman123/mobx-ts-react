import React,{useState} from 'react';
import PropTypes from "prop-types";
import { setup } from "../../utils/setup";
import 'font-awesome/css/font-awesome.min.css';

const  Modal = ({modalInit1,modalInit2,onClick1,onClick2})=>{
    return(
        <div className="col">
            <div className="modal">
                <div id="modal1" className={`modal-info ${modalInit1?"active":""}`}>
                    <h3>USPEŠNOST VAŠEG POSLOVANJA</h3>
                    <hr/>
                    <p>
                        Bilo da se radi o pokretanju nove firme, ili ste nezadovoljni organizacijom Vaše postojeće kompanije, mi Vam nudimo priliku za reorganizaciju strukture Vašeg biznisa.
                        Detaljnom analizom odredićemo kakav kadar je potreban da bi Vaša organizacija uspešno poslovala, koji je najoptimalniji broj zaposlenih potreban za Vašu firmu i odredićemo radne zadatke
                        Takodje, nudimo Vam uslugu reorganizacije postojeće strukture Vaše organizacije, a u svrhu unapređivanje i optimizovanja Vašeg poslovanja.
                    </p>
                    <button className="btn" onClick={onClick1}>Zatvori</button>
                </div>
                <div id="modal2" className={`modal-info ${modalInit2?"active":""}`}>
                    <h3>PRODUKTIVNOST RADA</h3>
                    <hr/>
                    <strong>
                        “Svako može da zna. Poenta je da razumete” Albert Einstein
                    </strong>
                    <p>
                        Produktivnost rada je značajan pokazatelj uspešnosti poslovanja Vaše firme.
                        Ostvarite maksimalan rezultat sa minimalnim ulaganjem. Sa istim brojem zaposlenih ostvarite bolje rezultate i povećajte profit.
                        Na osnovu obima proizvodnje, usluga ili prometa i količine utrošene radne snage saznaćemo koliko su zaposleni produktivni i dati vam rešenje za poboljšanje radnog učinka
                    </p>
                    <button className="btn" onClick={onClick2}>Zatvori</button>
                </div>
            </div>
        </div>
    )
}

Modal.prototype = {
    state: PropTypes.object,
}

export default setup(Modal);