import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj4 from '../../conjugationType/Conj4';
import {useEffect} from 'react';

function PresentTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj4 title="Present Tense" 
                    conj1={props.Verb_ActivePresentSM}
                     conj2={props.Verb_ActivePresentSF}
                      conj3={props.Verb_ActivePresentPM}
                       conj4={props.Verb_ActivePresentPF}
                       id={props.id}
                       type1="Verb_ActivePresentSM"
                       type2="Verb_ActivePresentSF"
                       type3="Verb_ActivePresentPM"
                       type4="Verb_ActivePresentPF"
                       data={props.data} />
        </FormBlockWrapper>

    );
}

export default PresentTenseVerb;
