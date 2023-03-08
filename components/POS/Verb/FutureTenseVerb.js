import { Text, View } from 'react-native';
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj10 from '../../conjugationType/Conj10';

function FutureTenseVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj10 title="Future Tense" conj1={props.Verb_ActiveFutureS1} 
                                         conj2={props.Verb_ActiveFutureSM2}
                                         conj3={props.Verb_ActiveFutureSF2} 
                                         conj4={props.Verb_ActiveFutureSM3} 
                                         conj5={props.Verb_ActiveFutureSF3} 
                                         conj6={props.Verb_ActiveFutureP1} 
                                         conj7={props.Verb_ActiveFuturePM2} 
                                         conj8={props.Verb_ActiveFuturePF2} 
                                         conj9={props.Verb_ActiveFuturePM3} 
                                         conj10={props.Verb_ActiveFuturePF3}
                                         id={props.id}
                                                type1="Verb_ActiveFutureS1"
                                                type2="Verb_ActiveFutureSM2"
                                                type3="Verb_ActiveFutureSF2"
                                                type4="Verb_ActiveFutureSM3"
                                                type5="Verb_ActiveFutureSF3"
                                                type6="Verb_ActiveFutureP1"
                                                type7="Verb_ActiveFuturePM2"
                                                type8="Verb_ActiveFuturePF2"
                                                type9="Verb_ActiveFuturePM3"
                                                type10="Verb_ActiveFuturePF3"
                                                data={props.data} />
        </FormBlockWrapper>
    );
};

export default FutureTenseVerb;