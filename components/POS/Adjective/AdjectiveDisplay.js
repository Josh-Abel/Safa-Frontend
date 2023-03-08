import AdjectiveForm from "./AdjectiveForm";
import WordImage from "../../WordImage";
import Notes from "../../Notes";
import ExampleSentence from "../../ExampleSentence";
import InfinitiveWordAdjective from "./InfinitiveWordAdjective";
import WordInfoDisplayWrapper from "../../../Wrappers/WordInfoDisplayWrapper";
import {View} from 'react-native';

function AdjectiveDisplay(props) {
    const {data} = props;
    return (
        <WordInfoDisplayWrapper>
            <InfinitiveWordAdjective data={data} id={data.id} hebrew={data.hebrew} hebrew_nikkud={data.hebrew_nikkud} english={data.english} pos="Adjective" shoresh={data.shoresh}/>
            {data.image ? <WordImage imageLink={require('../../../assets/images/speaking.png')} /> : <View></View>}
            {data.note ? <Notes note={data.note}/> : <View></View>}
            {data.example ? <ExampleSentence example={data.example}/> : <View></View>}
            {data.Adj_SM ? <AdjectiveForm data={data} id={data.id} Adj_SM={data.Adj_SM} Adj_SF={data.Adj_SF} Adj_PM={data.Adj_PM} Adj_PF={data.Adj_PF}/> : <View></View>}
        </WordInfoDisplayWrapper>
    );
};

export default AdjectiveDisplay;