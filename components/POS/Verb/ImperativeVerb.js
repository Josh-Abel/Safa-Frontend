import { Text, View } from 'react-native'
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj4 from '../../conjugationType/Conj4';

function ImperativeVerb(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj4 title="Imperative" conj1={props.Verb_ImperativeSM} 
                                      conj2={props.Verb_ImperativeSF} 
                                      conj3={props.Verb_ImperativePM} 
                                      conj4={props.Verb_ImperativePF} 
                                      id={props.id}
                                        type1="Verb_ImperativeSM"
                                        type2="Verb_ImperativeSF"
                                        type3="Verb_ImperativePM"
                                        type4="Verb_ImperativePF"
                                        data={props.data}/>
        </FormBlockWrapper>
    );
};

export default ImperativeVerb;