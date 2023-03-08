import { Text, View } from 'react-native';
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj10 from '../../conjugationType/Conj10';

function PassiveFutureTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj10 title="Future Past Tense" conj1={props.Verb_PassiveFutureS1}
                                              conj2={props.Verb_PassiveFutureSM2}
                                              conj3={props.Verb_PassiveFutureSF2} 
                                              conj4={props.Verb_PassiveFutureSM3} 
                                              conj5={props.Verb_PassiveFutureSF3} 
                                              conj6={props.Verb_PassiveFutureP1} 
                                              conj7={props.Verb_PassiveFuturePM2} 
                                              conj8={props.Verb_PassiveFuturePF2} 
                                              conj9={props.Verb_PassiveFuturePM3} 
                                              conj10={props.Verb_PassiveFuturePF3}
                                              id={props.id}
                                                type1="Verb_PassiveFutureS1"
                                                type2="Verb_PassiveFutureSM2"
                                                type3="Verb_PassiveFutureSF2"
                                                type4="Verb_PassiveFutureSM3"
                                                type5="Verb_PassiveFutureSF3"
                                                type6="Verb_PassiveFutureP1"
                                                type7="Verb_PassiveFuturePM2"
                                                type8="Verb_PassiveFuturePF2"
                                                type9="Verb_PassiveFuturePM3"
                                                type10="Verb_PassiveFuturePF3"
                                                data={props.data} />
        </FormBlockWrapper>
    );
};

export default PassiveFutureTenseVerb;