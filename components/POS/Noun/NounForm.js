import { Text, View } from "react-native";
import FormBlockWrapper from "../../../Wrappers/FormBlockWrapper";
import Conj2Masculine from "../../conjugationType/Conj2Masculine";
import Conj2Feminine from "../../conjugationType/Conj2Feminine";

function NounForm(props) {
    return (
        <View>
            <FormBlockWrapper boxType='conj'>
                {(props.gender === "M" || props.gender === "N") ? <Conj2Masculine title="Noun Absolute"
                                                                                  conj1={props.Noun_singularAbsolute} 
                                                                                  conj2={props.Noun_pluralAbsolute}
                                                                                  id={props.id}
                                                                                    type1="Noun_singularAbsolute"
                                                                                    type2="Noun_pluralAbsolute"
                                                                                    data={props.data} /> 
                                                                : <Conj2Feminine title="Noun Absolute" 
                                                                                 conj1={props.Noun_singularAbsolute} 
                                                                                 conj2={props.Noun_pluralAbsolute}
                                                                                 id={props.id}
                                                                                    type1="Noun_singularAbsolute"
                                                                                    type2="Noun_pluralAbsolute"
                                                                                    data={props.data} /> }
            </FormBlockWrapper>
        </View>
    );
};

export default NounForm;