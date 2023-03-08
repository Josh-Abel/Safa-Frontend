import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj10 from '../../conjugationType/Conj10';

function PastTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj10 title="Past Tense" conj1={props.Verb_ActivePastS1}
                                       conj2={props.Verb_ActivePastSM2}
                                       conj3={props.Verb_ActivePastSF2} 
                                       conj4={props.Verb_ActivePastSM3} 
                                       conj5={props.Verb_ActivePastSF3} 
                                       conj6={props.Verb_ActivePastP1} 
                                       conj7={props.Verb_ActivePastPM2} 
                                       conj8={props.Verb_ActivePastPF2} 
                                       conj9={props.Verb_ActivePastPM3} 
                                       conj10={props.Verb_ActivePastPF3}
                                       id={props.id}
                                        type1="Verb_ActivePastS1"
                                        type2="Verb_ActivePastSM2"
                                        type3="Verb_ActivePastSF2"
                                        type4="Verb_ActivePastSF3"
                                        type5="Verb_ActivePastSF3"
                                        type6="Verb_ActivePastP1"
                                        type7="Verb_ActivePastPM2"
                                        type8="Verb_ActivePastPF2"
                                        type9="Verb_ActivePastPM3"
                                        type10="Verb_ActivePastPF3"
                                        data={props.data} />
        </FormBlockWrapper>
    );
};

export default PastTenseVerb;

