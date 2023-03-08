import { Text, View } from 'react-native';
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj4 from '../../conjugationType/Conj4';

function PassivePresentTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj4 title="Passive Present Tense" conj1={props.Verb_PassivePresentSM}
                                                 conj2={props.Verb_PassivePresentSF}
                                                conj3={props.Verb_PassivePresentPM}
                                                conj4={props.Verb_PassivePresentPF}
                                                id={props.id}
                                                type1="Verb_PassivePresentSM"
                                                type2="Verb_PassivePresentSF"
                                                type3="Verb_PassivePresentPM"
                                                type4="Verb_PassivePresentPF"
                                                data={props.data}/>
        </FormBlockWrapper>
    );
}

export default PassivePresentTenseVerb;