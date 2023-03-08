import { Text, View } from 'react-native'
import FormBlockWrapper from '../../../Wrappers/FormBlockWrapper';
import Conj4 from '../../conjugationType/Conj4';

function AdjectiveForm(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            <Conj4 title="Adjective Forms" conj1={props.Adj_SM}
                                           conj2={props.Adj_SF}
                                           conj3={props.Adj_PM}
                                           conj4={props.Adj_PF}
                                           id={props.id}
                                            type1="Adj_SM"
                                            type2="Adj_SF"
                                            type3="Adj_PM"
                                            type4="Adj_PF"
                                            data={props.data}/>
        </FormBlockWrapper>

    );
};

export default AdjectiveForm