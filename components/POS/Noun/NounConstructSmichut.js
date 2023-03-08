import { Text, View } from "react-native";
import FormBlockWrapper from "../../../Wrappers/FormBlockWrapper";
import Conj2Masculine from "../../conjugationType/Conj2Masculine";
import Conj2Feminine from "../../conjugationType/Conj2Feminine";

function NounConstructSmichut(props) {
    return (
        <FormBlockWrapper boxType='conj'>
            {(props.gender === "M" || props.gender === "N") ? <Conj2Masculine title="Noun Construct" 
                                                                              conj1={props.Noun_singularConstruct} 
                                                                              conj2={props.Noun_pluralConstruct}
                                                                              id={props.id}
                                                                                    type1="Noun_singularConstruct"
                                                                                    type2="Noun_pluralConstruct"
                                                                                    data={props.data} /> 
                                                            : <Conj2Feminine title="Noun Construct" 
                                                                             conj1={props.Noun_singularConstruct} 
                                                                             conj2={props.Noun_pluralConstruct}
                                                                             id={props.id}
                                                                                    type1="Noun_singularConstruct"
                                                                                    type2="Noun_pluralConstruct"
                                                                                    data={props.data} /> }
        </FormBlockWrapper>
    );
}

export default NounConstructSmichut;