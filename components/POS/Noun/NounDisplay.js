import NounForm from './NounForm.js';
import NounConstructSmichut from './NounConstructSmichut.js';
import WordImage from '../../WordImage.js';
import Notes from '../../Notes.js';
import ExampleSentence from '../../ExampleSentence.js';
import InfinitiveWordNoun from './InfinitiveWordNoun.js';
import WordInfoDisplayWrapper from '../../../Wrappers/WordInfoDisplayWrapper.js';
import {View} from 'react-native';

function NounDisplay(props) {
    const {data} = props;
    return (
        <WordInfoDisplayWrapper>
            <InfinitiveWordNoun data={data} id={data.id} hebrew={data.hebrew} hebrew_nikkud={data.hebrew_nikkud} english={data.english} pos="Noun" gender={data.gender} shoresh={data.shoresh} />
            {data.image ? <WordImage imageLink={require('../../../assets/images/speaking.png')} /> : <View></View>}
            {data.note ? <Notes note={data.note}/> : <View></View>}
            {data.example ? <ExampleSentence example={data.example}/> : <View></View>}
            {data.Noun_singularAbsolute ? <NounForm data={data} id={data.id} Noun_singularAbsolute={data.Noun_singularAbsolute} Noun_pluralAbsolute={data.Noun_pluralAbsolute} gender={data.gender}/> : <View></View>}
            {data.Noun_singularConstruct ? <NounConstructSmichut data={data} id={data.id} Noun_singularConstruct={data.Noun_singularConstruct} Noun_pluralConstruct={data.Noun_pluralConstruct} gender={data.gender} /> : <View></View>}
        </WordInfoDisplayWrapper>
    );
};

export default NounDisplay;