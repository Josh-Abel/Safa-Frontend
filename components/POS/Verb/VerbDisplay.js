import PresentTenseVerb from './PresentTenseVerb.js';
import PastTenseVerb from './PastTenseVerb.js';
import FutureTenseVerb from './FutureTenseVerb.js';
import ImperativeVerb from './ImperativeVerb.js';
import PassivePresentTenseVerb from './PassivePresentTenseVerb.js';
import PassivePastTenseVerb from './PassivePastTenseVerb.js';
import PassiveFutureTenseVerb from './PassiveFutureTense.js';
import InfinitiveWordVerb from './InfinitiveWordVerb.js';
import WordImage from '../../WordImage.js';
import Notes from '../../Notes.js';
import ExampleSentence from '../../ExampleSentence.js';
import WordInfoDisplayWrapper from '../../../Wrappers/WordInfoDisplayWrapper.js';
import {View} from 'react-native';
import {useSate} from 'react';

function VerbDisplay(props) {
    const {data} = props;
    
    return (
        <WordInfoDisplayWrapper>
            <InfinitiveWordVerb data={data} id={data.id} hebrew={data.hebrew} hebrew_nikkud={data.hebrew_nikkud} english={data.english} pos="Verb" binyan={data.binyan} shoresh={data.shoresh}/>
            {data.image ? <WordImage imageLink={require('../../../assets/images/speaking.png')} /> : <View></View>}
            {data.note ? <Notes note={data.note}/> : <View></View>}
            {data.example ? <ExampleSentence example={data.example}/> : <View></View>}
            {data.Verb_ActivePresentSM ? <PresentTenseVerb data={data} id={data.id} Verb_ActivePresentSM={data.Verb_ActivePresentSM} Verb_ActivePresentSF={data.Verb_ActivePresentSF} Verb_ActivePresentPM={data.Verb_ActivePresentPM} Verb_ActivePresentPF={data.Verb_ActivePresentPF}/> : <View></View>}
            {data.Verb_ActivePastP1 ? <PastTenseVerb data={data} id={data.id} Verb_ActivePastS1={data.Verb_ActivePastS1} Verb_ActivePastP1={data.Verb_ActivePastP1} Verb_ActivePastSM2={data.Verb_ActivePastSM2} Verb_ActivePastSF2={data.Verb_ActivePastSF2} Verb_ActivePastPM2={data.Verb_ActivePastPM2} Verb_ActivePastPF2={data.Verb_ActivePastPF2} Verb_ActivePastSM3={data.Verb_ActivePastSM3} Verb_ActivePastSF3={data.Verb_ActivePastSF3} Verb_ActivePastPM3={data.Verb_ActivePastPM3} Verb_ActivePastPF3={data.Verb_ActivePastPF3}/> : <View></View>} 
            {data.Verb_ActiveFutureP1 ? <FutureTenseVerb data={data} id={data.id} Verb_ActiveFutureS1={data.Verb_ActiveFutureS1} Verb_ActiveFutureP1={data.Verb_ActiveFutureP1} Verb_ActiveFutureSM2={data.Verb_ActiveFutureSM2} Verb_ActiveFutureSF2={data.Verb_ActiveFutureSF2} Verb_ActiveFuturePM2={data.Verb_ActiveFuturePM2} Verb_ActiveFuturePF2={data.Verb_ActiveFuturePF2} Verb_ActiveFutureSM3={data.Verb_ActiveFutureSM3} Verb_ActiveFutureSF3={data.Verb_ActiveFutureSF3} Verb_ActiveFuturePM3={data.Verb_ActiveFuturePM3} Verb_ActiveFuturePF3={data.Verb_ActiveFuturePF3}/> : <View></View>}
            {data.Verb_ImperativeSM ? <ImperativeVerb data={data} id={data.id} Verb_ImperativeSM={data.Verb_ImperativeSM} Verb_ImperativeSF={data.Verb_ImperativeSF} Verb_ImperativePM={data.Verb_ImperativePM} Verb_ImperativePF={data.Verb_ImperativePF}/> : <View></View>}
            {(data.Verb_PassivePresentSM && data.Verb_PassivePresentSM !== "nan") ? <PassivePresentTenseVerb data={data} id={data.id} Verb_PassivePresentSM={data.Verb_PassivePresentSM} Verb_PassivePresentSF={data.Verb_PassivePresentSF} Verb_PassivePresentPM={data.Verb_PassivePresentPM} Verb_PassivePresentPF={data.Verb_PassivePresentPF}/> : <View></View>}
            {(data.Verb_PassivePastS1 && data.Verb_PassivePastS1 !== "nan") ? <PassivePastTenseVerb data={data} id={data.id} Verb_PassivePastS1={data.Verb_PassivePastS1} Verb_PassivePastP1={data.Verb_PassivePastP1} Verb_PassivePastSM2={data.Verb_PassivePastSM2} Verb_PassivePastSF2={data.Verb_PassivePastSF2} Verb_PassivePastPM2={data.Verb_PassivePastPM2} Verb_PassivePastPF2={data.Verb_PassivePastPF2} Verb_PassivePastSM3={data.Verb_PassivePastSM3} Verb_PassivePastSF3={data.Verb_PassivePastSF3} Verb_PassivePastPM3={data.Verb_PassivePastPM3} Verb_PassivePastPF3={data.Verb_PassivePastPF3}/> : <View></View>}
            {(data.Verb_PassiveFutureS1 && data.Verb_PassiveFutureS1 !== "nan") ? <PassiveFutureTenseVerb data={data} id={data.id} Verb_PassiveFutureS1={data.Verb_PassiveFutureS1} Verb_PassiveFutureP1={data.Verb_PassiveFutureP1} Verb_PassiveFutureSM2={data.Verb_PassiveFutureSM2} Verb_PassiveFutureSF2={data.Verb_PassiveFutureSF2} Verb_PassiveFuturePM2={data.Verb_PassiveFuturePM2} Verb_PassiveFuturePF2={data.Verb_PassiveFuturePF2} Verb_PassiveFutureSM3={data.Verb_PassiveFutureSM3} Verb_PassiveFutureSF3={data.Verb_PassiveFutureSF3} Verb_PassiveFuturePM3={data.Verb_PassiveFuturePM3} Verb_PassiveFuturePF3={data.Verb_PassiveFuturePF3}/> : <View></View>}
        </WordInfoDisplayWrapper>
    );
};

export default VerbDisplay;