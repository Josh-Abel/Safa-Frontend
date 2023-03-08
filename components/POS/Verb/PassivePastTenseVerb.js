import { View, Text } from 'react-native';
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj10 from '../../conjugationType/Conj10';

function PassivePastTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj10 title="Passive Past Tense" conj1={props.Verb_PassivePastS1}
                                               conj2={props.Verb_PassivePastSM2}
                                               conj3={props.Verb_PassivePastSF2} 
                                               conj4={props.Verb_PassivePastSM3} 
                                               conj5={props.Verb_PassivePastSF3} 
                                               conj6={props.Verb_PassivePastP1} 
                                               conj7={props.Verb_PassivePastPM2} 
                                               conj8={props.Verb_PassivePastPF2} 
                                               conj9={props.Verb_PassivePastPM3} 
                                               conj10={props.Verb_PassivePastPF3}
                                               id={props.id}
                                                type1="Verb_PassivePastS1"
                                                type2="Verb_PassivePastSM2"
                                                type3="Verb_PassivePastSF2"
                                                type4="Verb_PassivePastSM3"
                                                type5="Verb_PassivePastSF3"
                                                type6="Verb_PassivePastP1"
                                                type7="Verb_PassivePastPM2"
                                                type8="Verb_PassivePastPF2"
                                                type9="Verb_PassivePastPM3"
                                                type10="Verb_PassivePastPF3"
                                                data={props.data} />
        </FormBlockWrapper>
    );
};

export default PassivePastTenseVerb;