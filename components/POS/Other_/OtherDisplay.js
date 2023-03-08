import WordImage from "../../WordImage";
import Notes from "../../Notes";
import ExampleSentence from "../../ExampleSentence";
import OtherMain from "./OtherMain";
import WordInfoDisplayWrapper from "../../../Wrappers/WordInfoDisplayWrapper";
import {View} from 'react-native';

function OtherDisplay(props) {
    const {data} = props;
    return (
        <WordInfoDisplayWrapper>
            <OtherMain data={data} id={data.id} hebrew={data.hebrew} hebrew_nikkud={data.hebrew_nikkud} english={data.english} pos="Other" binyan={data.binyan} shoresh={data.shoresh} />
            {data.image ? <WordImage imageLink={require('../../../assets/images/speaking.png')} /> : <View></View>}
            {data.note ? <Notes note={data.note}/> : <View></View>}
            {data.example ? <ExampleSentence example={data.example}/> : <View></View>}
        </WordInfoDisplayWrapper>
    );
};

export default OtherDisplay;